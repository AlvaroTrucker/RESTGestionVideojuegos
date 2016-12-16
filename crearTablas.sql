CREATE TABLE IF NOT EXISTS Clientes (
dni varchar(9) NOT NULL PRIMARY KEY, 
nombre varchar(15) default null, 
apellidos varchar(50) default null
);

CREATE TABLE IF NOT EXISTS Juegos (
nombre varchar(30) NOT NULL PRIMARY KEY, 
compañia varchar(15)  default null,
año int(4) default null
);

CREATE TABLE IF NOT EXISTS Compras(
fecha_compra date default null,
dni_cliente varchar(9) NOT NULL, 
nombre_juego varchar(30) not null,
PRIMARY KEY(dni_cliente, nombre_juego, fecha_compra),
foreign key (dni_cliente) references Clientes(dni) on delete cascade on update cascade,
foreign key (nombre_juego) references Juegos (nombre) on delete cascade on update cascade
);