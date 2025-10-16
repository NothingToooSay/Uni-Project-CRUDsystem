import pool from "../db.js";

export async function getAllEntities() {
    const result = await pool.query("SELECT * FROM entities ORDER BY id ASC");
    return result.rows;
}

export async function getEntityById(id) {
    const result = await pool.query("SELECT * FROM entities WHERE id = $1", [
        id,
    ]);
    return result.rows[0];
}

export async function createEntity(name, description) {
    const result = await pool.query(
        "INSERT INTO entities (name, description) VALUES ($1, $2) RETURNING *",
        [name, description]
    );
    return result.rows[0];
}

export async function updateEntity(id, name, description) {
    const result = await pool.query(
        "UPDATE entities SET name=$1, description=$2 WHERE id=$3 RETURNING *",
        [name, description, id]
    );
    return result.rows[0];
}

export async function deleteEntity(id) {
    await pool.query("DELETE FROM entities WHERE id=$1", [id]);
}
