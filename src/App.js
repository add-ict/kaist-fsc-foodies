import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header';

function App() {
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <div style={{width:"100%", height:"100vh", backgroundColor:"red"}}></div>
    </Container>
  );
}

export default App;
