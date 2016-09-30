function minimum (x,y){
  if (x < y) {
    return x;
  }
  else {
    return y;
  }
}

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

function countBs (str){
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === "B"){
      count ++;
    }
  }
  return count;
}

function countChar (str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === char){
      count ++;
    }
  }
  return count;
}

var target = document.getElementById("minimum");
target.innerHTML = minimum(3,4);
target.innerHTML += "<br>"+minimum(10,100);

var target = document.getElementById("isEven");
target.innerHTML = "3 is Even: "+isEven(3);
target.innerHTML += "<br>4 is Even: "+isEven(4);
target.innerHTML += "<br>75 is Even: "+isEven(75);
target.innerHTML += "<br>-1 is Even: "+isEven(-1);
target.innerHTML += "<br>-100 is Even: "+isEven(-100);

var target = document.getElementById("countBs");
target.innerHTML = countBs("BBC");
target.innerHTML += "<br>"+countBs("bonelessBBBBBB");
target.innerHTML += "<br>"+countBs("vmaek");

var target = document.getElementById("countChar");
target.innerHTML = countChar("BBC","C");
target.innerHTML += "<br>"+countChar("bonelessBBBBBB","9");
target.innerHTML += "<br>"+countChar("vmaek","k");
