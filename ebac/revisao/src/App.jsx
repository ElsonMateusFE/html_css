import { useState } from 'react'
import Perfil from './components/Perfil/index'
import ReposList from './components/ReposList'

function App() {
  return (
    <>
      <Perfil nome='ElsonMateusFE' endereco='https://github.com/ElsonMateusFE.png'/>
      <ReposList/>
      {/* {time && (
        <Formulario/>
      )}
      <button onClick={e => setTime(!time)}>Toggle Form</button> */}
    </>
  )
}

export default App
