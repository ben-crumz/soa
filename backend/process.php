<?php
require_once 'db.php';

// Get data
$data = file_get_contents('php://input');
$dataArray = json_decode($data, true);

// $fName = mysqli_real_escape_string($conn, $dataArray['fNameValue']);
// $lName = mysqli_real_escape_string($conn, $dataArray['lNameValue']);
// $phone = mysqli_real_escape_string($conn, $dataArray['phoneValue']);
// $email = mysqli_real_escape_string($conn, $dataArray['emailValue']);
// $message = mysqli_real_escape_string($conn, $dataArray['messageValue']);

$fName = $dataArray['fNameValue'];
$lName = $dataArray['lNameValue'];
$phone = $dataArray['phoneValue'];
$email = $dataArray['emailValue'];
$message = $dataArray['messageValue'];

// Template
$sql = "INSERT INTO `contactinquiries`(`first_name`, `last_name`, `phone`, `email`, `message`) VALUES (?, ?, ?, ?, ?)";

// Create prepared statement
$stmt = $conn->prepare($sql);

// Check if successful
if ($stmt === false){
    die("Error Preparing Statement: " . $conn->error);
}

// Bind
$stmt->bind_param("sssss", $fName, $lName, $phone, $email, $message);

// Execute
if ($stmt->execute()){
    // echo "New contact submission succesful.";
} else {
    // echo "Error: " . $stmt->error;
}

// Close
$stmt->close();
$conn->close();
?>