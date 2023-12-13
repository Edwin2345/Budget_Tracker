CREATE DATABASE budget_tracker;
USE budget_tracker;

CREATE TABLE categories(
  id INT PRIMARY KEY AUTO_INCREMENT,
  category VARCHAR(30) NOT NULL
);

CREATE TABLE expenses(
  id INT PRIMARY KEY AUTO_INCREMENT,
  summary VARCHAR(30) NOT NULL,
  amount DECIMAL(7,2) NOT NULL,
  created_on DATE DEFAULT (CURRENT_DATE),
  category INT NOT NULL,
  FOREIGN KEY(category) REFERENCES categories(id)  ON DELETE CASCADE
);

/*INSERT INTO expenses(summary,amount,category)
VALUES("took kids for icecream",13.45,4);*/

DELETE FROM expenses;