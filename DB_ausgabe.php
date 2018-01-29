<!DOCTYPE html>
<html>
    <head>
        <meta charset="uft-8">
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
    </head>
<body>

        <?php


            /* Datenbankverbindung */
            $db = mysqli_connect("localhost", "root", "", "wp2048");

            if(!$db)
            {
                exit("Verbindungsfehler: ".mysqli_connect_error());
            }
            
            /* SQL Abfrage der besten 10, absteigend sortiert */
            $sql = "SELECT Name, Score FROM wp2048.HighScore WHERE (Name IS NOT NULL) AND (Score > 0) ORDER BY Score DESC LIMIT 0, 10";
            
            /* Daten abfragen */
            $db_output = mysqli_query($db, $sql);
            
            if ( ! $db_output )
            {
                die('Ungültige Abfrage: ' . mysqli_error());
            }

            /* Verbindung schliessen */
            mysqli_close($db);

            echo '<table border="1">';
            echo    '<tr>';
            echo        '<th>Name</th>';
            echo        '<th>Punkte</th>';
            echo    '</tr>';
            
            while ($zeile = mysqli_fetch_array( $db_output, MYSQLI_ASSOC))
            {
                echo "<tr>";
                echo "<td>". $zeile['Name'] . "</td>";
                echo "<td>". $zeile['Score'] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
 
            mysqli_free_result( $db_output );
        ?>
            

    </body>
</html>