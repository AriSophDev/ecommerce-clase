import Database from "better-sqlite3";

const db = new Database("ecomoda.db");

// Productos de ejemplo
const products = [
  {
    name: "Camiseta 'Sweet Vintage'",
    price: 59,
    description: "Suavidad y nostalgia en una prenda que combina con todo.",
    image: "/images/1.jpeg",
  },
  {
    name: "Vestido 'Checkmate'",
    price: 79,
    description:
      "Cuadros clásicos con actitud moderna. Perfecto para días casuales con estilo.",
    image: "/images/2.jpg",
  },
  {
    name: "Vestido 'Crimson Aura'",
    price: 110,
    description: "Un toque elegante y rebelde para destacar sin esfuerzo.",
    image: "/images/3.jpg",
  },
  {
    name: "Shorts 'Rebel Heart'",
    price: 129,
    description:
      "Denim, cadenas y seguridad en cada paso. Ideal para looks urbanos.",
    image: "/images/4.jpg",
  },
  {
    name: "Vestido 'Midnight Muse'",
    price: 189,
    description: "Una silueta misteriosa que resalta tu lado más encantador.",
    image: "/images/6.jpg",
  },

  {
    name: "Vestido “Velvet Eclipse”",
    price: 149,
    description:
      "Un vestido de seda con detalles en veludo negro que te hará brillar en cualquier ocasión.",
    image: "/images/5.jpg",
  },
];

// Insertar productos
const insert = db.prepare(
  "INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)",
);

for (const p of products) {
  insert.run(p.name, p.price, p.description, p.image);
}

console.log("✅ Productos insertados correctamente");
