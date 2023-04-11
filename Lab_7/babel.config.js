module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-env"];
    const plugins = ["@babel/plugin-transform-jscript","@babel/plugin-transform-strict-mode",];
  
    return {
      presets,
      plugins
    };
}