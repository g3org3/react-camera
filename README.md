# react-easy-camera
📸 simple react camera component for mobile usage. You can take an image or select one from the gallery and then send it to the server.

## Install
```sh
npm i react-easy-camera
```

## Usage
```js
import Camera from 'react-easy-camera'
export default class App extends Component {
  render() {
    return <>
      <Camera
        ref={(camera) => { this.camera = camera }}
        onTakePictureGetUrl={this.onTakePictureGetUrl}
        onProgress={this.onProgress}
        onReadyStateChange={this.onReadyStateChange}
      />
      // ... the rest of your app
    </>
  }
}
```

## Props
| Name                | Type             | Params               | Description |
|---------------------|------------------|----------------------|-------------|
| onSelectImage       | function(params) | { url, file }        | you will receive an object param with { url, file }, use the url to render a preview image
| onProgress          | function(params) | percentage           | you will receive a number from 0 to 100 
| onReadyStateChange  | function(params) | { status, response } | you will receive status code from the server and the response text, if the server sends json it will parse it for you
| onLoad              | function(params) | event                | it is called when the image has been sent to the server

## Methods
| Name                | Type              | options        | Description  |
|---------------------|-------------------|----------------|--------------|
| openMenu            | function(options) | none           | Opens the phone image menu to either take a picture or select an image
| fileUpload          | function(options) | file, endpoint | Sends the image by a `POST` request to the server at the provided `enpoint`

## Example
[Follow Example](/example/README.md)
