/* eslint strict: 0, console: 0*/
'use strict';
// import config from '../../webpack.config.js';
import routes from '../routes/';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import http from 'http';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// const compiler = webpack(config);
const PORT = process.env.PORT || 8080;
let server = null;

const app = express();

app.use(bodyParser());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(routes);
// app.use(webpackDevMiddleware(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath,
// }));
//
// app.use(webpackHotMiddleware(compiler));


function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  const message = 'Listening on ';
  console.log(message + bind);
  // Hack for only opening window when application has started up
  require('./window.js');
}

function errLog(err) {
  if (err) {
    // handle errors here
    throw err;
  }
}

function startHttpServer(instance, port) {
  server = http.createServer(instance);
  server.listen(port);
  server.on('error', errLog);
  server.on('listening', onListening);
}

startHttpServer(app, PORT);

export default PORT;
