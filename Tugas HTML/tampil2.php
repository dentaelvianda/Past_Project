<html>
<head>
 <Title>Kingdom Hearts Orders</title>	
<style type="text/css">
body {
background: url("Gambar/background.jpg") no-repeat #2D5594;
background-attachment: fixed;
}
</style>
</head>
<embed src="dearly.mp3",loop="true", autostart="true", hidden="true">
<body bgcolor="white">
<table border=1 bordercolor=blue align=center>
<script language="JavaScript" type="text/javascript">
var txt = "Welcome to Kingdom Hears Orders .::.";
var speed = 250;
var refresh = null;
function move() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresh=setTimeout("move()",speed);}
move();
</script>
<body>
<tr>
	<td width=200, height=100 align=center colspan=4><img align=center src="Gambar/cc.png" width=850 height=350></td>
</tr>
<tr> 
<td width=200, height=100 align=center><font color="blue"> Nama</font> </td>
<td width=200, height=100 align=center><font color="blue"> Alamat</font></td>
<td width=200, height=100 align=center><font color="blue"> Komentar</font></td>

</tr>
<tr> 
<td width=200, height=100 align=center><font color="blue"> <html>
<head>
<title>Menampilakan data ke Halaman Browser</title>
</head>
<body>
<?php
// KONEKSI SERVER MYSQL
$conn = mysql_connect("localhost","root","12345");
if($conn) {
		echo "";
	}
	else
			{
			die(":". mysql_connect_error());
		}
		// KONEKSI DATABASE MYSQL
		
		$database ="dbproyek";
		$seleksi_db = mysql_select_db($database);
		if (!$seleksi_db) {
				 die ("");
		}
			else
					{
			echo "";
		}
		// MANIPULASI DATA DENGAN PERINTAH MYSQL DAN PHP
		$seleksi= "select nama,alamat,komentar from tbtamu order by nama";
		$hasilseleksi = mysql_query ($seleksi);
		if($hasilseleksi){
				while($row = mysql_fetch_row($hasilseleksi)){
						echo "$row[0]<br/>";
		}
		mysql_free_result($hasilseleksi);
		}
		mysql_close($conn);
		?>
		</body>
		</html></font></td>
<td width=200, height=100 align=center><font color="blue"> <html>
<head>
<title>Menampilakan data ke Halaman Browser</title>
</head>
<body>
<?php
// KONEKSI SERVER MYSQL
$conn = mysql_connect("localhost","root","12345");
if($conn) {
		echo "";
	}
	else
			{
			die(":". mysql_connect_error());
		}
		// KONEKSI DATABASE MYSQL
		
		$database ="dbproyek";
		$seleksi_db = mysql_select_db($database);
		if (!$seleksi_db) {
				 die ("");
		}
			else
					{
			echo "";
		}
		// MANIPULASI DATA DENGAN PERINTAH MYSQL DAN PHP
		$seleksi= "select nama,alamat,komentar from tbtamu order by nama";
		$hasilseleksi = mysql_query ($seleksi);
		if($hasilseleksi){
				while($row = mysql_fetch_row($hasilseleksi)){
						echo "$row[1],<br/>";
		}
		mysql_free_result($hasilseleksi);
		}
		mysql_close($conn);
		?>
		</body>
		</html></font></td>
<td width=200, height=100 align=center><font color="blue"><html>
<head>
<title>Menampilakan data ke Halaman Browser</title>
</head>
<body>
<?php
// KONEKSI SERVER MYSQL
$conn = mysql_connect("localhost","root","12345");
if($conn) {
		echo "";
	}
	else
			{
			die(":". mysql_connect_error());
		}
		// KONEKSI DATABASE MYSQL
		
		$database ="dbproyek";
		$seleksi_db = mysql_select_db($database);
		if (!$seleksi_db) {
				 die ("");
		}
			else
					{
			echo "";
		}
		// MANIPULASI DATA DENGAN PERINTAH MYSQL DAN PHP
		$seleksi= "select nama,alamat,komentar from tbtamu order by nama";
		$hasilseleksi = mysql_query ($seleksi);
		if($hasilseleksi){
				while($row = mysql_fetch_row($hasilseleksi)){
						echo "$row[2]<br/>";
		}
		mysql_free_result($hasilseleksi);
		}
		mysql_close($conn);
		?>
		</body>
		</html></font></td>
</tr>
</body>
</html>
	