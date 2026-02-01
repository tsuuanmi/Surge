let body = JSON.parse($response.body)

body.user.is_on_free_trial = false;
body.user.can_purchase = false;
body.user.subscription_expiration_date_epoch = 4078684800;
body.user.current_subscription.sku = "com.elevateapp.elevate.renewable.year_subscription_16";
body.user.current_subscription.duration = "annual";
body.user.current_subscription.store = "App Store";

$done({body: JSON.stringify(body)})