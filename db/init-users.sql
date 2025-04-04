-- users テーブルを作る
CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(32) NOT NULL, email VARCHAR(32) NOT NULL);
-- 初期データ投入
INSERT users (name, email) VALUES ("daihuku", "daihuku@example.com");
INSERT users (name, email) VALUES ("ohagi", "ohagi@example.com");
