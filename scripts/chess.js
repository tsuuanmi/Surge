let body= JSON.parse($response.body);

body.data.type = "diamond"
body.data.sku = "diamond_yearly_032022"
body.data.is_premium = 1
body.data.level = 3
body.data.date.start = 1677744000
body.data.date.expires = 1740902400
body.data.date.last_renewed = 1677744000

$done({body: JSON.stringify(body)});