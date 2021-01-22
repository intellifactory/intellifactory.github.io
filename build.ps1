Param(
    [Switch]
    $deb,
    [Parameter(Mandatory=$false)]
    [ValidateSet("client", "hosted", "website")]
    [String]
    $project
)

echo "Running dotnet build"

if ($project -ne "") {
    if ($deb) {
        echo "Running build in Debug mode..."
        dotnet build "src\$project\$project.fsproj" --no-incremental -c Debug
    } else {
        echo "Running build in Release mode..."
        dotnet build "src\$project\$project.fsproj" --no-incremental
    }
} else {
    if ($deb) {
        echo "Running build in Debug mode..."
        dotnet build SiteFi.sln --no-incremental -c Debug
    } else {
        echo "Running build in Release mode..."
        dotnet build SiteFi.sln --no-incremental
    }
}

