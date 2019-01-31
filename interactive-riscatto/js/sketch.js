var canvas_width = 200;
var canvas_height = 768;

var yLine = 80;
var arrivato = false;

var tl3 = new TimelineLite({
  paused: true,
  delay: 12
});
tl3.add( TweenLite.to('#ending-riscatto', 2.15, {opacity:1}) );
tl3.add( TweenLite.to('#txt-riscatto', 2.15, {opacity:1}) );

var s = function( sketch ) {

  sketch.setup = function() {
    sketch.createCanvas(canvas_width, canvas_height);
    sketch.noStroke();
    sketch.background(0);
    sketch.frameRate(30);
  };

  sketch.draw = function() {

    // area sensibile 1
    sketch.fill(255, 255);
    sketch.ellipse(sketch.width / 2, 80, 80)

    // area sensibile 2
    sketch.fill(255, 255);
    sketch.ellipse(sketch.width / 2, sketch.height - 80, 80)

    if(sketch.mouseIsPressed){
      console.log('mouse pressed')

      if(!arrivato){
        sketch.fill(255);
        sketch.ellipse(sketch.width / 2, sketch.mouseY + 20, 10, 10);
      }

/*
      let d = sketch.dist(sketch.mouseX, sketch.mouseY, sketch.width / 2, 80);

      if( d <= 45 && !arrivato ){
        yLine = yLine+10;
        sketch.fill(255)
        sketch.ellipse(sketch.width / 2, yLine, 10, 10);

        if( sketch.dist(sketch.width / 2, yLine, sketch.width / 2, sketch.height - 80) < 40 ){
          // arrivato
          arrivato = true

          TweenLite.to('#cerchio-1', 1, { opacity: 0 })
          TweenLite.to('#cerchio-2', 1, { opacity: 0 })
          TweenLite.to('#interactiveCanvas', 1, { opacity: 0, onComplete: function(){
            $('#interactiveCanvas').css('display', 'none')
            $('#endingAnimation').append(' <img id="portale-finale-1" src="./img/portale-finale-1.gif">')
            setTimeout(function(){ 
              console.log('fading out')
              $('#endingAnimation').css('background-color','rgb(251,251,251)')
              $('#portale-finale-1').fadeOut(1000);
              $('#ending-riscatto').fadeIn(2500);
              $('#txt-riscatto').fadeIn(2500);
            }, 9000)
          } })

        }

      }
*/
    }

    if(sketch.mouseReleased){
      console.log('sdlfk')
    }

  };

  sketch.mousePressed = function() {
  };

  sketch.mouseReleased = function() {
    // mouse release
  }
};

$(document).ready(function(){
  var myp5 = new p5(s, 'interactiveCanvas');
})