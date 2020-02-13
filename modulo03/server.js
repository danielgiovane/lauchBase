const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const slider = require('./data');


server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {

  const data = {
    avatar_url: "./img/rengoku.png",
    name: "Rengoku",
    role: "Pilar das chamas",
    description: 'Está tudo bem em chorar, Está tudo bem em fugir, Apenas não desista. O melhor dos melhores, rengoku-chan!!<a href="http://rocketseat.com.br" target="_blank">Rocketseat</a>',
    link: [
      {
        img: "./img/github.svg",
        url: "https://github.com/danielgiovane/"
      },
      {
        img: "./img/linkedin.svg",
        url: "https://www.linkedin.com/in/daniel-fernandes2015"
      }
    ]
  }
  return res.render('about', {data});
});

server.get('/portfolio', (req, res) => {
  return res.render('portfolio', { itens: slider });
});


server.get('/courses', (req,res) =>{

  const id = req.query.id;

  const courses = slider.find((courses)=>{
    if(courses.id == id){
      return true;
    }

  });

  if(!courses){
    return res.send('Not found');
  }

  return res.render('courses', {courses})

});



server.use(function (req, res) {
  res.status(404).render("not-found");
});



server.listen(3000, (req, res) => {
  console.log('server iniciado');
});
