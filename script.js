let grid = [];
let cnv;
let gsz = 10;
let sz = 60;
let img;
let gen =1


function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  makeGrid();
  frameRate(1);
 textAlign(LEFT,BOTTOM);
  textSize(sz/2)
  stroke(255,255,0)
  strokeWeight(2)
  
}

function draw(){
  showGrid();
  updateGrid();
  //if (frameCount% 30==0){
   // makeGrid()
 // }
 gen++

}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
       
     grid[j][i] = 0
      
    }
  }
}

function updateGrid() {

  
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      // get the number
      let n = (j*10)+i+1
      //turn off condition
      if (n%gen ==0) {
        if (grid[j][i]==1){
          // its on so turn it off
           grid[j][i] = 0
        }else{
          // its off so turn it on
          grid[j][i] =1
        }
        
        } 
    }
  }
}

function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i] ==1){
        
        fill(255,255,0)
      }else{
      fill(0,0,0)
      }
      rect(i * sz, j * sz, sz, sz);
      fill(255,0,0)
      noStroke()
      text((j*10)+i+1,i*sz,j*sz+sz)
      stroke(127)
    }
  }
}
