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
			<p>Description: Agriculture sector needs well functioning markets to drive growth, employment and 
			economic prosperity in rural areas of the country. In order to provide dynamism and 
			efficiency in the marketing system,we are designning an android app which will be 
			beneficial for the farmer in the context of price of verious commudity in various mandies
			through this app farmer will be able to know the market price of commudity from different mandies</p>
			<p>It is an android application which keeps update about nearest market price for the farmer </p>
			
			<p>Team member: Kaptan singh Dangi, Murari meena</p>
			<p>Technology used: JAVA</p>
			<p>platform: Android</p>
			<p>Tools & IDE: Android Studio</p>
		
			<h3>&nbsp;</h3>
			<h3>Room Rent Application</h3>
			
			<p>Today Every student who are studying abroad or far from their home 
			facing the most generous problem where to live and how to search room available near 
			to their coaching center so we are desigining an app which will help to finding room 
			in their precise location</p>
			
			<p>Technology used: JAVA</p>
			<p>platform: Android</p>
			<p>Tools & IDE: Android Studio</p>
			
			<h3>&nbsp;</h3>
			<h3>Desktop-IceCream-Parlour </h3>
			
			<p align="justify">It is java based application in which java GUI used for 
			frontend and Oracle Database for backend ,Both are connectd by Jdbc for
			manipulating the data stored in databse through java. </p>
			
			<p>Team member: Albel singh Bhargav,</p>
			<p>Technology used: JAVA</p>
			<p>DataBase: Oracle</p>
			<p>connectivity: through JDBC</p>
			<p>platform: Desktop Application</p>
			<p>Tools & IDE: Netbeans and Intellij</p>
			
			<p  style="height: 97px; width: 833px; text-align:justify" class="auto-style2" >
			To know more about my projects, please click
			<a href="http://sumitkushwahji.imad.hasura-app.io/Projects">here</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
		
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
			<p>Instructor: Pankaj Jain</p>
			
			<a href="https://drive.google.com/open?id=0B7PYN0J0ldPBZ1FzY0h1Z244NkU">Click here for certificate</a>
			
			<h3>&nbsp;</h3>
			<h3>Advance Java(JEE) </h3>
			<p>It is based on java technology for the development of Web Application</p>
			<p>Instructor: Rohit Ahuja</p>
			<a href="https://drive.google.com/open?id=0B7PYN0J0ldPBMWxxTVNFTVh1Z2c">Click here for certificate</a>
			
			
			<h3>&nbsp;</h3>
			<h3>core java (JSE) </h3>
			<p>core java comes under latest technology which provides very basic concept in programming language  
			today it's play a very big role in IOT 
			Almost technology based on java</p>
			
			<p>Instructor : Sachin Kapoor(A2I pvt.ltd bhopal)</p>
			<p>Address: Maansarovar comlex Habibganj Road bhopal</p>
			<h3>&nbsp;</h3>
			<h3>C & C++</h3>
			<p>C is the basic programming language in the field of language and it also called father of programmming language </p>
			<p>C++ is Object Oriented Programming language. it just advanced than C</p>
			<p>Instructor : Sachin Kapoor(A2I pvt.ltd bhopal)</p>
				<a href="https://drive.google.com/open?id=0B7PYN0J0ldPBN01Oa2w3RG8taDQ">Click here for certificate</a>
			
				<h3>&nbsp;</h3>
		</div>
		</div>`
    },
    
    'Training':{
       

        content:`
        <!-- Begin Page Content -->
	<div id="page_content" style="right: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h2 class="auto-style4" > &nbsp; 
			</h2>
			<h2 class="auto-style4">Industrial Training</h2>
			<h3>Oracle 11g</h3>
			<p>Institution: Sati vidisha</p>
			<p>Oracle database (Oracle DB) is a relational database management system (RDBMS) from the Oracle Corporation</p>
			
			<p>Training covered all important point in very deap with practicles </p>
			<p>It was of 25 days held in sati vidisha</p>
			<p>We have completed our trainig under the guidance of-</p>
			<p>Pankaj Jain</p>
			<p>Satish Pawar</p>
			<p>Gagan Vishwakarma</p>
			<h3>&nbsp;</h3>
			<h3>Advance Java(JEE) </h3>
			
			<p>It is based on java technology for the development of Web Application</p>
			<p>it was completed under the guidance of</p>
			<p>Rohit Ahuja (at Vedisoft)</p>
			<h3>&nbsp;</h3>
			
		</div>
		</div>`   },
		'Education':{
		    content:`<!-- Begin Page Content -->
	<div id="page_content" style="right: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
			<h2 class="auto-style4" > &nbsp; 
			</h2>
			<h2 class="auto-style4">Education</h2>
			<h3>Bachelor of Engineering</h3>
			
			<p>Samrat Ashok Technological Institute vidisha (4 year course) Graduation May 2017</p>
			<p>Address: Civil Lines, Vidisha, Madhya Pradesh 464001</p>
			<p>I am doing my engineering as computer Science as my branch.</p>
			
			<h3>&nbsp;</h3>
			<h3>Intermediate</h3>
			<p>Tulica convent Higher Secondary school Morena (passed in May 2012)</p>
			<p>Address: Gandhi Colony, Gopal Pura, Morena, Madhya Pradesh 476001</p>
			<p>I did my schooling from this school in 2012 with 76%.</p>
			
			<h3>&nbsp;</h3>
			
				<h3>High school</h3>
			<p>Tulica convent Higher Secondary school Morena (passed in May 2010)</p>
			<p>Address: Gandhi Colony, Gopal Pura, Morena, Madhya Pradesh 476001</p>
			<p>I did my schooling from this school in 2010 with 76%.</p>
			
			
		</div>
		</div>
		    `
		},
		'Extra-curricular':{
		    content:`	<div id="page_content" style="right: 0px; top: 0px; width: 100%">
		<!-- Begin Left Column -->
		<div id="column_l" class="auto-style2" style="left: 0px; top: 0px; width: 833px">
			<!-- #BeginEditable "content" -->
            <h3>Army Attachment Camp</h3>
            <p>We have joined Ncc organisation in 2013 during which I attended a Army Attachment Camp.It was 15 day visiting camp 
            in jhansi, where we visit so many army places and learn how they live,what they eat and how they react to a problem or situation during the war.And we learnt how to fire a gun (INSAS RIFFLE 5.56).From this camp we have learnt Disciplane and much more .
            </p>
            &nbsp;
			<h3>Special Police Officer</h3>
			<p>Since we are an Ncc candidate,So we are elected for the election 2014 during which we made a role play of 
			Special Police Officer</p>
			&nbsp;
			<h3>Codvita-5</h3>
			<p>Participated in The Tcs Global Coding Contest.It was organised by the tcs itself and cleared 1st round</p>
			&nbsp;
			<h3>Anecode-0010</h3>
			<p>it is an online coding contest organised by Crisp Vidisha.And I cleared 1st Round </p>
			&nbsp;
			<h3></h3>
			<!-- #EndEditable --></div>
		<!-- End Left Column -->
		<!-- Begin Right Column -->
		<!-- End Right Column --></div>
		    `
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
			
			<p style="width: 317px">&nbsp;<img alt="" height="186" src="ui/madi.png" width="413" /></p>

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
		<img alt="" height="105" src="https://upload.wikimedia.org/wikipedia/commons/4/44/SATI_Vidisha.jpg" width="150" />
	</div>
	<!-- End Masthead -->
	<!-- Begin Navigation -->
	<div id="navigation">
		<ul>
			
			<li><a href="/">Home</a></li>
			<li><a href="Projects">Projects</a></li>
			<li><a href="Training">Training</a></li>
			<li><a href="Certificate">Certification</a></li>
			<li><a href="Education">Education</a></li>
			<li><a href="/">Students</a></li>
			<li><a href="Extra-curricular">Extra-curricular</a><li>
			<li><a href="Contact">Contact</a><li>
			
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

app.get('/ui/Screenshot (118).png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Screenshot (118).png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
