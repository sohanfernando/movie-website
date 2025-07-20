# MovieHub - Movie Website Project

A modern, responsive movie website built with React frontend and Spring Boot backend, featuring user authentication, movie management, and a beautiful dark theme UI.

## 🚀 Recent Improvements

### Security Enhancements
- ✅ **Secure File Upload**: Added file type validation, size limits, and filename sanitization
- ✅ **Input Validation**: Comprehensive validation on all API endpoints
- ✅ **Custom Exception Handling**: Proper error responses with structured error messages
- ✅ **Environment Configuration**: Externalized configuration with environment variables
- ✅ **CORS Security**: Properly configured cross-origin resource sharing

### Code Quality Improvements
- ✅ **Global Exception Handler**: Centralized error handling with proper HTTP status codes
- ✅ **API Documentation**: Added Swagger/OpenAPI documentation
- ✅ **Toast Notifications**: Replaced alert() calls with modern toast notifications
- ✅ **Centralized API Service**: Improved error handling and request interceptors
- ✅ **Removed Debug Code**: Cleaned up console.log statements and debug code

## 🎬 Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with perfect mobile responsiveness
- **Dark Theme UI**: Modern dark theme with orange accents
- **User Authentication**: Login/Signup for users and admin
- **Movie Browsing**: Browse all movies with search and filters
- **Movie Details**: Detailed movie information pages
- **Admin Dashboard**: Movie management (CRUD operations)
- **Toast Notifications**: Modern notification system
- **Error Handling**: Comprehensive error handling with user-friendly messages

### Backend (Spring Boot)
- **RESTful API**: Complete REST API for movie management
- **Input Validation**: Comprehensive validation with custom error messages
- **Secure File Upload**: File type validation and size limits
- **User Management**: User registration, login, and authentication
- **Admin System**: Admin registration and authentication
- **Global Exception Handling**: Structured error responses
- **API Documentation**: Swagger/OpenAPI documentation
- **Database**: MySQL/PostgreSQL database integration
- **Environment Configuration**: Externalized configuration

## 🚀 Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management for notifications

### Backend
- **Spring Boot 3** - Java framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **Spring Validation** - Input validation
- **MySQL/PostgreSQL** - Database
- **Maven** - Build tool and dependency management
- **SpringDoc OpenAPI** - API documentation

## 📁 Project Structure

```
movie-project/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── utils/          # Utility functions
│   │   └── main.jsx        # App entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/java/com/example/moviewebsite/
│   │   │   ├── controller/ # REST controllers
│   │   │   ├── service/    # Business logic
│   │   │   ├── repository/ # Data access
│   │   │   ├── model/      # Entity classes
│   │   │   ├── exception/  # Custom exceptions
│   │   │   └── config/     # Configuration classes
│   │   └── resources/
│   │       └── application.properties
│   ├── pom.xml
│   └── .env.example
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- **Java 21** or higher
- **Node.js 18** or higher
- **MySQL 8** or higher
- **Maven 3.6** or higher

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-project/backend
   ```

2. **Database Setup**
   ```sql
   CREATE DATABASE movieDB;
   CREATE USER 'movieuser'@'localhost' IDENTIFIED BY 'secure_password';
   GRANT ALL PRIVILEGES ON movieDB.* TO 'movieuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env file with your database credentials
   ```

4. **Install Dependencies and Run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will start at `http://localhost:8080`

5. **API Documentation**
   Visit `http://localhost:8080/swagger-ui.html` for interactive API documentation

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

   The frontend will start at `http://localhost:5173`

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
DB_URL=jdbc:mysql://localhost:3306/movieDB
DB_USERNAME=movieuser
DB_PASSWORD=your_secure_password

# Security Configuration
JWT_SECRET=your_very_long_and_secure_jwt_secret_key_here
JWT_EXPIRATION=86400000

# File Upload Configuration
MAX_FILE_SIZE=10MB
UPLOAD_DIR=uploads

# CORS Configuration
CORS_ORIGINS=http://localhost:5173,http://localhost:5174
```

## 🔒 Security Features

### File Upload Security
- File type validation (only images allowed)
- File size limits (configurable)
- Filename sanitization
- Path traversal protection

### Input Validation
- Email format validation
- Password strength requirements
- Movie data validation
- Custom validation messages

### Error Handling
- Structured error responses
- No sensitive information leakage
- Proper HTTP status codes
- Validation error details

## 📚 API Endpoints

### Authentication
- `POST /users/signup` - User registration
- `POST /users/login` - User login
- `POST /admins/admin-signup` - Admin registration
- `POST /admins/admin-login` - Admin login

### Movies
- `GET /movies` - Get all movies
- `GET /movies/{name}` - Get movie by name
- `GET /movies/id/{id}` - Get movie by ID
- `POST /movies` - Create movie (Admin)
- `PUT /movies/{id}` - Update movie (Admin)
- `DELETE /movies/{id}` - Delete movie (Admin)

### File Upload
- `POST /upload` - Upload movie cover image

## 🧪 Testing

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 🚀 Deployment

### Production Environment Variables
```env
DB_URL=jdbc:mysql://your-production-db:3306/movieDB
DB_USERNAME=your_prod_user
DB_PASSWORD=your_very_secure_password
JWT_SECRET=your_production_jwt_secret_key_minimum_256_bits
LOG_LEVEL=WARN
SHOW_SQL=false
DDL_AUTO=validate
```

### Docker Deployment (Optional)
```dockerfile
# Dockerfile for backend
FROM openjdk:21-jre-slim
COPY target/movie-website-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔍 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL service is running
   - Verify database credentials in .env file
   - Ensure database exists

2. **File Upload Issues**
   - Check upload directory permissions
   - Verify file size limits
   - Ensure allowed file types

3. **CORS Issues**
   - Verify CORS_ORIGINS environment variable
   - Check frontend URL matches CORS configuration

4. **Build Issues**
   - Ensure Java 21 is installed
   - Run `mvn clean install` to resolve dependencies
   - Check for port conflicts (8080, 5173)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the API documentation at `/swagger-ui.html`
- Review the troubleshooting section above

---

**Note**: This application includes significant security improvements and is much closer to production-ready than the original version. However, for production deployment, consider additional security measures such as JWT authentication, rate limiting, and comprehensive logging. 