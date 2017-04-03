var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index2.html'));
});

app.get('/index.html', function (req, res) {
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
</p>`,
comment: `<div class ="fotter">
<hr/>
<input type="text" id="comment_box1" placeholder="comment" ></input>
<input type="submit" value="comment" id="comment_btn1"></input>
<ul id="commentlist1">

</ul>
</div>`

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
</p>`,
comment: `<div class ="fotter">
<hr/>
<input type="text" id="comment_box2" placeholder="comment" ></input>
<input type="submit" value="comment" id="comment_btn2"></input>
<ul id="commentlist2">

</ul>
</div>`
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
</p>`,
comment: `<div class ="fotter">
<hr/>
<input type="text" id="comment_box3" placeholder="comment" ></input>
<input type="submit" value="comment" id="comment_btn3"></input>
<ul id="commentlist3">

</ul>
</div>`
}
};
function createTemplate(data){ 
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    var comment= data.comment;
    
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
     
        <div>
    ${comment}
        </div>
           </div>
    
    </body>
</html>`;
return htmlTemplate;
}

var navigations={
    'Projects':{
    
	
        content:`
	<!-- Begin Page Content -->
	<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h2 class="auto-style4">&nbsp;</h2>
			<h2 class="auto-style4">Current Running Projects</h2>
			<h3>AgriMarket</h3>
			<p>Institution: Sati vidisha</p>
			<p>It is an android application which keeps update about nearest market price for the farmer </p>
			
			<h3>&nbsp;</h3>
			<h3>Room Rent Application</h3>
			
			<p>Today Every student who are studying abroad or far from their home 
			facing the most generous problem where to live and how to search room available near 
			to their coaching center so we are desigining an app which will help to finding room 
			in their precise location</p>
			
			<h3>&nbsp;</h3>
			<h3>Desktop-IceCream-Parlour </h3>
			
			<p align="justify">It is java based application in which java GUI used for 
			frontend and Oracle Database for backend ,Both are connectd by Jdbc for
			manipulating the data stored in databse through java. </p>
			
			
			
			<p  style="height: 97px; width: 833px; text-align:justify" class="auto-style2" >
			To know more about my projects, please click
			<a href="http://www.iiitd.edu.in/~pushpendra/projects.html">here</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
		
		</div>
		</div>
`
    },
    'Certificate':{
        content:` <!-- Begin Page Content -->
	<div id="page_content" style="right: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h2 class="auto-style4">&nbsp;</h2>
			<h2 class="auto-style4">Advance Java certificate </h2>
			<h3>Oracle 11g</h3>
			<p>Institution: Sati vidisha</p>
			<p>Oracle database (Oracle DB) is a relational database management system (RDBMS) from the Oracle Corporation</p>
			
			<h3>&nbsp;</h3>
			<h3>Advance Java(JEE) </h3>
			
			<p>It is based on java technology for the development of Web Application</p>
			
			<h3>&nbsp;</h3>
			
		</div>
		</div>``
    },
    
    'Training':{
       

        content:`
        <!-- Begin Page Content -->
	<div id="page_content" style="left: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h2 class="auto-style4" > &nbsp; 
			</h2>
			<h2 class="auto-style4">Industrial Training</h2>
			<h3>Oracle 11g</h3>
			<p>Institution: Sati vidisha</p>
			<p>Oracle database (Oracle DB) is a relational database management system (RDBMS) from the Oracle Corporation</p>
			
			<h3>&nbsp;</h3>
			<h3>Advance Java(JEE) </h3>
			
			<p>It is based on java technology for the development of Web Application</p>
			
			<h3>&nbsp;</h3>
			
		</div>
		</div>`
    },
    'Contact':{
        content:`
	<div id="page_content" style="right: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
		
			<h3>Mailing Address</h3>
			&nbsp;<p style="width: 317px">3/13 shivani complex B r<br />
			vidhya vihar <br />
			bhopal 426026 <br />
			India</p>
			<p style="width: 317px">&nbsp;<img alt="" height="186" src="images/map.PNG" width="413" /></p>
			<h4>Landmarks</h4>
			<ol>
				<li>Vidhya vihar </li>
				<li>Surendra Palace</li>
			</ol>
			<!-- #EndEditable --></div>
		<!-- End Left Column -->
		<!-- Begin Right Column -->
		<!-- End Right Column --></div>`
    }
};

function createTemplate2(data){
    
   
    var navigation = data.navigation;
    var content = data.content;
    
    
    
    var htmltemplate=`<!DOCTYPE html>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<!-- #BeginTemplate "master.dwt" -->

   <head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<!-- #BeginEditable "doctitle" -->
<title>Sumit kushwah</title>
<style type="text/css">

.float_right {
	float:right;
} 


.auto-style1 {
	text-align: right;
}
.auto-style2 {
	text-align: left;
}
.auto-style4 {
	font-size: medium;
}
</style>
<!-- #EndEditable -->
<link href="styles/style2.css" media="screen" rel="stylesheet" title="CSS" type="text/css" />
<style type="text/css">
.auto-style1 {
	margin-right: 314px;
}
.auto-style2 {
	margin-top: 0;
}
</style>
</head>
<body>

<!-- Begin Container -->
<div id="container">
	<!-- Begin Masthead -->
   	<div id="masthead">
		<img alt="" height="105" src="https://upload.wikimedia.org/wikipedia/commons/4/44/SATI_Vidisha.jpg" width="150" /><p>mobile (+91) 
		94799-66498<br />
		std (+91) (0) 11 26907-405<br />
		</p>
	</div>
	<!-- End Masthead -->
	<!-- Begin Navigation -->
	<div id="navigation">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="Projects">Projects</a></li>
			<li><a href="Training">Training</a></li>
			<li><a href="/">Technologies Deployed</a></li>
			<li><a href="/">Positions</a></li>
			<li><a href="/">Students</a></li>
			<li><a href="/">Collaborations</a></li>
			<li><a href="Contact">Contact</a></li>
		</ul>
	</div>
	<!-- End Navigation -->
	<!-- Begin Page Content -->
	${content}
	<!-- End Page Content -->
	<!-- Begin Footer -->
	<!-- End Footer --></div>
<!-- End Container -->

</body>

<!-- #EndTemplate -->

</html>
`;
    return htmltemplate;
}


var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names= [];
app.get('/submit-name',function(req, res)  //make request query parameters /submit-name?name=sumit
{
    //get the name from the request
    var name=req.query.name;
    
    names.push(name);
    //JSON: javascript OBject notation
    res.send(JSON.stringify(names));
    
});

 

app.get('/:navigation',function (req, res){
  var navigation = req.params.navigation;
  res.send(createTemplate2(navigations[navigation]));
});

var names= [];
app.get('/:articleName',function(req, res)  //make request query parameters /submit-name?name=sumit
{
    //get the name from the request
    var name=req.query.name;
    
    names.push(name);
    //JSON: javascript OBject notation
    res.send(JSON.stringify(names));
    
});




app.get('/ui/Latest_Resume2.pdf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Latest_Resume2.pdf'));
});


app.get('/styles/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'styles', 'style2.css'));
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
