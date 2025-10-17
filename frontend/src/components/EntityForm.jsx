import { useState } from "react";
import styles from "./EntityForm.module.css";

export default function EntityForm({ onSaved }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        await fetch("http://localhost:5000/entities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description }),
        });
        setName("");
        setDescription("");
        onSaved();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Add
            </button>
        </form>
    );
}
