docker rmi death667b/readifytest1

docker build -t readifytest1 ./Server
docker tag readifytest1 death667b/readifytest1
docker push death667b/readifytest1

yes | docker container prune
yes | docker image prune