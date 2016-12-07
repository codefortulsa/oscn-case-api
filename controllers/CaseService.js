var http = require("http");
var jsdom = require("jsdom");

var config = require("../config");

function getCaseInformation(caseNumber, county) {
  return new Promise(function(resolve, reject) {
    if(!caseNumber || !county) {
      reject("caseNumber and county are required");
      return;
    }

    http.get(`${config.oscn.url}?${config.oscn.countyParam}=${county}&${config.oscn.caseNumberParam}=${caseNumber}`, function(response) {
      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
        body += d;
      });
      response.on('end', function() {
        jsdom.env(body,
          ["http://code.jquery.com/jquery.js"],
          function (errors, window) {
            var $ = window.$;

            var parties = [];
            $(".party").next().find("a").each(function() { parties.push({ name: $(this).text().replace(/\s+/g, ' '), type: $(this)[0].nextSibling.nodeValue.replace(",", "").replace("\n", "") }); });

            var dockets = [];

            $(".docketlist").find("tr.docketRow").each(function() {
              var row = $(this);
              var docket = {
                date: $(row.find("td")[0]).text().replace(/\s+/g, ' ').trim(),
                code: $(row.find("td")[1]).text().replace(/\s+/g, ' ').trim(),
                description: $(row.find("td")[2]).text().replace(/\s+/g, ' ').trim(),
                count: parseInt($(row.find("td")[3]).text().replace(/\s+/g, ' ').trim()),
                party: $(row.find("td")[4]).text().replace(/\s+/g, ' ').trim(),
                amount: parseFloat($(row.find("td")[5]).text().replace(/\s+/g, ' ').trim())
              }

              dockets.push(docket);
            });

            var events = [];

            $("table").has("th:contains(Event)").find("tr").each(function() {
              var row = $(this);
              if(row.find("td").length > 0) {
                var date = $(row.find("td")[0]).find("font").text().replace(/\s+/g, ' ').trim();
                var eventData = {
                  date,
                  description: $(row.find("td")[0]).text().replace(/\s+/g, ' ').replace(date, "").trim(),
                  party: $(row.find("td")[1]).text().replace(/\s+/g, ' ').trim(),
                  docket: $(row.find("td")[2]).text().replace(/\s+/g, ' ').trim(),
                  reporter: $(row.find("td")[3]).text().replace(/\s+/g, ' ').trim()
                }
                events.push(eventData);
              }
            });

            var defendants = parties.filter(x => x.type == "Defendant").map(x => ({
              name: x.name,
              dockets: dockets.filter(doc => doc.party == x.name),
              events: events.filter(evt => evt.party == x.name),
              counts: []
            }));

            var caseData = {
              parties,
              defendants
            };

            resolve(caseData);
          })
      });
    })
  });
}

module.exports.getCase = function(args, res, next) {
  getCaseInformation(args.caseNumber.value, args.county.value)
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    })
    .catch(err => {
        res.end("error: " + err.message);
        console.dir(err);
    });
}

module.exports.getCasePrimaryDefendant = function(args, res, next) {
  getCaseInformation(args.caseNumber.value, args.county.value)
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data.defendants[0]));
    })
    .catch(err => {
        res.end("error: " + err.message);
        console.dir(err);
    });
}

module.exports.getCaseWithDefendant = function(args, res, next) {
  getCaseInformation(args.caseNumber.value, args.county.value)
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data.defendants.filter(x => x.name == args.defendant.value)));
    })
    .catch(err => {
        res.end("error: " + err.message);
        console.dir(err);
    });
}
