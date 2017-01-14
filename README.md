# oscn-case-api [![Build Status](https://travis-ci.org/codefortulsa/oscn-case-api.svg?branch=master)](https://travis-ci.org/codefortulsa/oscn-case-api)

JSON wrapper for Oklahoma State Court Network cases.

##Installation

This API requires node.js v6.9.1 or newer.

###Running from Source

```bash
git clone https://github.com/codefortulsa/oscn-case-api.git
cd oscn-case-api
npm install
node server.js
```

##Config

Configuration is loaded using the [rc npm module](https://www.npmjs.com/package/rc). The [default configuration](config.js)
listens to port 8080 and can be changed with the JSON file `~/.oscn-apirc`.

##Live API

The live API can be found (along with other APIs) at http://data.thekinfamily.com/docs/#!/Case_Information

## Example JSON response

```json
{
  "parties": [
    {
      "name": "MOUSE, MICKEY",
      "type": "Defendant"
    },
    {
      "name": "DUCK, DONALD",
      "type": "Defendant"
    },
    {
      "name": "STATE OF OKLAHOMA",
      "type": "Plaintiff"
    },
    {
      "name": "Tulsa Police Department",
      "type": "ARRESTING AGENCY"
    }
  ],
  "defendants": [
    {
      "name": "MOUSE, MICKEY",
      "dockets": [
        {
          "date": "03-01-1982",
          "code": "TEXT",
          "description": "CRIMINAL FELONY INITIAL FILING. Document Available (#1000000000) TIFF PDF",
          "count": 1,
          "party": "MOUSE, MICKEY",
          "amount": null
        },
        {
          "date": "03-02-1982",
          "code": "DAINS",
          "description": "DISTRICT ATTORNEY INSPECTION NOTIFICATION Document Available (#1000000000) TIFF PDF",
          "count": null,
          "party": "MOUSE, MICKEY",
          "amount": null
        }
      ],
      "events": [
        {
          "date": "Thursday, December 22, 1982 at 9:00 AM",
          "description": "PRELIMINARY HEARING ISSUE (PUBLIC DEFENDER)",
          "party": "MOUSE, MICKEY",
          "docket": "Preliminary Hearing Docket",
          "reporter": ""
        }
      ],
      "counts": []
    },
    {
      "name": "DUCK, DONALD",
      "dockets": [
        {
          "date": "03-01-1982",
          "code": "INFORMATION",
          "description": "DEFENDANT DONALD DUCK WAS CHARGED WITH COUNT #1, UNLAWFUL POSSESSION OF CONTROLLED DRUG - METHAMPHETAMINE IN VIOLATION OF 63 O.S. 2-402",
          "count": 1,
          "party": "DUCK, DONALD",
          "amount": null
        },
        {
          "date": "03-08-1982",
          "code": "DAINS",
          "description": "DISTRICT ATTORNEY INSPECTION NOTIFICATION Document Available (#1000000000) TIFF PDF",
          "count": null,
          "party": "DUCK, DONALD",
          "amount": null
        }
      ],
      "events": [
        {
          "date": "Thursday, December 29, 1982 at 9:00 AM",
          "description": "PRELIMINARY HEARING ISSUE (PUBLIC DEFENDER)",
          "party": "DUCK, DONALD",
          "docket": "Preliminary Hearing Docket",
          "reporter": ""
        }
      ],
      "counts": []
    }
  ]
}
```