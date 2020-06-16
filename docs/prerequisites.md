# Prerequesites

## Node

Node.js is a JavaScript runtime, so it basically allows you to run JS (outside of the browser)

## NPM

NPM is the Node Package Manager and as it's name suggests, enables you to use third-party packages.

Your npm dependencies are specified in the file `package.json`

### Generating package.json

You could write the package.json file by hand, but it's more convenient to generate it using the `npm init` command.
You'll be asked several questions like your projects description etc. and at the end you'll get a `package.json` that looks something like this:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "This is my app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Michael König",
  "license": "ISC"
}
```

### Installing new dependencies

You can install dependencies using the `npm install <package name>` command.

The package will then be added as a dependency to the package.json file (under the key "dependencies") and it will also be downloaded into the node_modules folder.

To install a package and add it as a "devDependency" to your package.json (instead of a normal "dependency), run `npm install --dev <package name>`.

Theoretically, you could install all your dependencies as normal dependencies and not use dev-dependencies at all, but it's good practice to list packages, that are only necessary for development but not production (i.e. testing frameworks, code linters, code formatters), as dev-dependencies.

### Installing dependencies listed in package.json

To install the dependencies listed in the package.json file, you can simply run `npm install`.

To install normal and dev dependencies, run `npm install --dev`

### NPM scripts
You can create scripts in your `package.json` file:
```json
{
 ...
  "scripts": {
    "start": "node index.js"
  },
...
}
```

This script can be run using `npm run start` and it simply executes the file `index.js` using Node.js.

## Modern Javascript