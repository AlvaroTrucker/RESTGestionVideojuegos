//GET de Compras
module.exports.getCompras = function(req, res){ 
  var db=req.db;
  db.query('SELECT * from Compras', function(err, datos, fields) {
  if (err) throw err;
     res.json(datos)
  });
};  

//GET de Compras con busqueda por DNI
module.exports.getComprasDni = function(req, res){ 
  var db=req.db;
  db.query('SELECT * from Compras where dni_cliente=?',[req.params.dni], function(err, datos, fields) {
  if (err) throw err;
     res.json(datos)
  });
}; 

//Post de Compras
module.exports.postCompras = function(req, res){ 
  var db=req.db;
  db.query('insert into Compras set ?',[req.body], function(err, datos, fields) {
  if (err) throw err;
     res.status(201).json(datos)
  });
};  

//Delete Compras
module.exports.deleteCompras = function(req, res){ 
  var db=req.db;
  db.query('delete from Compras where nombre_juego=? and dni_cliente=? and fecha_compra like ?"%"',[req.params.nombre_juego,req.params.dni_cliente,req.params.fecha_compra], function(err, datos, fields) {
  if (err) throw err;
     res.status(201).json(datos)
  });
}; 

//Update Compras
module.exports.putCompras = function(req, res){ 
  var db=req.db;
  db.query('update Compras set ? where dni_cliente = ? and nombre_juego = ? and fecha_compra like ?"%"',[req.body,req.params.dni_cliente,req.params.nombre_juego,req.params.fecha_compra], function(err, datos, fields) {
  if (err) {res.json({"err":"No ha sido posible realizar la compra del juego"})
    }else{
     res.status(201).json(datos)
    }
  });
};

//Get Numero de Compras
module.exports.getNumeroCompras = function(req, res){ 
  var db=req.db;
  db.query('SELECT comprar_juego(?)',[req.params.nombre], function(err, datos, fields) {
  if (err) throw err;
  datos= JSON.stringify(datos).replace(/comprar_juego\(\'\w+\'\)/i,'comprar_juego'); //cuando coincida el patron lo cambiamos por la clave Compras_pelicula
     datos=JSON.parse(datos);
     res.json({"message":"El juego se ha comprado "+datos[0].compra_juego+" veces"});
  });
};  