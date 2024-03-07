import { useEffect, useState } from "react";

const useSnap = () => {
  const [snap, setSnap] = useState(null);
  useEffect(() => {
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    scriptTag.setAttribute("allow", "clipboard-read; clipboard-write");

    scriptTag.onload = () => {
      setSnap(window.snap);
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const snapEmbed = (snap_token, embedId, action) => {
    if (snap) {
      snap.embed(snap_token, {
        embedId,
        onSuccess: function (result) {
          console.log("success", result);
          action.onSuccess(result);
        },
        onPending: function (result) {
          console.log("pending", result);
          action.onPending(result);
        },
        onClose: function () {
          action.onClose();
        },
      });
    }
  };

  return { snapEmbed };
};

export default useSnap;
