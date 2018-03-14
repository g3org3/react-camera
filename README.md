# react-camera

## Install
```sh
npm i @g3org3/camera-react
```

## Usage
```js
<Camera
  ref={(camera) => { this.camera = camera }}
  onTakePictureGetUrl={this.onTakePictureGetUrl}
  onProgress={this.onProgress}
  onReadyStateChange={this.onReadyStateChange}
/>
```

## Props
| Name                | Type     | Description |
|---------------------|----------|-------------|
| onTakePictureGetUrl | function |
| onProgress          | function |
| onReadyStateChange  | function |
| onLoad              | function |

## Methods
| Name                | Type     | Description  |
|---------------------|----------|--------------|
| open                | function |
| fileUpload          | function |
