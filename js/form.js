class Form 
{
constructor(){

}
 display()
 {
       var title=createElement('h2');
       title.html("car racing game");
       title.position(100,50);

var input=createInput("enter ur name here");
input.position(100,100);

var button=createButton("PLAY");
button.position(100,150);
var greeting=createElement('h2');
button.mousePressed( function(){
    input.hide();
    button.hide();
    

    var name=input.value();

    playerCount+=1;
    player.updateCount(playerCount);
    player.update(name);

    greeting.html("Hello  "+ name );
 greeting.position(200,100);



} );

 }                 
}