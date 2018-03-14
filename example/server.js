const express = require('express')
const app = express()
const multer = require('multer')
const morgan = require('morgan')
const upload = multer({ dest: 'uploads/' })

app.use(morgan('tiny'))
app.post('/image', upload.single('file'), (req, res) => {
  console.log(req.file, req.body)
  res.json({ message: 'hello' })
})
app.listen(3232, () => console.log('Example app listening on port 3232!'))