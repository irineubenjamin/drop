
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.cb632ef16165e8950057.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.latest.pt-BR.17804cd5078a63a43afb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/441.latest.pt-BR.04eff29e3df2d466c911.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.pt-BR.ddd75fd2e8c8eae70b32.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.0b1469e874aea756aa8e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.pt-BR.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.latest.pt-BR.b76834e73689753fbe44.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.pt-BR.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.pt-BR.3c431e03cab6663f99a4.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.latest.pt-BR.4685743ee2b9594f0e56.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.e73cab4b1bb1fcdbd393.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.latest.pt-BR.5f60c0e91d9d5d6ad7d1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.pt-BR.558ef723bffe3edccc29.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0795/8927/7970/files/Design_sem_nome_-_2023-10-30T014149.398_x320.png?v=1698640916"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  