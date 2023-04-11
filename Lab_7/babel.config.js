module.exports = function (api) {
    api.cache(true);
  
const presets = [
  [
    "@babel/preset-env",{
    "corejs":3.6,
    "useBuiltIns":"usage",
    "debug":true
    }
  ]
];
    const plugins = ["@babel/plugin-transform-jscript","@babel/plugin-transform-strict-mode",];
  
    return {
      presets,
      plugins
    };
}