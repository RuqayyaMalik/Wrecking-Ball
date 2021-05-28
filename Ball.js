class Ball{
    constructor(x,y,r){
    var options = {
    restitution : 0.5, //(bounce)
    density : 1.2 ,   //(weight)
    friction : 0.5      //(to stop moving)
    }
    this.x = x
    this.y = y
    this.r = r
    this.ball = Bodies.circle(this.x , this.y , this.r , options)
    World.add(world, this.ball)



    }
    display()
        {
        var Bpos = this.ball.position
        var angle = this.ball.angle
        push()
        translate(Bpos.x, Bpos.y)
        rotate(angle)
        ellipse(0,0,this.r, this.r)
        pop()
        }
    
}