const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];
const colorsAlpha = [];
var angle = 0;
function setup() {
  var can = createCanvas(720, 720);
  colorMode(HSB, 1);
  for (var n = 0; n < 100; n++) {
    var hu = sqrt(n / 100);
    var col = color(hu, 10, 255, 240);
    colorsRed[n] = red(col);
    colorsGreen[n] = green(col);
    colorsBlue[n] = blue(col);
    colorsAlpha[n] = alpha(col);
    var t = (windowWidth - width) / 2;
  var v = (windowHeight - height) / 2;
  can.position(t, v);
  }
}
function draw() {
   var a0 = map(mouseX, 0, width, -1, 1); 
   var b0 = map(mouseY, 0, height, -1, 1);
  angle += 0.01;
  background(0);
  var w = abs(sin(angle)+1)*5;
  var h = w;
  var x_min = -w /2;
  var y_min = -h /2 ;
  loadPixels();
  var x_max = x_min + w;
  var y_max = y_min + h;
  var chanx = (x_max - x_min) / width;
  var chany = (y_max - y_min) / height;
  var y = y_min;
  for (var hei = 0; hei < height; hei++) {
    var x = x_min;
    for (var wi= 0;wi< width; wi++) {
      var a = x;
      var b = y;
       n = 0;
      while (n < 100) {
        if (a*a + b*b > 4) {
          break;
        }
        var ab = 2 * a * b;
        a = a*a - b*b + a0;
        b = ab + b0;
        n++;
      }
      var index= (wi + hei * width)*4 ;

        pixels[index+ 0] = colorsRed[n];
        pixels[index+ 1] = colorsGreen[n];
        pixels[index+ 2] = colorsBlue[n];
        //pixels[index+ 3] = colorsAlpha[n];

      x += chanx;
    }
    y += chany;
  }
  updatePixels();
}
