FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

COPY entrypoint.sh .

#For testing
# RUN chmod +x entrypoint.sh
# CMD ["./entrypoint.sh"]

CMD ["npm","run","dev:docker"]