import React, { PureComponent } from 'react'
import fileUpload from 'ajax-file-upload'
import PropTypes from 'prop-types'

class Camera extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.open = this.open.bind(this)
  }

  openMenu() {
    this.input.click()
  }

  fileUpload(file, endpoint) {
    const { onProgress, onLoad, onReadyStateChange } = this.props
    fileUpload({
      file,
      endpoint,
      onProgress,
      onLoad,
      onReadyStateChange
    })
  }

  onChangeHandler(e={}) {
    const target = e.target || {}
    const files = target.files
    const error = files.length < 1
    const file = error ? {} : files[0]
    const url = error ? '' : window.URL.createObjectURL(file)
    this.props.onTakePicture({ url, file, error })
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
  onTakePicture: () => {},
  onProgress: () => {},
  onReadyStateChange: () => {},
  onLoad: () => {}
}

Camera.propTypes = {
  onTakePicture: PropTypes.func,
  onProgress: PropTypes.func,
  onReadyStateChange: PropTypes.func,
  onLoad: PropTypes.func
}

export default Camera
