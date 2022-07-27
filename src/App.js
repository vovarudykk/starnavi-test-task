import './App.css';
import Cat from './patterns/creational/1_Constructor';
import AnimalFactory from './patterns/creational/2_Factory';

function App() {

  let cat = new Cat("Murko");

  let factory = new AnimalFactory();
  let animals = [
    factory.create('Murko', 'cat'),
    factory.create('Snoop', 'dog'),
    factory.create('Ara', 'parrot'),
  ]

  return (
    <div className="App">
      <button onClick={() => cat.sayMeow()} style={{marginBottom: '20px'}}>Make cat meow</button>
      <button onClick={() => console.log(animals)} style={{marginBottom: '20px'}}>Show created animals</button>
    </div>
  );
}

export default App;
