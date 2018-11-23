CREATE TABLE categoria (
	categoria_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) UNIQUE
);

CREATE TABLE sub_categoria (
	sub_categoria_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    categoria_id INT NOT NULL,
    
    FOREIGN KEY (categoria_id) REFERENCES categoria (categoria_id)
);

CREATE TABLE produto (
	produto_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    data_inclusao TIMESTAMP NOT NULL DEFAULT NOW(),
    preco FLOAT NOT NULL,
    sub_categoria_id INT NOT NULL,
    
    FOREIGN KEY (sub_categoria_id) REFERENCES sub_categoria (sub_categoria_id)
);