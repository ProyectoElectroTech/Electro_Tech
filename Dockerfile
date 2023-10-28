# Usa la imagen descargada para el proyecto
FROM nginx:alpine

# Crea un directorio en el contenedor para la aplicación
WORKDIR /usr/share/nginx/html