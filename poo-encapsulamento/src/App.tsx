import { useState } from 'react'
import './App.css'
import { ContaBancaria } from './models/ContaBancaria';
import { formatarMoeda } from './utils/formatador';

function App()
{
  const [valor, setValor] = useState(0);
  const [conta] = useState(new ContaBancaria());
  const [saldo, setSaldo] = useState(conta.verSaldo());
  const [erro, setErro] = useState('');

  const handleDepositar = () => {
    if (valor <= 0) {
      setErro('Digite um valor válido para depósito.');
      return;
    }
    conta.depositar(valor);
    setSaldo(conta.verSaldo());
    setErro('');
  };

  const handleSacar = () => {
    if (valor <= 0) {
      setErro('Digite um valor válido para saque.');
      return;
    }
    if (valor > saldo) {
      setErro('Saldo insuficiente para saque.');
      return;
    }
    conta.sacar(valor);
    setSaldo(conta.verSaldo());
    setErro('');
  };

  return (
    <div>
      <h3>Saldo disponível: {formatarMoeda(saldo)} </h3>
      <input
        type="number"
        value={valor}
        onChange={e => setValor(Number(e.target.value))}
        placeholder="Digite o valor"
      />
      <button onClick={handleDepositar}>Depositar</button>
      <button onClick={handleSacar}>Sacar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

    </div>
  );
}

export default App;