module.exports = {
  requireAuthentication: function (req, res, next) {
    console.log('pivate route hit!');
    next();
  },
  logger: function(req, res, next) {
    var date = new Date().toString();
    console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + date);
    next();
  }
};
