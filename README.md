# readifyTest1
This is a test API required for the Readify Job Application

### To run locally
Move to the ./Server folder

First run either `npm install` or `yarn`

To start the API, run `npm start`

*This will host the API locally on port 3000*

### To run locally using Docker-Compose
Before running anything, check that the two Dockerfiles are as follows
`Dockerfile` & `Dokerfile.aws` - Rename as appropriate.
Also check the first line comment for the correct version

First run `docker-compose build`

Then run `docker-compose up`

### To run on AWS(or just as docker)
Before running anything, check that the two Dockerfiles are as follows
`Dockerfile` & `Dokerfile.local` - Rename as appropriate.
Also check the first line comment for the correct verison

Just run `./rebuild.sh`
Note:  You might want to change the Docker Hub location from mine to yours