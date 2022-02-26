import Productlist from './components/Productlist'
import SearchBar from './components/SearchBar'
import React from "react";
import { useState } from "react";
import './App.css';
import listerinecoolmint from './listerinecoolmint.jpg';
import sodastreamspirit from './sodastreamspirit.jpg';
import dyson from './dyson.jpg';
import samsungtv from './samsungtv.jpg';
import kattila from './kattila.jpg';
import cocacola from './cocacola.png'
import alecoq from './alecoq.jpg';
import kaiuttimet from './kaiuttimet.jpg';
import pelikuulokkeet from './pelikuulokkeet.jpg';
import five from './five.png'
import four from './four.png'
import one from './one.png'

function App() {

    const [ productlist, setproductlist ] = useState([
        {img: listerinecoolmint ,name: 'Listerine Cool Mint, suuvesi',description: "Raikasta sekä puhdista suusi viileällä mintulla!",price: 6.60, rating: five},
        {img: sodastreamspirit ,name: 'Sodastream Spirit Megapack hiilihapotuslaite, musta',description: "Valmista kuplavettä kotonasi!",price: 69.90, rating: four},
        {img: dyson ,name: 'Dyson AM 07 tuuletin',description: "Pidä itsesi viileänä tulevaa kesää varten!",price: 399.99, rating: five},
        {img: samsungtv ,name: 'Samsung 65 5k uhd 65tu7005',description: "Suuri televisio uskomattomalla kuvanlaadulla!",price: 1199.90, rating: one},
        {img: kattila ,name: 'Functional Form kattila 3,0L',description: "Fiskars Functional Form ‑kattila tekee jokapäiväisestä ruoanlaitosta helppoa!",price: 48.95, rating: five},
        {img: cocacola ,name: 'Coca-Cola 1,5l virvoitusjuoma',description: "Kasvisuutejuoma Coca-Cola on ylivoimaisesti suosituin virvoitusjuoma Suomessa ja koko maailmassa",price: 2.85, rating:five}, 
        {img: alecoq ,name: 'A Le Coq Premium Export 24x0,33l',description: "Eestiläinen premium export",price: 1.39, rating: four},
        {img: kaiuttimet ,name: 'Logitech Z333 2.1 tietokonekaiuttimet',description: "Hyvä äänentoisto järkevään hintaan!",price: 49.76, rating: five},
        {img: pelikuulokkeet ,name: 'Corsair VIRTUOSO RGB Wireless SE pelikuulokkeet',description: "Markkinoiden parhaat pelikuulokkeet!",price: 209.99, rating: five },   
    ]);

    const priceDES = () => {
      let sortedDES = [...productlist];
      sortedDES.sort((a,b)=>{

        if(a.price > b.price) return -1;
        
        if(a.price < b.price) return 1;
        
      })
        setproductlist(sortedDES)
    }
    const priceRIS = () => {
      let sortedRIS = [...productlist];
      sortedRIS.sort((a,b)=>{

        if(a.price > b.price) return 1;
        
        if(a.price < b.price) return -1;
        
      })
        setproductlist(sortedRIS)
    }

   
    return (
      <div className="App">
          <SearchBar clickMe = {priceRIS}/>
          <div className ="productContainer">
            {productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
      </div>
      </div>
    );
  }

export default App;