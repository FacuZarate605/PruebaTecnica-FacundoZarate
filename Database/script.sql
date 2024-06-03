-- script.sql

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS prueba_tecnica;
USE prueba_tecnica;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
