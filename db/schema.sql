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
