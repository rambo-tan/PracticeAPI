🚀 Neon + PostgreSQL + Node.js Backend API Setup
Simple, sequential, and beginner-friendly technical documentation.
📌 Table of Contents

Overview

Requirements

Neon Setup

pgAdmin Setup

Database Creation

Table Creation

Backend API Setup

Folder Structure

Database Connection

Routes & Controllers

Running the Server

Testing the API

🧩 Overview

This technical documentation will guide you step-by-step on how to:

✔ Create a Neon Serverless PostgreSQL Database
✔ Connect Neon to pgAdmin
✔ Create Databases and Tables
✔ Build a Node.js Express API integrated with Neon
✔ Add Swagger API Docs
✔ Test your API

Designed to be beginner-friendly—even for someone with zero API experience.

🛠️ Requirements

Make sure you have installed:

Node.js (v16+)

pgAdmin 4

VS Code or any code editor

🌐 Neon Setup
1. Open Neon (Serverless PostgreSQL)

👉 Insert your Neon link here

2. Login
3. Create a New Project

Click New Project

Enter a project name

4. Choose a Region

Select the nearest region → click Create.

🐘 pgAdmin Setup
1. Open pgAdmin Website

👉 Insert pgAdmin download link here

2. Select Your Operating System
3. Download pgAdmin 4 Installer
4. Run the Installer

Follow the setup steps:
Next → Next → Install → Finish

5. Open pgAdmin 4
6. Connect pgAdmin to Neon

Right-click:
Servers → Register → Server

General Tab

Name: Any name you want

Connection Tab
Field	Value
Host	Neon connection string (host)
Username	Neon role
Password	Neon password

Click Save.

🗄️ Database Creation
1. Open pgAdmin
2. Connect to Your Server
3. Create a New Database

Right-click:
Databases → Create → Database

4. Enter Database Name

Example:

schooldb

5. Keep Default Settings
6. Save
📊 Table Creation

You can create tables using UI or SQL Query.

✅ UI Method (pgAdmin)
Step 1

Navigate:
Databases → <your db> → Schemas → public → Tables

Step 2

Right-click Tables → Create → Table…

Step 3

Name your table:

student

Step 4 — Add Columns

Click Columns → +

Example columns:

Column Name	Type	Not Null	Extra
studentid	serial	✔	Primary Key
firstname	text	✔	
lastname	text	✔	
email	text	❌	Unique
Step 5 — Set Primary Key

Mark studentid as Primary Key

Step 6 — Save
✅ SQL Method
Step 1

Open Query Tool

Step 2 — Paste SQL
CREATE TABLE student (
  studentid SERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT UNIQUE
);

Step 3

Click Execute.

⚙️ Backend API Setup
1. Initialize the Project
npm init -y

2. Install the Required Packages
Backend Framework
npm install express

Environment Variables
npm install dotenv

Neon Database Connector
npm install @neondatabase/serverless

PostgreSQL Driver
npm install pg

Swagger (API Documentation)
npm install swagger-jsdoc
npm install swagger-ui-express

Development Tool
npm install -D nodemon

3. Add Scripts to package.json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

4. Create .env File
PORT=3000
DATABASE_URL=YOUR_NEON_DATABASE_URL
API_KEY=your_api_key_here

📁 Folder Structure

Create this structure:

project/
│ app.js
│ .env
│ package.json
│
├── config/
│   ├── db.js
│   └── swagger.js
│
├── controllers/
│   └── student.controller.js
│
├── routes/
│   └── student.routes.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   └── student.model.js
│
└── swaggerdocs/
    └── student.doc.js


📌 PLACE YOUR FOLDER STRUCTURE IMAGE HERE

🔌 Database Connection

Create file: config/db.js

📌 PLACE YOUR SAMPLE CODE HERE

🔀 Routes & Controllers

Create file: routes/student.routes.js

📌 PLACE YOUR SAMPLE CODE HERE

Create file: controllers/student.controller.js

📌 PLACE YOUR SAMPLE CODE HERE

📦 Main Entry — app.js

📌 PLACE YOUR app.js CODE HERE

▶️ Running the Server
Development Mode (with auto-restart)
npm run dev

Production Mode
npm start

🧪 Testing the API

Use any API tool:

✔ Postman
✔ Swagger UI
✔ Thunder Client

Swagger URL:

http://localhost:3000/api-docs


Test these endpoints:

GET /students
POST /students
PUT /students/:id
DELETE /students/:id
