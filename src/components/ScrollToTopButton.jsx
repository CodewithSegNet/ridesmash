import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '7px',
          zIndex: 1000,
          backgroundColor: 'rgb(1, 255, 255)',
          color: '#fff',
          padding: '5px 13px',
          borderRadius: '20%',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bolder',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
