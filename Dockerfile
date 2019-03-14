FROM node:8.12-alpine

COPY . /video-player
WORKDIR /video-player
CMD ["npm", "start"]
