import React, { useState } from 'react';

function State() {
    const [mode, setMode] = useState("dark");
    let [bgcolor, setBgcolor] = useState("white");
    
    const handleChanged = () => {
        setBgcolor(bgcolor === "white" ? "grey" : "white");
        setMode(mode === "light" ? "dark" : "light");
    };

    const handleChange = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256); // Changed 266 to 256
        const b = Math.floor(Math.random() * 256);
        setBgcolor(`rgb(${r}, ${g}, ${b})`);
    };

    return (
        <div 
            style={{
                backgroundColor: bgcolor,
                padding: "50px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.5s ease"
            }}
        >
            <h1 
                style={{
                    fontFamily: "'Arial', sans-serif",
                    color: mode === "dark" ? "black" : "white",
                    transition: "color 0.5s ease"
                }}
            >
                State
            </h1>
            <button 
                onClick={handleChanged} 
                style={{
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: mode === "dark" ? "white" : "black",
                    color: mode === "dark" ? "black" : "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "background-color 0.3s, color 0.3s"
                }}
            >
                {mode}
            </button>
            <br />
            <button 
                onClick={handleChange} 
                style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: mode === "dark" ? "white" : "black",
                    color: mode === "dark" ? "black" : "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "background-color 0.3s, color 0.3s"
                }}
            >
                Random Colors
            </button>
        </div>
    );
}

export default State;
