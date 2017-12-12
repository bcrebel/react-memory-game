import express from 'express'
import compression from 'compression'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import template from './template'

const clientAssets = require(KYT.ASSETS_MANIFEST) // eslint-disable-line import/no-dynamic-require
const port = parseInt(KYT.SERVER_PORT, 10)
const app = express()

// Remove annoying Express header addition.
app.disable('x-powered-by')

// Compress (gzip) assets in production.
app.use(compression())

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)))

app.get('*', (request, response) => {
  response.send(
    template({
      html: renderToString(<App />),
      manifestJSBundle: clientAssets['manifest.js'],
      mainJSBundle: clientAssets['main.js'],
      vendorJSBundle: clientAssets['vendor.js'],
      mainCSSBundle: clientAssets['main.css'],
    })
  )
})

app.listen(port, () => {
  console.log(`server started on port: ${port}`) // eslint-disable-line no-console
})
