let body = JSON.parse($response.body)

body.user.revenue_cat_offering_name = null
body.user.is_on_free_trial = false
body.user.current_subscription = {
    "sku": "com.elevateapp.elevate.renewable.year_subscription_16",
    "duration": "annual",
    "store": "App Store"
}
body.user.subscription_expiration_date_epoch = 4100909894
body.user.can_purchase = false

$done({body: JSON.stringify(body)})