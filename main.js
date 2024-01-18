//-------------------- Java Script --------------------//
let Name = document.querySelector(".name");
let id = document.querySelector(".id");
let inr = document.querySelector(".inr");
let buttonQR = document.querySelector(".generate-qr");
let areaQR = document.querySelector(".qr-area");
let imgQR = document.querySelector(".qr-img");
let errorText = document.querySelector(".error");
const url = `upi://pay?pa=${id.value}&pn=${Name.value}&cu=INR=&am=${inr.value}`
buttonQR.addEventListener("click", ()=>{
    if (id.value === "") {
        errorText.style.display = "block";
        areaQR.style.height = "0";
    }else {
        imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa%3D${id.value}%26pn%3D${Name.value}%26cu=INR=%26am%3D${inr.value}`
        areaQR.style.height = "200px";
        errorText.style.display = "none";

       
    }
})

       
