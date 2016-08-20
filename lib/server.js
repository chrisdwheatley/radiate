const express = require('express')
const app = express()
const fs = require('fs')
const chalk = require('chalk')

app.use(express.static('/build'))
app.use(express.static('.'))

const authCode = process.env.AUTH
const port = process.env.PORT || 3000

const errorMessages = {
  noAuth: {
    warning: 'WARNING: You haven\'t set an authorisation code, this means anyone could post data to your server.',
    error: 'Authorisation code not present, please add \'?auth=<your-auth-code-here>\' to the end of your url.'
  },
  incorrectAuth: 'Incorrect authorisation code supplied.',
  jsonParse: 'Failed to parse your JSON input, please check the format.'
}

if (!authCode) {
  console.warn(chalk.red.bold(errorMessages.noAuth.warning))
}

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
  const filePath = `${__dirname}/../build/${filename}`

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

app.listen(port, () => {
  console.log(chalk.green(`Radiate listening on port ${port}.`))
})
