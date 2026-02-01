(function () {
    'use strict';

    const PURCHASE_DATE = "2025-07-04T00:00:00Z";
    const EXPIRES_DATE = "2099-12-31T23:59:59Z";
    const ENTITLEMENT_ID = "Gold";
    const PRODUCT_ID = "locket.premium.yearly";

    let responseObj;
    try {
    responseObj = JSON.parse($response.body);
    } catch (error) {
    responseObj = { subscriber: {} };
    }

    // Ensure structure exists
    if (!responseObj.subscriber) responseObj.subscriber = {};
    responseObj.subscriber.subscriptions = responseObj.subscriber.subscriptions || {};
    responseObj.subscriber.entitlements = responseObj.subscriber.entitlements || {};

    const subscriptionData = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: EXPIRES_DATE,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: PURCHASE_DATE,
    purchase_date: PURCHASE_DATE,
    store: "app_store"
    };

    const entitlementData = {
    grace_period_expires_date: null,
    purchase_date: PURCHASE_DATE,
    product_identifier: PRODUCT_ID,
    expires_date: EXPIRES_DATE
    };

    responseObj.subscriber.subscriptions[PRODUCT_ID] = subscriptionData;
    responseObj.subscriber.entitlements[ENTITLEMENT_ID] = entitlementData;


    responseObj.subscriber.original_application_version = "1.0";
    responseObj.subscriber.original_purchase_date = PURCHASE_DATE;

    $done({ body: JSON.stringify(responseObj) });

})();