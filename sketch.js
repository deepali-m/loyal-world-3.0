var taskbar
var logo,logoImage
//search,searchImg
var backgroundImg
var inputBox,Name1,enter
var pr1,pr1img,pr1b,pr2,pr2img,pr2b,pr3,pr3img,pr3b,pr4,pr4img,pr4b,pr5,pr5img,pr5b;
var outline
var p6b,p6i,p7b,p7i,p8b,p9b,p8i,p9i,p10b,p10i,p11b,p11i,p12b,p12i
var p13b,p13i,p14b,p14i,p15b,p15i,p16b,p16i,p17b,p17i,p18b,p18i,p19b,p19i,p20b,p20i,p21b,p21i,p22b,p22i,p23b,p23i

var slide,slideimg,slideimg2,slideimg3,slide2,slide3

var logincanvas
var leftButton,rightButton

var temp1,temp2

var pr1bu,pr2bu,pr3bu,pr4bu,pr5bu,pr6bu,pr7bu

var pri1,hnsimg

var off50,off30,off10,off50i,off30i,off10i

var cartImg,atcimg

var atcGroup

var x,showpro1;

var gamestate="login"

function preload(){


  logoImage=loadImage("Image/LOGO.png")
  searchImg=loadImage("Image/Glass.jpg")
  backgroundImg=loadImage("Image/Background.jpg")
  pr1img = loadImage("Image/biscut.jpg")
  pr2img = loadImage("Image/Chips.jpg")
  pr3img = loadImage("Image/Nut.jpg")
  pr4img= loadImage("Image/Slice.jpg")
  pr5img=loadImage("Image/Che.jpg")
  p6i=loadImage("Image/aloo-bhujia.jpg")
  p7i=loadImage("Image/amul.jpg")
  p8i=loadImage("Image/banana.jpg")
  p9i=loadImage("Image/dettol.jpg")
  p10i=loadImage("Image/kit-kat.jpg")
  p11i=loadImage("Image/lifebuoy.jpg")
  p12i=loadImage("Image/lotte-choco-pie.jpg")
  p13i=loadImage("Image/maggi.jpg")
  p14i=loadImage("Image/oreo.jpg")
  p15i=loadImage("Image/pineapple.jpg")
  p16i=loadImage("Image/savlon-.jpg")
  p17i=loadImage("Image/tide.jpg")
  p18i=loadImage("Image/watermelon.jpg")
  p19i=loadImage("Image/weikfield-cocoa.jpg")
  p20i=loadImage("Image/chings.jpg")
  p21i=loadImage("Image/sunfeast.jpg")
  p22i=loadImage("Image/colgate.jpg")
  p23i=loadImage("Image/inchi.jpg")

  slideimg=loadImage("Image/slide1.jpg")
  slideimg2=loadImage("Image/slide3.jpg")
  slideimg3=loadImage("Image/slide4.jpg")
  
off50i=loadImage("Image/50off2.png")
off30i=loadImage("Image/30off2.png")
off10i=loadImage("Image/10off.png")

atcimg=loadImage("Image/atc.PNG")

cartImg=loadImage("Image/cart.png")

hnsimg=loadImage("Image/Screenshot (90).png")



//bk=loadImage("Image/bk.jpg")


outline = loadImage("Image/unnamed.jpg")
}
function setup(){
  
  createCanvas(1900,3200)
  //Taskbar
  

// Creating buttons behind the products
// and decreasing the opacity of the button to make it invisible



login1 = new Login()

atcGroup=new Group();

/*pr1bu=createButton("")
pr1bu.position(100,100)
pr1bu.size(200,250)
pr1bu.style("opacity","0")

pr2bu=createButton("")
pr2bu.position(350,100)
pr2bu.size(200,250)
pr2bu.style("opacity","0")

pr3bu=createButton("")
pr3bu.position(600,100)
pr3bu.size(200,250)
pr3bu.style("opacity","0")

pr4bu=createButton("")
pr4bu.position(850,100)
pr4bu.size(200,250)
pr4bu.style("opacity","0")

pr5bu=createButton("")
pr5bu.position(1100,100)
pr5bu.size(200,250)
pr5bu.style("opacity","0")

pr6bu=createButton("")
pr6bu.position(1350,100)
pr6bu.size(200,250)
pr6bu.style("opacity","0")

pr7bu=createButton("")
pr7bu.position(1600,100)
pr7bu.size(200,250)
pr7bu.style("opacity","0")
  

  */
}
function draw(){
 background(255)
  textSize(19)
  stroke("white");
  strokeWeight(2)
  fill("Black")


  if(gamestate === "login"){


login1.show()

    login1.enter.mousePressed(()=>{
      gamestate="showpr"
     login1.hide()
      //console.log("Login")
      console.log(gamestate)
    })
    
  }
  else if (gamestate === "showpr"){
    console.log(gamestate)
    drawSprites();
    showpro1 = new Showpro()
    showpro1.show()
    //logincanvas.hide()
    //background(255)
    
  } //end of game state showpro
else if(gamestate==="eachpr")
{
  pri1.visible=true
  image(hnsimg,200,200,1900,1000)
  console.log(gamestate)

}


  }

function test()
  {
    //pri1.visible=true;

    //var temp3= createSprite(10,10,1900,displayHeight)

    //console.log(temp3)
    fill("white")
    textSize(0)

    image(hnsimg,200,200,1900,1000)

    gamestate="eachpr"
    console.log(gamestate)
    enter.hide();
    Name1.hide();
  }
function ex(){
  gamestate="showpr"

  console.log(Name1)
 // Name1.width=0
 //Name1.style.visibility='hidden';
  
}