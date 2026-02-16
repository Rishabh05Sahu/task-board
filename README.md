# 🗂 Task Board – Full Stack Developer Assignment

A minimal full-stack Task Board application built using Next.js (App Router), TypeScript, Prisma ORM, and PostgreSQL.

The application allows users to sign up, log in, create tasks, and update task statuses. The focus of this project is clean implementation, secure authentication, proper relational database design, and clear full-stack fundamentals.

---

# 🚀 Tech Stack Used

## Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for subtle animations)

## Backend
- Next.js API Routes
- JWT Authentication
- bcrypt (secure password hashing)
- Zod (input validation)

## Database
- PostgreSQL (Neon Cloud)
- Prisma ORM

---

# 🔐 Authentication Flow

Authentication is implemented using JWT and httpOnly cookies for security.

## Signup Flow
1. User submits email and password.
2. Password is validated:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one number
   - At least one special character
3. Password is hashed using bcrypt.
4. User record is stored in PostgreSQL.

## Login Flow
1. User submits email and password.
2. Server verifies user exists.
3. Password is compared using bcrypt.compare().
4. If valid, a JWT token is generated containing the userId.
5. JWT is stored in an httpOnly cookie.
6. User is redirected to dashboard.

## Route Protection
- Middleware checks for a valid JWT token.
- If token is missing or invalid → redirect to /login.
- Tasks are always filtered by userId to ensure users can only access their own tasks.

## Security Considerations
- Passwords are never stored in plain text.
- JWT stored in httpOnly cookie.
- Server-side validation using Zod.
- Relational database constraints ensure proper ownership.

---

# 🗄 Database Schema Explanation

The application uses a relational database with a one-to-many relationship between User and Task.

One user can have multiple tasks.
Each task belongs to exactly one user.

---

## User Model

| Field      | Type     | Description |
|------------|----------|-------------|
| id         | String   | UUID (Primary Key) |
| email      | String   | Unique user email |
| password   | String   | Hashed password |
| createdAt  | DateTime | Auto timestamp |
| tasks      | Task[]   | Relation to Task |

---

## Task Model

| Field      | Type        | Description |
|------------|-------------|-------------|
| id         | String      | UUID (Primary Key) |
| title      | String      | Task title |
| status     | Enum        | TODO / IN_PROGRESS / DONE |
| userId     | String      | Foreign key referencing User.id |
| createdAt  | DateTime    | Auto timestamp |

---

## Schema Relationship Diagram

User
├── id (PK)
├── email (unique)
├── password (hashed)
├── createdAt
└── tasks → Task[]

Task
├── id (PK)
├── title
├── status (Enum)
├── userId (FK → User.id)
└── createdAt

# 🛠 Steps to Run the Project Locally

Follow the steps below to set up and run the project on your local machine.

---

## 1️⃣ Clone the Repository

Open your terminal and run:

git clone <https://github.com/Rishabh05Sahu/task-board>
cd task-board

## 2️⃣ Install Dependencies

Install all required packages: npm i 

 ## 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory of the project.

Add the following variables:

DATABASE_URL="postgresql://neondb_owner:npg_UIxmyo1tjz3l@ep-mute-night-aiufec9b-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

JWT_SECRET="supersecretkey"


## 4️⃣ Run Prisma Migration

Run the following command to create the database tables:

npx prisma migrate dev


This will:
- Create the required tables (User and Task)
- Apply migrations
- Generate Prisma Client

---

## 5️⃣ Start the Development Server

Run: npm run dev