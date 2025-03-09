import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/test/Home";
import AddItem from "./components/test/AddItem"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/add">Add Item</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
