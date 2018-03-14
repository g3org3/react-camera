# react-easy-camera

## Install
```sh
npm i react-easy-camera
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

## Example
[Follow Example](/example/README.md)