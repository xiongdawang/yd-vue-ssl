<?php
error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);

$id = $_POST['id'];
$num = $_POST['num'];
$code = 0;

//echo json_encode(array('id'=>$id, 'num'=>$num, 'code'=> $code));exit;

$con = mysqli_connect("localhost", "root", "");
if (!$con) {
	die('Could not connect: ' . mysqli_connect_error());
}
mysqli_set_charset($con, "utf8");
mysqli_select_db($con, "yd");

$get_data = mysqli_query($con, "SELECT * FROM thumb WHERE id = " . $id);

$result = "";
if ($get_data->num_rows) {
	$arr = $get_data->fetch_assoc();
	$result = mysqli_query($con, "UPDATE thumb SET num = " . $num . " WHERE id = " . $id);
	$code = 1;
} else {
	$result = mysqli_query($con, "INSERT INTO thumb (id, num) VALUES ($id, $num)");
	$code = 1;
}

echo json_encode(array('id' => $id, 'num' => $num, 'code' => $code));

mysqli_close($con);
