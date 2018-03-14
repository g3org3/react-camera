# Example

## Step 1
```sh
# CRA: create-react-app
# let's create a new react application
create-react-app my-cool-app
```

## Step 2
```sh
# copy-paste the App.js provided in `example/`
# and replace the one created with CRA
code my-cool-app/src/App.js
```

## Step 3
```sh
cd my-cool-app
touch server.js
# copy-paste the server.js provided in `example/`
```

## Step 4
```sh
# let's edit the package.json and add the proxy to the node server
code my-cool-app/package.json
```
```json
{
  "name": "my-cool-app",
  "version": "1.0.0",
  "private": true,
  "proxy": "http://localhost:3232", <-
  . . .
}
```