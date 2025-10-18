# Full Stack CRUD Application (Node.js + React + Express + SQLite)

This project is a simple **CRUD (Create, Read, Update, Delete)** full-stack web application built for educational purposes.  
It uses **Node.js**, **Express.js**, **React**, and **SQLite** as the database.

---

## ⚙️ Tech Stack

-   **Frontend:** React (modular CSS, dark theme)
-   **Backend:** Node.js + Express.js
-   **Database:** SQLite (stored locally in a single file)
-   **API Communication:** REST (JSON over HTTP)

---

## 🏗️ Project Structure

my-crud-project/
│
├── backend/ # Node.js + Express API (with SQLite)
│ ├── src/
│ ├── database.sqlite
│ └── package.json
│
├── frontend/ # React client app
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md

---

## 🚀 How to Run the Project

### 🧩 Backend Setup

1. Open a terminal inside the **backend** folder:

    ```bash
    cd backend
    node src/app.js
    ```

    The server will start on: http://localhost:5000

### 💻 Frontend Setup

1. Open a new terminal and go to the **frontend** folder:

    ```bash
    cd frontend
    npm start
    ```

    The React app will start at: http://localhost:3000

---

### 🧠 Features

1. Add, edit, delete, and view records

2. Fully responsive design

3. Dark theme with purple accent colors

4. SQLite database stored as a single file

5. Simple structure for easy teamwork and deployment

---

# 2️⃣ Second part

## 📝 Database
1. Dodano 2 nowe pola do bazy danych (surname, email)

## 💻 Frontend
1. Dodano kolumny, aby wyświetlić nowe dane w tabeli w pliku `EntityList.jsx`
2. Dodano 2 nowe pola do wprowadzania danych do formularza w pliku `EntityForm.jsx`
3. Dodano możliwość edycji i poprawnego usuwania wierszy z nowymi danymi

## 🧩 Backend
1. Zaktualizowano tworzenie bazy danych z nowymi polami, jeśli baza danych nie została jeszcze utworzona w pliku `db.js`
2. Zaktualizowano operacje na danych (usuwanie, dodawanie, edycja itp.) w plikach `entityModel.js` i `entityController.js`


## 👁️ Widok przed i po
<table>
  <tr>
    <td align="center">
      <h1>🕒 Przed</h1><br>
      <img src="https://github.com/user-attachments/assets/7e6927b7-6fea-4bd6-b697-f985ef0ce2cf" width="400" alt="Przed"/>
    </td>
    <td align="center">
      <h1>🆕 Po</h1><br>
      <img src="https://github.com/user-attachments/assets/bdea1c56-526d-4d3a-b966-cbad8ad4d488" width="400" alt="Po"/>
    </td>
  </tr>
</table>


