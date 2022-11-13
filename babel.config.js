/* eslint-disable no-undef */
module.exports = {
  presets: ["@babel/preset-env",
    {
      targets:{
        node:'current'
      }

    },
   "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@common": "./src/common",
          "@models": "./src/models",
          "@services": "./src/services",
        }
      }
    ]
  ],
  // ignore:['**/*.spec.ts']no se usa test no hace falta
};
