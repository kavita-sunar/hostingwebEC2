<?php
session_start(); // Start session if not already started

// Check if user is logged in
if (!isset($_SESSION['user'])) {
    // Redirect to sign-in page if user is not logged in
    header("Location: signin.php");
    exit(); // Ensure script stops here
}

// User is logged in, retrieve user information
$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Your Dashboard, <?php echo htmlspecialchars($user['name']); ?>!</h1>
        <p>This is a secure area only accessible to logged-in users.</p>
        <p>You can display any content specific to the user here.</p>
        <p>Email: <?php echo htmlspecialchars($user['email']); ?></p>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
