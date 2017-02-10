//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //create a request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange= function () {
    if (request.readyState === XMLHttpRequest.DONE){
        
        //Take the action
        if(request.status === 200){
            var counter = request.responseText;
            var span=document.getElementById('count');
            span.innerHTML =counter.toString();
        }
    }
     //not done yet
    };
   
    
   //make the request
   request.open('GET', 'http://sumitkushwahji.imad.hasura-app.io/counter', true);
   request.send(null);
};
//SUBMIT FORM

var submit =document.getElementById('submit_btn');
submit.onclick = function(){
    
    //create a request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange= function () {
    if (request.readyState === XMLHttpRequest.DONE){
        
        //Take the action
        if(request.status === 200){
       var names= request.responseText;
    names = JSON.parse(names);
    var list='';
    for(var i=0;i< names.length; i++){
        list += '<li>'+ names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
        }
    }
    };
    //make a request to the server and send the name
    var nameInput= document.getElementById('name');
var name = nameInput.value;
      request.open('GET', 'http://sumitkushwahji.imad.hasura-app.io/submit-name?name=' + name, true);
   request.send(null);
    
    
    
    //capture a list of name and render it as a list
   
};
  
  //submit comment
  var submit2 =document.getElementById('comment_btn1');
submit2.onclick = function(){
    
    //create a request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange= function () {
    if (request.readyState === XMLHttpRequest.DONE){
        
        //Take the action
        if(request.status === 200){
       var names= request.responseText;
    names = JSON.parse(names);
    var list='';
    for(var i=0;i< names.length; i++){
        list += '<li>'+ names[i] + '</li>';
    }
    var ul=document.getElementById('commentlist1');
    ul.innerHTML = list;
        }
    }
    };
    //make a request to the server and send the name
    var nameInput= document.getElementById('comment_box1');
var name = nameInput.value;
      request.open('GET', 'http://sumitkushwahji.imad.hasura-app.io/article-one?name=' + name, true);
   request.send(null);
    
    
    
    //capture a list of name and render it as a list
   
};