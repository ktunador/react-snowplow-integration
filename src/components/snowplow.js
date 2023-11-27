import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { newTracker, enableActivityTracking, trackPageView } from "@snowplow/browser-tracker";
import { enableLinkClickTracking, LinkClickTrackingPlugin } from "@snowplow/browser-plugin-link-click-tracking";

let tracker = null;

// This is implemented as a component instead of a hook
// to be able to activate the tracking conditionally
export const Snowplow = ({ endpoint, appId, trackerId = "sample" }) => {
  if (tracker === null) {
    tracker = newTracker(trackerId, endpoint, {
      appId: appId,
      cookieLifetime: 47347200, // seconds => 548 days
      platform: "web",
      contexts: {
        webPage: true,
        performanceTiming: true,
      },
      plugins: [LinkClickTrackingPlugin()],
    });

    enableActivityTracking({
      minimumVisitLength: 30,
      heartbeatDelay: 30,
    });

    // This enables the auto link tracking;however,it's not so usefull for SPAs
    // We need to track clicks manually (see `Link` component)
    enableLinkClickTracking({ pseudoClicks: true });
  }

  // Track page views
  // We use the `useLocation` hook to watch location changes
  const location = useLocation();

  useEffect(
    () => { if (tracker !== null) trackPageView(); },
    [location]
  );

  return null;
};
