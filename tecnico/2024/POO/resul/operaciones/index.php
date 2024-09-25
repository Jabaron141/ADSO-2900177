<?php
class numero{
    private $valor;

    public function __construct($valor){
        $this->valor = $valor;
    }
    public function setValor($valor){
        $this->$valor = $valor;
        return $this->$valor; 
    }
    public function getValor(){
        $this->valor;
        return $this->valor;
    }
}
// $numeroUno = new numero(2);
// $numeroDos = new numero(5);

class operaciones {
    private $numeroUno;
    private $numeroDos;
    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;
    public function __construct($numUno,$numDos){
        $this->numeroUno = $numUno;
        $this->numeroDos = $numDos;
    }
    public function sumar(){
        $this->suma = $this->numeroUno + $this->numeroDos;
        return  $this->suma;
    }
    public function restar(){
        $this->resta = $this->numeroUno - $this->numeroDos;
        return  $this->resta;
    }
    public function multiplicar(){
        $this->resta = $this->numeroUno * $this->numeroDos;
        return  $this->resta;
    }
    public function dividir(){
        $this->division = $this->numeroUno / $this->numeroDos;
        return  $this->division;
    }
}

// $operacion = new operaciones($numeroUno->getValor(),$numeroDos->getValor());
// echo "suma: ", $operacion->sumar() ,"<br>";
// echo "resta: ", $operacion->restar(),"<br>";
// echo "multiplicacion: ", $operacion->multiplicar(),"<br>";
// echo "division: ", $operacion->dividir(),"<br>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>operaciones</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <form action="" method="post">
        <label for="numeroUno">numero Uno:</label>
        <input type="number" min="0" id="numeroUno" name="numeroUno">
        <label for="numeroDos">numero Dos:</label>
        <input type="number" min="0" id="numeroDos" name="numeroDos">
        <input type="submit" value="enviar">
    </form>
    <p>hola buenas tarde  mi nombre es rossel y soy un guia explorador  </p>
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"]== "POST"){
    $numeroUno = new numero($_POST["numeroUno"]);
    $numeroDos = new numero($_POST["numeroDos"]);
    if(isset($numeroUno,$numeroDos)){
        $resultado = new operaciones($numeroUno->getValor(),$numeroDos->getValor());
        echo "suma: ", $resultado->sumar() ,"<br>";
        echo "resta: ", $resultado->restar() ,"<br>";
        echo "multiplicacion: ", $resultado->multiplicar(),"<br>";
        echo "division: ", $resultado->dividir(),"<br>";
    }else{
        echo "ningun valor";
    }
   
        


}
?>