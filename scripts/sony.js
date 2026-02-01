let body = JSON.parse($response.body);

body.targetDeviceSoftwareVersion = "2.0.0"

$done({body: JSON.stringify(body)});