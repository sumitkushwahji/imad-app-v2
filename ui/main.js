//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //make a requwst to the computer
    
    //capture the response and store it ina variable
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}