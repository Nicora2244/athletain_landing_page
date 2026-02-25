import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        height: '100vh', // Fill the viewport height exactly
        width: '100vw',
        maxWidth: '100vw',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(160deg, #b0c4de 0%, #fff 100%)',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Titles section */}
      <div
        style={{
          flex: 2.2,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '64px 48px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-rag123), Oswald, Arial, sans-serif',
            fontSize: '3.2rem',
            fontWeight: 400,
            color: '#101624', // very dark blue
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          EXPOSICIÓN PARA ATLETAS.
        </h1>
        <h2
          style={{
            fontFamily: 'var(--font-rag123), Oswald, Arial, sans-serif',
            fontSize: '2.6rem',
            fontWeight: 900,
            color: '#101624', // very dark blue
            margin: '16px 0 0 0',
            lineHeight: 1.1,
          }}
        >
          PRECISIÓN PARA CAZATALENTOS.
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#101624', // very dark blue
            margin: '32px 0 0 0',
            fontWeight: 400,
          }}
        >
          Una conexión más inteligente y rápida.
        </p>
        <button
          style={{
            marginTop: 32,
            padding: '12px 36px',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#fff',
            background: '#1A2A4D',
            border: 'none',
            borderRadius: 6,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(26,42,77,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          onClick={() => navigate('/login')}
        >
          REGÍSTRATE
          <span style={{
            display: 'inline-block',
            width: 16,
            height: 16,
            background: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'7\' stroke=\'white\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E") no-repeat center',
            verticalAlign: 'middle',
          }} />
        </button>
      </div>
      {/* Placeholder for image */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          background: '#1A2A4D',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        {/* Placeholder content can go here */}
      </div>
    </section>
  );
}
