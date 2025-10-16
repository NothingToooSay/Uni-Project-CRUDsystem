import { useEffect, useState } from "react";
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
        <div className="App">
            <h1>CRUD Entities</h1>
            <EntityForm onSaved={fetchEntities} />
            <EntityList entities={entities} onChange={fetchEntities} />
        </div>
    );
}

export default App;
