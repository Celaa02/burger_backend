# 🍔 Burger Station - Backend API

Este proyecto es el backend de la aplicación **Burger Station**, una app para realizar pedidos de hamburguesas de manera online. Fue construido con **NestJS**, **MySQL**, y **TypeORM**, y se conecta con un frontend desarrollado en React.

---

## 🚀 Tecnologías usadas

- [NestJS](https://nestjs.com/) - Framework principal
- [TypeORM](https://typeorm.io/) - ORM para base de datos
- [MySQL](https://www.mysql.com/) - Motor de base de datos
- [AWS RDS](https://aws.amazon.com/rds/) - Base de datos en la nube
- [JWT](https://jwt.io/) - Autenticación
- [SendGrid](https://sendgrid.com/) - Envío de correos de confirmación de pedidos
- [Render](https://render.com/) - Despliegue del backend
- [Postman](https://www.postman.com/) - Documentación y pruebas de API

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Celaa02/burger_backend.git
cd burger_backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz:

```env
DB_HOST=<host_aws_rds>
DB_PORT=3306
DB_USER=<usuario>
DB_PASS=<contraseña>
DB_NAME=<nombre_base_de_datos>
JWT_SECRET=burguer_station_user
SENDGRID_API_KEY=tu_api_key_de_sendgrid
```

4. Ejecuta el servidor (la base de datos se conecta automáticamente con RDS).

---

## 🧪 Scripts disponibles

```bash
# Correr en desarrollo
npm run start:dev

# Compilar
npm run build

# Ejecutar pruebas
npm run test
```

---

## 🔐 Autenticación

- Login y Registro vía `/auth/login` y `/auth/register`
- Se utiliza JWT para proteger las rutas.
- Enviar el token en el header `Authorization: Bearer <token>`

---

## 🧾 Endpoints principales

| Método | Ruta            | Descripción                          |
|--------|------------------|--------------------------------------|
| POST   | `/auth/register` | Registro de usuario                  |
| POST   | `/auth/login`    | Login y obtención de token JWT       |
| GET    | `/burgers`       | Listado de hamburguesas (protegido)  |
| GET    | `/burgers/:id`   | Listado por id (protegido)           |
| POST   | `/burgers`       | Crear hamburguesa (admin)            |
| GET    | `/orders`        | Historial de pedidos (protegido)     |
| POST   | `/orders`        | Crear un nuevo pedido                |

---

## 📧 Envío de correos

- Utiliza **SendGrid** para enviar confirmaciones de pedidos.
- Asegúrate de verificar tu correo en el panel de SendGrid.
- La variable `SENDGRID_API_KEY` debe estar presente en `.env`.

---

## 🧰 Herramientas adicionales

- **Postman Workspace:** colección con todos los endpoints, documentacion y ejemplos listos para pruebas.
- **Logger de datos sensibles deshabilitado en producción**.

---

## 🔗 Despliegue

**URL base de producción**:  
`https://burger-backend-bbwb.onrender.com`

---

## 🧠 Notas

- El backend está conectado con un frontend Vite + React desplegado en AWS Amplify.
- La base de datos está gestionada con AWS RDS usando MySQL.
- Los pedidos envían correo de confirmación mediante SendGrid.
- Estructura basada en Clean Architecture simplificada.

---

Made with ❤️ by [Celaa02](https://github.com/Celaa02/burger_backend)