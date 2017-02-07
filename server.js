var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles= {
'article-one': {
    title: 'article-one | sumit kushwah',
    heading: 'Article-One',
    date: '5 sep 2017',
    content:`<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>
<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>

<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>`
},
'article-two': {
    title:'article-two | sumit kushwah',
    heading: 'Article-Two',
    date: '10 sep 2017',
    content:`<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>
<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>

<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>`
},
'article-three': {
    title:'article-three | sumit kushwah',
    heading: 'Article-three',
    date: '5 oct 2017',
    content:`<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>
<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>

<p>
my name is sumie kusheahajjvd hjdbhbc jhbchbshbcns j s sjh hsd h s js jhs jsd sjhdh js jh sdd
</p>`
}
};

function createTemplate(data){ 
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name= "viewport" content= "width-device=width , initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">  <div>
         <a href="/">HOME</a>
         </div>
         <hr/>
         <h3>
           ${heading}
             </h3>
         <div>
        <p3>
       ${date}
        </p3>
        </div>
    ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/:articleName',function (req, res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
