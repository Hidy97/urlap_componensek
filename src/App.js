import './App.css';
import FormComponens from './component/FormComponens';

function App() {
  function adatKuld(adatObj) {
    console.log(adatObj)
    //itt küldjük a backend felé
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Űrlap használata</h1>
      <article>
        <FormComponens adatKuld={adatKuld} />
      </article>
    </div>
  );
}

export default App;
