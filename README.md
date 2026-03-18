# Introducci-n-al-desarrollo-de-software-

# API de Testimonios

API REST creada con Node.js y Express para gestionar testimonios en un CV.

## Tecnologías
- Node.js
- Express
- Nodemon
- CORS

## Instalación

1. Entrar a la carpeta del proyecto:
cd mi-api

2. Instalar dependencias:
npm install

## Ejecución

npm run dev:testimonials

Servidor disponible en:
http://localhost:3002

## Estructura del recurso

Testimonial:

{
  "id": 1,
  "author": "Juan Pérez",
  "role": "Frontend Developer",
  "company": "TechCorp",
  "text": "Excelente trabajo",
  "avatarUrl": "",
  "createdAt": "2026-03-18T00:00:00.000Z"
}

## Endpoints

GET /testimonials  
Obtiene todos los testimonios

Ejemplo:
http://localhost:3002/testimonials

GET /testimonials/:id  
Obtiene un testimonio por id

Ejemplo:
http://localhost:3002/testimonials/1

POST /testimonials  
Crea un nuevo testimonio

Body (JSON):
{
  "author": "Mishelle",
  "role": "Frontend Dev",
  "company": "UFM",
  "text": "Excelente trabajo",
  "avatarUrl": ""
}

Respuesta:
Status 201 Created

PATCH /testimonials/:id  
Actualiza un testimonio existente

Ejemplo:
http://localhost:3002/testimonials/1

Body (JSON):
{
  "text": "Actualizado: buen trabajo"
}

DELETE /testimonials/:id  
Elimina un testimonio

Ejemplo:
http://localhost:3002/testimonials/1

Respuesta:
{
  "message": "Testimonio eliminado",
  "testimonial": { }
}

## Notas

- Los datos se almacenan en memoria y se reinician al reiniciar el servidor
- El campo avatarUrl es opcional
- Los campos author y text son obligatorios en POST

## Testing

Se recomienda usar:
- Postman

