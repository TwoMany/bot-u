create TABLE man(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    secondname VARCHAR(255)
);


create TABLE blog (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    man_id INTEGER,
    FOREIGN KEY (man_id) REFERENCES man (id) 
);