var firstTabEl = document.querySelector('#myTab li:last-child a')
var firstTab = new bootstrap.Tab(firstTabEl)

firstTab.show()


let lastElem;
function myclick(elm){
    if (lastElem){
        lastElem.style.display='none';  
    }
    elm=document.getElementById(elm);
    elm.style.display='flex';
    lastElem=elm;
}
function myToggle() {
    var x = document.getElementById("jemi");
    if (x.style.display == "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }