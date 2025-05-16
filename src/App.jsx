
import './App.css'

function App() {
  const Apresentacao = {
    nome:"Bruna",
    sobrenome:  "Camargo Galindo",
    curso: "tecnico em informatica",
    idade: "17 anos",
  }
  const saudacao = (saudacao) =>
  {
    alert(`olá ${Apresentacao.nome}`)
  }

  return (
    <>
    
        <h2> meu nome é {Apresentacao.nome} {Apresentacao.sobrenome}</h2>
        <p>tenho  {Apresentacao.idade} e estudo no curso de;
          {Apresentacao.curso}
        </p>

    <button onClick={saudacao}> saudacao</button>
    </>
  )
}

export default App