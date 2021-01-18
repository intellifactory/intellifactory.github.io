param(
    [switch] $buildOnly
)

# Initialize the submodules
git submodule update --init --recursive

# Install npm packages
pushd src\Hosted
npm install
popd

if (!$buildOnly) {
    # Install local dotnet-serve
    dotnet tool install dotnet-serve --tool-path .tools
}
