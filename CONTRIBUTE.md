## MANUAL INSTALLATION
- Install nodejs locally
- Clone the repo
- Intsall dependecies
- Start the db locally
   - using docker:- docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   - get a db on neon.tech
- Change the .env file and update the db credentials
- npx prisma migrate
- npx prisma generate
- npm run build 
- npm run start


## DOCKER INSTALLATION
- install docker, docker desktop locally
- create a volume to keep the DB in sync:-
     ```docker volume create <your_volume_name>```
- create a network to connect different containers
    ```docker network create <your_network_name>```
- run the command:-
    ```docker run --name my_postgres -p 5432:5432 -v <your_volume_name>:/var/lib/postgresql/data```

- after above run this command:-
    ```docker run -p 3000:3000 --name my_backend --network <your_network_name>```


## DOCKER COMPOSE INSTALLATION