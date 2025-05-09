pushd src\Hosted
rm -rf node_modules
popd

docker build -t website .
docker run -p 56001:56001 website