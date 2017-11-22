var score = document.getElementById('score');

function addSign(val) {
  score.value += val;
}

function clearAll() {
  score.value = "";
}

function clearEnter() {
  val = score.value;
  score.value = val.slice(0, -1);
}

function pow() {
  val = score.value;
  score.value = Math.pow(val, 2);
}

function sqrt() {
  val = score.value;
  score.value = Math.sqrt(val);
}

function result() {
  val = score.value;
  score.value = eval(val);
}

score.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        result();
    }
});
