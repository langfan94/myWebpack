const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const opn = require('opn')

const port = 3000;
const config = require('./config/webpack.dev.js');
const options = {
  contentBase: './',
  hot: true,
  host: 'localhost',
  port: port,
  noInfo: true
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options); 

// Serve the files on port 3000.
server.listen(port, 'localhost', () => {
  console.log(`http://localhost:${port}/\n`);
});

opn(`http://localhost:${port}`);