<?php
	$fullname=$_POST['contact-name'];
	$email=$_POST['contact-email'];
	$phone=$_POST['contact-phone'];
	$date=$_POST['date'];
	$hour=$_POST['hour'];
	$model=$_POST['model'];
	$message=$_POST['msg'];

	$servername   = "localhost";
	$database = "mohammad_jebat_project";
	$username = "mohammad_user";
	$password = "123456m";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " .$conn->connect_error);
	}
	echo "Connected successfully";
	
	$sql = "INSERT INTO meeting (fullname, email, phonenumber, datee, hourr, model, messagee)
	VALUES ('.$fullname', '.$email', '.$phone', '.$date','.$hour' ,'.$model', '.$message')";
	
	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " .$sql . "<br>" .$conn->error;
	}
	header("Location: meeting.html");
	$conn->close();

?>