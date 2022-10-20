import './App.css';
import Image from './Image'

function App() {
  const image = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <div className="App">
      <Image source={image} alternativeText='Cute cat staring'/>
    </div>
  );
}

export default App;
