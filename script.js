var a;
function clickbutton(){
    //get value from input field and save as "a"
  a= document.getElementById('name').value;
  //create LS key with value of 'a'
  localStorage.setItem('uName',a);
  //automatically take user to page two
  location.href="two.html";
}
function givename(){
  var b = localStorage.getItem(uName);
  document.getElementById('placeholder').innerHTML = "Hello " + b;
}
