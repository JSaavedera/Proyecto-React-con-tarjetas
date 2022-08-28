import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      
        <h1>Conoce nuestros servicios</h1>
        <Testimonio
          imagen='1'
          nombre='Barman'
          pais='Madrid'
          cargo='Conoce toda nuestra variedad'
          empresa='tragos y cocteles'
          testimonio='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in' />

<Testimonio
          imagen='2'
          nombre='Mesera'
          pais='Madrid'
          cargo='Conoce toda nuestra variedad'
          empresa='bocadillos y canapes'
          testimonio='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in' />

<Testimonio
          imagen='3'
          nombre='Mesero'
          pais='Madrid'
          cargo='Conoce toda nuestra variedad'
          empresa='tragos y cocteles'
          testimonio='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in' />

      </div>
    </div>
  );
}

export default App;
