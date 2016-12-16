DROP FUNCTION IF EXISTS comprar_juego;
DELIMITER //
CREATE FUNCTION comprar_juego(nombre TEXT)
RETURNS INT
BEGIN  
DECLARE numero_compras INT default 0;
SELECT count(*) into numero_compras from Compras where nombre_juego=juego;
RETURN numero_compras;
END;
//
DELIMITER ;