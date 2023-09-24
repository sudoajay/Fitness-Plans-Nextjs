<?php


$servername = "localhost"; // 162.241.123.26  , localhost
$database = "lounpqqu_fitness_plan_database";
$username = "lounpqqu_database";
$password = "WffABhF6rPM#8LGP6k3D";
$table_name = "PaymentTable";
$charset = 'utf8mb4';


$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$callFun = $data['callfunction'];
if ($callFun == 'GetAllDataTable') {
    getAllDataTable();
} else {
    insertData();
}



function insertData()
{
    global $servername, $database, $username, $password, $table_name, $data;
    // Create connection using musqli_connect function
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Connection Check
    if (!$conn) {
        die("Connection failed: ");
    } else {
        ini_set("display_errors", 1);
        error_reporting(E_ALL);
        $fullName = $data['FullName'];
        $age = $data['Age'];
        $email = $data['Email'];
        $phoneNumber = $data['PhoneNumber'];
        $information = $data['Information'];
        $created = $data['Created'];
        $product = $data['Product'];
        $amount = $data['Amount'];
        $promoCode = $data['PromoCode'];
        $referralcode = $_POST['Referralcode'];

        $paymentMethod = $data['PaymentMethod'];
        $paymentId = $data['PaymentID'];
        $orderID = $data['OrderID'];
        $accessToken = $data['AccessToken'];

        if (!empty($fullName)) {
            // insert query
            $qu = "INSERT INTO $table_name( `FullName`, `Age`,`Email`, `PhoneNumber`, `Information`,`Created`,`Expire`, `Product`, `Amount`, `PromoCode`,`Referralcode`, `PaymentMethod`, `PaymentID`, `OrderID`,`AccessToken`) 
        VALUES ( '$fullName','$age','$email','$phoneNumber','$information','$created', '$created',   '$product', '$amount', '$promoCode','$referralcode' , '$paymentMethod','$paymentId','$orderID','$accessToken')";
            //query execution
            if ($conn->query($qu) === TRUE)
                echo "Inserted Successfully";
            else echo "Insert Failed data" . $conn->error;
        }
        $conn->close();
    }
}

function getAllDataTable()
{
    global  $servername, $database, $username, $password,  $table_name;

    $conn = mysqli_connect($servername, $username, $password, $database);


    if (!$conn) {
        die('Connection failed here: ');
    } else {
        ini_set('display_errors', 1);
        error_reporting(E_ALL);

        session_start();
        $username = $_SESSION['UserName'];


        $result =  mysqli_query(
            $conn,
            ($username == 'ADMIN' ? "SELECT * FROM $table_name " :  "SELECT * FROM $table_name WHERE PromoCode = '$username' OR  PromoCode LIKE '%$username%' ")
        );




        $data = array();
        $i  = 0;
        echo '[';


        while ($row = mysqli_fetch_array($result)) {


            $data['FullName'] = $row['FullName'];
            $data['Email'] = $row['Email'];

            $data['Created'] = $row['Created'];
            $data['Product'] = $row['Product'];
            $data['Amount'] = $row['Amount'];
            $data['PromoCode'] = $row['PromoCode'];
            $data['Referralcode'] = $row['Referralcode'];

            $data['PaymentMethod'] = $row['PaymentMethod'];


            if ($username == 'ADMIN') {
                $data['Age'] = $row['Age'];
                $data['PhoneNumber'] = $row['PhoneNumber'];
                $data['Information'] = $row['Information'];
                $data['PaymentID'] = $row['PaymentID'];
                $data['OrderID'] = $row['OrderID'];
                $data['AccessToken'] = $row['AccessToken'];
            }


            echo ($i > 0  ? ',' : '');
            echo json_encode($data);

            $i = $i + 1;
        }
        echo ']';
    }
    $conn->close();
}
