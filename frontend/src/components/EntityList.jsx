export default function EntityList({ entities, onChange }) {
    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/entities/${id}`, {
            method: "DELETE",
        });
        onChange();
    };

    return (
        <ul>
            {entities.map((e) => (
                <li key={e.id}>
                    <b>{e.name}</b>: {e.description}
                    <button onClick={() => handleDelete(e.id)}>🗑️</button>
                </li>
            ))}
        </ul>
    );
}
