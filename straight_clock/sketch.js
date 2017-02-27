var ijump= 0
var jjump= 0
var kjump= 0


function setup() {
  createCanvas(940,600)
  background(50)
  textAlign(CENTER)

  }

function draw() {
  background(50)
  textSize(8)
  fill(230)
 
 
 var h = hour()
 var m = minute()
 var s = second()
 noStroke()
 
 for (i = 0; i<61; i++){
 ijump= 15 + ijump
 text (i,ijump,100)

 }
 
 ijump=0
 
 for (j = 0; j<61; j++){
 jjump= 15 + jjump
 text (j,jjump,200)}
 
 jjump=0
 

  for (k = 0; k<25; k++){
    kjump= 15 + kjump
    text (k,kjump,300)
  }
 
 kjump=0
 
 //hour marker position
 var hm = map(h,0,24,15,378)
 var mm = map(m,0,60,15,930)
 var sm = map(s,0,60,15,930)
 
 stroke(255)
 //hour marker
 line(hm,350,hm,250)
 line(mm,220,mm,180)
 line(sm,90,sm,110)

 }