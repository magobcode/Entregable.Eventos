
class Empresa {
constructor(Business, Rating, Realizados,){
this.Business = Business;
this.Rating = Rating;
this.Realizados = Realizados;
    }
}
const Empresa1 = new Empresa ('Andreani', 6, 23600,);
const Empresa2 = new Empresa ('OCASA', 10, 90234,);
const Empresa3 = new Empresa ('CorreoARG', 8, 23145,);
const Empresa4 = new Empresa ('Carolo.srl', 2, 2340,);
const Empresa5 = new Empresa ('Traverso', 4, 12003,);
const Empresa6 = new Empresa ('Fedex', 9, 89030,);
const Empresa7 = new Empresa ('Express', 7, 23403,);

const Empresas = [];

Empresas.push(Empresa1);
Empresas.push(Empresa2);
Empresas.push(Empresa3);
Empresas.push(Empresa4);
Empresas.push(Empresa5);
Empresas.push(Empresa6);
Empresas.push(Empresa7);


function masinfo(Empresa) {
    const contenedordeEmpresas = document.getElementById('Business_container');
    contenedordeEmpresas.innerHTML = "";
    contenedordeEmpresas.innerHTML = ` <h3> ${Empresa.Business} </h3>
    <p><strong> Calificacion: ${Empresa.Rating}</strong></p><br>
    <p>Pedidos Entregados por ${Empresa.Business}:<strong> ${Empresa.Realizados}unid.</strong></p> `
}
function imprimirEmpresas(Empresas) {

const contenedordeEmpresas = document.getElementById('Business_container');
contenedordeEmpresas.innerHTML ="";


 Empresas.forEach(Empresa => {
 const div_Business = document.createElement('div');
    div_Business.classList.add("Business");   
    div_Business.innerHTML= `
    <h3> ${Empresa.Business} </h3>
    <p><strong> Calificacion: ${Empresa.Rating}</strong></p>
    `;

const buttonEmp = document.createElement("button");
buttonEmp.innerText = 'Ver Enviados';
buttonEmp.addEventListener("click", () => {
    masinfo(Empresa)
    console.log('click ok!');
    crearbuttonreturn()
});
contenedordeEmpresas.appendChild(div_Business);
div_Business.appendChild(buttonEmp);
 })
}

function crearbuttonreturn() {
const buttonreturn = document.createElement('button');
buttonreturn.classList.add('button_return');
buttonreturn.innerText = 'volver';
buttonreturn.addEventListener("click", () => {
    imprimirEmpresas(Empresas);
})
document.getElementById('Business_container').appendChild(buttonreturn);

}
imprimirEmpresas(Empresas);