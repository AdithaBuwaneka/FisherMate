#  Empowering Fishermen with Smart Tools

A comprehensive web application designed to help fishermen manage their resources, monitor safety conditions, and access markets efficiently.

## 🌟 Features

- **Resource Management**
  - Boat inventory tracking
  - Fishing gear management

- **Safety Alerts**
  - Weather updates
  - Fishing conditions monitoring

- **Market Access**
  - Catch details submission
  - Market price notifications

- **Profile Management**
  - Personal information
  - Account settings

## 🛠️ Tech Stack

- Frontend: React + Vite + Tailwind CSS + Flowbite React
- Backend: Ballerina
- Database: MongoDB

## ⚙️ Prerequisites

Make sure you have these installed on your local machine:
- Node.js
- Ballerina
- MongoDB

## 🚀 Local Setup Instructions

### 1. Clone the Repository
```bash
git clone [your-repository-url]
cd [repository-name]
```

### 2. Database Setup
- Make sure MongoDB is running on your local machine
- Default MongoDB URL: `mongodb://localhost:27017`
- Database will be created automatically when the application runs

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
Frontend will run on: `http://localhost:5173`

### 4. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Run Ballerina service
bal run
```
Backend will run on: `http://localhost:9090`

## 📁 Project Structure

```
fisherman-platform/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── service.bal
    └── Config.toml
```

## 🔧 Configuration

No additional environment setup is required as everything runs locally.

## 🤝 Team Members
- [Your Team Members Names]

## 📞 Contact
[Your Contact Information]

#InnovateWithBallerina #Ballerinalang #WSO2 #IEEESBUOM #IEEECSUOM #TERM23/24
