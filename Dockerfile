FROM mcr.microsoft.com/dotnet/sdk:3.1

# Update environment
RUN apt-get update

# Install npm
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

# Create working directory
RUN mkdir /website

# Copy content under /website from the root of the repo
COPY . /website

WORKDIR /website

# Exposing port used by the serve.sh
EXPOSE 56001

# Install, build and serve
CMD bash -c "./install.sh && ./build.sh && ls -a && ./serve.sh"