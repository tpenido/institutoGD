<?php

$person_name = $_POST['nome'];
$email = $_POST['email'];

if($_FILES['video']['name'] != '') {
    $file = $_FILES['video']['name'];

    $target_dir = getcwd().DIRECTORY_SEPARATOR . 'upload/';

    $path = pathinfo($file);

    $filename = $path['filename'] . '_' . $person_name . '-' . $email . '_' . date('d-m-Y-H-i-s');

    $ext = $path['extension'];

    $temp_name = $_FILES['video']['tmp_name'];

    $path_filename_ext = $target_dir.$filename.".".$ext;

    @move_uploaded_file($temp_name, $path_filename_ext);

    header('Location: /?showModal=true');
}