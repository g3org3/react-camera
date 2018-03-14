# Example

## Step 1
Let's create a new react application
```sh
# CRA: create-react-app
create-react-app my-app
```

## Step 2
Copy-paste the App.js provided in `example/` into `my-app/src/App.js` and replace the one created with CRA
```sh
code my-app/src/App.js
```
Lazy-way
```sh
cd my-app/src
wget https://raw.githubusercontent.com/g3org3/react-camera/master/example/App.js
```

## Step 3
Copy-paste the server.js provided in `example/` into `my-app/server.js`
```sh
cd my-app
touch server.js # create server.js
```
Lazy-way
```sh
cd my-app/
wget https://raw.githubusercontent.com/g3org3/react-camera/master/example/server.js
```

## Step 4
let's edit the package.json and add the proxy to the node server
```sh
code my-app/package.json
```
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "private": true,
  "proxy": "http://localhost:3232", <-
}
```

## Step 5
Install dependencies
```sh
yarn add express morgan multer
```

## GO!
you need 2 terminals and run the following:
```sh
yarn start
```
```sh
node server.js
```