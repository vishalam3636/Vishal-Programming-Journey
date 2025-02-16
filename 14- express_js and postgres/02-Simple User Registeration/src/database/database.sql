CREATE DATABASE userregisteration; -- this Databse name is used to connect to db in db.js


CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(15) NOT NULL,
    mobile VARCHAR(50) NOT NULL,
    email VARCHAR(150)
)