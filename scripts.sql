-- * CREATE TABLE
CREATE TABLE mytable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    columna1 VARCHAR(255) NOT NULL,
    columna2 INT NOT NULL
);

GRANT SELECT ON SISTEMAS_DE_COMPUTO.* TO 'diego'@'localhost';
FLUSH PRIVILEGES;