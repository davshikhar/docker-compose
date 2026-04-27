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
- install docker
- start postgres
- create a volume to keep the DB in sync:-
     ```docker volume create <your_volume_name>```
- no need to create a network we will use the host's network to run the containers            "--network=host"

- run the command:-
    ```docker run --name my_postgres -p 5432:5432 -v <your_volume_name>:/var/lib/postgresql postgres```

- build the image:- ```docker build --network=host -t user-project .```

- after above run this command:-
    ```docker run -p 3000:3000 user-project```


## DOCKER COMPOSE INSTALLATION
- install docker, docker-compose
- run ```docker-compose up```