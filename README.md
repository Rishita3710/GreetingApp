# Greeting App 🎉

A simple full-stack Greeting App that takes a name as input and returns a greeting message.  
The backend is built with **Node.js & Express**, and the frontend is built with **React.js**.

## 🚀 Live Demo
- **Backend API**: [https://greetingapp-372t.onrender.com](https://greetingapp-372t.onrender.com)
- **Frontend (GitHub Pages/Vercel)**: [Your Frontend Live Link](#)

---

## 📌 Features

### 🔹 Backend (Node.js & Express)
- API endpoint: `GET /api/greet?name=YourName`
- Returns a JSON response:
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  # 🎉 Greeting App - Frontend (React.js)

A simple **React.js** application that interacts with a backend API to display personalized greetings.

## 🚀 Live Demo
🔗 **Frontend (GitHub Pages/Vercel)**: [Your Frontend Live Link](#)  
🔗 **Backend API**: [https://greetingapp-372t.onrender.com](https://greetingapp-372t.onrender.com)

---

## 📌 Features
- A beautiful UI with a **violet-to-black gradient**.
- An **input field** to enter your name.
- A **"Get Greeting"** button that fetches a personalized greeting from the backend.
- An interactive **message box** with hover effects and animations.
- The message stays visible for **1 minute** before disappearing.

---

# 🚀 Greeting App - Backend (Node.js & Express)

This is the **backend API** for the Greeting App. It provides an endpoint that returns a personalized greeting message.

## 🔗 Live API
- **Base URL**: [https://greetingapp-372t.onrender.com](https://greetingapp-372t.onrender.com)
- **GET /api/greet?name=YourName**
  - Example request:
    ```
    https://greetingapp-372t.onrender.com/api/greet?name=John
    ```
  - Example response:
    ```json
    {
      "message": "Hello, John! Welcome to Younglabs."
    }
    ```
  - If the name is missing, returns:
    ```json
    {
      "error": "Name is required."
    }
    ```

---

## 📌 Features
- **Express.js API** with a single endpoint.
- **Handles missing name errors**.
- **CORS enabled** to allow frontend requests.
- **Deployed on Render** for public access.

---
# 🚀 Technologies Used - Greeting App

This document provides an overview of the technologies used to build the **Greeting App**, including the **frontend (React.js)** and **backend (Node.js & Express.js)**.

---

## 📌 Frontend Technologies (React.js)

| Technology | Description |
|------------|------------|
| **React.js** | JavaScript library for building the user interface |
| **CSS3** | Styling the UI with custom gradients and animations |
| **Fetch API** | Fetches data from the backend server |
| **HTML5** | Structuring the frontend components |
| **GitHub Pages** | Deploying the frontend for public access |

### 📌 Additional Features
- **Violet-to-Black Gradient** UI theme.
- **Interactive UI elements** with hover effects.
- **Animated message box** that disappears after **1 minute**.
- **Responsive Design** for mobile and desktop.

---

## 📌 Backend Technologies (Node.js & Express.js)

| Technology | Description |
|------------|------------|
| **Node.js** | JavaScript runtime for executing backend code |
| **Express.js** | Web framework for handling API requests |
| **Render** | Deploys the backend API to a public server |

### 📌 Additional Features
- **GET API endpoint (`/api/greet?name=YourName`)** that returns a greeting message.
- **Error handling** for missing name inputs.
- **Deployed on Render** for public access.
- **Configured CORS** to allow frontend communication.

---

## 🚀 Deployment

| Service | Purpose | Link |
|---------|---------|------|
| **Render** | Hosting the backend | [Backend API](https://greetingapp-372t.onrender.com) |
| **GitHub Pages** | Hosting the frontend | [Frontend Live Link](#) |

---



