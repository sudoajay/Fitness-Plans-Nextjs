<?php

 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
 header('Access-Control-Allow-Headers: token, Content-Type');
 header('Access-Control-Max-Age: 1728000');
 header('Content-Type: application/json');

 
 $servername = "localhost"; // 162.241.123.26  , localhost
 $database = "lounpqqu_fitness_plan_database";
 $username = "lounpqqu_database";
$password = "WffABhF6rPM#8LGP6k3D";
$table_name = "FitnessPromoCode";
$charset = 'utf8mb4';



matchRefferralCode();


function matchRefferralCode()
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

        $promoCode = $_POST['PromoCode'];

        
        $result = mysqli_query(
            $conn,
            "SELECT PercentOff FROM $table_name WHERE PromoCode = '$promoCode'"
        );
        
        while ($output = mysqli_fetch_array($result)) {
            echo $output['PercentOff'];
        }
       
        
    }

    $conn->close();
}
