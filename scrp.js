


    var elem = document.getElementsByClassName('minus-btn')
    console.log(elem)
    for (var i= 0; i< elem.length ; i++ ) {
    let el=elem[i]
    el.addEventListener("click",function(){
        if(el.nextElementSibling.value>1){
            el.nextElementSibling.value--;

        }
    })
}
var btn = document.getElementsByClassName('plus-btn')
console.log(btn)
for (var i= 0; i< btn.length ; i++ ) {
let x=btn[i]
x.addEventListener("click",function(){
        x.previousElementSibling.value++;
    
})
}
var lk = document.getElementsByClassName('like')
console.log(lk)
for (var i= 0; i< btn.length ; i++ ) {
    let y=lk[i]
    y.addEventListener("click",function(){
if(y.style.color!="red"){
    y.style.color="red"
}else{
    y.style.color="black"
}
    })
}

var dlt = document.getElementsByClassName('delete')
 console.log(dlt)
 for (var i= 0; i< dlt.length ; i++ ) {
     let z = dlt[i]
     z.addEventListener("click",function(){
      z.parentElement.remove();

    })

}

var price = document.getElementsByClassName('price')
console.log(price)
var totalprice = document.getElementById ('finalprice')
console.log('totalprice', totalprice)

for (var i= 0; i< price.length ; i++ ) {
    let y = price[i].innerHTML
    console.log(y)
    y.innerHTML== price[0].innerHTML + y ;
}


