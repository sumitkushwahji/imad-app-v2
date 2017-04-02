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
        heading:`<head>
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
</head>`,
        masthead:`	<div id="masthead">
		<img alt="" height="105" src="https://upload.wikimedia.org/wikipedia/commons/4/44/SATI_Vidisha.jpg" width="150" /><p>mobile (+91) 
		94799-66498<br />
		std (+91) (0) 11 26907-405<br />
		</p>
	</div>`,
	navigation:`<div id="navigation">
		<ul>
			<li><a href="index2.html">Home</a></li>
			<li><a href="projects.html">Projects</a></li>
			<li><a href="Training.html">Training</a></li>
			<li><a href="index2.html">Technologies Deployed</a></li>
			<li><a href="index2.html">Positions</a></li>
			<li><a href="index2.html">Students</a></li>
			<li><a href="index2.html">Collaborations</a></li>
			<li><a href="contact.html">Contact</a></li>
		</ul>
	</div>`,
        content:`<div id="page_content" style="left: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style1" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h1 class="auto-style1">&nbsp;<img alt="" height="250" src="https://pbs.twimg.com/profile_images/799616901789925376/XeV65FpD.jpg" style="float: left" width="250" /></h1>
			<p class="auto-style2" style="height: 28px">&nbsp;<strong>
			<span class="auto-style4">Sumit kushwah</span></strong></p>
			<p class="auto-style2" style="height: 28px">&nbsp; <strong>
			Computer Science &amp; Engineer</strong></p>
			<p class="auto-style2" style="height: 28px">&nbsp; CSE, VIDISHA</p>
			
			<p class="auto-style2" style="height: 28px">&nbsp;
			<a href="documents/Latest Resume2.pdf">Curriculam-Vitae</a> 
			(updated March 2017)&nbsp;</p>
			<p class="auto-style2" style="height: 23px">&nbsp;</p>
			<h2 class="auto-style2" style="height: 27px; width: 591px">Research 
			Interests</h2>
			<p  style="height: 36px; width: 833px; text-align:justify" class="auto-style2" >
			My research interests are in the area of mobile systems and 
			applications. I am working to provide middlware solutions for 
			building collaborative applications in the domain of crowd-sourcng 
			and energy monitoring.&nbsp; </p>
			<p  style="height: 50px; width: 833px; text-align:justify" class="auto-style2" >
			I am also very much 
			interested in using my research for societal development of India 
			and doing research which is valid in the context of developing countries. 
			Towards this, I am specifically interested into the areas of 
			information disemination platforms such IVRs and mobile healthcare. 
			</p>
			<p  style="height: 97px; width: 833px; text-align:justify" class="auto-style2" >
			&nbsp;I enjoy applied research and like to see 
			real-world deployment of my work. We have created several 
			techologies in the above mentioned areas with successful 
			deployments.&nbsp;&nbsp; </p>
			<p  style="height: 97px; width: 833px; text-align:justify" class="auto-style2" >
			To know more about my research, please click
			<a href="http://www.iiitd.edu.in/~pushpendra/projects.html">here</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
			<p  style="height: 209px; width: 833px; text-align:justify" class="auto-style2" >
			&nbsp;</p>
			<p  style="height: 209px; width: 833px; text-align:justify" class="auto-style2" >
			<br />
			</p>
			<!-- #EndEditable --></div>
		<!-- End Left Column -->
		<!-- Begin Right Column -->
		<!-- End Right Column --></div>
	`
    },
    
    'Training':{heading:`<head>
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
</head>`,
        masthead:`	<div id="masthead">
		<img alt="" height="105" src="https://upload.wikimedia.org/wikipedia/commons/4/44/SATI_Vidisha.jpg" width="150" /><p>mobile (+91) 
		94799-66498<br />
		std (+91) (0) 11 26907-405<br />
		</p>
	</div>`,
	navigation:`<div id="navigation">
		<ul>
			<li><a href="index2.html">Home</a></li>
			<li><a href="projects.html">Projects</a></li>
			<li><a href="Training.html">Training</a></li>
			<li><a href="index2.html">Technologies Deployed</a></li>
			<li><a href="index2.html">Positions</a></li>
			<li><a href="index2.html">Students</a></li>
			<li><a href="index2.html">Collaborations</a></li>
			<li><a href="contact.html">Contact</a></li>
		</ul>
	</div>`,
        content:`<p>This is my new page</p>`
    }
};

function createTemplate2(data){
    var heading = data.heading;
    var masthead= data.masthead;
    var navigation = data.navigation;
    var content = data.content;
    
    
    
    var htmltemplate=`<!DOCTYPE html>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<!-- #BeginTemplate "master.dwt" -->

    ${heading}
<body>

<!-- Begin Container -->
<div id="container">
	<!-- Begin Masthead -->
    ${masthead}
	<!-- End Masthead -->
	<!-- Begin Navigation -->
	${navigation}
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
