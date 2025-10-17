import { getDB } from "../db.js";

export async function getAllEntities() {
    const db = getDB();
    return db.all("SELECT * FROM entities ORDER BY id ASC");
}

export async function getEntityById(id) {
    const db = getDB();
    return db.get("SELECT * FROM entities WHERE id = ?", [id]);
}

export async function createEntity(name, description) {
    const db = getDB();
    const result = await db.run(
        "INSERT INTO entities (name, description) VALUES (?, ?)",
        [name, description]
    );
    return { id: result.lastID, name, description };
}

export async function updateEntity(id, name, description) {
    const db = getDB();
    await db.run("UPDATE entities SET name = ?, description = ? WHERE id = ?", [
        name,
        description,
        id,
    ]);
    return { id, name, description };
}

export async function deleteEntity(id) {
    const db = getDB();
    await db.run("DELETE FROM entities WHERE id = ?", [id]);
}
