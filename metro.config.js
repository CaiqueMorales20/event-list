// eslint-disable-next-line
const { getDefaultConfig } = require('expo/metro-config')
// eslint-disable-next-line
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './src/app/global.css' })
