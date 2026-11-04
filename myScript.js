function add(a, b) {
  return a + b;
}
function showSum() {
  let a = 5;
  let b = 10;

  let result = add(a, b);

  document.getElementById("result").innerHTML = "Result: " + result;

  console.log(result);

  if (result > 100) {
    alert("Big number!");
  }
}
