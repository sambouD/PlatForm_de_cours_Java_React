# 🎓 Plateforme de cours en ligne

Application fullstack de gestion de cours en ligne.

## 🛠️ Stack technique

**Backend**
- Java 21
- Spring Boot 4
- Spring Security + JWT
- Spring Data JPA + Hibernate
- MySQL
- Swagger / OpenAPI

**Frontend**
- React + Vite
- JavaScript

## 📦 Lancer le projet

### Backend
```bash
cd developpement_back_end
./mvnw spring-boot:run
```

### Frontend
```bash
cd developpement_front
npm install
npm run dev
```

## 📚 Entités

- **User** → STUDENT / INSTRUCTOR
- **Course** → cours créé par un instructor
- **Chapter** → chapitres d'un cours
- **Enrollment** → inscription d'un étudiant à un cours

## 🔐 Authentification

JWT via `/api/auth/register` et `/api/auth/login`

## 📖 Documentation API
![Swagger]<img width="1267" height="820" alt="image" src="https://github.com/user-attachments/assets/429e983d-760f-4efe-8241-0794939176c0" />
<img width="1247" height="408" alt="image" src="https://github.com/user-attachments/assets/7c78c071-22a1-4422-8030-10ec6bc857e1" />


