let imgContainer = document.querySelector(".container-2");
let UrlField = document.querySelector("#url-field");
let generateButton =  document.querySelector("#generate-btn");
let resetButton = document.querySelector("#reset-btn");
let QRImg = document.createElement('img')

function createQR(){
  if(UrlField.value === ""){
    alert("Its empty!");
  }
  else {
  QRImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${UrlField.value}`;
  imgContainer.appendChild(QRImg);
  }
}

function reset(){ 
  UrlField.value = "";
  QRImg.src = "";
}

resetButton.addEventListener(`click`, reset);
generateButton.addEventListener("click", createQR);