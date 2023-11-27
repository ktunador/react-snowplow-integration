import { useCallback, useRef } from "react";
import { trackLinkClick } from "@snowplow/browser-plugin-link-click-tracking";
import { Link as InternalLink } from 'react-router-dom';

const extLinkRegEx = /(https?|s?ftp):\/\/|mailto:/g;

export const Link = ({ children, href = "/", ...restProps }) => {

  const isExternal = useRef(href && href.search(extLinkRegEx) !== -1);

  // Track link clicks
  // We listen to `mousedown` event on links instead of `click`
  // to be able to capture both left and middle button clicks
  const handleMouseDown = useCallback(
    (e) => { if (e.button < 2) trackLinkClick({ targetUrl: href }); },
    [href]
  );

  return (
    isExternal.current ?
      <a {...restProps} href={href} target="_blank" onMouseDown={handleMouseDown}>
        {children}
      </a>
      :
      <InternalLink {...restProps} to={href} onMouseDown={handleMouseDown}>
        {children}
      </InternalLink>
  );
};
