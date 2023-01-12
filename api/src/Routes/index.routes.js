module.exports = function (app, url) {
    require("./auth.routes")(app, url);
    require("./Account.routes")(app, url);
    require("./Transaction.routes")(app, url);
  };