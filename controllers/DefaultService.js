'use strict';

exports.caseCountyCaseNumberDefendantGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * caseNumber (String)
  * county (String)
  * defendant (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "counts" : [ {
    "date" : "aeiou",
    "number" : "",
    "description" : "aeiou"
  } ],
  "name" : "aeiou",
  "docket" : [ {
    "date" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "code" : "aeiou",
    "count" : "",
    "description" : "aeiou"
  } ],
  "events" : [ {
    "date" : "aeiou",
    "description" : "aeiou",
    "reporter" : "aeiou",
    "docket" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.caseCountyCaseNumberGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * caseNumber (String)
  * county (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "counts" : [ {
    "date" : "aeiou",
    "number" : "",
    "description" : "aeiou"
  } ],
  "name" : "aeiou",
  "docket" : [ {
    "date" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "code" : "aeiou",
    "count" : "",
    "description" : "aeiou"
  } ],
  "events" : [ {
    "date" : "aeiou",
    "description" : "aeiou",
    "reporter" : "aeiou",
    "docket" : "aeiou"
  } ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.caseCountyCaseNumberPrimaryGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * caseNumber (String)
  * county (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "counts" : [ {
    "date" : "aeiou",
    "number" : "",
    "description" : "aeiou"
  } ],
  "name" : "aeiou",
  "docket" : [ {
    "date" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "code" : "aeiou",
    "count" : "",
    "description" : "aeiou"
  } ],
  "events" : [ {
    "date" : "aeiou",
    "description" : "aeiou",
    "reporter" : "aeiou",
    "docket" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

