module.exports = {
    'secret': 'CHANGETHISDONTUSETHISITSINSECURE', // <------- CHANGE THIS DONT USE THE DEFAULT YOU'LL GET HACKED AND DIE 100%
    'database': 'mongodb://localhost/place',
    'port': 3000,
    'onlyListenLocal': true,
    'trustProxyDepth': 1, // How many levels of proxy to trust for IP
    'debug': false,
    'googleAnalyticsTrackingID': "", // UA-XXXXXXXX-XX
    'host': 'http://place.dynastic.co', // the publicly accessible URL of the site
    'placeTimeout': 300,
    'recaptcha': {
        'siteKey': "",
        'secretKey': ""
    },
    'oauth': {
        // No field here is required.
        // To use an oauth option, set enabled to true, and drop your keys in.
        'google': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        },
        'reddit': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        },
        'discord': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        },
        'twitter': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        },
        'github': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        },
        'facebook': {
            'enabled': false,
            'clientID': '',
            'clientSecret': ''
        }
    }
}