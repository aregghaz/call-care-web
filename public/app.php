<?php

echo "hello world";

$data = json_decode(file_get_contents("php://input"),true);

$response = "yay!";

echo $response;

?>