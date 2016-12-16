create user usuario@localhost identified by 'usuario';
grant select, insert, update, delete on rest.Clientes to usuario@localhost;
grant select, insert, update, delete on rest.Juegos to usuario@localhost;
grant select, insert, update, delete on rest.Compras to usuario@localhost;
grant execute on function comprar_juego to usuario@localhost;
flush privileges;