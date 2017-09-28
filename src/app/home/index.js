module.exports = function(app) {
  require('./controller')(app);
  require('./directive')(app);
}
