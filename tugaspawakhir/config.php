<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'lexica';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}
?>

