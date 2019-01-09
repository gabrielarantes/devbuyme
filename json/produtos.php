<?php

include 'conn.php';

$operacao = $_GET['operacao'];

if( $operacao == 'listar' ){

    $search = '';
    if($_GET['search'] !=''){
        $s = $_GET['search'];
        $search = " WHERE nome LIKE '%$s%' ";
    }

    $query = " SELECT * FROM temp_produtos $search ORDER BY id desc ";
    $result = odbc_exec($con, $query);
    $produtos = [];
    while($row = odbc_fetch_array($result)) {
        
        array_push($produtos , $row );
    }

    echo json_encode($produtos);

}

if( $operacao == 'consultar' ){

    $id = $_GET['id'];

    $query = " SELECT * FROM temp_produtos WHERE id = $id ORDER BY id desc ";
    $result = odbc_exec($con, $query);
    $produtos = [];
    while($row = odbc_fetch_array($result)) {
        
        array_push($produtos , $row );
    }

    echo json_encode($produtos);

}

if( $operacao == 'excluir' ){

    $id = $_GET['id'];

    if( $id > 0){
        $query = " DELETE FROM temp_produtos WHERE id = $id ";
        $result = odbc_exec($con, $query);
        echo "ok";
    }else{
        echo "error";
    }

}

if( $operacao == 'inserir' ){

    $nome = $_GET['nome'];
    $valor = $_GET['valor'];

    if( !empty($nome) && !empty($valor) ){
        $query = " INSERT INTO temp_produtos (nome,valor) VALUES ('$nome','$valor') ";
        $result = odbc_exec($con, $query);
        echo "ok";
    }else{
        echo "error";
    }

}