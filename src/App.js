import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  cursor: pointer;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [ frase, guardarFrase ] = useState({});

  const consultarApi = async () => {
    const api = await fetch ('https://www.breakingbadapi.com/api/quote/random');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  // Cargar una frase antes de la consulta

  useEffect(() => {
    consultarApi()
  }, [])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Button
        onClick={() => consultarApi()}
      >
        Obtener Frase
      </Button>
    </Contenedor>
  );
}

export default App;
