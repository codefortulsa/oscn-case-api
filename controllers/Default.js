'use strict';

var url = require('url');
var Case = require('./CaseService');


module.exports.caseCountyCaseNumberDefendantGET = function caseCountyCaseNumberDefendantGET (req, res, next) {
  Case.getCaseWithDefendant(req.swagger.params, res, next);
};

module.exports.caseCountyCaseNumberGET = function caseCountyCaseNumberGET (req, res, next) {
  Case.getCase(req.swagger.params, res, next);
};

module.exports.caseCountyCaseNumberPrimaryGET = function caseCountyCaseNumberPrimaryGET (req, res, next) {
  Case.getCasePrimaryDefendant(req.swagger.params, res, next);
};
