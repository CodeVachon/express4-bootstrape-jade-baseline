Express4 Bootstrape Jade Baseline
=================================

[![Join the chat at https://gitter.im/liaodrake/express4-bootstrape-jade-baseline](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/liaodrake/express4-bootstrape-jade-baseline?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a Jump Off Point for Express 4 Sites

Includes:

- [Express 4.12.x](http://expressjs.com/)
- [Bootstrap 3.3.4](http://getbootstrap.com/)
- [Jade](http://jade-lang.com/)
- [Grunt](http://gruntjs.com/)
- [CoffeeScript](http://coffeescript.org/)
- [LESS](http://lesscss.org/)

## Setup

1. Change the `name` in the `package.json`.
2. Run `npm install` to get all dependencies
3. Run `grunt build` to build your assets
4. Start the server
    - **Locally** Run `nodemon server.js`
    - **Server** Run `npm start`

## Assests
Assets are named by the name value in the `package.json` file.

### JavaScript / Coffee
CoffeeScript compile will build all `*.coffee` files in `/src/coffee` into `/public/js/`. These can then be run through `JSHint` and `uglify` to compile into a single minified file with a sourceMap.

### CSS / LESS
LESS compile will compile and minify the `/src/less/bootstrap.less` file into the `/public/css/` folder.

### Grunt watch
Grunt watch has been setup to watch the `/src` directory and will by default, run all the assets to compile to minified versions.

```
grunt watch
```

## Testing
[Mocha](http://mochajs.org/) with [SuperTest](https://www.npmjs.com/package/supertest) is setup as a basic test sweet. use `npm test` to run the defined tests in the `/tests` directory.

```
npm test
```
