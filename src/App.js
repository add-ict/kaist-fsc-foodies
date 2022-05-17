import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header';
import data from './SubscribeDB';
import React,{useState} from 'react';

function App() {
  const [lang, setLang]=useState("ko");
  function changeLang(){
    if (lang==="ko")
      setLang("en");
    else setLang("ko");
  }
  return (
    <Container maxWidth="sm">
      <Header lang={lang} changeLang={changeLang}></Header>
      <div style={{width:"100%", height:"100vh", backgroundColor:"red"}}>
        {JSON.stringify(data.tags)}
      </div>
    </Container>
  );
}

export default App;
