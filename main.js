let vojnici = [];
let wrapp = document.querySelector('#wrapp');
let info = document.querySelector('#info');
let body = document.querySelector('body');


function Vojnik(name){
    this.name = ['Danilo', 'Rade', 'Luka', 'Milos', 'Marko'][Math.floor(Math.random() * 5)];;
    this.health = Math.floor(Math.random()*(1000 - 700) + 700);
    this.demage = Math.floor(Math.random() * (200 - 50) + 50);
    this.weapon = ["Knife", "Gun", "Sniper"][Math.floor(Math.random()*3)];
}
let vojnik = new Vojnik();
console.log(vojnik);

createSoldiers(3010);

function createSoldiers(num){
    for (let i = 0; i < num; i++) {
        vojnici.push(new Vojnik());
        // let x = new Vojnik();
        // vojnici.push(x);
    }
}
console.log(vojnici);
for (let i = 0; i < vojnici.length; i++) {
    let v = document.createElement('div');
    v.id = i;
    v.addEventListener('mouseover' , display);
    v.addEventListener('mouseout' , removeDisplay);
    if (vojnici[i].weapon == "Sniper") {
        v.className = "sniper";    
    }else{
        v.className = "vojnik";
    }
    wrapp.appendChild(v);
}
function display(){
    info.style.top = event.clientY - 8 + 'px';
    info.style.left = event.clientX + 12 + 'px';
    info.style.display = 'block'; 
    // console.log(vojnici[this.id]);
    info.innerHTML = '<p>name: ' + vojnici[this.id].name + '</p>';
    info.innerHTML += '<p>health: ' + vojnici[this.id].health + '</p>';
}

function removeDisplay(){
    info.style.display = 'none';
}
