import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db;

export async function initDB() {
    db = await open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS entities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    )
  `);

    console.log("✅ SQLite database ready");
}

export function getDB() {
    if (!db) throw new Error("Database not initialized");
    return db;
}
