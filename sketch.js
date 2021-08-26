const w = 5000
const s = 25
const d = w/s

function setup() {
  createCanvas(w, w, SVG);
  // O2 Light Gold
  background(233, 203, 130);
  // 01 Light Green
  // background("#52b788");
}

function draw() {
  for(let y = 0;y < height;y += d){
    if(y % (d*2) === 0){
      for(let x = 0;x < width;x += d*2){
        drawRect(x,y)
      }
    } else {
      for(let x = d;x < width;x += d*2){
        drawRect(x,y)
      }
    }
  }
  save("ichimatsu_02.svg");
  print("saved svg");
  noLoop();
}

function drawRect(i,j){
  noStroke()
  // 02 Dark Gold



  fill(240,213,136)
  // 01 Dark Green
  // fill("#344e41")
  rect(i,j,d,d)
}