/* eslint-disable no-undef */
module.exports = function(api) {
  api.cache(false);
  let presets =  

   [
    ["minify", {
      "mangle": {
        "exclude": ["MyCustomError"]
      },
      "unsafe": {
        "typeConstructors": false
      },
      "keepFnName": true
    }],
    "@babel/preset-env",
   "@babel/preset-typescript"
  ];

  let  plugins= [
    "@babel/plugin-transform-typescript",
    [
      "module-resolver",
      {
        "alias": {
          "@common": "./src/common",
          "@models": "./src/models",
          "@services": "./src/services",
        }
      }
    ]
   
  ];

  return {
    
    presets,
    plugins,
  };

  // ignore:['**/*.spec.ts']no se usa test no hace falta
};


