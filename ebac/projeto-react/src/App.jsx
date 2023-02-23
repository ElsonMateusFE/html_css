//1. Importação
//2. Codigo do componente
import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  //const nome = 'Charles'

  //function retornaNome(){
  //  return nome
  //}

  //const pessoa = {
  //  nome: 'Maria'
  //}

  //let estaDeDia = true

  return (
    <>
     <Perfil nome="Elson Mateus" endereco="https://github.com/ElsonMateusFE.png"/>
     
     {formularioEstaVisivel && (
      <Formulario/>
     )}

     <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App

/*
<h1>{nome}</h1>
<h2>Olá, {retornaNome()}</h2>
<h3>Olá, {pessoa.nome}</h3>
{estaDeDia === true ? 'Bom dia' : 'Boa tarde'}
{estaDeDia ? 'Bom dia' : 'Boa tarde'}
{estaDeDia && 'Bom dia'}
*/