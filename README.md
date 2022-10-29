# express-inversify-ts
Express  API  using clean architecture typescript inversify mongodb  Axios to consume externals fake APIs and some other interesting libraries

## packages to install
pnpm install express dotenv

pnpm i -D typescript @types/express @types/node
pnpm i -D typescript nodemon @types/node @types/express

`Don't forget the nodemon file` --> *nodemon.json* 

    In the root folder create 

```json
        {
            "watch": ["src/"]
            , "execMap": {
                "ts": "node -r ts-node/register"
            },
            "env": {
                "NODE_ENV": "development"
            },
            "ext": "js,json,ts,html"
        }
```

### Set up typescript
    npx tsc --init
    
pnpm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
`Don't forget the ts file` --> *tsconfig.json* 


### Set up Eslint

    npx eslint --init

`Don't forget the ts file` --> *tsconfig.json* 

## Anothers lins to install for Express middlewares

## helpet
  It fills in the gap between Node.js and Express.js by securing HTTP headers that are returned by your Express apps.It can leak sensitive information about your app and leave your data open to anyone with some tech skills to see.
```
    pnpm i helmet
```

## CORS
```
   pnpm i cors -D @types/cors
```
## morgan
Is a NodeJs middleware that is needed to customize request logs
```
    pnpm i nstall morgan @types/morgan
```

### Inversify 

**Resources**
* [inversify](https://inversify.io/)  
* [Inversify-express-utils] (https://github.com/inversify/inversify-express-utils)

Is a powerful and lightweight inversion of control container

To use for express controllers visit 

```
    pnpm install inversify inversify-express-utils reflect-metadata --save
```

**Note** edit tsconfig and add this config "types": ["reflect-metadata"] 

 And the experimentalDecorators, emitDecoratorMetadata, types and lib compilation options in your tsconfig.json


"compilerOptions": {
        "target": "es5",
  -->   "lib": ["es6", "dom"],
  -->   "types": ["reflect-metadata"], 
        "module": "commonjs",
        "moduleResolution": "node",
  -->   "experimentalDecorators": true,
  -->   "emitDecoratorMetadata": true
    }

### babel to translile ts

@babel/preset-typescript for babel to undestand ts
pnpm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-typescript @babel/plugin-transform-typescript @babel/preset-env

`Don't forget the babel config file` --> *.babelrc* 
   
-  In the root folder create .babelrc

 "@babel/cli": "^7.18.10",
    "@babel/core": "^7.18.13",
    "@babel/node": "^7.18.10",
    "@babel/plugin-transform-typescript": "^7.18.12",
    "@babel/preset-env": "^7.18.10",
    "@babel/preset-typescript": "^7.18.6",


## Documentation
Step 1: Decorate your controllers

To use a class as a "controller" for your express app, simply add the @controller decorator to the class. Similarly, decorate methods of the class to serve as request handlers.
Similarly, decorate methods of the class to serve as request handlers.