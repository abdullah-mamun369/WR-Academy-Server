const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const allCourses = require('./academy-data/courses-data.json');

app.get('/', (req, res) => {
    res.send('Academy API Running')
})

app.get('/allcourses', (req, res) => {
    res.send(allCourses)
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = allCourses.find(course => course.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Hello Dragon');
})