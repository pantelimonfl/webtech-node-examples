const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

var studentsList = [
    {
        id: 1,
        name: 'Andrei',
        age: 22,
        studyGroup:{
            name:'1078',
            year: 3
        }
    },
    {
        id:2,
        name:'Ana',
        age:22,
        studyGroup: {
            name:'1078',
            year:3
        }
    },
    {
        id:3,
        name:'Alexandru',
        age:22,
        studyGroup: {
            name:'1078',
            year:3
        }
    }
]

app.get('/', (request,response)=>{
    response.send("App works!")
})

app.get('/api/students', (req,res) => {
    res.status(200)
    res.send(studentsList)
})

app.get('/api/students/:id', (req,res)=>{
    res.status(200)
    res.send(studentsList.filter(x=>x.id == req.params.id))
})

app.delete('/api/students/:id', (req,res)=>{
    studentsList = studentsList.filter(x=>x.id != req.params.id)
    res.status(200)
    res.send(studentsList)
})

app.put('/api/students/:id', (req,res)=>{
    studentsList = studentsList.filter(x=>x.id != req.params.id)
    studentsList.push(req.body)
    res.status(200)
    res.send(studentsList)
})

app.post('/api/students/add', (req,res)=>{
    studentsList.push(req.body)
    res.status(200)
    res.send(studentsList)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
