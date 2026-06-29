# Auth App — Login & Sign Up with PostgreSQL + JWT

Stack: Node.js · Express · PostgreSQL · bcryptjs · JWT · Vanilla HTML/CSS/JS

## Setup

1. Copy `backend/.env.example` to `backend/.env` and configura tus datos de PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=auth_db
DB_USER=postgres
DB_PASSWORD=your_pgadmin_password
JWT_SECRET=un_string_largo_y_aleatorio
```

2. Instala dependencias en el proyecto raíz:

```bash
npm install
```

3. Inicializa la base de datos en PostgreSQL usando `backend/config/init.sql`.

4. Ejecuta el servidor:

```bash
npm start
```

5. Abre `index.html` directamente en el navegador o sirve la carpeta con `npx serve .`.

## API Endpoints

- POST `/api/auth/signup` — `{ username, email, password }`
- POST `/api/auth/login` — `{ identifier, password }`
- GET `/api/auth/me` — `Authorization: Bearer <token>`
