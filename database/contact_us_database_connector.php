<?php

 
 $servername = "localhost"; // 162.241.123.26  , localhost
$database = "lounpqqu_fitness_plan_database";
$username = "lounpqqu_database";
$password = "WffABhF6rPM#8LGP6k3D";
$table_name = "ContactUsTable";
$charset = 'utf8mb4';


insertData();


function insertData()
{
    global $servername, $database, $username, $password, $table_name ;
    // Create connection using musqli_connect function
    $conn = mysqli_connect($servername, $username, $password, $database);

    $_POST = json_decode(file_get_contents("php://input"),true);
    // Connection Check
    if (!$conn) {
        die("Connection failed: ");
    } else {
        ini_set("display_errors", 1);
        error_reporting(E_ALL);
        $fullName = $_POST['FullName'];
        $email = $_POST['Email'];
        $message = $_POST['Message'];
        $created = $_POST['Created'];
 
        if (!empty($fullName)) {

        // insert query
        $qu = "INSERT INTO $table_name( `FullName`,`Email`, `Message`,`Created`) 
        VALUES ( '$fullName','$email','$message','$created')";
        //query execution
        if ($conn->query($qu) === TRUE)
            echo "Inserted Successfully";
        else echo "Insert Failed data" . $conn->error;
        }

        $conn->close();
    }
}
