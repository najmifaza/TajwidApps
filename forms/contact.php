<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Sesuaikan path ini dengan lokasi folder PHPMailer Anda
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Cek apakah form disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $mail = new PHPMailer(true);

    try {
        // --- KONFIGURASI SERVER (Wajib Diisi) ---
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'najmifaya@gmail.com'; // Email Gmail Anda
        $mail->Password   = 'vmfb kfne ymhg flmu';   // Masukkan APP PASSWORD 16 digit (Bukan password login!)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            
        $mail->Port       = 587;                                    

        // --- PENGIRIM & PENERIMA ---
        // Pengirim (Bisa diset email sendiri agar tidak masuk spam)
        $mail->setFrom('najmifaya@gmail.com', 'Website Contact Form');
        
        // Penerima (Email Anda tempat pesan akan masuk)
        $mail->addAddress('najmifaya@gmail.com'); 
        
        // Reply-To (Agar kalau Anda klik reply, langsung ke email pengisi form)
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        // --- KONTEN EMAIL ---
        $mail->isHTML(true);                                  
        $mail->Subject = $_POST['subject'];
        $mail->Body    = "
            <h3>Pesan Baru dari Website</h3>
            <p><strong>Nama:</strong> {$_POST['name']}</p>
            <p><strong>Email:</strong> {$_POST['email']}</p>
            <p><strong>Pesan:</strong><br>{$_POST['message']}</p>
        ";

        $mail->send();
        echo 'OK'; // Respon 'OK' biasanya ditangkap oleh Javascript template BootstrapMade untuk menampilkan pesan "Sent"
    } catch (Exception $e) {
        echo "Pesan gagal terkirim. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Akses dilarang.";
}
?>