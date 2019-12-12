CREATE TABLE `ekkofriends`.`users` (
id INT(3) NOT NULL auto_increment,
Nombre VARCHAR(128) NOT NULL,
Email VARCHAR(128) UNIQUE,
Contrasena VARCHAR(128) NOT NULL,
Path VARCHAR(256),
PRIMARY KEY  (`id`)
)
COMMENT = 'Tabla para agregar todos los datos de usuarios de ekkoFriends';

insert into users(Nombre,Email,Contrasena)
values ('gamal','g@hotmail.com','hola'); Select LAST_INSERT_ID()as id;

select * from users
truncate table users