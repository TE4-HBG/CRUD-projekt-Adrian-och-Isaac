const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/static'))

const url = 'mongodb://localhost:27017/test'
mongoose.connect(url)
mongoose.connection.on('open', function() {
	console.log('Connected successfully to server')
	app.listen(3000)
})

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const todosSchema = new Schema({
	text: String,
	done: Boolean
})

const TodosModel = mongoose.model('Todos', todosSchema)

app.get('/items', async (req, res) => {
	const todos = await TodosModel.find().exec()
	res.status(200).json(todos)
});

app.get('/items/:id', (req,res) =>{
	req.params.id
})

app.patch('/items/id',(req,res) =>{

})

app.delete('/items/id', (req,res)=>{

})

app.post('/items', (req,res) =>{
	
})
