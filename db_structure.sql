CREATE TABLE clientes(
cliente_id SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
senha VARCHAR(50) NOT NULL,
telefone VARCHAR(50) NOT NULL,
endereco VARCHAR(100) NOT NULL
);

CREATE TABLE autor(
autor_id SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
telefone VARCHAR(50) NOT NULL
);

CREATE TABLE livros(
livro_id SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
valor NUMERIC NOT NULL,
estoque INTEGER NOT NULL,
autor_id BIGINT UNSIGNED NOT NULL,
CONSTRAINT fk_autor_id FOREIGN KEY (autor_id) REFERENCES autor(autor_id)
);

CREATE TABLE vendas(
venda_id SERIAL PRIMARY KEY,
valor NUMERIC NOT NULL,
data_venda DATE NOT NULL,
cliente_id BIGINT UNSIGNED NOT NULL,
livro_id BIGINT UNSIGNED NOT NULL,
CONSTRAINT fk_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
CONSTRAINT fk_livro_id FOREIGN KEY (livro_id) REFERENCES livros(livro_id)
)
