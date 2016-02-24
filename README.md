# Installation

To quickly get a node running, copy the docker-compose.yml file and run

```
docker-compose up -d
```

If it fails to run, it means you haven't created an account yet. Run this to create a wallet:

```
docker run -it --rm elysianempire/ethereum geth account new
```

Then run docker-compose again.

# Useful Commands

To build this image locally, run this:

```
docker build --build-arg PASSWORD=ethereum -t elysianempire/ethereum .
```

Delete all containers/images

```
docker rm --force `docker ps -qa`
```
