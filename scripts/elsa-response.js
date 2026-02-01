let body = JSON.parse($response.body);

if ($request.method == "GET") {
  body["subscriptions"] = [{
    "expire_at": "22970710",
    "store": "elsa-voucher",
    "subscription": "lifetime_membership",
    "days_to_end": 99758,
    "created_at": "20230925113919"
  }];
  $done({body: JSON.stringify(body)});
}