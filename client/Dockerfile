# Multi Step Contianer

# Creating React Build
FROM node:alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# Setting up react production env using build in last step.
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html