require('dotenv').config()
const express = require('express')

// import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yash', (req, res) => {
    res.send('hy its me yash moriya')
  })

  app.get('/who', (req, res) => {
    res.send('ypu dont know who i am ?')
  })

  app.get('/card', (req , res) => {
      res.send("<h1> its my buseness</h1>")
      
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})