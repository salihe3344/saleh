let btn=document.getElementById("btn")


document.addEventListener('change',function () {
    let fname=document.getElementById('fname').value 
   document.getElementById('first-name').innerText=fname

   let lname=document.getElementById('lname').value
   document.getElementById('last-name').innerText=lname
    
// select
   let countries=document.getElementsByName('countries')[0]
  let value=countries[countries.selectedIndex].value
  selelectedCantory.innerHTML=value
// select 
let massge=document.getElementById('massge').value
   document.getElementById('enterd-Massge').innerText=massge
    
})

// about

let pcImg=document.getElementById('pc-img') 
let pc=document.getElementById('pc')
pc.addEventListener('click',function () {
    pcImg.classList.remove('d-none')
})


let keybordimg=document.getElementById('keybord-img') 
let keyboard=document.getElementById('keyboard')
keyboard.addEventListener('click',function () {
    keybordimg.classList.remove('d-none')
})

let laptopimg=document.getElementById('laptop-img') 
let laptop=document.getElementById('laptop')
laptop.addEventListener('click',function () {
    laptopimg.classList.remove('d-none')
})



let tapletimg=document.getElementById('taplet-img') 
let taplet=document.getElementById('taplet')
taplet.addEventListener('click',function () {
    tapletimg.classList.remove('d-none')
})

// about





// service

// ----------create product----------
let sirnuminput=document.getElementById('sir-num-input')
let customernameinput=document.getElementById('customer-name-input')
let productnameinput=document.getElementById('product-name-input')
let productnuminput=document.getElementById('product-num-input')
let insertproduct=document.getElementById('insert-product')
let productContainer;


if (localStorage.getItem('sheet3') !==null) {
    productContainer=JSON.parse(localStorage.getItem('sheet3')) 
}else{productContainer=[]}
function creatProduct(hambozo) {
    let product={
        sirNumper:sirnuminput.value,
        cusomer_name:customernameinput.value,
        product_name:productnameinput.value,
        product_number:productnuminput.value,
    }
    productContainer.push(product)
    localStorage.setItem('sheet3',JSON.stringify(productContainer))
    displayDate(productContainer)
}
insertproduct.addEventListener("click",function () {
    creatProduct()
})

// ----------create product----------



//---------- display product----------
function displayDate(list) {
    let cartona=``
    for (let i = 0; i < list.length; i++) {
        cartona+=`<tr>
        <td>${productContainer[i].sirNumper}</td>
        <td>${productContainer[i].cusomer_name}</td>
        <td>${productContainer[i].product_name}</td>
        <td>${productContainer[i].product_number}</td>
    </tr>`
        
    }
    document.getElementById('tbody').innerHTML=cartona;
}
// ---------display product----------
// service



            
        