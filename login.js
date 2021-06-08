class Login{
    constructor(){
        this.Name1 = createInput("Name");    
    this.enter=createButton("ENTER")
       this.user=''
          
    }
    show(){

    
        this.enter.position(900,590)
        this.enter.size(100,50)
        this.enter.style("background-color:lime")
        this.Name1.position(displayWidth/3+200,500)
        this.Name1.size(300,50)
       this.user = this.Name1.value()
        console.log(name)
    }
    hide(){
    this.enter.hide()
    this.Name1.hide()

    }
}