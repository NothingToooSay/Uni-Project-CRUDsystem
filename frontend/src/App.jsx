import { useEffect, useState } from "react";
import styles from "./App.module.css";
import EntityForm from "./components/EntityForm";
import EntityList from "./components/EntityList";

function App() {
    const [entities, setEntities] = useState([]);

    const fetchEntities = async () => {
        const res = await fetch("http://localhost:5000/entities");
        const data = await res.json();
        setEntities(data);
    };

    useEffect(() => {
        fetchEntities();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CRUD Project</h1>
            <EntityForm onSaved={fetchEntities} />
            <EntityList entities={entities} onChange={fetchEntities} />
        </div>
    );
}

export default App;
