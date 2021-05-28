class Slingshot{
constructor(bodyA, pointB)
{
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.04,
    length : 1
    
    }
    this.sling = Constraint.create(options)
    World.add (world , this.sling)
    this.pointB = pointB
    
    }
    
    
    display(){
   
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        line(pointA.x , pointA.y , pointB.x, pointB.y)
    }
    
    }
    
    




