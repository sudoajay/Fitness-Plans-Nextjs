<?php
session_start();



$servername = "localhost"; // 162.241.123.26  , localhost
$database = "lounpqqu_fitness_plan_database";
$dataUserName = "lounpqqu_database";
$dataPassword = "WffABhF6rPM#8LGP6k3D";
$table_name = "FitnessPromoCode";
$charset = 'utf8mb4';

$conn = mysqli_connect(
    $servername,
    $dataUserName,
    $dataPassword,
    $database
);

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$callFun = $data['callfunction'];
if ($callFun == 'LoginDetailMatch') {
    isLoginDetailMatch();
} else if ($callFun == 'SessionPresent') {
    checkIfSessionPresent();
} else if ($callFun == 'getAllData') {
    getAllData();
}
else if ($callFun == 'AmountPaid') {
    getTotalAmountPaid();
}
else if ($callFun == 'isPasswordMatchThenChangePassword') {
    isPasswordMatchThenChangePassword();
} else {
    destroySession();
}


function isLoginDetailMatch()
{
    global $conn, $table_name, $data;
    // Connection Check
    $userName = $data['username'];
    $pass = $data['password'];
    if (empty($userName) || empty($pass)) {
        echo 'false';
    }

    if (!$conn) {
        die("Connection failed here: ");
    } else {
        ini_set("display_errors", 1);
        error_reporting(E_ALL);
        $sql = "SELECT * FROM $table_name WHERE PromoCode=? And Password=?;";
        $stmt =  mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo 'false';
        }
        mysqli_stmt_bind_param($stmt, 'ss', $userName, $pass);
        mysqli_stmt_execute($stmt);

        $resultData = mysqli_stmt_get_result($stmt);
        if (mysqli_fetch_assoc($resultData)) {
            $_SESSION['UserName'] = $userName;

            echo true;
        } else {
            echo false;
        }
    }
    session_write_close();

    $conn->close();
}

function checkIfSessionPresent()
{

    if (isset($_SESSION['UserName'])) {
        echo $_SESSION['UserName'];
    } else {
        echo "";
    }
}


function getAllData()
{


    global $conn, $table_name, $data;

    if (!$conn) {
        die('Connection failed here: ');
    } else {
        ini_set('display_errors', 1);
        error_reporting(E_ALL);


        $result =  mysqli_query(
            $conn,
            "SELECT * FROM $table_name "
        );
        $data = array();
        $i  = 0 ;
        echo '[';

        while ($row = mysqli_fetch_array($result)) {

           
            $data['PromoCode'] = $row['PromoCode'];
            $data['PercentOff'] = $row['PercentOff'];
        
            $data['Password'] = $row['Password'];
            $data['Created'] = $row['Created'];
            $data['AmountPaid'] = $row['AmountPaid'];
  
       


           
          echo ($i>0  ?',':'');
          echo json_encode($data); 
       
            $i = $i +1 ;

        }
        echo ']';
           
    }
    $conn->close();
}


function getTotalAmountPaid()
{

    global $conn, $table_name, $data;


    if (!$conn) {
        die('Connection failed here: ');
    } else {
        ini_set('display_errors', 1);
        error_reporting(E_ALL);

        $userName = $_SESSION['UserName'];

        $result =  mysqli_query(
            $conn,
            "SELECT * FROM $table_name  where PromoCode = '$userName'"
        );


        while ($output = mysqli_fetch_array($result)) {
            echo $output['AmountPaid'];
        }
    }
    $conn->close();
}


function isPasswordMatchThenChangePassword()
{
    global $conn, $table_name, $data;
    // Connection Check
    $userName = "AJA50";
    $currentPassWord = $data['CurrentPassword'];
    $newPassWord = $data['NewPassWord'];


    if (empty($userName) || empty($currentPassWord)) {
        echo 'false';
    }

    if (!$conn) {
        die("Connection failed here: ");
    } else {
        ini_set("display_errors", 1);
        error_reporting(E_ALL);

        $result = mysqli_query(
            $conn,
            "SELECT * FROM $table_name WHERE PromoCode='$userName' AND Password='$currentPassWord'"
        );
        $num = mysqli_num_rows($result);

        if($num > 0) {
             $qu = "UPDATE $table_name set Password ='$newPassWord' WHERE PromoCode='$userName'";
            //query execution
            if ($conn->query($qu) === TRUE){
                echo "Inserted Successfully";
                destroySession();
            }
            else echo "Insert Failed data" . $conn->error;
        }
        else{
            echo "NotMatch";
        }
 
           
            
        
        
      
    }
    session_write_close();

    $conn->close();
}

function destroySession()
{
    session_unset();
    session_destroy();
    echo true;
}
