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
* Use `upgrade` for either upgrading or downgrading current version.

    `yarn upgrade <package>@<version>`

### List version information for all package dependencies.
* `yarn outdated`

### Upgrade a package to latest version
* To upgrade to the latest package version, omit `@<version>`.

    `yarn upgrade <package>`

### Install all dependencies
* `yarn install`

### Clear local cache
* `yarn cache clean`

### Run scripts
* `yarn run`
* `yarn run <script>`

### Install a package globally
* `yarn global add <package>`
