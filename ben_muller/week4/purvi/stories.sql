CREATE TABLE stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  kind TEXT,
  image TEXT
);

INSERT INTO stories (name,kind) VALUES ('Steve Jobs','Biography');