# Vota Fácil Perú

Aplicación de votación para Perú, desarrollada con arquitectura full-stack.

## Tecnologías Utilizadas

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.7-green?style=for-the-badge&logo=spring-boot)
![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![H2](https://img.shields.io/badge/H2-000000?style=for-the-badge&logo=h2&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-000000?style=for-the-badge&logo=lombok&logoColor=white)

- **Spring Boot 3.5.7**: Framework para el backend.
- **Java 17**: Versión de Java utilizada.
- **Maven**: Herramienta de gestión de dependencias y build.
- **Spring Data JPA**: Para persistencia de datos.
- **H2 Database**: Base de datos embebida para desarrollo.
- **Lombok**: Para reducir código boilerplate.
- **Spring Validation**: Para validación de datos.

### Frontend
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

- **React 18**: Biblioteca para la interfaz de usuario.
- **Vite**: Herramienta de build y servidor de desarrollo.
- **Tailwind CSS**: Framework CSS para estilos.
- **ESLint**: Linter para JavaScript/React.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados:

- **Java 17** o superior.
- **Maven** (o usa los wrappers incluidos: `mvnw` en Linux/Mac, `mvnw.cmd` en Windows).
- **Node.js** (versión 16 o superior) y **npm** para el frontend.

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd vota-facil-peru
   ```

2. Para el backend: Maven maneja las dependencias automáticamente.

3. Para el frontend: Ve al directorio `frontend` e instala dependencias:
   ```
   cd frontend
   npm install
   npm run dev
   ```

## Ejecución

### Backend
En la raíz del proyecto, ejecuta:
```
./mvnw clean package
./mvnw spring-boot:run
```
El backend se ejecutará en `http://localhost:8080` por defecto.

### Frontend
En el directorio `frontend`, ejecuta:
```
npm install para instalar dependencias, luego 
npm run dev para iniciar el servidor de desarrollo
```
El frontend se ejecutará en `http://localhost:5173` por defecto (Vite).

## Notas
- Asegúrate de que el backend esté corriendo antes de usar el frontend.
- Para desarrollo, usa H2 (base de datos en memoria).
- Ejecuta `npm run lint` en `frontend` para verificar código.