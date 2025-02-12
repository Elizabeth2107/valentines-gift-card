let HTMLbody = document.querySelector('body')
function yesBtn(){
  HTMLbody.innerHTML = `
    <img src="images/image-two.gif" class="image-one">
    <p class="card">Yay! You've officially signed up for unlimited love and laughter
    this Valentine's Day. No refunds!😘</p>
    <h3>I Love You Baby</h3>`
  //console.log(HTMLbody)
}

let yesButton = document.querySelector('.yes-btn')
let noBtn2 = document.querySelector('.no-btn2')
let yesSize = 16
let noSize= 16
let noTexts = ["No?", "Are you sure?", "Really", "Think again!", "Last chance", "Oops!"]
let textIndex = -1

function noBtn(){
  HTMLbody.innerHTML =`<img src="images/image-three.gif" class="image-one">
  <div class="buttonss">
  <button onclick="yesBtn()" class="yes-btn">Yes</button>
  <button onclick="yesBtn()" class="no-btn2">Pookie? I guess you have no choice now</button>
  </div>`

}



