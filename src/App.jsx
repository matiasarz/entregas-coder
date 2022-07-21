import './App.css';

function App() {

    let arr = [1,2,3,4,5,6,7,8]

    const nombreCompleto = {
      color: 'blue',
      fontSize: '100',
    }

    return (
      <div>
        <h1>Hola coder house</h1>
        <ul>
          {
            arr.map(item => <li key={item}>Numero {item}</li> )
          }
        </ul>
        <button onClick={ () => alert('Hola wey') }>Haceme click</button>
        <p style={nombreCompleto}>Matias Arzamendia</p>
      </div>
    );
}

export default App;
