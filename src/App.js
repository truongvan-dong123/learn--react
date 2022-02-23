import logo from './logo.svg';
import './App.css';

function App() {
  const name = "dong"
  const age = "22"
  const isMale = true;
  const student = {
          name: "Johnease FE"
  }
  const colorList = ["blue","red"]
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dong pro 123 
        </p>
       <p>xin chao tôi là {name} {age} {isMale ? "male" : "famale"}  </p>

       {isMale ?<p>male</p> : <p>female</p>}

       {isMale && <p>male</p>}
       {!isMale && <p>female</p>}

      {isMale && (
        <div>
        <p>male 1</p> 
        <p>male 2</p>
        <p>male 3</p> 
        </div>
      
      )
       }

      {isMale && (
        <>
        <p>male 1</p>  
        <p>male 2</p>
        <p>male 3</p> 
        </>     
      )
       }

      <p>{student.name}</p>
      <p>{colorList.map(color => <p style ={{color}}>{color}</p> )}</p>
      </header>
    </div>
  );
}

export default App;
