var rc = require("rc");

module.exports = exports = rc("oscn-api", {
  port: 8080,
  oscn: {
    url: "http://www.oscn.net/dockets/GetCaseInformation.aspx",
    countyParam: "db",
    caseNumberParam: "number"
  }
});
