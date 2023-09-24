<?php

 
 $servername = "localhost"; // 162.241.123.26  , localhost
$database = "lounpqqu_fitness_plan_database";
$username = "lounpqqu_database";
$password = "WffABhF6rPM#8LGP6k3D";
$table_name = "PaymentFormTable";
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
        $age = $_POST['Age'];
        $email = $_POST['Email'];
        $phoneNumber = $_POST['PhoneNumber'];
        $information = $_POST['Information'];
        $created = $_POST['Created'];
        $product = $_POST['Product'];
        $amount = $_POST['Amount'];
        $promoCode = $_POST['PromoCode'];
        $referralcode = $_POST['Referralcode'];


        if (!empty($fullName)) {
        // insert query
        $qu = "INSERT INTO $table_name( `FullName`, `Age`,`Email`, `PhoneNumber`, `Information`,`Created`, `Product`, `Amount`, `PromoCode` ,`Referralcode`) 
        VALUES ( '$fullName','$age','$email','$phoneNumber','$information','$created', '$product', '$amount', '$promoCode', '$referralcode' )";
        //query execution
        if ($conn->query($qu) === TRUE)
            echo "Inserted Successfully";
        else echo "Insert Failed data" . $conn->error;

        }
        $conn->close();
    }
}
