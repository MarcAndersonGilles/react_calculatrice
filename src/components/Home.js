import React, { useState } from 'react';
import "../sass/scss/home.scss";

function Home() {
  const [avantOperation, setAvantOperation] = useState('');
  const [apresOperation, setApresOperation] = useState('');
  const [operation, setOperation] = useState(undefined);

  function clear() {
    setApresOperation('');
    setAvantOperation('');
    setOperation(undefined);
  }

  function deleteDigit() {
    setApresOperation(apresOperation.slice(0, -1));
  }

  function appendnombre(nombre) {
    setApresOperation(apresOperation + nombre);
  }

  function choisiOperation(op) {
    if (apresOperation === '') return;
    if (avantOperation !== '') {
      compute();
    }
    if (op === '*' || op === '/') {
      setOperation(op);
      if (avantOperation === '') {
        setAvantOperation(apresOperation);
        setApresOperation('');
      }
    } else {
      setOperation(op);
      setAvantOperation(apresOperation);
      setApresOperation('');
    }
  }

  function compute() {
    let resultat;
    const avant = parseFloat(avantOperation);
    const apres = parseFloat(apresOperation);
    if (isNaN(avant) || isNaN(apres)) return;
    switch (operation) {
      case '+':
        resultat = avant + apres;
        break;
      case '-':
        resultat = avant - apres;
        break;
      case '*':
        resultat = avant * apres;
        break;
      case '/':
        resultat = avant / apres;
        break;
      default:
        return;
    }
    setApresOperation(resultat.toString());
    setAvantOperation('');
    setOperation(undefined);
  }

  function updateDisplay(){
    return (
      <div className='operateur-container'>
        <div data-avant className='operateur-avant'>{avantOperation} {operation}</div>
        <div data-apres className='operateur-apres'>{apresOperation}</div>
      </div>
    )
  }

  return (
    <div className='calculatrice-container'>
      <div className='calculatrice'>
        {updateDisplay()}
        <button onClick={() => clear()} className='span-deux'>AC</button>
        <button onClick={() => deleteDigit()}>DEL</button>
        <button onClick={() => choisiOperation('/')} data-operation>÷</button>
        <button onClick={() => appendnombre('1')} data-nombre>1</button>
        <button onClick={() => appendnombre('2')} data-nombre>2</button>
        <button onClick={() => appendnombre('3')} data-nombre>3</button>
        <button onClick={() => choisiOperation('*')} data-operation>*</button>
        <button onClick={() => appendnombre('4')} data-nombre>4</button>
        <button onClick={() => appendnombre('5')} data-nombre>5</button>
        <button onClick={() => appendnombre('6')} data-nombre>6</button>
        <button onClick={() => choisiOperation('+')} data-operation>+</button>
        <button onClick={() => appendnombre('7')} data-nombre>7</button>
        <button onClick={() => appendnombre('8')} data-nombre>8</button>
        <button onClick={() => appendnombre('9')} data-nombre>9</button>
        <button onClick={() => choisiOperation('-')}>-</button>
        <button onClick={() => appendnombre('.')}>.</button>
        <button onClick={() => appendnombre('0')}>0</button>
        <button onClick={() => compute()} className='span-deux' data-equation>=</button>
      </div>
    </div>
  );
}

export default Home;
