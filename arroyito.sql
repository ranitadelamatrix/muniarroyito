create database arroyito;
use arroyito;

create table ciudadanos(
id_dni int primary key not null,
nombre varchar(50) not null,
apellido varchar(50) not null,
direccion varchar(50) not null);

select * from ciudadanos;
select * from tramite;
create table tramite(
id_tramite int primary key not null,
ciudadanos_dni int not null,
tramite varchar(50) not null,
fecha varchar(50) not null,
FOREIGN KEY (ciudadanos_dni) REFERENCES ciudadanos(id_dni));


