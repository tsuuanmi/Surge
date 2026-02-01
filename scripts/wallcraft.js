let body= JSON.parse($response.body);

body.items["com.wallpaperscraft.wallpapers.6months"] = {
    "type" : "subscription",
    "is_active" : true
};

$done({body: JSON.stringify(body)})