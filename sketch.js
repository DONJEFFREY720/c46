var backgroundImage
var score = 0
var flyingcar
var coins
var coinGroup
var bird
var cloud
var birdGroup
var cloudGroup




function preload(){
     backgroundImage = loadImage("images/sky.png")
     car = loadImage("images/flying-car.png")
     coin = loadImage("images/coin.png")
     coinmusic = loadSound("images/videoplayback.mp3")
     eagle = loadImage("images/Eagle.gif")
     scloud = loadImage("images/cloud.gif")
     eaglesound = loadSound("images/Eagle Tone.mp3")
     
     

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  flyingcar = createSprite(100,500,10,10)
  flyingcar.addImage(car)
  flyingcar.scale =0.5

  coinGroup = new Group()
  birdGroup = new Group()
  cloudGroup = new Group()

  
  
  
 
}

function draw() {
 
     background(backgroundImage); 
     

    flyingcar.y = World.mouseY

    if (frameCount % 100 === 0) {
    coins = createSprite(1300, random(windowHeight), 100, 100);
    coins.addImage(coin)
     coins.velocityX = -12;
     coins.scale =0.1
     coins.depth = flyingcar.depth
     coins.depth-=1
     coins.lifetime=150
     coinGroup.add(coins)
    


  }

  if (frameCount % 120 === 0) {
     bird = createSprite(1300, random(windowHeight), 100, 100);
     bird.addImage(eagle)
      bird.velocityX = -12;
      bird.scale =0.4
      bird.depth = flyingcar.depth
      bird.depth-=1
      bird.lifetime=150
      birdGroup.add(bird)
  }

  if (frameCount % 150 === 0) {
     cloud = createSprite(1300, random(windowHeight), 100, 100);
     cloud.addImage(scloud)
      cloud.velocityX = -12;
      cloud.scale =0.2
      cloud.depth = flyingcar.depth
      cloud.depth-=1
      cloud.lifetime=150
      cloudGroup.add(cloud)
      
  }
  
  if(birdGroup.isTouching(flyingcar)) {
     
          eaglesound.play()
          //gameOver()
  }

  if(cloudGroup.isTouching(flyingcar)) {
     //gameOver()
     
}

  

  if(coinGroup.isTouching(flyingcar)) {
     coinmusic.play()
     score+=1
     coinGroup.destroyEach()
     }

     drawSprites()
     textSize(35);
     fill("white");
     text("YOUR SCORE : " +score,10,50);




}

function gameOver() {
     
}









