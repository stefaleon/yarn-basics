# yarn basics

&nbsp;

### Initializing a project
* `yarn init`

### Install a package and save the dependency
* `yarn add <package>`

### Install a package as a dev dependency
* `yarn add <package> --dev`

### Remove a package
* `yarn remove <package>`

### The *yarn.lock* file
* locks down the exact versions of the installed packages.

### Upgrade or downgrade a package
* By default the latest version of the package is installed.
* Use `upgrade` for either upgrading or downgrading current verion.
* `yarn upgrade <package>@<version>`

### List version information for all package dependencies.
* `yarn outdated`

### Upgrade a package to latest version
* To upgrade to the latest package version, ommit `@<version>`.
* `yarn upgrade <package>`
