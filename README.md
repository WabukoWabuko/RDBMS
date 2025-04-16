# RDBMS

Empower Your Data Journey with Seamless SQL Solutions

Built with the tools and technologies:

---

## 🌟 Overview

RDBMS Queries Viewer is a web application designed to help developers, students, and database enthusiasts learn and explore SQL commands for Relational Database Management Systems (RDBMS). With a sleek, modern UI and powerful features like search, pagination, and real-time like tracking via Google Sheets, this project demonstrates my expertise in full-stack development, API integration, and user experience design.

This project was built to solve the challenge of finding and understanding SQL commands quickly, making it an ideal tool for both beginners and experienced professionals. Whether you're preparing for a technical interview or debugging a database query, RDBMS Queries Viewer has you covered.

---

## 🌟 Features

- **Interactive SQL Command Library**: Browse a curated list of SQL commands with examples, descriptions, and tags.
- **Real-Time Search**: Filter commands instantly as you type, powered by a debounced search for optimal performance.
- **Like System with Google Sheets Integration**: Users can like the app, with likes tracked in real-time using Google Forms and Google Sheets API.
- **Responsive Design**: Fully responsive UI built with Bootstrap, ensuring a seamless experience on desktop and mobile.
- **Dark/Light Theme Toggle**: Switch between themes for a personalized experience.
- **Pagination**: Navigate through commands easily with paginated results.
- **Confetti Animation**: Fun celebratory animation when users like the app.
- **GitHub Stars Integration**: Displays the current star count of the repository, fetched dynamically from the GitHub API.

---

## 🛠️ Tech Stack

This project showcases a modern tech stack, demonstrating my ability to work with both frontend and backend technologies:

- **Frontend**:

  - React - For building a dynamic, component-based UI.
  - Bootstrap - For responsive design and styling.
  - Framer Motion - For animations like the confetti effect.
  - React Toastify - For user notifications.

- **Backend**:

  - Netlify Functions - Serverless functions for secure API calls.
  - Google Sheets API - For real-time like tracking.
  - Google Forms - For submitting likes.

- **Other Tools**:

  - npm - Package management.
  - TOML - Configuration for Netlify deployment.
  - JavaScript - Core language for logic and interactivity.
  - CSS - Custom styling.
  - Git - Version control.
  - Netlify - Hosting and deployment.

---

## 📸 Screenshots

### Home Page

### Search in Action

### Like Animation

---

## 🛠️ Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- Netlify CLI (for local testing with functions)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/WabukoWabuko/RDBMS.git
   cd RDBMS/frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the `frontend` directory.
   - Add the following variables (replace with your values):

     ```
     REACT_APP_FORM_URL=your_google_form_url
     REACT_APP_ENTRY_ID=your_google_form_entry_id
     REACT_APP_SPREADSHEET_ID=your_spreadsheet_id
     REACT_APP_SHEET_NAME=Likes1
     REACT_APP_LIKES_RANGE=B2:B
     GOOGLE_CREDENTIALS=your_stringified_google_credentials
     ```

4. **Install Netlify Functions Dependencies**:

   ```bash
   cd netlify/functions
   npm install
   cd ../..
   ```

5. **Run Locally**:

   ```bash
   netlify dev
   ```

   - Open `http://localhost:8888` in your browser.

---

## 🚀 Usage

1. **Browse SQL Commands**:

   - Navigate to the home page to see a paginated list of SQL commands.
   - Each command includes a title, description, example, and tags.

2. **Search Commands**:

   - Use the search bar to filter commands in real-time by typing keywords like "SELECT" or "JOIN".

3. **Like the App**:

   - Click the heart button to like the app. Likes are tracked in a Google Sheet and updated in real-time.

4. **Toggle Theme**:

   - Switch between dark and light themes using the theme toggle in the navbar.

---

## 🌐 Live Demo

Check out the live demo hosted on Github:\
🔗 https://wabukowabuko.github.io/RDBMS/

---

## 📬 Contact

I’m open to opportunities and collaborations! Feel free to reach out:

- **Email**: basilwabbs@gmail.com
- **Phone**: +254740750403
- **GitHub**: WabukoWabuko
- **LinkedIn**: https://www.linkedin.com/in/wabuko-wabuko-431669209/

---

## 💡 Why Hire Me?

This project demonstrates my ability to:

- Build full-stack applications with React and serverless functions.
- Integrate third-party APIs (Google Sheets, GitHub).
- Create responsive, user-friendly interfaces with Bootstrap and custom CSS.
- Optimize performance with techniques like debouncing and pagination.
- Deploy and manage projects on modern platforms like Netlify.

I’m passionate about solving real-world problems with technology and delivering high-quality, maintainable code. Let’s connect to discuss how I can contribute to your team!

---

⭐ **Star this project on GitHub**: WabukoWabuko/RDBMS\
Your support means the world to me!
