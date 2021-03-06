# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

LABEL io.k8s.display-name="app name" \
      io.k8s.description="container description..." \
      io.openshift.expose-services="8080:http"

<<<<<<< HEAD
EXPOSE 8080
=======
EXPOSE 4200
>>>>>>> 98dcb71a099cd4c86d7c94a78028449c9b0cfb92

# Do not run as root user
RUN chown -R www-data:www-data /app
USER www-data

# start app
<<<<<<< HEAD
CMD ng serve --host 0.0.0.0
=======
CMD ng serve --host 0.0.0.0 --disable-host-check
>>>>>>> 98dcb71a099cd4c86d7c94a78028449c9b0cfb92
