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

  //Guardando en el Local Storage
  localStorage.setItem("Username",user);
  localStorage.setItem("Password",pass);


}

var username=localStorage.getItem("Username");
document.getElementById("saludos").innerHTML="Bienvenid@ "+username.toUpperCase();




window.addEventListener('load',function(){
  var enviar = document.getElementById('enviar');
  enviar.addEventListener('click',function() {
    var op = document.getElementById("privacidad").value;
    localStorage.setItem("estado",estado);
    var estado=localStorage.getItem("estado");
    estado=document.getElementById("estado").value;
    //document.getElementById("estado").value="";
    var mAmigos="";
    var mPublico="";
    localStorage.setItem("mPublico",mPublico);
    localStorage.setItem("mAmigos",mAmigos);
    var mAmigos=localStorage.getItem("mAmigos");
    var mPublico=localStorage.getItem("mPublico");

  /*
    Esto crea la siguiente estructura
    <div>
      <p>texto pasado a la funcion</p>
      <a href="#">Eliminar</a>
    </div>
  */
  function createPost(textos) {
    var post = document.createElement('div');
    var texto = document.createElement('input');
    
    post;
    if(op=="amigos"){
      post.className="publicacionA";
    }
    else{
      post.className="publicacionB";
    }
    texto.innerHTML = textos;
    post.style= "div-coder";
    var eliminar = document.createElement('a');
    var editar=document.createElement('a');
    editar.href="";
    editar.innerHTML="Editar  ";
    //Editar la publicaciòn
    editar.addEventListener('click',function(e) {
      e.preventDefault();
      var postParent = e.target.parent; // Devuelve el padre
  //    document.getElementById("estado").value="gtttt";
      texto.innerHTML = "editar";

    });

    post.appendChild(texto);
    post.appendChild(editar);
    eliminar.href="";
    eliminar.innerHTML = "Eliminar";
    eliminar.addEventListener('click',function(e) {
      e.preventDefault();
      var postParent = e.target.parent; // Devuelve el padre
      alert("elei");
    });
    post.appendChild(eliminar);

    return post;
  }

  var resultado = document.getElementById('resultado');
  resultado.appendChild(createPost(estado));

  });
});
