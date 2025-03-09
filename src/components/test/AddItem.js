import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItem() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/items", { name }).then(() => {
            navigate("/");
        });
    };

    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter item name"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddItem;
