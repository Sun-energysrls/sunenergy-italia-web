import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate('/'), 3000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Pagina non trovata</h1>
        <p className="text-muted-foreground">Verrai reindirizzato alla Home tra 3 secondi...</p>
      </div>
    </div>
  );
};

export default NotFound;
