#!/bin/bash

echo "Running dotnet build"

if [[ $(echo "$2" | awk '{print toupper($0)}') = "-PROJECT" ]];
then
    if [[ $(echo "$3" | awk '{print toupper($0)}') = "CLIENT" ]] || [[ $(echo "$3" | awk '{print toupper($0)}') = "WEBSITE" ]] || [[ $(echo "$3" | awk '{print toupper($0)}') = "HOSTED" ]];
    then
        if [[ $(echo "$1" | awk '{print toupper($0)}') = "-DEB" ]];
        then
            dotnet build "src/$3/$3.fsproj" --no-incremental -c Debug -v normal
        else
            dotnet build "src/$3/$3.fsproj" --no-incremental -v normal
        fi
    else
        >&2 echo "Incorrect project name"
        exit 1
    fi
else
    if [[ $(echo "$1" | awk '{print toupper($0)}') = "-PROJECT" ]];
    then
        if [[ $(echo "$2" | awk '{print toupper($0)}') = "CLIENT" ]] || [[ $(echo "$2" | awk '{print toupper($0)}') = "WEBSITE" ]] || [[ $(echo "$2" | awk '{print toupper($0)}') = "HOSTED" ]];
        then
            dotnet build "src/$2/$2.fsproj" --no-incremental -v normal
        else
            >&2 echo "Incorrect project name"
            exit 1
        fi
    else
        if [[ $(echo "$1" | awk '{print toupper($0)}') = "-DEB" ]];
        then
            dotnet build SiteFi.sln --no-incremental -c Debug -v normal
        else
            dotnet build SiteFi.sln --no-incremental -v normal
        fi
    fi
fi


