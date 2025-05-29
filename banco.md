-- Cria o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS servicos_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usa o banco criado
USE servicos_db;

-- Cria a tabela servicos
CREATE TABLE IF NOT EXISTS servicos (
    id VARCHAR(36) PRIMARY KEY,      -- UUID de 36 caracteres
    nome VARCHAR(100) NOT NULL,      -- Nome do serviço
    descricao TEXT,                  -- Descrição do serviço
    preco DECIMAL(10,2) NOT NULL,   -- Preço com 2 casas decimais
    taxa_extra DECIMAL(10,2) DEFAULT NULL  -- Taxa extra opcional para serviços premium
);
