# Installation

To quickly get a node running, clone this repo and run:

```
docker-compose up -d
```

Then run docker-compose again.

# Useful Commands

To build this image locally, run this:

```
docker build -t elysianempire/ethereum .
```

Delete all containers/images

```
docker rm --force `docker ps -qa`
```
