# React Firebase Database

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using React for the frontend and Firebase Realtime Database as the backend. The goal is to showcase how to perform basic data operations seamlessly between a React application and Firebase's cloud-hosted NoSQL database.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your machine.
- **Firebase Account:** Create a Firebase account and set up a Realtime Database project.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-firebase-database.git
   cd React-firebase-database
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project in the Firebase Console.
   - Enable the Realtime Database.
   - Get your Firebase configuration object (API keys, etc.).
   - Create a `.env` file in the root of the project and add your Firebase configuration:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_DATABASE_URL=your-database-url
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.
