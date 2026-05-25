let btns= document.querySelectorAll("button");
let web= document.querySelector("#web");
let p = document.querySelector(".calculate");
let result = document.querySelector("#result");


let screenVal = " ";
let calc ="";

function run(){
for(btn of btns){
    btn.setAttribute("class","btn-shape");
    btn.classList.add("glass-card")
    
    btn.addEventListener("click",function(event){
        const val=  event.target.value;
        
        if(val === "="){
        try{
           screenVal= calc;
           screenVal= math.evaluate(screenVal);
        }
        catch{
            screenVal = "Error";
        }
        }
        
        else if(val === "AC"){
            screenVal= "";
            calc="0";
            result.classList.add("hidden");
            p.classList.remove("set");
          } 
          else if(val=="~"){
              calc= calc.slice(0,-1);
              result.classList.add("hidden");
              console.clear();
            p.classList.remove("set");
          }
            else{
                calc += val;
            }
        
        if(val === "="){
          setTimeout(()=>{
              result.innerText= screenVal;
              result.classList.remove("hidden");
              p.classList.add("set");
          },1);
          }
          p.innerText= calc;
          updateDisplay(calc);          
    });
}
console.log("property set successful");
}

run();


// Running 🌀 function here for prompt user.

web.onclick = function(event){
   let res=  prompt("Are you sure? Type Yes or No").toLowerCase();
   
   event.preventDefault();

    if(res == "yes"){
    let text = prompt("Enter Your Any Query/Question :)")
      
if (text) {
        
    // 1. Stylish UI Inject karein
    document.body.innerHTML = `
        <div id="ai-loader">
            <div class="orb"></div>
            <h2 id="ai-text">AI is processing your request...</h2>
            <p>"${text}"</p>
        </div>
        <style>
            body { background: #050505; color: white; font-family: 'Segoe UI', sans-serif; overflow: hidden; }
            #ai-loader { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
            
            /* AI Orb Animation */
            .orb {
                width: 100px; height: 100px;
                background: radial-gradient(circle, #10a37f 0%, #050505 70%);
                border-radius: 50%;
                filter: blur(15px);
                animation: pulse 2s ease-in-out infinite;
                margin-bottom: 20px;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.5); opacity: 1; filter: blur(25px); }
            }
            
            h2 { font-weight: 300; letter-spacing: 1px; color: #10a37f; }
            p { color: #888; font-style: italic; }
        </style>
    `;

    // 2. Status update karein (User ko busy rakhne ke liye)
    setTimeout(() => { document.getElementById('ai-text').innerText = "Connecting to Server Secure Node..."; }, 2500);
    setTimeout(() => { document.getElementById('ai-text').innerText = "Passing query parameters..."; }, 4000);

    setTimeout(()=>{
        document.getElementById('ai-text').innerText=" Choose below  any Ai-model...";},5300);
    // 3. Final Redirect
    // Pehle wale loader code ke niche ise add kar sakte hain
const toggleContainer = document.createElement('div');
toggleContainer.style.cssText = `
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    width: 360px;
    display: flex;
    gap: 10px;
    background: #ffa995;
    padding: 10px;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    z-index: 100;
    font-family: sans-serif;
`;

const options = [
    { id: 'perplexity',
     label: 'Perplexity (Fast)', 
     url:'https://perplexity.ai/search?q='+encodeURIComponent(text) 
     },
     
    {
     id: 'chatgpt',
      label: 'ChatGPT (Deep-Think)',
       url: 'https://chatgpt.com/?model=auto&q='+encodeURIComponent(text)
        }
];

options.forEach(opt => {
    const wrapper = document.createElement('label');
    wrapper.style.cssText = `
        cursor: pointer;
        display: flex;
        justify-content: space-between;
     //   margin-left: 14px;
        align-items: center;
        padding: 8px 15px;
        background:  black;
        border-radius: 40px;
        transition: 0.3s;
    `;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'ai-toggle';
    radio.style.marginRight = '8px';
    
    radio.onclick = () => {
        window.location.assign(opt.url);
    };

    wrapper.appendChild(radio);
    wrapper.append(opt.label);
    toggleContainer.appendChild(wrapper);
});


setTimeout(()=>{
document.body.appendChild(toggleContainer);
},6000);

    
    /*
    setTimeout(() => {
        window.location.assign(perplexity);
   },4500);
    // 4.5 seconds ka delay smooth feel dega
    */
 }
 
  
    }
    else if(res === "no"){
        web.style.color = "grey";
        web.setAttribute("disabled"," ");
        alert("Okay, Command Cancelled");
    }
    
    
    else if(res == "av"){
     let text = "You must be 18+, If not cancel the request";
    // 1. Stylish UI Inject karein
    document.body.innerHTML = `
        <div id="ai-loader">
            <div class="orb"></div>
            <h2 id="ai-text">AI is processing your request...</h2>
            <p>"${text}"</p>
        </div>
        <style>
            body { background: #050505; color: white; font-family: 'Segoe UI', sans-serif; overflow: hidden; }
            #ai-loader { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
            
            /* AI Orb Animation */
            .orb {
                width: 100px; height: 100px;
                background: radial-gradient(circle, #10a37f 0%, #050505 70%);
                border-radius: 50%;
                filter: blur(15px);
                animation: pulse 2s ease-in-out infinite;
                margin-bottom: 20px;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.5); opacity: 1; filter: blur(25px); }
            }
            
            h2 { font-weight: 300; letter-spacing: 1px; color: #10a37f; }
            p { color: #888; font-style: italic; }
        </style>
    `;

    // 2. Status update karein (User ko busy rakhne ke liye)
    setTimeout(() => { document.getElementById('ai-text').innerText = "Connecting to Server Secure Node..."; }, 3000);
    setTimeout(() => { document.getElementById('ai-text').innerText = "Connecting to 123av.com..."; }, 4500);

    setTimeout(()=>{
        document.getElementById('ai-text').innerText= "Opening the page, Please wait...";},4500);
    
    
    setTimeout(()=>{
        window.location.href= " https:/123av.com/en/dm1";
        },5000);
         }
         
     else{
        alert("Not a valid response || Try again!");
    }   
}

function updateDisplay(value) {
  let length = value.length;
  let fontSize= 38;
  
    if(length > 12){
     fontSize = Math.max(22, 38 - (length - 12) * 2);
      }
           p.style.fontSize= fontSize + "px";
 }