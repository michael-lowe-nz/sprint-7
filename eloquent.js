
function minimum (x,y){
  if (x < y) {
    return x;
  }
  else {
    return y;
  }
}

console.log(minimum(0,10));
console.log(minimum(0,-10));

var target = document.getElementById("minimum");
target.innerHTML = minimum(3,4);
target.innerHTML += "<br>"+minimum(10,100);

var target = document.getElementById("isEven");
target.innerHTML = "3 is Even: "+isEven(3);
target.innerHTML += "<br>4 is Even: "+isEven(4);
target.innerHTML += "<br>75 is Even: "+isEven(75);
target.innerHTML += "<br>-1 is Even: "+isEven(-1);
target.innerHTML += "<br>-100 is Even: "+isEven(-100);



function isEven (x) {
  x = Math.abs(x);
  if (x === 0){
    return true;
  }
  else if (x === 1){
    return false;
  }
  else {
    return isEven(x-2);
  }
}
