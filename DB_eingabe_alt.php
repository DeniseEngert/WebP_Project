<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <link href="main.css" rel="stylesheet" type="text/css">
        <style>
        body {background: darkgrey; margin: 10%;}
        p {color: white; font-weight: bold;}
        </style>

        <?php

        ob_start();


            /* Datenbankverbindung */
            $db = mysqli_connect("localhost", "wp2048", "17Project!!", "wp2048");

            if(!$db)
            {
                exit("Verbindungsfehler: ".mysqli_connect_error());
            }

            /* Daten einfuegen */
            $input = "INSERT INTO HighScore (Name, Score) VALUES ('". $_POST["spielername"] . "', '". $_POST["punkte"] ."')";
            mysqli_query($db, $input);


            /* Verbindung schliessen */
            mysqli_close($db);


            /* Startseite mit neuem Spiel aufrufen */
            /*header('Location: index.html');*/
            /*exit;*/
        ?>
    </head>

    <body>
    <p></p>
    <p> Dein Punktestand wurde erfolgreich eingetragen.</p>
    <p> <a href="http://wp2048.bplaced.net/DB_Test/" color: > Neues Spiel?</a></p>
    </body>
</html>