(function () {
  'use strict';

  const headers = $request.headers;

  delete headers["X-RevenueCat-ETag"];
  delete headers["x-revenuecat-etag"];
  delete headers["X-REVENUECAT-ETAG"];

  delete headers["If-None-Match"];
  delete headers["if-none-match"];

  $done({ headers: headers });

})();