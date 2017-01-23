	<html>
	<?php
     

     $strcon = mysql_connect('localhost','root','','casorio') or die('Erro ao conectar ao banco de dados');
	  
	//$Nome = isset($_POST['Nome']) ? $_POST['Nome'] : '';
	$Nome = $_POST ['nome'];
	$Email = $_POST ['Email'];
	$Mensagem = $_POST ['Mensagem'];
	
	mysql_select_db("casorio", $strcon);
	mysql_query("INSERT INTO tb_faleconosco (ID, Nome, Email, Descricao) VALUES ('', '$Nome' , '$Email', '$Mensagem')", $strcon) or die ('qqdeu');
	
	mysql_close($strcon);
	
	?>
	<script language="javascript">
    window.location.href = "http://localhost/dani/main/contato.php"
	window.alert("Enviado com sucesso");
</script>
	 
	 
</html>