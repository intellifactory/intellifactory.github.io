#!/bin/bash

# Initialize git submodules
git submodule update --init --recursive

echo "Copy legal/site-docs/if.com/ under src/Hosted/legal/"
cp -rT legal/site-docs/intellifactory.com/ src/Hosted/legal/

echo "Copy blogposts under /src/Hosted/posts"
cp -rT blogs/user src/Hosted/posts

# Install npm packages
pushd src/Hosted
npm install
npx grunt
popd

if ! [[ $(echo "$1" | awk '{print toupper($0)}') = "-BUILDONLY" ]];
then
    # Install local dotnet-serve
    dotnet tool install dotnet-serve --tool-path .tools
fi
