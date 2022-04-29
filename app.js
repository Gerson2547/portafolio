

//  Area del menu pegajoso ....
var menu = document.getElementById('menu');
var  altura = menu.offsetTop;
var titulo = document.getElementById('titulo');

window.addEventListener('scroll', () =>{

   if(window.pageYOffset > altura){
       menu.classList.add('fixed');
       titulo.classList.add('titulo');
   }else{                                  
       menu.classList.remove('fixed');
       titulo.classList.remove('titulo1');
   }
});
// validacion del formulario con puro javascript 
(function (){
 var formulario = document.getElementById('formulario');
 var nombre = formulario.nombre;
 var correo = formulario.correo;
 var texto = formulario.texto;
 var error = document.querySelector('#error');
 
 formulario.addEventListener('submit', (e)=>{
   
   error.innerHTML='';
   validarNombre(e);
   textarea(e);
   Correo(e);
   e.preventDefault();
 });
 //primera validacion que es de nombre
 function validarNombre(e){
   if(nombre.value.length =='' || nombre.values.length == null){
     error.innerHTML +='<li> Fill in the name field </li>';
     error.style.display='block';
    e.preventDefault();
   }else{
       error.style.display='none';
   }
 }
 // segunda validacion que es con el correo
 function Correo(e){
   if(correo.value.length =='' || correo.values.length == null){
     error.innerHTML +='<li> Fill in the email field </li>';
     error.style.display='block';
    e.preventDefault();
   }else{
       error.style.display='none';
   }
 }
 // tercera validacion que con el textarea
 function textarea(e){
   if(texto.value.length =='' || texto.values.length == null){
     error.innerHTML +='<li> Fill in the text field </li>';
     error.style.display='block';
    e.preventDefault();
   }else{
       error.style.display='none';
   }
 }
}());

// ventana del contacto

(function(){

  var contenedorTelefono = document.querySelector('#contenedor-telefono');
  var  icono = document.querySelector('#icono');
  var  btn = document.querySelector('#btn');
  var  modal = document.querySelector('#modal');
  function saludar(){
    contenedorTelefono.style.display='block';
    modal.style.display='block';
  }
  icono.addEventListener('click',()=>{
    contenedorTelefono.style.display='none';
    modal.style.display='none';
  })
  btn.addEventListener('click',()=>{
   contenedorTelefono.style.display='block';
   modal.style.display='block';
 })
 
   modal.addEventListener('click',()=>{
     modal.style.display='none';
   })
   setTimeout(saludar,20000);
}());
