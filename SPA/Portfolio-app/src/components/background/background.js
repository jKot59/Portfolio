import React from 'react';
import styled from 'styled-components';
import cloudlarge from './img/cloud-large.png'
import cloudmedium from './img/cloud-medium.png'
import cloudsmall from './img/cloud-small.png'
import sunImg from './img/sun.png'
import hill from './img/hill.png'
import hill2 from './img/hill2.png'
import seaImg from './img/sea.png'
import treeImg from './img/tree.png'
import bird from './img/bird.png'

const AppBackground = styled.canvas`
    cursor: default;
  
`

function Background() {
  React.useEffect(() => {
    let canvas = document.getElementById("myCanvas");
    // alpha: false for optimization
    let ctx = canvas.getContext("2d", {alpha: false});
    
    
    class Cloud {
      constructor(pos, height, img, width, heightPicture) {
        this.pos = pos
        // высота отрисовки
        this.height = height ;
        this.image = new Image()
        this.image.src = img
        this.speed = Math.round((Math.random() * 2) + 1)
        this.width = width
        // высота Decорации
        this.heightPicture = heightPicture ;
      }
      
      spawn () {
        if(this.pos > canvas.width) {
          this.pos = -300
          this.height = randomHeight()
          this.speed = Math.round((Math.random() * 2) + 1)
        } else {
          this.pos+= this.speed
        }
        return ctx.drawImage(this.image, this.pos, this.height, this.width * ((canvas.width + canvas.height) / (1920 + 1080)), this.heightPicture * ((canvas.width + canvas.height) / (1920 + 1080)))
      }
    }

    class Bird extends Cloud{
      constructor(pos, height, img, sizeX, sizeY) {
        super(pos, height, img)
        this.sizeX = sizeX
        this.sizeY = sizeY
        
      }

      spawn () {
        if(this.pos > canvas.width) {
          this.pos = -300
          this.height = randomHeight()
          this.speed = Math.round((Math.random() * 2) + 1)
        } else {
          this.pos+= this.speed
        }
        
        // 296 * birdWing задает позицию кадра внутри картинки по х, 0 по y, 295, 300 - размер кадра, cloudStartPosition координаты самой картинки , последние два параметра - это размер изображения
        //   * ((canvas.width + canvas.height) / (1920 + 1080)) - позволяет адаптировать фон
        ctx.drawImage(this.image, 297 * birdWing , 0, 296, 300, this.pos, this.height, this.sizeX  * ((canvas.width + canvas.height) / (1920 + 1080)), this.sizeY * ((canvas.width + canvas.height) / (1920 + 1080)))
        
      }
    }

    class Decoration extends Cloud {
      constructor(pos, height, img, widthDec, heightDec, otherSideX = 0, sizeX = 0, otherSideY = 0, sizeY = 0) {
        super(pos, height, img)
        // ширина Decорации
        this.widthDec = widthDec ? widthDec : 0
        // высота Decорации
        this.heightDec = heightDec
        // рисовать от левой или правой границы (0 или -1)
        this.otherSideX = otherSideX
        // коэфициент масштаба по X
        this.sizeX = sizeX
        this.otherSideY = otherSideY
        this.sizeY = sizeY
      }
      
      draw() {
        let image = this.image
        // позиция по Х - привязка к левой или правой стороне экрана
        let startPointX =  canvas.width + (this.otherSideX * canvas.width)  + this.pos * ((canvas.width + canvas.height) / (1920 + 1080))
        //  позиция по Y тоже с привязкой через otherSideY
        let startPointY = canvas.height + (this.otherSideY * canvas.height) + this.height - this.heightDec  * ((canvas.width + canvas.height) / (1920 + 1080)) 
        // ширина изображения. Растянуть на всю ширину за счет sizeX = 1. Адаптивный размер за счет деления канваса на размеры экрана
        let width = this.sizeX === 1 ? (this.widthDec + (canvas.width * this.sizeX)) : this.widthDec * ((canvas.width + canvas.height) / (1920 + 1080))
        // высота изображения
        let height = this.heightDec  * ((canvas.width + canvas.height) / (1920 + 1080))

        ctx.drawImage(image, startPointX, startPointY, width, height)
        // ctx.drawImage(this.image, canvas.width + (this.otherSideX * canvas.width) + this.pos, canvas.height + (this.otherSideY * canvas.height) + this.height, this.widthDec + (canvas.width * this.sizeX), this.heightDec)
      }
      
    }
    
    // width point, height point, image, width image, height image 
    // шестой аргумент должен быть или 0 или -1. он отвечает за рисование с другой стороны канваса
    let bigCloud = new Cloud (400, 50, cloudlarge, 200, 200),
        BigCloudSecond = new Cloud(-400, 0, cloudlarge, 200, 200),
        BigCloudThird = new Cloud(canvas.width, 0, cloudlarge, 200, 200),
        smallCloud = new Cloud(-100, 70, cloudsmall, 100, 100),
        smallCloudSecond = new Cloud(50, -20, cloudsmall, 100, 100),
        smallCloudThird = new Cloud(500, 10, cloudsmall, 100, 100),
        mediumCloud = new Cloud(700, -50, cloudmedium, 150, 150),
        mediumCloudSecond = new Cloud(-600, 0, cloudmedium, 150, 150),
        mediumCloudThird = new Cloud(-400, 100, cloudmedium, 150, 150),
        eagle = new Bird(300, 300, bird, 146, 150),
        eagleSmaller = new Bird(200, 200, bird, 96, 100),
        sun = new Decoration(-350, 350, sunImg, 350, 350, 0, 0, -1),
        // 0 - x отрисовка, 270 - y отрисовка, картинка, 574 - ширина, 290 - высота, -1 - рисовать по Х с другой стороны
        leftHIll = new Decoration( 0, 0, hill, 574, 290, -1),
        rightHIll = new Decoration(-711, 0, hill2, 711, 421, 0),
        sea = new Decoration( 0, 0, seaImg, 0, 500, -1, 1),
        tree = new Decoration( 50, 0, treeImg, 400, 400, -1),
        birdWing = 0


      setInterval(()=> {
        birdWing > 4 ? birdWing = 0 : birdWing++
      }, 100)
      let backgroundMove = () => {
        window.requestAnimationFrame(backgroundMove)
        ctx.save()
        ctx.fillStyle = 'skyblue'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // image, x, y, width, height, 1frame pos x, 1frame pos y, 1frame width, 1frame height
        sun.draw()
        bigCloud.spawn()
        BigCloudSecond.spawn()
        BigCloudThird.spawn()        
        smallCloud.spawn()
        smallCloudSecond.spawn()
        smallCloudThird.spawn()
        mediumCloud.spawn()
        mediumCloudSecond.spawn()
        mediumCloudThird.spawn()
        eagle.spawn()
        eagleSmaller.spawn()
        sea.draw()
        leftHIll.draw()
        rightHIll.draw()
        tree.draw()
      }
      backgroundMove()

      function resizeCanvas() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        canvas.style.width =  window.innerWidth
        canvas.style.height = window.innerHeight
      }
      function randomHeight () {
        return Math.round(Math.random() * (canvas.height/3) + 50)
      }
      //Setting the canvas site and width to be responsive 
    window.addEventListener('resize', resizeCanvas)
    //calling first time for getting dimentions
    resizeCanvas()
    }, []);
    
    return (
      <AppBackground id="myCanvas" style={{display: 'block'}}>
        Your browser does not support the HTML canvas tag.
      </AppBackground>
    );
}
export default Background;


