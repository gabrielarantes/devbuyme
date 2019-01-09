<?php

include 'conn.php';

$operacao = $_GET['operacao'];

if( $operacao == 'listar' ){

    $query = " SELECT id,nome,email FROM temp_usuarios ORDER BY id desc ";
    $result = odbc_exec($con, $query);
    $usuarios = [];
    while($row = odbc_fetch_array($result)) {
        
        array_push($usuarios , $row );
    }

    echo json_encode($usuarios);
    exit;
}

if( $operacao == 'consultar' ){

    $id = $_GET['id'];

    $query = " SELECT id,nome,email FROM temp_usuarios WHERE id = $id ORDER BY id desc ";
    $result = odbc_exec($con, $query);
    $usuarios = [];
    while($row = odbc_fetch_array($result)) {
        
        array_push($usuarios , $row );
    }

    echo json_encode($usuarios);
    exit;
}

if( $operacao == 'excluir' ){

    $id = $_GET['id'];

    if( $id > 0){
        $query = " DELETE FROM temp_usuarios WHERE id = $id ";
        $result = odbc_exec($con, $query);
        echo "ok";
    }else{
        echo "error";
    }

    exit;
}

if( $operacao == 'inserir' ){

    $nome = $_GET['nome'];
    $email = $_GET['email'];
    $senha = $_GET['senha'];

    if( !empty($nome) && !empty($email) && !empty($senha)  ){
        $query = " INSERT INTO temp_usuarios (nome,email,senha) VALUES ('$nome','$email','$senha') ";
        $result = odbc_exec($con, $query);
        echo "ok";
    }else{
        echo "error";
    }

    exit;

}

if( $operacao == 'logar' ){
    $email = $_GET['email'];
    $senha = $_GET['senha'];

    $query = " SELECT TOP 1 id,email from temp_usuarios WHERE email = '$email' AND senha = '$senha' ";

    $id = 0;
    $result = odbc_exec($con, $query);
    while($row = odbc_fetch_array($result)) {
        $id = $row['id'];
    }

    $resultado = [];

    if(!empty($id)){
        $token = md5( $id . date('Y') . date('m') . date('d') . date('h') . date('i') . date('s') . $id );
        $query = "UPDATE temp_usuarios SET token = '$token' WHERE id = $id ";
        $result = odbc_exec($con, $query);

        echo $token;

    }else{
        echo "invalid";
    }

    exit;

}