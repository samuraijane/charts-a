module.exports = function(app) {
  require('./controller')(app);
  require('./directive')(app);
  require('./bar')(app);
  require('./donut')(app);
}
