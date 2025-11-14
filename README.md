# Remindly – Calendar Reminder App

## Features

- Month-by-month calendar (navigation restricted to one-year window)
- Lithuanian public holidays highlighted 
- Unlimited reminders per date (future dates only)
- Add, edit, delete, and list reminders for any date in the allowed range
- Holidays and reminder days visually highlighted
- Backend built with Spring Boot and JPA (H2 or PostgreSQL; H2 by default)
- Responsive UI (React, Vite, Bootstrap, react-calendar, Formik+Yup for validation)

---

## Prerequisites

- **Java 17** or later (for Spring Boot backend) - https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html download Windows x64 Installer
- **Node.js 18+** and **npm** (for React frontend) - https://nodejs.org/en/download/ download windows installer
- **Git** (to clone this repo) - https://git-scm.com/install/windows download latest (2.51.2) x64 version of Git for Windows
- **Maven** (for Spring Boot backend) - https://maven.apache.org/download.cgi download binary zip archive apache-maven-3.9.11-bin.zip

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/stormsinger/Remindly.git
cd Remindly
```

---

### 2. Start the Backend

#### a) H2 in-memory database (default, easiest)


- unpack apache-maven-3.9.11-bin.zip to C:\Program Files\Apache\Maven
- setx MAVEN_HOME "C:\Program Files\apache\maven" /M
- setx PATH "%PATH%;C:\Program Files\apache\maven\bin" /M
  
```bash
cd backend/demo
mvn clean
mvn spring-boot:run
```

This will start a Spring Boot backend on [http://localhost:8080](http://localhost:8080).

#### b) First Run

- Spring Boot will auto-create the database tables. No further setup needed for H2.
- The backend will fetch Lithuanian holidays live as required.

---

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

- This will launch the React app at [http://localhost:5173](http://localhost:5173).
- The frontend expects the backend on port **8080**.

---

### 4. Using the App

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Use the calendar to browse dates, add reminders, and see holidays.

## Project Structure

```
Remindly/
├── backend/
│   └── Spring Boot + JPA backend (Java sources, Maven project)
├── frontend/
│   └── React + Vite frontend (JSX, CSS)
```

---

## Common Problems

**"Backend not connecting/404"**
- Make sure you started backend first, or restart frontend after backend is up.
- Check firewall or port conflicts.

**"CORS error":**
- Out-of-the-box, the backend allows frontend requests from `http://localhost:5173`.

---

## Configuration & Customization

- Change allowed calendar dates via code in `frontend/src/components/calendarPanel/CalendarPanel.jsx`.
- Adjust API URLs if you need to change ports.
- All API endpoints are under `/reminders`.

---

## Development

- To run in development: use `mvn spring-boot:run` for backend and `npm run dev` for frontend concurrently.
- To build frontend for production: `npm run build` (output to `frontend/dist`).

---

## License

This project is provided as a technical interview solution. For any use beyond evaluation, contact the author.
