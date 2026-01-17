# Use the official nginx image as a base
FROM nginx:alpine

# Copy your local static content into the default NGINX web root directory
COPY index.html /usr/share/nginx/html/
