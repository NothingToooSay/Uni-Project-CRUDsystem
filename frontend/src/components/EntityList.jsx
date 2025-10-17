import { useState } from "react";
import styles from "./EntityList.module.css";

export default function EntityList({ entities, onChange }) {
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");

    const startEdit = (entity) => {
        setEditingId(entity.id);
        setEditName(entity.name);
        setEditDescription(entity.description);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditName("");
        setEditDescription("");
    };

    const saveEdit = async () => {
        await fetch(`http://localhost:5000/entities/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: editName,
                description: editDescription,
            }),
        });
        cancelEdit();
        onChange();
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/entities/${id}`, {
            method: "DELETE",
        });
        onChange();
    };

    return (
        <ul className={styles.list}>
            {entities.map((e) => (
                <li key={e.id} className={styles.item}>
                    {editingId === e.id ? (
                        <div className={styles.editForm}>
                            <input
                                value={editName}
                                onChange={(ev) => setEditName(ev.target.value)}
                                className={styles.input}
                            />
                            <input
                                value={editDescription}
                                onChange={(ev) =>
                                    setEditDescription(ev.target.value)
                                }
                                className={styles.input}
                            />
                            <div className={styles.actions}>
                                <button
                                    onClick={saveEdit}
                                    className={styles.saveBtn}
                                >
                                    💾 Save
                                </button>
                                <button
                                    onClick={cancelEdit}
                                    className={styles.cancelBtn}
                                >
                                    ✖ Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
                                <strong className={styles.name}>
                                    {e.name}
                                </strong>
                                <p className={styles.description}>
                                    {e.description}
                                </p>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    onClick={() => startEdit(e)}
                                    className={styles.editBtn}
                                >
                                    ✎ Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(e.id)}
                                    className={styles.deleteBtn}
                                >
                                    🗑 Delete
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
