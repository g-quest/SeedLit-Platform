# SeedLit

#### Add the following to your hosts file:

```bash
sudo vim /etc/hosts
  127.0.0.1 api
```

#### Run all services:

```bash
docker compose up
```

#### To start just the Postgres and API containers:

```bash
docker compose up postgres api
```

#### Additionally, if you want to run the client separately:

```bash
cd services/client
npm install
npm run dev
```

#### Services should be accessable here

Client: http://localhost:3000
API: http://localhost:3001
API Docs: http://localhost:3001/docs

#### To remove all containers, images, volumes, and client build when necessary:

```bash
docker container rm -f $(docker container ls -qa --filter "label=project=seedlit"); docker image rm -f $(docker image ls -q --filter "label=project=seedlit"); docker volume rm $(docker volume ls -q --filter "label=project=seedlit"); rm -rf ./services/client/.next
```
