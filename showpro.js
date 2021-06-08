class Showpro{
    constructor(){
    this.inputbox=createInput("SEARCH")
        this.search = ''
    }
    show()
    {
      text("Hello "+ login1.user, 1600,50);
        taskbar = createSprite(displayWidth/2,20,displayWidth,150)
    taskbar.shapeColor="skyblue"
    //enter.size(0,0)
  //Logo
    logo=createSprite(150,40,60,60);
    logo.addImage("LOGO",logoImage);
    logo.scale=0.5
    //Seach bar
    this.inputbox.position(300,20)
    this.inputbox.size(1000,40)
  //Magifier glass beside taskbar
    this.search=createSprite(1330,35,60,60)
    this.search.addImage("Glass",searchImg)
    this.search.scale=0.07
  
  //Creating products and adding images
    pr1b=createSprite(200,220,170,220)
    pr1b.addImage("outline",outline)
    pr1b.scale=0.5
  
    pr2b=createSprite(450,220,170,220)
    pr2b.addImage("O",outline)
    pr2b.scale=0.5
  
    pr1=createSprite(200,200,20,20)
    pr1.addImage("Biscut",pr1img)
  
    pr2=createSprite(450,200,20,20)
    pr2.addImage("chips",pr2img)
  
    pr1bu=createButton("")
    pr1bu.position(100,100)
    pr1bu.size(200,250)
    pr1bu.style("opacity","0")
  
    pr3b=createSprite(700,220,20,20)
    pr3b.addImage("O",outline)
  
    pr3=createSprite(700,200,20,20)
    pr3.addImage("nut",pr3img )
    pr3b.scale=0.5
    
    pr4b=createSprite(950,220,20,20)
    pr4b.addImage("o",outline)
    pr4b.scale=0.5
  
    pr4=createSprite(950,200,20,20)
    pr4.addImage("Slice",pr4img)
  
    pr5b=createSprite(1200,220,20,20)
    pr5b.addImage("outline",outline)
    pr5b.scale=0.5
  
    pr5=createSprite(1200,200,20,20)
    pr5.addImage("cheese",pr5img)
  
   p6b = createSprite(1450,220,20,20)
   p6b.addImage("ou",outline)
   p6b.scale=0.5
  
   var p6 = createSprite(1450,200,20,20)
   p6.addImage("idk",p6i)
  
   p7b = createSprite(1700,220,20,20)
   p7b.addImage("o",outline)
    p7b.scale=0.5
  
    var p7=createSprite(1700,200,20,20)
    p7.addImage("p",p7i)
  
    p8b = createSprite(200,500,20,20)
    p8b.addImage("o",outline)
    p8b.scale=0.5
  
    var p8=createSprite(200,480,20,20)
    p8.addImage("p",p8i)
  
    p9b=createSprite(450,500,20,20)
    p9b.addImage("o",outline)
    p9b.scale=0.5 
  
    var p9=createSprite(450,480,20,20)
    p9.addImage("j",p9i)
  
    p10b=createSprite(700,500,20,20)
    p10b.addImage("k",outline)
    p10b.scale=0.5 
  
    var p10=createSprite(700,480,20,20)
       p10.addImage("j",p10i)
  
       p11b=createSprite(950,500,20,20)
       p11b.addImage("h",outline)
       p11b.scale=0.5
  
       var p11=createSprite(950,480,20,20)
          p11.addImage("g",p11i)
  
          p12b=createSprite(1200,500,20,20)
          p12b.addImage("g",outline)
          p12b.scale=0.5
  
          var p12=createSprite(1200,500,20,20)
          p12.addImage("d",p12i)
  
          p13b=createSprite(1200,500,20,20)
          p13b.addImage('c',outline)
          p13b.scale=0.5
  
          var p13b=createSprite(1200,500,20,20)
              p13b.addImage("t",p13i)
          
              p14b=createSprite(1450,500,20,20)
              p14b.addImage("y",outline)
              p14b.scale=0.5
              
              var p14b=createSprite(1450,500,20,20)
                   p14b.addImage("j",p14i)
  
                   p15b=createSprite(1700,500,20,20)
                   p15b.addImage("h",outline)
                   p15b.scale=0.5
  
               var p15b=createSprite(1700,500,20,20) 
                   p15b.addImage("k",p15i) 
                   
                   
              p16b=createSprite(200,780,20,20)  
              p16b.addImage("i",outline)   
              p16b.scale=0.5
  
              var p16b=createSprite(200,780,20,20)
                 p16b.addImage("l",p16i)
  
                 p17b=createSprite(450,780,20,20)
                 p17b.addImage("p",outline)
                 p17b.scale=0.5
  
               var p18b=createSprite(450,780,20,20)
                   p18b.addImage("n",p18i)
                   
                  
                   p19b=createSprite(700,780,20,20)
                   p19b.addImage("j",outline)
                   p19b.scale=0.5
  
                   var p19b=createSprite(700,780,20,20)
                     p19b.addImage("m",p19i)
  
                 p20b=createSprite(950,780,20,20)
                 p20b.addImage("k",outline) 
                 p20b.scale=0.5 
                  
           var p20b=createSprite(950,780,20,20)
               p20b.addImage("o",p20i)  
  
              p21b=createSprite(1200,780,20,20)
              p21b.addImage('o',outline)
              p21b.scale=0.5
  
              var p21=createSprite(1200,760,20,20)
              p21.addImage("d",p21i)
  
              p22b=createSprite(1450,780,20,20)
              p22b.addImage("o",outline)
              p22b.scale=0.5
  
              var p22=createSprite(1450,760,20,20)
              p22.addImage("p",p22i)
  
            p23b=createSprite(1700,780,20,20)
            p23b.addImage("o",outline)
            p23b.scale=0.5
  
            var p23=createSprite(1700,760,20,20)
            p23.addImage("p",p23i)
  
            slide=createSprite(displayWidth/2,1150,20,20)
            slide.addImage("s",slideimg)
            slide.scale=1.2
  
              slide2=createSprite(3000,1150,20,20)
              slide2.addImage("s2",slideimg2)
              slide2.scale=1.2
  
  
  
  slide3=createSprite(3000,1150,20,20)
  slide3.addImage("s3",slideimg3)
  slide3.scale=1.2
  
  
  leftButton=createButton("<")
  leftButton.position(0,1100)
  leftButton.size(100,100)
  leftButton.style("font-size",'60px')
  leftButton.style("opacity","0.3")
      
  temp1=createSprite(49,1150,100,100)
  temp1.visible=false
  
  rightButton=createButton(">")
  rightButton.position(1805,1100)
  rightButton.size(100,100)
  rightButton.style("font-size","60px")
  rightButton.style("opacity","0.3")
  
  temp2=createSprite(1850,1150,100,100)
  temp2.visible=false
  
  off50=createSprite(150,130)
  off50.addImage("off",off50i)
  off50.scale=0.2
  
  pri1=createSprite(displayWidth/2,displayHeight/2,120,120)
  pri1.addImage("deiWJKLK",hnsimg)
  pri1.visible=false


  for(var i=200;i<1800;i=i+250)
  {
    var atc1=createSprite(i,340,20,20)
    atc1.addImage("atc",atcimg)
    atcGroup.add(atc1)
    
  }
  for(var i=0;i<atcGroup.length;i=i+1)
  {
    if(mousePressedOver(atcGroup.get(i)))
    {

      //console.log("Succesfulll")
      if(i===0)
      {
        console.log("hidenseek")
      }
      if(i===1)
      {
        console.log("bingo")
      }

      if(i===2)
      {
        console.log("Nutella")
      }
      if(i===3)
      {
        console.log("Slice")
      }
      if(i===4)
      {
        console.log("Amul Cheese")
      }
      if(i===5)
      {
        console.log("Aloo bhujia")
      }
      if(i===6)
      {
        console.log("Amul Butter")
      }      

    }
    
  }


  for(var i=200;i<1800;i=i+250)
  {
    var atc2=createSprite(i,625,20,20)
    atc2.addImage("atc",atcimg)
    atcGroup.add(atc2)
    
  }
  for(var i=0;i<atcGroup.length;i=i+2)
  {
    if(mousePressedOver(atcGroup.get(i)))
    {

      //console.log("Succesfulll")
      if(i===0)
      {
        console.log("hidenseek")
      }
      if(i===1)
      {
        console.log("bingo")
      }

      if(i===2)
      {
        console.log("Nutella")
      }
      if(i===3)
      {
        console.log("Slice")
      }
      if(i===4)
      {
        console.log("Amul Cheese")
      }
      if(i===5)
      {
        console.log("Aloo bhujia")
      }
      if(i===6)
      {
        console.log("Amul Butter")
      }      

    }
    
  }

  for(var i=150;i<1900;i=i+250)
  {
    var offer50=createSprite(i,130,20,20)
    offer50.addImage("50",off50i)
    offer50.scale=0.2
  }

  for(var i=140;i<1900;i=i+250)
  {
    var offer10=createSprite(i,410,20,20)
    offer10.addImage("50",off10i)
    offer10.scale=0.2
  }

  for(var i=140;i<1900;i=i+250)
  {
    var offer10=createSprite(i,690,20,20)
    offer10.addImage("50",off30i)
    offer10.scale=0.2
  }

  if(mouseIsOver(temp2)){
    temp2.visible=true
  }
  else{
      temp2.visible=false
    
  }


  if(mouseIsOver(temp1)){
    temp1.visible=true
    
  }
  else{
    temp1.visible=false
    
  }
if(mousePressedOver(temp1)){
  slide.velocityX=-50
  slide2.velocityX=-50
}
if(slide.x<1000 && slide.x>1100){
  slide.velocityX=0
}

if(slide3.x < -900 && slide.x<1005){
  slide.velocityX=0
  
}

if(slide.x >1000)
{
  slide2.x=3000;
  slide2.velocityX=0
  //slide3.x=3000;
}
if(slide.x <1005&& mousePressedOver(temp1))
{
  slide2.velocityX=-50
}

if(slide2.x<1000 && slide2.x>900){
  slide2.velocityX=0
}


if(mousePressedOver(temp1) && slide2.x <1000){
  slide3.velocityX=-50
  slide2.velocityX=-50
}
if(slide3.x <1000 && slide3.x >900)
{
  slide3.velocityX=0
}
if(mousePressedOver(temp1)&& slide3.x <1000){
  slide3.velocityX=-50
  slide.x=3000
  slide.velocityX=-50
  
}

var cart = createSprite(1500,36,200,200)
cart.addImage("cart",cartImg)
cart.scale=0.1
  
//if(mousePressedOver(cart))
//{
  //gameState="cart"
  //var cartOverlay()
//}
pr1bu.mousePressed((test)=>{
  gamestate="eachpr"
})

text("Hide & Seek biscuit",118,310)
text("Bingo",430,310)
text("Nutella",670,310)
text("Slice",925,310)
text("CHEESE",1160,310)
text("Aloo Bhujia",1400,310)
text("Amul Butter",1650,310)
text("Banana", 170,600)
text("Dettol", 430,600)
text("Kit-kat Family",650,600)
text("Hand Sanitizer",890,600)
text("Maggi Noddles",1140,600)
text("Oreo",1420,600)
text("Pineapple",1650,600)
text("Hand sanitizer",130,880)
text("WaterMelon",400,880)
text("Cocoa Powder",630,880)
text("Chings Noddles",870,880)
text("Dark Fantasy",1150,880)
text("Colgate MaxFresh", 1375,880)
text("Schezwan Chutney", 1620,880)
    }


    hide(){

    }
}