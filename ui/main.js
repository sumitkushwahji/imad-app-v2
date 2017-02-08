//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //create a request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    if (request.readyState == XMLHttpRequest.DONE){
        
        //Take the action
        if(request.status ==200 ){
            var counter = request.responseText;
            var span=document.getElementById('count');
        }
    }
    //not done yet
    
   //make the request
   httpRequest.open('GET', 'http://sumitkushwahji.imad.hasura-app.io/counter', true);
httpRequest.send(null);
};