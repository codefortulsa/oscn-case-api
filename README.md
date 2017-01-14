# oscn-case-api [![Build Status](https://travis-ci.org/codefortulsa/oscn-case-api.svg?branch=master)](https://travis-ci.org/codefortulsa/oscn-case-api)
JSON wrapper for Oklahoma State Court Network cases.

##Installation
This API runs on node.js. It was written against v6.9.1 but should generally
be compatible with most node versions.

###Prerequisites

* Node 6

###Running from Source
    $ git clone https://github.com/codefortulsa/oscn-case-api.git
    $ cd oscn-case-api
    $ npm install
    $ node server.js

Note: it is recommended to run the server using a tool like forever to keep it
running in the background.

###Heroku

THe API is set up for heroku, to run it all you have to do is add a heroku remote
and push to heroku.

##Config

Configuration is loaded using the rc npm module. The easiest way to configure
the app is to put a json file at ~/.iic-apirc. The defaults are as follows:

```json
{
  "port": 8080,
}
```

##Live API
The live API can be found (along with other APIs) at http://data.thekinfamily.com/docs/#!/Case_Information
