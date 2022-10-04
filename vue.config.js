module.exports = {
    pluginOptions: {
        i18n: {
            locale: undefined,
            fallbackLocale: undefined,
            localeDir: undefined,
            enableInSFC: undefined,
        },
    },
    transpileDependencies: ["vuetify"],
    publicPath: process.env.NODE_ENV === "production" ? "/dashboard" : "/",
};