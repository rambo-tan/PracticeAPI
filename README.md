# 📝 Practice API Documentation

> Backend API setup using **Neon + PostgreSQL + Node.js**  
> Repository: [rambo-tan/practiceapi](https://github.com/rambo-tan/PracticeAPI)

---

## ⚡ Neon Configuration

| Steps | To Do | Website |
|-------|-------|---------|
| 1 | Open Neon (Neon Serverless Postgres) in your browser | 👉 [Click here](https://neon.tech/) |
| 2 | Click Login |  |
| 3 | Create a New Project | After logging in, click “New Project” and enter a project name. |
| 4 | Choose a Region | Select the server region closest to you, then click Create. |

---

## 🖥️ pgAdmin Configuration

| Steps | To Do | Website |
|-------|-------|---------|
| 1 | Go to the pgAdmin website | 👉 [Click here](https://www.pgadmin.org/download/) |
| 2 | Choose your operating system | Select your OS (Windows, macOS, or Linux). |
| 3 | Download pgAdmin 4 installer | Click the installer link for your platform. |
| 4 | Run the installer | Next → Next → Install → Finish |
| 5 | Launch pgAdmin 4 | Open pgAdmin from the Start Menu or desktop shortcut. |
| 6 | Connect pgAdmin 4 to Neon | Right-click Servers → Register → Server… |
| 6.2 | Configure Connection | **General tab**: Enter any Server Name.  <br> **Connection tab**: <br> • Host name/address → Copy from Neon Connection String (host value). <br> • Username → Copy the Role from Neon. <br> • Password → Use the password from Neon connection string. <br> Click Save. |

---

## 🗄️ Table Creation

### UI Method

1. Expand: `Databases → <your db> → Schemas → <schema> → Tables`
2. Right-click Tables → Create → Table…
3. General tab: set Name (e.g. `student`)
4. Columns tab: click `+` to add columns
5. Set constraints (Primary Key): select `studentid` → check Primary Key
6. Click Save

### SQL Method

1. Click Query Tool
2. Paste SQL example:

```sql
CREATE TABLE student (
  studentid SERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT UNIQUE
);
