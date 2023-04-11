module.exports = function (api) {
    api.cache(true);
  
    const presets = [];
    const plugins = ["@babel/plugin-transform-jscript","@babel/plugin-transform-strict-mode","@babel/plugin-transform-react-jsx"];
  
    return {
      presets,
      plugins
    };
}