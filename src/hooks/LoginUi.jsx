import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 430);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 430);
    console.log(handleResize);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;