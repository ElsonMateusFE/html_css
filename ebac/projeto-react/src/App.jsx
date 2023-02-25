//1. Importação
//2. Codigo do componente
import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/RepoosList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
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
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

     {nomeUsuario.length > 4 && (
       <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
      </>
     )}

     {/* <Perfil nomeUsuario="ElsonMateusFE" />

     <ReposList nomeUsuario="ElsonMateusFE"/> */}
     
     {/* {formularioEstaVisivel && (
      <Formulario/>
     )}

     <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
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

 <Perfil nome="Elson Mateus" endereco="https://github.com/ElsonMateusFE.png"/>
*/