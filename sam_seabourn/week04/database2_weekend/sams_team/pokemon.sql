CREATE TABLE pokemon (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nickname TEXT,
  type1 TEXT,
  type2 TEXT,
  image TEXT
);


--Seed data
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Lugia","Lewges","Flying","Psychic","https://cdn.bulbagarden.net/upload/thumb/4/44/249Lugia.png/1200px-249Lugia.png");
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Rayquazza","RayJay","Flying","Dragon","https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png");
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Snorelax","Mawrlax","Normal","Normal","https://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/1200px-143Snorlax.png");
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Mewtwo","Mewtwo","Psychic","Psychic","https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png");
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Metagross","Gary","Steel","Psychic","https://cdn.bulbagarden.net/upload/thumb/0/05/376Metagross.png/1200px-376Metagross.png");
INSERT INTO pokemon (name,nickname,type1,type2,image) VALUES ("Aerodactyl","Skuxbird","Flying","Rock","https://cdn.bulbagarden.net/upload/e/e8/142Aerodactyl.png");
