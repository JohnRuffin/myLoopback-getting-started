module.exports = function(app) {
  app.dataSources.dsMysql.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
      {name: 'Downhill', city: 'Aspen'},
      {name: 'Three Bees Coffee House', city: 'Chicago'},
      {name: 'Ugly Mug', city: 'Memphis'},
    ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
