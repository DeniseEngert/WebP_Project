<!DOCTYPE html>
<html>
    <head>
        <meta charset="uft-8">
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta http-equiv="Content-Script-Type" content="text/javascript">

        <?php


            /* Datenbankverbindung */
            $db = mysqli_connect("localhost", "root", "", "wp2048");

            if(!$db)
            {
                exit("Verbindungsfehler: ".mysqli_connect_error());
            }

            /* Daten einfuegen */
            $input = "INSERT INTO HighScore (Name, Score) VALUES ('". $_POST["spielername"] . "', '". $_POST["punkte"] ."')";
            mysqli_query($db, $input);


            /* Verbindung schliessen */
            mysqli_close($db);

            header('Location: index.html');
            exit;
        ?>
    </head>
    <body>
    <!-- Debugging
        <p> Namen eingeben </>
        <form name = "DBin" action = "DB_eingabe_alt.php" method = "post">
            <p><input name = "name"> Name</p>
            <p><input name = "score" > Score</p>
            <p><input type = "submit" name = "gesendet">
            <input type = "reset"></p>
        </form>

    <p>Alle <a href="DB_abfrage.php">anzeigen</a></p>
    -->
    </body>
</html>