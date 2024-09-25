<?php
class sueldo{
    private $dias;
    private $pago;
    public $sueldo;

    public function __construct($diass,$pagos){
        $this->dias = $diass;
        $this->pago = $pagos;
    }

    public function setSalario($diass,$pagos){
        $this->dias = $diass;
        $this->pago = $pagos;
    }
    public function getSalario(){
        $this->sueldo = $this->dias * $this->pago;
    }
}


// $salario = new sueldo(2,5);
class estrato{
    private $estrato;
    public function __construct($estra){
        $this->estrato = $estra;
    }
    public function setEstrato($estra){
        $this->estrato = $estra;
    }
    public function getEstrato(){
        return $this->estrato;
    }
}



class nomina{
    public $sueldo;
    public $estrato;
    private $salud;
    private $arl;
    private $pension;
    public $transporte;
    public $bono; 
    public function __construct($suel,$estra){
        $this->sueldo = $suel;
        $this->estrato = $estra;
    }

    public function saludf(){
        $this->salud = 0.04 * $this->sueldo;
        return $this->salud;
    }
    public function arl(){
        $this->arl = 0.12 * $this->sueldo;
        return $this->arl;

    }
    public function pension(){
        $this->pension = 0.16 * $this->sueldo;
        return $this->pension;

    }
    public function transporte(){
        $this->transporte = 113000;
        if($this->sueldo >= 1300000*2){
            $this->sueldo += $this->transporte;
            return $this->sueldo;

        }else{
            $this->sueldo += 0;
            return $this->sueldo;

        }
    }
    public function bono(){
        $this->bono = 100000;
        if($this->estrato->getEstrato() ==1 || $this->estrato->getEstrato() == 2){
            $this->sueldo += $this->bono;
            return $this->sueldo;
        }else{
            $this->sueldo +=0;
            return $this->sueldo;

        }
    }

}


class descuento{
    private $arlDescuento;
    private $pensionDescuento;
    private $saludDescuento;
    private $sueldoDescuento;
    public $transporteDescuento;
    public $bonoDescuento;
    private  $total;
    private  $descuento;
    

    public function __construct($arl,$pension,$salud,$sueldo,$transporte,$bono){
        $this->arlDescuento = $arl;
        $this->pensionDescuento = $pension;
        $this->saludDescuento = $salud;
        $this->sueldoDescuento = $sueldo;
        $this->transporteDescuento = $$transporte;
        $this->bonoDescuento = $bono;
        
        $this->descuento = $this->arlDescuento + $this->pensionDescuento+$this->saludDescuento;
        $this->total = $this->sueldoDescuento - $this->descuento;
        $this->total += $this->transporteDescuento + $this->bonoDescuento;
    }

}




?>