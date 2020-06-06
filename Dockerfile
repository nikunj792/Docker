# Using an existing docker image as a base.
FROM node

# Changes the working directory.

WORKDIR /usr/content


# Copying from current working directory to container file system

COPY ./package.json ./

# Download and install the dependency.

RUN npm install

COPY ./ ./


#Tell the image what to do when it starts as a container

CMD ["node","index.js"]