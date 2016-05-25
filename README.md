# boiler-spa

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.3.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing in web storm

1. Create your own `local.env.js` file (or paste from another file)

2. Run `npm install` to install server dependencies.

3. Run `bower install` to install front-end dependencies.

3. Run `gulp serve:ide` to prepare app for work (transpile client, server , inject etc.). It will 
   create `.tmpsrv` folder.

4. Create run configuration choose `.tmpsrv\server\index.js` as startup file and set `NODE_ENV=developmentIde` in it.

5. Run `gulp watch` to monitor changes.

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
