
/*
 * GET home page.
 */

exports.view = function(req, res){
  let name = req.params.userName;
  if (name === undefined){
    name = 'World';
  }
  
  
  res.render('index', {
  	'name': name,
  });
};
