# 🏛️ NyaySathi - Your AI Legal Assistant

<div align="center">

![NyaySathi Logo](https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=NyaySathi)

**Empowering Citizens with AI-Powered Legal Assistance**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

</div>

---

## 📋 Table of Contents

1. [What is NyaySathi?](#-what-is-nyaysathi)
2. [Key Features](#-key-features)
3. [Who Can Use This?](#-who-can-use-this)
4. [How It Works](#-how-it-works)
5. [Technology Stack](#-technology-stack)
6. [Getting Started](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
   - [Running the Application](#running-the-application)
7. [Usage Guide](#-usage-guide)
8. [API Documentation](#-api-documentation)
9. [File Structure](#-file-structure)
10. [Contributing](#-contributing)
11. [Troubleshooting](#-troubleshooting)
12. [License](#-license)

---

## 🤔 What is NyaySathi?

**NyaySathi** (न्यायसाथी) means "Justice Companion" in Hindi. It's an AI-powered legal assistance platform designed to help common people understand their legal rights and generate important legal documents.

### The Problem We Solve
- 📚 Legal processes are complex and expensive
- 🌐 Language barriers prevent access to justice
- ⏰ Long waiting times for legal consultations
- 💰 High costs of legal services
- 📄 Difficulty in creating legal documents

### Our Solution
NyaySathi provides **FREE**, **multilingual**, **AI-powered** legal assistance that anyone can use from their phone or computer.

---

## ✨ Key Features

### 🗣️ **Voice-Enabled Chat**
- Speak your problems in your native language
- AI responds with voice output
- No need to type - just talk!

### 🌍 **Multilingual Support**
- **Hindi** (हिंदी)
- **English** 
- **Tamil** (தமிழ்)
- **Telugu** (తెలుగు)
- **Kannada** (ಕನ್ನಡ)
- **Bengali** (বাংলা)
- **Gujarati** (ગુજરાતી)

### 📄 **Document Generation**
- **Wage Complaint Letters**
- **RTI Applications**
- **Consumer Complaints**
- **Tenancy Dispute Documents**
- All documents in your preferred language!

### 🏢 **NGO Directory**
- Find legal aid organizations near you
- Contact information and specializations
- Filter by location and type of help

### 🔐 **Secure & Private**
- User authentication and data protection
- Secure document storage
- Privacy-first approach

---

## 👥 Who Can Use This?

### 🎯 **Primary Users**
- **Workers** facing wage issues
- **Consumers** with product/service complaints
- **Tenants** dealing with housing problems
- **Citizens** needing RTI applications
- **Anyone** seeking legal guidance

### 🌟 **Perfect For**
- People who don't speak English fluently
- Those who can't afford lawyers
- Rural and urban citizens alike
- Students learning about legal rights
- NGOs helping communities

---

## 🔧 How It Works

```mermaid
graph TD
    A[User Opens NyaySathi] --> B[Choose Language]
    B --> C[Register/Login]
    C --> D[Start Conversation]
    D --> E[Speak or Type Problem]
    E --> F[AI Analyzes Issue]
    F --> G[Provides Legal Guidance]
    G --> H[Generate Documents]
    H --> I[Download & Use]
```

### Step-by-Step Process:
1. **Open the website** on your phone/computer
2. **Select your language** from 7 available options
3. **Create an account** (free and secure)
4. **Tell your problem** by speaking or typing
5. **Get AI guidance** in your language
6. **Generate documents** if needed
7. **Download and use** the legal documents

---

## 🛠️ Technology Stack

### Frontend (What Users See)
- **React** - User interface library
- **TypeScript** - Programming language for better code
- **Tailwind CSS** - Modern styling framework
- **Vite** - Fast development tool

### Backend (Server Side)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database for storing data
- **JWT** - Secure user authentication

### AI & Voice Features
- **OpenRouter API** - AI language model
- **Web Speech API** - Voice recognition and speech
- **Whisper** - Audio transcription

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code quality
- **Concurrently** - Run multiple servers

---

## 🚀 Getting Started

### Prerequisites

Before you start, make sure you have these installed on your computer:

#### 1. **Node.js** (Version 18 or higher)
```bash
# Check if you have Node.js installed
node --version

# If not installed, download from: https://nodejs.org/
```

#### 2. **Git** (For downloading the code)
```bash
# Check if you have Git installed
git --version

# If not installed, download from: https://git-scm.com/
```

#### 3. **A Code Editor** (Optional but recommended)
- **VS Code** (Recommended): https://code.visualstudio.com/
- **Atom**: https://atom.io/
- **Sublime Text**: https://www.sublimetext.com/

---

### Installation

#### Step 1: Download the Project
```bash
# Open your terminal/command prompt and run:
git clone https://github.com/Priyanshu07190/NyaySathi.git

# Go into the project folder
cd NyaySathi
```

#### Step 2: Install Dependencies
```bash
# Install all required packages (this might take 2-3 minutes)
npm install

# If you get permission errors on Mac/Linux, try:
sudo npm install
```

#### Step 3: Install Additional Tools
```bash
# Install tsx (TypeScript runner) globally
npm install -g tsx

# If permission error on Mac/Linux:
sudo npm install -g tsx
```

---

### Configuration

#### Step 1: Set up Environment Variables

Create a file called `.env` in the project folder with these settings:

```bash
# Copy this exactly into your .env file:

# Database Configuration (MongoDB)
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=nyaysathi

# AI Configuration (OpenRouter - for AI features)
OPENROUTER_API_KEY=your-openrouter-api-key-here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

# Server Configuration
PORT=3001
NODE_ENV=development

# Security Settings
JWT_SECRET=nyaysathi-dev-secret-key
ENCRYPTION_KEY=dev-encryption-key-32-chars-long
JWT_EXPIRES_IN=7d
```

#### Step 2: Get Required API Keys

##### 🗄️ **MongoDB Database** (FREE)
1. Go to https://www.mongodb.com/atlas
2. Sign up for a free account
3. Create a new cluster (choose FREE tier)
4. Get your connection string
5. Replace `MONGODB_URI` in your `.env` file

##### 🤖 **OpenRouter API** (FREE tier available)
1. Go to https://openrouter.ai/
2. Sign up for an account
3. Go to API Keys section
4. Create a new API key
5. Replace `OPENROUTER_API_KEY` in your `.env` file

---

### Running the Application

#### Method 1: Run Both Servers Together (Recommended)
```bash
# This starts both frontend and backend servers
npm run dev
```

#### Method 2: Run Servers Separately
```bash
# Terminal 1 - Start the backend server
npm run dev:backend

# Terminal 2 - Start the frontend server  
npm run dev:frontend
```

#### Method 3: Individual Commands
```bash
# Backend only (API server on port 3001)
npx tsx backend/server.ts

# Frontend only (Website on port 5173)
npx vite
```

### 🎉 Success! Your App is Running

Once started, you'll see:
```
✅ Backend server running on http://localhost:3001
✅ Frontend server running on http://localhost:5173
✅ Connected to MongoDB
```

Open your browser and go to: **http://localhost:5173**

---

## 📱 Usage Guide

### For Regular Users

#### 1. **First Time Setup**
- Open http://localhost:5173
- Click "Register" 
- Fill in your details
- Choose your preferred language

#### 2. **Using the Chat**
- Click on "Start Conversation"
- **Type your problem** OR **click the microphone** and speak
- Wait for AI response (it will also speak back to you!)
- Ask follow-up questions if needed

#### 3. **Generating Documents**
- After explaining your problem
- Click on document type you need:
  - 📄 Wage Complaint
  - 🏛️ RTI Application  
  - 🛒 Consumer Complaint
  - 🏠 Tenancy Dispute
- Download the generated document

#### 4. **Finding Help**
- Go to "NGO Directory"
- Search by location or problem type
- Get contact details of organizations that can help

### For Developers

#### 🔧 **Development Commands**
```bash
# Install dependencies
npm install

# Start development servers
npm run dev

# Build for production
npm run build

# Run linting (code quality check)
npm run lint

# Preview production build
npm run preview
```

#### 🗂️ **Key Development Files**
```
src/
├── components/     # UI components
├── pages/         # Main pages
├── hooks/         # Custom React hooks
├── store/         # State management
└── utils/         # Utility functions

backend/
├── routes/        # API endpoints
├── models/        # Database models
├── middleware/    # Authentication, etc.
└── services/      # External services
```

---

## 🔌 API Documentation

### Authentication Endpoints
```
POST /api/auth/register    # Create new account
POST /api/auth/login       # Login to account
GET  /api/auth/profile     # Get user profile
PUT  /api/auth/profile     # Update profile
PATCH /api/auth/language   # Change language
POST /api/auth/logout      # Logout
```

### Conversation Endpoints
```
POST /api/conversation/send       # Send message to AI
GET  /api/conversation/history    # Get chat history
POST /api/conversation/audio      # Send voice message
```

### Document Generation
```
POST /api/documents/generate      # Generate legal document
GET  /api/documents/templates     # Get document templates
GET  /api/documents/:id           # Download document
```

### NGO Directory
```
GET /api/ngo                      # Get all NGOs
GET /api/ngo/search              # Search NGOs
GET /api/ngo/:id                 # Get specific NGO
```

---

## 📁 File Structure

```
📦 NyaySathi/
├── 📁 backend/                  # Server-side code
│   ├── 📁 data/                # Sample data
│   ├── 📁 middleware/          # Authentication, security
│   ├── 📁 models/              # Database schemas
│   ├── 📁 routes/              # API endpoints
│   ├── 📁 services/            # External services
│   └── 📄 server.ts            # Main server file
├── 📁 src/                     # Frontend code
│   ├── 📁 components/          # UI components
│   │   ├── 📄 Header.tsx       # Navigation bar
│   │   └── 📄 ProtectedRoute.tsx # Route protection
│   ├── 📁 contexts/            # React contexts
│   │   └── 📄 AuthContext.tsx  # User authentication
│   ├── 📁 hooks/               # Custom hooks
│   │   └── 📄 useVoice.ts      # Voice functionality
│   ├── 📁 pages/               # Main pages
│   │   ├── 📄 Home.tsx         # Landing page
│   │   ├── 📄 Conversation.tsx # Chat interface
│   │   ├── 📄 DocumentView.tsx # Document viewer
│   │   ├── 📄 NGODirectory.tsx # NGO listings
│   │   └── 📄 AdminDashboard.tsx # Admin panel
│   ├── 📁 store/               # State management
│   │   └── 📄 languageStore.ts # Language settings
│   ├── 📁 utils/               # Utilities
│   │   └── 📄 languages.ts     # Language content
│   ├── 📄 App.tsx              # Main app component
│   └── 📄 main.tsx             # Entry point
├── 📄 package.json             # Project dependencies
├── 📄 vite.config.ts           # Build configuration
├── 📄 tailwind.config.js       # Styling configuration
├── 📄 tsconfig.json            # TypeScript configuration
├── 📄 .env                     # Environment variables
└── 📄 README.md                # This file!
```

---

## 🤝 Contributing

We welcome contributions from everyone! Here's how you can help:

### 🐛 **Report Bugs**
1. Go to [Issues](https://github.com/Priyanshu07190/NyaySathi/issues)
2. Click "New Issue"
3. Describe the problem clearly
4. Include steps to reproduce

### 💡 **Suggest Features**
1. Open a new issue with "Feature Request" label
2. Explain what you'd like to see
3. Describe how it would help users

### 🔧 **Code Contributions**
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### 🌍 **Add New Languages**
1. Edit `src/utils/languages.ts`
2. Add translations for your language
3. Update language selector in components
4. Test with voice features

---

## 🛠️ Troubleshooting

### Common Issues and Solutions

#### 🚨 **"Command not found: npm"**
- **Problem**: Node.js not installed
- **Solution**: Download and install from https://nodejs.org/

#### 🚨 **"Port 3001 already in use"**
- **Problem**: Another app is using the port
- **Solution**: 
  ```bash
  # Windows
  netstat -ano | findstr :3001
  taskkill /F /PID [PID_NUMBER]
  
  # Mac/Linux  
  lsof -ti:3001 | xargs kill -9
  ```

#### 🚨 **"MongoDB connection failed"**
- **Problem**: Database connection issue
- **Solutions**:
  1. Check your `MONGODB_URI` in `.env` file
  2. Ensure MongoDB cluster is running
  3. Check your internet connection
  4. Verify database credentials

#### 🚨 **"Voice features not working"**
- **Problem**: Browser doesn't support voice
- **Solutions**:
  1. Use Chrome, Edge, or Safari (latest versions)
  2. Allow microphone permissions
  3. Use HTTPS in production (localhost works for development)

#### 🚨 **"AI responses not working"**
- **Problem**: OpenRouter API issue
- **Solutions**:
  1. Check `OPENROUTER_API_KEY` in `.env`
  2. Verify API key is valid
  3. Check internet connection
  4. Ensure you have API credits

#### 🚨 **"Frontend shows blank page"**
- **Problem**: Build or runtime error
- **Solutions**:
  1. Check browser console for errors (F12)
  2. Restart development server
  3. Clear browser cache
  4. Check all dependencies are installed

#### 🚨 **"Permission denied errors"**
- **Problem**: File/folder permissions
- **Solutions**:
  ```bash
  # Mac/Linux - fix permissions
  sudo chown -R $USER:$USER ./
  chmod -R 755 ./
  
  # Or run with sudo
  sudo npm install
  ```

### 📞 **Getting Help**

If you're still stuck:

1. **Check the Issues**: https://github.com/Priyanshu07190/NyaySathi/issues
2. **Create a New Issue**: Include error messages and steps you tried
3. **Contact the Team**: Provide detailed description of the problem

### 🔍 **Debug Mode**

Enable detailed logging:
```bash
# In your .env file, add:
NODE_ENV=development
DEBUG=true

# Run with debug output:
DEBUG=* npm run dev:backend
```

---

## 📊 System Requirements

### Minimum Requirements
- **RAM**: 4GB
- **Storage**: 1GB free space
- **Internet**: Broadband connection
- **Browser**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+

### Recommended
- **RAM**: 8GB or more
- **Storage**: 2GB free space
- **Internet**: Stable broadband
- **Browser**: Latest version of Chrome or Edge

---

## 🚀 Deployment

### Production Deployment

#### 1. **Build the Application**
```bash
npm run build
```

#### 2. **Environment Setup**
Update your `.env` file for production:
```bash
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
OPENROUTER_API_KEY=your-production-api-key
JWT_SECRET=your-strong-production-secret
```

#### 3. **Deploy Options**

##### **Option A: Vercel (Recommended for Frontend)**
```bash
npm install -g vercel
vercel --prod
```

##### **Option B: Heroku (Full-stack)**
```bash
# Install Heroku CLI first
heroku create nyaysathi-app
git push heroku main
```

##### **Option C: Digital Ocean/AWS/Azure**
- Use Docker for containerized deployment
- Set up MongoDB Atlas for database
- Configure environment variables

---

## 📈 Performance Optimization

### Frontend Optimization
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Use WebP format
- **Caching**: Browser caching enabled
- **Compression**: Gzip compression in production

### Backend Optimization
- **Database Indexing**: Implemented for search queries
- **Rate Limiting**: Prevents API abuse
- **Caching**: Redis for frequent queries (optional)
- **Load Balancing**: For high traffic (advanced)

---

## 🔒 Security Features

### User Security
- **Password Hashing**: bcrypt with salt
- **JWT Tokens**: Secure authentication
- **Rate Limiting**: Prevents brute force attacks
- **Data Validation**: Input sanitization

### API Security
- **CORS Protection**: Configured origins
- **Helmet.js**: Security headers
- **Environment Variables**: Sensitive data protection
- **HTTPS**: Required for production

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Free to use** for personal and commercial projects
- ✅ **Modify** the code as needed
- ✅ **Distribute** copies
- ✅ **Private use** allowed
- ❗ **Include license** notice in copies
- ❗ **No warranty** provided

---

## 🙏 Acknowledgments

### Special Thanks To:
- **OpenRouter** - For AI language model access
- **MongoDB** - For database services
- **Vercel** - For hosting platform
- **React Team** - For the amazing framework
- **Open Source Community** - For all the tools and libraries

### Inspiration
This project is dedicated to making legal assistance accessible to everyone, regardless of their economic background, location, or language preference.

---

## 📞 Contact & Support

### 👥 **Team**
- **Lead Developer**: Priyanshu Bhargav
- **Project**: NyaySathi (Justice Companion)
- **GitHub**: https://github.com/Priyanshu07190/NyaySathi

### 🐛 **Report Issues**
- **GitHub Issues**: https://github.com/Priyanshu07190/NyaySathi/issues
- **Bug Reports**: Include steps to reproduce
- **Feature Requests**: Explain the use case

### 💬 **Community**
- **Discussions**: GitHub Discussions tab
- **Updates**: Watch the repository for updates
- **Contributions**: All skill levels welcome!

---

## 🌟 Star This Project

If NyaySathi helped you or your community, please give it a ⭐ on GitHub! It helps others discover this project and motivates us to keep improving.

---

<div align="center">

**Made with ❤️ for Justice and Accessibility**

*Empowering every citizen with the power of AI and legal knowledge*

[![GitHub stars](https://img.shields.io/github/stars/Priyanshu07190/NyaySathi?style=social)](https://github.com/Priyanshu07190/NyaySathi/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Priyanshu07190/NyaySathi?style=social)](https://github.com/Priyanshu07190/NyaySathi/network)

---

**"Justice delayed is justice denied, but with NyaySathi, justice is just a conversation away."**

</div>