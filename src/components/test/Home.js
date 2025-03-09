import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/items").then((response) => {
            setItems(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/items/${id}`).then(() => {
            setItems(items.filter((item) => item.id !== id));
        });
    };

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}{" "}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
