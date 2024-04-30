// ---

// ---

// <script is:inline>
//   var Tawk_API = Tawk_API || {},
//     Tawk_LoadStart = new Date();
//   (function () {
//     var s1 = document.createElement("script"),
//       s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = "https://embed.tawk.to/65fbcbfaa0c6737bd1232248/1hpfp9iu1";
//     s1.charset = "UTF-8";
//     s1.setAttribute("crossorigin", "*");
//     s0.parentNode.insertBefore(s1, s0);
//   })();
// </script>

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import React from "react";
export default function ChatWidget() {
  return (
    <div className="App z-50">
      <TawkMessengerReact propertyId="property-id" widgetId="Widget-id" />
    </div>
  );
}
