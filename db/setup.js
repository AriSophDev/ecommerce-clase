import Database from "better-sqlite3";

const db = new Database("ecomoda.db");

// Crear tabla de productos
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    image TEXT
  )
`);

console.log("✅ Base de datos creada con tabla 'products'");


