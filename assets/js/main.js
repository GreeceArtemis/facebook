function validateForm(){
//Base de datos de mis usuarios
  var usuarios=[{nickname:"ari",email:"ariana.1@gmail.com",password:"123456"},
               {nickname:"cindy",email:"cindy.2@gmail.com",password:"13579"},
               {nickname:"liliana",email:"lili.3@gmail.com",password:"246810"}];
//Datos Ingresados
 var aux1=document.forms["loginFace"]["usuario"].value;
 var aux2=document.forms["loginFace"]["password"].value;
 var validacion1=false;
 //Verificamos si los datos coinciden con mi base de datos
 if(aux1==""||aux2==""){
   alert("Ingrese los datos solicitados");
   return false;
 }
 usuarios.map(function(e){
  if(e.nickname==aux1&&(e.password==aux2)){
    validacion1=true;
    }
    });
    if(validacion1) {
      alert("Correcto");}
    else{
      alert("Dato INCORRECTO");
      return false}
  //Valores ingresados en el input
  var user=document.getElementById("usuario").value;
  var pass=document.getElementById("password").value;
  var user=document.getElementById("usuario").value;
  var pass=document.getElementById("password").value;
  //Guardando en el Local Storage
  localStorage.setItem("Username",user);
  localStorage.setItem("Password",pass);
  var username=localStorage.getItem("Username");
  var password=localStorage.getItem("Password");
  document.getElementById("saludos").innerHTML=username;


}
