import './App.css'
import Card from './components/card/Card'

function App(){
  return(
    <div className="app-container">
      <Card name="Balamurugan" email="bala@example.com" btnName="Btn1"/>
      <Card name="Arun Kumar" email="arun@example.com" btnName="Btn2"/>
      <Card name="Priya Sharma" email="priya@example.com" btnName="Btn3"/>
    </div>
  );  
};
export default App;