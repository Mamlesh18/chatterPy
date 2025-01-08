import React, { useState } from "react";
import axios from "axios";

const GeminiChatbot = () => {
  const email = "ADD YOUR MAIL ID";
  const apiKey = "ADD YOUR API KEY";
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); 

  const handleSendMessage = async () => {
    if (!email || !apiKey || !query) {
      setError("Please provide (query).");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("PASTE THE URL FROM WEBSITE", {
        email,
        key: apiKey,
        query,
      });

      const userMessage = { type: "user", text: query };
      const botMessage = { type: "bot", text: response.data.answer };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

      setQuery("");
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "An error occurred while fetching the response.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={styles.chatButton}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        💬
      </div>

      {isChatOpen && (
        <div style={styles.chatContainer}>
          <h1 style={styles.header}> Chatbot</h1>

          <div style={styles.chatWindow}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: message.type === "user" ? "flex-end" : "flex-start",
                  backgroundColor: message.type === "user" ? "#007bff" : "#f1f1f1",
                  color: message.type === "user" ? "#fff" : "#000",
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Ask a question"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={styles.input}
            />
            <button
              onClick={handleSendMessage}
              style={styles.button}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {error && <div style={styles.error}>{error}</div>}
        </div>
      )}
    </>
  );
};

const styles = {
  chatButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },

  chatContainer: {
    position: "fixed",
    bottom: "100px",
    right: "20px",
    width: "350px",
    height: "450px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },

  header: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },

  chatWindow: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },

  message: {
    margin: "5px 0",
    padding: "10px",
    borderRadius: "15px",
    maxWidth: "70%",
  },

  inputContainer: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #ddd",
  },

  input: {
    padding: "10px",
    marginBottom: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },

  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },

  error: {
    marginTop: "10px",
    color: "red",
    textAlign: "center",
  },
};

export default GeminiChatbot;
