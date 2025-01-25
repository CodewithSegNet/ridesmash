import React, { useEffect } from 'react';

const GTranslate = () => {
  useEffect(() => {
    // Ensure the GTranslate script is loaded
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;