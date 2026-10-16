# VaultBank - Online Banking System

A full-stack web application built using React.js, Java Spring Boot, and MySQL to manage customer records through CRUD operations.

## Features

- Add new customer records
- View all customer records
- Update existing customer details
- Delete customer records
- Store customer information in MySQL
- Connect the React frontend with Spring Boot REST APIs

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| HTML and CSS | User interface |
| Java | Backend programming |
| Spring Boot | REST API development |
| Spring Data JPA | Database operations |
| MySQL | Data storage |
| Postman | API testing |
| Git and GitHub | Version control |

## Project Structure

```text
VaultBank-Online-Banking/
├── Frontend/
├── Backend/
├── .gitignore
└── README.md
```

## Prerequisites

- Java JDK
- Node.js and npm
- MySQL Server
- Maven

## Database Setup

Create the database in MySQL:

```sql
CREATE DATABASE onlinebanking;
```

Set the `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` environment variables before starting
the backend. `DB_URL` defaults to `jdbc:mysql://localhost:3306/onlinebanking` and
`DB_USERNAME` defaults to `root`; `DB_PASSWORD` must be set to your MySQL password.
Do not commit database credentials.

## Run the Backend

1. Open the `Backend` project in Eclipse.
2. Make sure MySQL is running.
3. Run the Spring Boot application.

## Run the Frontend

Open a terminal in the `Frontend` folder and execute:

```bash
npm install
npm start
```

The React application typically runs at `http://localhost:3000`.

## CRUD Operations

| HTTP Method | Operation |
|---|---|
| POST | Create a customer |
| GET | Retrieve customer records |
| PUT | Update customer details |
| DELETE | Delete a customer |

## Learning Outcomes

- Developing reusable React components
- Creating REST APIs with Spring Boot
- Integrating frontend and backend applications
- Performing database operations using MySQL
- Testing APIs using Postman

## Project Scope

This is an educational full-stack CRUD project for customer record management. It does not implement real banking transactions or production-grade banking security.