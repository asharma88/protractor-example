
exports.config = {
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    // pull credentials from environment variables that you set thusly:
    // export SAUCE_USERNAME=<your username>
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName': 'internet explorer',
        'platform': 'Windows 8.1',
        'version': '11',
        'name': 'Win8.1/IE11...'
    }, {
        'browserName': 'firefox',
        'platform': 'Linux',
        'version': '33',
        'name': 'Linux/Firefox...'
    }],

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
