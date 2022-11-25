const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/Numbrix_Solver/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
})
