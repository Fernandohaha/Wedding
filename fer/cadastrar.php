	<html>
	<?php
     

     $strcon = mysql_connect('localhost','root','','casorio') or die('Erro ao conectar ao banco de dados');
	  
	$Nome = $_POST['nome'];
	$Email = $_POST['email'];
	
		
	mysql_select_db("casorio", $strcon);
	mysql_query("INSERT INTO confir (ID, Nome,Email) VALUES ('', '$Nome' , '$Email')", $strcon) or die ('daserro');
	
	mysql_close($strcon);
	
	?>
	<script language="javascript">
    window.location.href = "http://localhost/dani/fer/ALO.php"
	window.alert("Confirmado com Sucesso");
</script>
	 
	 
</html>