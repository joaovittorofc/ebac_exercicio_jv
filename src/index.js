import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [editando, setEditando] = useState(null);

  const handleSalvar = () => {
    if (editando !== null) {
      const novosContatos = contatos.map((contato, index) =>
        index === editando ? { nome, email, telefone } : contato
      );
      setContatos(novosContatos);
      setEditando(null);
    } else {
      setContatos([...contatos, { nome, email, telefone }]);
    }
    setNome('');
    setEmail('');
    setTelefone('');
  };

  const handleEditar = (index) => {
    const contato = contatos[index];
    setNome(contato.nome);
    setEmail(contato.email);
    setTelefone(contato.telefone);
    setEditando(index);
  };

  const handleDeletar = (index) => {
    const novosContatos = contatos.filter((_, i) => i !== index);
    setContatos(novosContatos);
  };

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>
      <p className="subtitle">{contatos.length} contato(s) na agenda</p>
      <div className="form">
        <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <button className="add" onClick={handleSalvar}>
          {editando !== null ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>
      <div className="list">
        {contatos.map((c, i) => (
          <div className="card" key={i}>
            <div>
              <strong>{c.nome}</strong>
              <p>{c.telefone}</p>
              <p>{c.email}</p>
            </div>
            <div className="actions">
              <button className="edit" onClick={() => handleEditar(i)}>Editar</button>
              <button className="delete" onClick={() => handleDeletar(i)}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
