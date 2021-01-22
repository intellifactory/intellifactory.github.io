param(
    [switch] $buildOnly
)

# Initialize git submodules
git submodule update --init --recursive

# Install npm packages
pushd src\Hosted
npm install
npx grunt
popd

if (!$buildOnly) {
    # Install local dotnet-serve
    dotnet tool install dotnet-serve --tool-path .tools
}
