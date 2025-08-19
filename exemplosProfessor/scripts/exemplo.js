const exemploH2 = document.getElementById("exemplo-get");
console.log("Batata",exemploH2);
exemploH2.style.color = 'blue';

const novaH1 = document.createElement('h1');
novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
// console.log("NovaH1=====>", novaH1);
exemploH2.appendChild(novaH1);


// const header = document.getElementById("Header");
// header.style.backgroundColor = 'Red'
// console.log(header);

// const footerMudanca = document.getElementById("footerMudanca");
// footerMudanca.style.fontSize = '32px'
const buttonExemploJS = document.getElementById('buttonExemploJS');
buttonExemploJS.addEventListener('click',() => {
    alert("oi");
    prompt("Digite oi");
});
const form = document.querySelector("form");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("batata");
});
// const header = document.getElementById("Header");
// header.addEventListener('mouseover',()=>{
//     alert("pode nao")
// })
document.addEventListener('keydown',(event) => {
    console.log(`Tecla clicada ${event.key}`);
})

