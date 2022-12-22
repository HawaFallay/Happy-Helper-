DROP DATABASE IF EXISTS happyHelper_db;
CREATE DATABASE happyHelper_db;

USE happyHelper_db;

CREATE TABLE clients (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    client_status BOOLEAN,
    client_location VARCHAR(30),
    client_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);


CREATE TABLE tasks (
    id INT NOT NULL,
    client_id INT,
    task_details TEXT,
    task_status BOOLEAN,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);


CREATE TABLE helpers (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    helper_status BOOLEAN,
    helper_location VARCHAR(30)
);

--Potential data tables based off of Nas's original table
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    user_location VARCHAR(30),
    role_id INT
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    task_id INT
);

CREATE TABLE task (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(30) NOT NULL,
    task_details TEXT,
    task_time DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    status_id INT
);

CREATE TABLE status (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accepted BOOLEAN,
    pending BOOLEAN,
    completed BOOLEAN
);
