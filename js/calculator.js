function sum() {
  var n1=document.getElementById('num1').value;
  var n2=document.getElementById('num2').value;
  var result = Number(n1) + Number(n2);
  console.log('Sum is : ' + result);
  document.getElementById('res').innerHTML = "La suma es: " + result;
}
