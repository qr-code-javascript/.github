<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
</head>
<body>
    <h2>Scan the QR Code</h2>
    <div id="qrcode"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script>
        let link = "https://example.com"; // Replace with your link
        new QRCode(document.getElementById("qrcode"), {
            text: link,
            width: 200,
            height: 200
        });
    </script>
</body>
</html>
