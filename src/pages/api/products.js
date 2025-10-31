import Database from "better-sqlite3";

export async function GET() {
  const db = new Database("db/ecomoda.db");
  const products = db.prepare("SELECT * FROM products").all();

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
