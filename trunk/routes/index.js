
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello world! This is HTML5 Boilerplate.' });
};


exports.secondpage = function(req, res){
  res.render('secondpage', { title: 'Second page of Hello world! This is HTML5 Boilerplate.' });
};

