#!/bin/bash

echo "Copy legal/site-docs/if.com/ under src/Hosted/legal/"

cp -r legal/site-docs/intellifactory.com/ src/Hosted/legal/

echo "Copy blogposts under /src/Hosted/posts"

cp -r blogs/user src/Hosted/posts

echo "Installing dotnet-serve"

dotnet tool install dotnet-serve --tool-path .tools

echo "Running npm install"

pushd src/Hosted
npm install
popd

echo "Running dotnet build"

if ["{$1^^}" -eq "DEBUG"]
then
    dotnet build SiteFi.sln -c Debug
else
    dotnet build SiteFi.sln
fi

