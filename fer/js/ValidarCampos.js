;(function () {
function validar(dom,tipo){
	switch(tipo){
		case'numeros':var regex=/[A-Za-z]/g;break;
		case'texto':var regex=/\d/g;break;
	}
	dom.value=dom.value.replace(regex,'');
}
	</script>
<script type="text/javascript">
function vtelefone(v_obj){
v_obj.value=itelefone(v_obj.value)
}

function itelefone(v){
v=v.replace(/\D/g,"")
v=v.replace(/^(\d\d)(\d)/g,"($1) $2")
v=v.replace(/(\d{4})(\d)/,"$1-$2")
return v
}

function verifca(){

if (!(document.getElementById("nome").value)||(document.getElementById("nome" ).value.length < 3)){
alert("O seu nome deve conter pelo menos 3 caracteres.");
document.getElementById("nome").focus();
return false;
}

if (!(document.getElementById("telefone").value)||(document.getElementById("telefone" ).value.length <= 13)){
alert("Por favor, digite o seu telefone corretamente.");
document.getElementById("telefone").focus();
return false;
}

if (!(document.getElementById("email").value)){
alert("Por favor, informe seu e-mail.");
document.getElementById("email").focus();
return false;
}

if( document.getElementById("email").value ){
reEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+" )([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a- z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\ .|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0- 9]{2}|[0-9]{1,2})\]?$)/i ;
if (!reEmail.test(document.getElementById("email").value)){
alert("Formato de e-mail inválido. Por favor, digite novamente.");
document.getElementById("email").focus();
return false;
} else{
if( document.getElementById("email").value != document.getElementById("emailC").value ){
alert("E-mail não confere. Por favor, digite novamente.");
document.getElementById("emailC").focus();
return false;
}
}
}

document.formulario.submit();

}

}());