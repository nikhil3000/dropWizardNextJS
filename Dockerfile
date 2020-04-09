FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/nikhil3000/dropWizardNextJS

FROM maven:3.5-jdk-8-alpine as dropwizard
WORKDIR /app/dropWizardTutorial
COPY --from=clone /app/dropWizardNextJS/dropWizardTutorial /app/dropWizardTutorial
RUN ls /app/dropWizardTutorial
RUN mvn package
EXPOSE 8080
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar target/dropWizardTutorial-1.0-SNAPSHOT.jar server config.yml"]

# FROM node:10
# WORKDIR /app/nextFrontEnd
# COPY --from=clone /app/dropWizardNextJS/nextFrontEnd /app/nextFrontEnd
# RUN npm install
# EXPOSE 3000
# CMD ["npm dev"]




