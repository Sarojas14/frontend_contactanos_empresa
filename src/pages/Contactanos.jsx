import { useState, useEffect } from 'react';
import contactsService from '../services/contacts';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './paginas.css';

const Contactanos = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [numberError, setNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    contactsService.getAll().then(initialContacts => {
      setContacts(Array.isArray(initialContacts) ? initialContacts : []);
    });
  }, []);

  const validate = () => {
    let valid = true;
    setNumberError('');
    setEmailError('');

    if (number.length < 10) {
      setNumberError('El número debe tener al menos 10 caracteres.');
      valid = false;
    }
    if (!email.includes('@') || !email.endsWith('.com')) {
      setEmailError('El correo debe contener "@" y terminar en ".com".');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newContact = { name, number, email, subject };
    try {
      await contactsService.create(newContact);
      setContacts(contacts.concat(newContact));
      setName('');
      setNumber('');
      setEmail('');
      setSubject('');
      setSuccessMessage('¡Formulario enviado correctamente! Nos comunicaremos contigo pronto.');
      setShowModal(true);
    } catch (error) {
      setSuccessMessage('Ocurrió un error al enviar el formulario. Intenta de nuevo.');
      setShowModal(true);
    }
  };

  return (
    <div className="inicio-container">
      <Menu />
      <main
        className="inicio-main"
        style={{
          maxWidth: 1100,
          width: '100%',
          fontSize: '1.2rem',
          padding: '3rem 0',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2.5rem', marginBottom: '2rem', letterSpacing: '1px' }}>
          Contáctanos
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              maxWidth: 600,
              width: '100%',
              background: '#fff',
              padding: '2.5rem 2rem',
              borderRadius: 16,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.13)',
              margin: '0 auto'
            }}
          >
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{
                fontSize: '1.15rem',
                padding: '1rem',
                borderRadius: 8,
                border: '1.5px solid #b0b0b0',
                width: '100%',
                background: '#f8fafd'
              }}
            />
            <input
              type="text"
              placeholder="Número de teléfono"
              value={number}
              onChange={e => setNumber(e.target.value)}
              required
              style={{
                fontSize: '1.15rem',
                padding: '1rem',
                borderRadius: 8,
                border: '1.5px solid #b0b0b0',
                width: '100%',
                background: '#f8fafd'
              }}
            />
            {numberError && (
              <span style={{ color: 'red', fontSize: '1rem', marginTop: '-18px', marginBottom: '-10px' }}>
                {numberError}
              </span>
            )}
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                fontSize: '1.15rem',
                padding: '1rem',
                borderRadius: 8,
                border: '1.5px solid #b0b0b0',
                width: '100%',
                background: '#f8fafd'
              }}
            />
            {emailError && (
              <span style={{ color: 'red', fontSize: '1rem', marginTop: '-18px', marginBottom: '-10px' }}>
                {emailError}
              </span>
            )}
            <textarea
              placeholder="Asunto"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
              rows={5}
              style={{
                resize: 'vertical',
                borderRadius: 8,
                border: '1.5px solid #b0b0b0',
                padding: '1rem',
                fontFamily: 'inherit',
                fontSize: '1.15rem',
                width: '100%',
                background: '#f8fafd',
                minHeight: '80px'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '1.1rem 0',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1.2rem',
                marginTop: '0.5rem',
                boxShadow: '0 2px 8px #0001',
                letterSpacing: '1px'
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: 24,
            borderRadius: 12,
            textAlign: 'center',
            width: '90%',
            maxWidth: 400
          }}>
            <h2 style={{ marginBottom: 16 }}>
              {successMessage.includes('correctamente') ? 'Enviado correctamente' : 'Error'}
            </h2>
            <p>{successMessage}</p>
            <button onClick={() => setShowModal(false)} style={{
              marginTop: 20,
              padding: '10px 20px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#1976d2',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Contactanos;


