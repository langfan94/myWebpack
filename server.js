const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./config/webpack.dev.js');
const options = {
  contentBase: './',
  hot: true,
  host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options); 


// Serve the files on port 3000.
server.listen(3000, 'localhost', () => {
  console.log('http://localhost:3000/\n');
});