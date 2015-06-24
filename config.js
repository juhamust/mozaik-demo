// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: 'localhost',
    port: process.env.PORT || 5000,

    // Available themes:
    // + night-blue
    // + light-grey
    // + yellow
    // + light-yellow
    // + bordeau
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        }
    },

    // define duration beetwen each dashboard rotation (ms)
    rotationDuration: 8000,

    dashboards: [

        // first dashboard
        {
            columns: 2,
            rows:    2,
            widgets: [
                {
                    type: 'rss.rss',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                }
            ]
        }
    ]
};

module.exports = config;
