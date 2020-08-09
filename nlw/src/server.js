// Datas
const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89987654354",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química",
        cost: "20",
        weekday: [0], 
        time_from:[720], 
        time_to: [1220]
    },
    { 
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89987654354",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química",
        cost: "20",
        weekday: [1], 
        time_from:[720], 
        time_to: [1220]
    },
    { 
        name: "Gilberto França", 
        avatar: "https://avatars2.githubusercontent.com/u/31990978?s=460&u=7eecaab8e342d935073dd28fc83390542f39fd98&v=4",
        whatsapp: "89987654354",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química",
        cost: "20",
        weekday: [1], 
        time_from:[720], 
        time_to: [1220]
    }

    
];

const subjects = [
    
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Functions

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {   
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });  
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)
        
        proffys.push(data)

        return res.redirect("/study")
    } 

    return res.render("give-classes.html", {subjects, weekdays})
}

// Server
const express = require('express');
const server = express();


// Nunjuncks config (Template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});


// Start and config server
server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start Server
.listen(5500);

