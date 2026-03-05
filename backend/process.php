<?php
require_once './db.php';

// Get data
$data = file_get_contents('php://input');
$dataArray = json_decode($data, true);

// $fName = mysqli_real_escape_string($conn, $dataArray['fNameValue']);
// $lName = mysqli_real_escape_string($conn, $dataArray['lNameValue']);
// $phone = mysqli_real_escape_string($conn, $dataArray['phoneValue']);
// $email = mysqli_real_escape_string($conn, $dataArray['emailValue']);
// $message = mysqli_real_escape_string($conn, $dataArray['messageValue']);
// Template
$sql = "INSERT INTO `contactinquiries`(`first_name`, `phone`, `email`, `message`) VALUES (?, ?, ?, ?)";

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $fName = $dataArray['fNameValue'];
    $phone = $dataArray['phoneValue'];
    $email = $dataArray['emailValue'];
    $message = $dataArray['messageValue'];

    // Create prepared statement
    $stmt = $conn->prepare($sql);

    // Check if successful
    if ($stmt === false){
        die("Error Preparing Statement: " . $conn->error);
    }

    // Bind
    $stmt->bind_param("ssss", $fName, $phone, $email, $message);

    if($stmt->execute()){
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }

    // Close
    $stmt->close();
    $conn->close();
}
?>