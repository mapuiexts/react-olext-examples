const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: { '@primary-color': '#722ed1', '@border-radius-base': '8px' },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};