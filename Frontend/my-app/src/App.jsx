import { useState } from "react";
import "./styles.css";

export default function GreetingApp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 60000);
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 40000);
    } catch (error) {
      setMessage("Error fetching the greeting.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 40000);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-box"
      />
      <button onClick={getGreeting} className="greet-button">
        Get Greeting
      </button>
      {showMessage && <p className="message-box animated-box">{message}</p>}
    </div>
  );
}
