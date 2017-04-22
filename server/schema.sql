-- CREATE DATABASE chat1;

USE chat1;

CREATE TABLE users (
  id integer primary key,

  username text
);

CREATE TABLE rooms (
  id integer primary key,
  -- PRIMARY KEY (id),
  roomname text
);

CREATE TABLE messages (
  id integer, 
  PRIMARY KEY (id),
  content text,
  users_username integer,
  rooms_roomname integer, 
  FOREIGN KEY (users_username)
  	REFERENCES users(id),
  FOREIGN KEY (rooms_roomname)
  	REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

