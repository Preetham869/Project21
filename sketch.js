
 var bullet1,bullet2;
 var wall1,wall2;
 var bullet1Speed,bullet1Weight;
 var bullet2Speed,bullet2Weight;
 var wall1Thickness,wall2Thickness;
 var damage;
 var border1,border2;

 function setup() {
  
 createCanvas(1600,900);

 wall1 = createSprite(1508,105,20,190)
 wall1.shapeColor = color(139,69,19);
 bullet1 = createSprite(50,100,40,4);

 wall2 = createSprite(1508,320,20,180)
 wall2.shapeColor = color(139,69,19);
 bullet2 = createSprite(50,330,40,4);

 border1 = createSprite(1500,215,3000,15)
 border2 = createSprite(1500,425,3000,15)

 bullet1Speed = 23
 bullet1Weight = 32 

 bullet2Speed = 23
 bullet2Weight = 32

 wall1Thickness = 70
 wall2Thickness = 40

} 

 function draw() {
  
 background(255,255,255); 

 console.log(bullet2.x-wall2.x);
 
 console.log(bullet1.x - wall1.x);
 
 bullet2.velocityX = bullet2Speed;
 bullet1.velocityX = bullet1Speed;
 

 if(wall1.x-bullet1.x < (bullet1.width + wall1.width)/2) {
  
 bullet1.velocityX = 0;
 var damage = 0.5 * bullet1Weight*bullet1Speed*bullet1Speed / wall1Thickness * wall1Thickness * wall1Thickness
 
 if(damage === 3.68) {
 
 bullet1.shapeColor = color(0,255,0)

 }

 if(damage === 12.43) {

 bullet1.shapeColor = color(255,0,0)

 }
 
 }
 
 if(wall2.x-bullet2.x < (bullet2.width + wall2.width)/2) {
 
 bullet2.velocityX = 0;
 var damage = 0.5 * bullet2Weight*bullet2Speed*bullet2Speed / wall2Thickness * wall2Thickness * wall2Thickness

 if(damage === 3.68) {
  
 bullet2.shapeColor = color(0,255,0)

 }

 if(damage === 12.43) {

 bullet2.shapeColor = color(255,0,0)

 }

 } 
 
 wall1.depth = bullet1.depth + 1
 wall2.depth = bullet2.depth + 1

 drawSprites();

 }

 