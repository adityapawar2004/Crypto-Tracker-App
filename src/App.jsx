import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
     
      <div className="Header">
   
        <input type="text" placeholder="Search the Currency..." onChange={(event) => {
  setSearch(event.target.value);
}}
 />
  </div>  
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
           );
        })}
      </div>
    </div>
  );
}

export default App;
