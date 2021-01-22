#!/bin/bash

# Install npm packages
pushd src/Hosted
npm install
popd

if ["{$1^^}" -eq "--BUILDONLY"] {
    # Install local dotnet-serve
    dotnet tool install dotnet-serve --tool-path .tools
}
