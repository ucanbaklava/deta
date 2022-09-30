// install express with `npm install express` 
const express = require('express')
const app = express()

const { Deta } = require('deta'); // import Deta

// Initialize with a Project Key
const deta = Deta('a0bamaew_sgvABZsqZp2p7xJPXvGZ9bzRsMMMjr4P'); 

app.post('/initdb', async (req, res) => {
    const db = deta.Base('simple_db'); 
    console.log(db)
    const result = await db.put({name: "alex", age: 77}) 
    console.log(JSON.stringify(result))
    res.end("heheheh")

})

app.get('/', async (req, res) => res.send('Hello World!'))

// export 'app'
module.exports = app


