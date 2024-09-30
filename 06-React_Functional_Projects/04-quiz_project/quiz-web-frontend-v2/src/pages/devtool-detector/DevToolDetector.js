import React, { useEffect, useState } from 'react';

function DevToolDetector({ children }) {
  const [devtools, setDevTools] = useState(false);

  useEffect(() => {
    const detectDevTools = () => {
      if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        setDevTools(true);
      } else {
        setDevTools(false);
      }
    };

    detectDevTools();

    const interval = setInterval(() => {
      detectDevTools();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (devtools) {
    return <div>Developer tools are open!</div>;
  }

  return <>{children}</>;
}

export default DevToolDetector;
