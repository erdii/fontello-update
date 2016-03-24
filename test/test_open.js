// put your fontello config.json into test/data/ and then run the test to see if it works
var fontelloUpdate = require("..");

var prefix = "test/data/";

var options = {
		session: null
	, config: prefix + 'config.json'
	, overwrite: true
	, fonts: prefix +  'font'
	, css: prefix +  'css'
	, open: true
	, updateConfigOnly: false
}

fontelloUpdate( options )
