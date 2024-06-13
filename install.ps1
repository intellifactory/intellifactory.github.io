param(
    [switch] $buildOnly
)

echo "Copy legal files"

xcopy .\legal\site-docs\intellifactory.com\* .\src\Hosted\legal\ /s /e

echo "Copy blog posts files"

xcopy .\blogs\user\* .\src\Hosted\posts\ /s /e

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
