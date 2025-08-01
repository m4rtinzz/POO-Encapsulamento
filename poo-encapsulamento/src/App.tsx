import { useState } from 'react'
import './App.css'
import { ContaBancaria } from './models/ContaBancaria';

function App()
{
  const [valor, setValor] = useState(0);
  const [conta] = useState(new ContaBancaria());
  const [saldo, setSaldo] = useState(conta.verSaldo());

  const handleDepositar = () => {
    conta.depositar(valor);
    setSaldo(conta.verSaldo());
  };

  const handleSacar = () => {
    conta.sacar(valor);
    setSaldo(conta.verSaldo());
  };

  return (
    <div>
      <h3>Saldo disponível: R$ {saldo}</h3>
      <input
        type="number"
        value={valor}
        onChange={e => setValor(Number(e.target.value))}
        placeholder="Digite o valor"
      />
      <button onClick={handleDepositar}>Depositar</button>
      <button onClick={handleSacar}>Sacar</button>
    </div>
  );
}

export default App;