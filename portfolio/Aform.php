<?php

ob_start();// Start output buffering
session_start();

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "clientdatabase1";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['sign_in'])) {
        // Sign In form data
        $email = $_POST['email_signin'];
        $password = $_POST['password_signin'];

        // Validate user credentials (example)
        if ($email === 'user@example.com' && $password === 'password') {
            // Successful sign-in
            header("Location: welcome.php"); // Redirect to success page
            exit(); // Ensure script stops here
        } else {
            // Failed sign-in
            echo "Invalid email or password. Please try again."; // Output error message
        }
    } elseif (isset($_POST['sign_up'])) {
        // Sign Up form data
        $name = $_POST['username_signup'];
        $email = $_POST['email_signup'];
        $password = $_POST['password_signup'];
        $confirm_password = $_POST['confirm_password_signup'];

        // Perform validation (example: checking if passwords match)
        if ($password !== $confirm_password) {
            echo "Passwords do not match. Please try again.";
            exit();
        }

        // Insert user into database (example: using PDO)
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=your_database', 'name', 'password');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Example query (adjust as per your database schema)
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$name, $email, password_hash($password, PASSWORD_DEFAULT)]);

            // Redirect to success page
            header("Location: welcome.php");
            exit(); // Ensure script stops here
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
?>
