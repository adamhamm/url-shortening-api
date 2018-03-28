var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
// i.e.: http://localhost:3000/3Ys
config.webhost = 'https://url-shortening-api.glitch.me/';

// your MongoDB host and database name
config.db.host = 'ds125469.mlab.com:25469';
config.db.name = 'url_shortener';
config.db.username = 'adamhamm';
config.db.password = 'Taveren1';

module.exports = config;
