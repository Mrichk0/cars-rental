(() => {
  "use strict";
  window.addEventListener("pageshow", function ({ target: e }) {
    if (!window.__REACT_DEVTOOLS_PROXY_INJECTED__) {
      (window.__REACT_DEVTOOLS_PROXY_INJECTED__ = !0),
        connectPort(),
        sayHelloToBackendManager();
      const e = setInterval(() => {
        n ? clearInterval(e) : sayHelloToBackendManager();
      }, 500);
    }
  }),
    window.addEventListener("pagehide", function ({ target: e }) {
      e === window.document && delete window.__REACT_DEVTOOLS_PROXY_INJECTED__;
    });
  let e = null,
    n = !1;
  function sayHelloToBackendManager() {
    window.postMessage(
      {
        source: "react-devtools-content-script",
        hello: !0,
      },
      "*"
    );
  }
  function handleMessageFromDevtools(e) {
    window.postMessage(
      {
        source: "react-devtools-content-script",
        payload: e,
      },
      "*"
    );
  }
  function handleMessageFromPage(o) {
    if (o.source === window && o.data)
      switch (o.data.source) {
        case "react-devtools-bridge":
          (n = !0), e.postMessage(o.data.payload);
          break;
        case "react-devtools-backend-manager": {
          const { source: e, payload: n } = o.data;
          chrome.runtime.sendMessage({
            source: e,
            payload: n,
          });
          break;
        }
      }
  }
  function handleDisconnect() {
    window.removeEventListener("message", handleMessageFromPage),
      (e = null),
      connectPort();
  }
  function connectPort() {
    (e = chrome.runtime.connect({
      name: "proxy",
    })),
      window.addEventListener("message", handleMessageFromPage),
      e.onMessage.addListener(handleMessageFromDevtools),
      e.onDisconnect.addListener(handleDisconnect);
  }
})();
