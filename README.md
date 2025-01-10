# Proyecto para Desarrollo de Aplicaciones Web: Aplicación Full Stack con React y una API REST para Gestión de Cursos

Este proyecto es una aplicación web full stack diseñada para la gestión de cursos. Consiste en un cliente construido con React y una API REST implementada con Node.js, Express y Sequelize. La aplicación permite a los usuarios:

- Registrarse como nuevos usuarios.
- Iniciar sesión.
- Consultar una lista de cursos disponibles.
- Crear nuevos cursos (si están autenticados).
- Actualizar sus propios cursos (si están autorizados).
- Eliminar sus propios cursos (si están autorizados).

La interfaz del usuario y las funcionalidades están diseñadas de acuerdo con los mockups proporcionados en las carpetas `/mockups` y `/markup`.

## Funcionalidades y Explicación del Código

La aplicación se divide en dos partes principales: **cliente** y **servidor**.

### Cliente

El cliente, construido con React, utiliza React Router para manejar la navegación y Context API para gestionar el estado global del usuario autenticado. Algunas características clave incluyen:

- **Autenticación**: Los usuarios pueden registrarse e iniciar sesión. Una vez autenticados, su estado se almacena en un contexto global para facilitar la autenticación en las demás rutas.
- **Gestión de cursos**: Los usuarios pueden ver todos los cursos disponibles. Si están autenticados, pueden crear, actualizar o eliminar cursos.
- **Componentización**: La interfaz está dividida en componentes reutilizables, como formularios, botones y listas de cursos.

### Servidor

El servidor es una API REST construida con Node.js y Express. Utiliza SQLite como base de datos y Sequelize como ORM para facilitar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en los cursos y usuarios. Algunas funcionalidades importantes son:

- **Autenticación y Autorización**: Implementadas con middleware para asegurar que solo los usuarios autorizados puedan modificar sus propios cursos.
- **Gestión de Errores**: Manejo global de errores para devolver mensajes claros al cliente en caso de errores de validación o autenticación.
- **Persistencia de Datos**: Sequelize se utiliza para definir y manipular los modelos de `Usuario` y `Curso`, garantizando integridad y seguridad en las operaciones con la base de datos.

### Flujo de Trabajo

1. Los usuarios interactúan con la interfaz React en el navegador.
2. Las solicitudes (como iniciar sesión o crear un curso) se envían al servidor Express a través de rutas definidas en la API.
3. El servidor procesa las solicitudes, interactúa con la base de datos SQLite y devuelve la respuesta adecuada al cliente.

## Tecnologías Utilizadas

- **Frontend**: React (React Router, Hooks, Context API).
- **Backend**: Node.js, Express.
- **Base de Datos**: SQLite con ORM Sequelize.
- **Autenticación**: Implementada con autenticación básica y tokens.
- **Testing**: Postman para probar la API.
- **Estilo**: CSS para personalización de la interfaz.

## Pasos a Ejecutar

### Descargar

Haz clic en el botón "Code" y selecciona "Clonar" o "Descargar ZIP".

### Instalación y Ejecución

1. Descomprime el archivo ZIP si descargaste el proyecto como tal.
2. Abre la carpeta del proyecto en la terminal.
3. Instala las dependencias en las carpetas `api` y `client` ejecutando el comando `npm install`.
4. Inicializa la base de datos con datos de ejemplo ejecutando `npm run seed` en la carpeta `api`.
5. Inicia el servidor de la API y el cliente con `npm start`.
6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para interactuar con la aplicación.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm install`

Instala y actualiza las dependencias del proyecto.

### `npm run seed`

Inicializa la base de datos con datos de ejemplo.

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

---

¡Explora, prueba y personaliza esta aplicación para adaptarla a tus necesidades!