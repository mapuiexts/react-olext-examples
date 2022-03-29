const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: { 
                        '@primary-color': '#FF5F1F', 
                        '@btn-primary-color': 'yellow', 
                        '@border-radius-base': '4px',
                        '@text-color-inverse': 'yellow'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};