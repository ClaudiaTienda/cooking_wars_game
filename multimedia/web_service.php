<?php
$action = $_POST['action'];
switch ($action){
    case 'Scores':
        getScores();
        break;
    case 'NewScore':
        setScore();
        break;
    default:
        break;
}

function connect() {
    $databasehost = "localhost";
    $databasename = "mibd";
    $databaseuser = "root";
    $databasepass = "root";

    $mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename);
    if($mysqli->connect_errno){
        echo "Problema con la conexcion a la base de datos: " . $mysqli->error;
    }
    return $mysqli;
}

function disconnect($mysqli){
    $mysqli->close();
}
class Response{
    function Response(){
        $this->sucess = false;
        $this->error = false;
        $this->message = "";
    }
    function toJSON()
    {
        return json_encode($this); 
    }
}

function setScore(){
    $userJson = $_POST{'userJson'};
    $user = json_decode($userJson,true);

    $username = $user['name'];
    $score = $user['score'];

    $mysqli = connect();

    $query = "INSERT INTO tauruspilot (tauruspilot.Name, Score) 
                VALUES ('".$username."', '".$score."')";
    $result = $mysqli->query($query);

    if (!$result) {
        echo "Problema al hacer un query: " . $mysqli->error;
    } else{
        echo "Usuario insertado con Exito";
    }
    $result->free();
    disconnect($mysqli);
}

function getScores()
{
    $username = $_POST['Nombre'];
    $password = $_POST['Contraseña'];

    $mysqli = connect();

    $query = "SELECT * from User";
    $result = $mysqli->query($query);

    if(!$result){
        echo "Problema al hacer un query: " . $mysqli->error;
    }else {
        echo "Imprime Puntaje";
    }
    $result->free();
    disconnect($mysqli);
}

function getImages(){
    $mysqli = connect();

    $query = "SELECT * FROM image;";
    $result = $mysqli->query($query);

    if(!$result){
        echo "Problema al hacer un query: " . $mysqli->error;
    } else{
        $rows = array();
        while($r = $result->fetch_assoc()){
            $rows[] = $r;
        }
        echo json_encode($rows); 
    }
    $result->free();
    disconnect($mysqli);
}
?>