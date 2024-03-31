const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/gpt3_new', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

const statementSchema = new mongoose.Schema({
    statement: String
});

/* {
    LLM Schema example: 
    _id: ObjectID(), // Automatic unique identifier
    conversationId: String, // To group messages within a conversation
    userId: String,  // Identifier for the user  
    timestamp: Date, 
    message: {
      type: String, // "user" for user input, "chatbot" for ChatGPT response
      text: String
    },
    languageModel: { // Optional section for storing language model interactions
      modelId: String, // Identifies the specific language model used
      input: String, // Optional - the prompt sent to the language model
      output: String, // Optional - the response generated
      metadata: Object // Optional - for storing model-specific details 
    }
  } */

const Statement = mongoose.model('Statement', statementSchema);

app.get('/Gpt3', async (req, res) => {
    try {
        const statements = await Statement.find(); // Fetch all statements
        res.json(statements);
    } catch (err) {
        console.error('Error fetching statements:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/Gpt3', async (req, res) => {
    const { statement } = req.body;
    const newStatement = new Statement({ statement });
    try {
        await newStatement.save();
        res.status(201).json(newStatement);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(5173, () => console.log('Server listening on port 5173'));