//GET de todos los Juegos
module.exports.getJuegos = function(req, res){ 
  var db=req.db;
  db.query('SELECT * from Juegos', function(err, datos, fields) {
  if (err) throw err;
     res.json(datos)
  });
};  

//GET de un Juego
module.exports.getJuegosNombre = function(req, res){ 
  var db=req.db;
  db.query('SELECT * from Juegos where nombre=?',[req.params.nombre], function(err, datos, fields) {
  if (err) throw err;
     res.json(datos)
  });
};  

//Post de Juegos
module.exports.postJuegos = function(req, res){ 
  var db=req.db;
  db.query('insert into Juegos set ?',[req.body], function(err, datos, fields) {
  if (err) throw err; //poner en todos
     res.status(201).json(datos)
  });
};  

//Delete Juegos
module.exports.deleteJuegos = function(req, res){ 
  var db=req.db;
  db.query('delete from Juegos where nombre=?',[req.params.nombre], function(err, datos, fields) {
  if (err) throw err;
     res.status(201).json(datos)
  });
};  

//Update Juegos
module.exports.putJuegos = function(req, res){ 
  var db=req.db;
  db.query('update Juegos set ? where nombre = ?',[req.body,req.params.nombre], function(err, datos, fields) {
  if (err) throw err;
     res.status(201).json(datos)
  });
}; 