import React, { PureComponent } from 'react'
import Camera from 'react-easy-camera'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.onTakePictureGetUrl = this.onTakePictureGetUrl.bind(this)
  }

  state = {
    btnPressed: 'false'
  }

  submitPhoto() {
    this.camera.open()
    this.setState({
      btnPressed: 'true',
    })
  }

  send() {
    this.camera.fileUpload(this.state.file, '/image')
  }


  onProgress(p) {
    console.log('>', p)
  }

  onReadyStateChange(data) {
    console.log(data)
  }

  onTakePictureGetUrl({url, file}) {
    console.log({ url, file })
    this.setState({
      src: url,
      file
    })
  }

  render() {
    const style = { border: '5px solid orange', height: '300px', width: '300px'}
    const Img = this.state.src ? <img alt="preview" style={style} src={this.state.src} /> : null
    return (
      <div className="container">
        <h1>App | {this.state.btnPressed}</h1>
        <button className="btn btn-default" onClick={() => this.submitPhoto()}>take pic</button>
        <button className="btn btn-success" onClick={() => this.send()}>SEND</button>
        <Camera
          ref={(camera) => { this.camera = camera }}
          onTakePictureGetUrl={this.onTakePictureGetUrl}
          onProgress={this.onProgress}
          onReadyStateChange={this.onReadyStateChange}
        />
        {Img}
      </div>
    )
  }
}
