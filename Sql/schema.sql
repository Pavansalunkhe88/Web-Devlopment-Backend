show tables;

create table user(
    id int primary key,
    username varchar(20) not null,
    email varchar(20)
);