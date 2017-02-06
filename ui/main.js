console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="new Page";
//move image
var img=document.getElementById('madi');
var marginLeft=0;
function marginRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onClick= function(){
    var interval=setInterval(moveRight,100);
};