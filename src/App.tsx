import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [cep, setQuery] = useState("");
  const [luckyText, setLuckyText] = useState("Estou com sorte"); // Estado do texto do botão

  const handleSearch = async () => {
    if (cep.trim()) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          console.log(`Endereço encontrado para o CEP ${cep}:`);
          console.log(`Bairro: ${data.bairro}`);
          console.log(`Cidade: ${data.localidade}`);
          console.log(`Estado: ${data.uf}`);
        } else {
          console.log("CEP não encontrado");
        }

      } catch (error) {
        console.log("Erro ao buscar CEP", error);
      }
    }
  };

  const handleLucky = () => {
    if (cep.trim()) {
      setLuckyText(`Estou com sorte: ${cep}`);
    }
  };

  return (
    <div className="app">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
        className="logo"
      />
      <input
        className="search-input"
        type="text"
        placeholder="Pesquise no Google"
        value={cep}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleSearch}>Pesquisaa Google</button>
        <button onClick={handleLucky}>{luckyText}</button>
      </div>
    </div>
  );
};

export default App;
