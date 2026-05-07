export const reportConversion = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sendTo: string, url?: string) => {
  if (e) {
    e.preventDefault();
  }
  
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  // @ts-ignore
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      'send_to': sendTo,
      'value': 1.0,
      'currency': 'EUR',
      'event_callback': callback
    });
    
    // Fallback: se la callback di Google non scatta entro 500ms, esegui comunque
    setTimeout(callback, 500);
  } else {
    callback();
  }
};

export const reportFormConversion = (sendTo: string) => {
  // @ts-ignore
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      'send_to': sendTo,
      'value': 1.0,
      'currency': 'EUR'
    });
  }
};
