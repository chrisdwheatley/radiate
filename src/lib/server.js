const chalk = require('chalk')
const compression = require('compression')
const express = require('express')
const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')

const app = express()
const staticsPath = __dirname + '/../../build/'
const authCode = process.env.AUTH
const port = process.env.PORT || 3000

const errorMessages = {
  noAuth: {
    warning: 'WARNING: You haven\'t set an authorization code, this means anyone could post data to your server.',
    error: 'Authorization code not present, please add \'?auth=<your-auth-code-here>\' to the end of your url.'
  },
  incorrectAuth: 'Incorrect authorization code supplied.',
  jsonParse: 'Failed to parse your JSON input, please check the format.'
}

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require("webpack-dev-middleware")
  const webpack = require("webpack")
  const config = require('../../webpack.config')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    stats: {
      colors: true
    },
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.use(favicon(__dirname + '/../../favicon.ico'))
app.use(compression())

if (!authCode) {
  console.warn(chalk.red.bold(errorMessages.noAuth.warning))
}

app.use(express.static(path.join(staticsPath)))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../../index.html'))
})

app.post('/data/:filename', (req, res) => {
  if (!req.query.auth && authCode) {
    return res.status(401).send({
      error: errorMessages.noAuth.error
    })
  }

  if (authCode && req.query.auth !== authCode) {
    return res.status(401).send({
      error: errorMessages.incorrectAuth
    })
  }

  const filename = req.params.filename
  let body = ''
  const filePath = path.join(staticsPath + filename)

  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    try {
      JSON.parse(body)
    } catch (error) {
      return res.status(400).send({
        error: errorMessages.jsonParse
      })
    }

    fs.writeFile(filePath, body, function() {
      return res.status(200).send({
        success: 'Data sent successfully.'
      })
    })
  })
})

const server = app.listen(port, () => {
  console.log(chalk.green(`Radiate listening on port ${port}.`))
})

module.exports = server
