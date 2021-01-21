echo "Copy legal files"

xcopy .\legal\site-docs\intellifactory.com\* .\src\Hosted\legal\ /s /e /y

echo "Copy blog posts files"

xcopy .\blogs\user\* .\src\Hosted\posts\ /s /e /y

echo "Running npm install" 

pushd src/Hosted
npm install
popd

echo "Running dotnet build"

$mode=$args[0]
echo "Param $mode"
if ($mode -ieq "debug") {
    echo "Running build in Debug mode..."
    dotnet build SiteFi.sln -c Debug
} else {
    echo "Running build in Release mode..."
    dotnet build SiteFi.sln
}
