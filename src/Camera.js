import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Camera extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.open = this.open.bind(this)
  }

  open() {
    this.input.click()
  }

  parseJSON(raw) {
    try {
      return JSON.parse(raw) || {}
    } catch (e) {
      return {}
    }
  }

  fileUpload(file, endpoint) {
    const xhr = new XMLHttpRequest()
    const formdata = new FormData()

    formdata.append('file', file)
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total)
        this.props.onProgress(percentage)
      }
    }
    xhr.upload.onload = (e) => {
      this.props.onLoad(e)
    }
    
    xhr.onreadystatechange = () => {
      const { status, responseText } = xhr
      if (status) {
        const isJson = xhr.getResponseHeader('Content-Type')
          .split(';')
          .filter(line => line==='application/json')
          .length === 1
        this.props.onReadyStateChange({
          status,
          response: isJson ? this.parseJSON(responseText) : responseText
        })
      }
    }

    xhr.open('POST', endpoint)
    xhr.send(formdata)
  }

  onChangeHandler(e={}) {
    const target = e.target || {}
    const files = target.files
    console.log(files)
    const error = files.length < 1
    const file = error ? {} : files[0]
    const url = error ? '' : window.URL.createObjectURL(file)
    this.props.onTakePictureGetUrl({ url, file, error })
  }

  render() {
    return (
      <input
        ref={(i) => { this.input = i }}
        type="file"
        hidden
        style={{display: 'none'}}
        accept="image/*"
        onChange={this.onChangeHandler}
      />
    )
  }
}

Camera.defaultProps = {
  onTakePictureGetUrl: () => {},
  onProgress: () => {},
  onReadyStateChange: () => {},
  onLoad: () => {}
}

Camera.propTypes = {
  onTakePictureGetUrl: PropTypes.func,
  onProgress: PropTypes.func,
  onReadyStateChange: PropTypes.func,
  onLoad: PropTypes.func
}

export default Camera
