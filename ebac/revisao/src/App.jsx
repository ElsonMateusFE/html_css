import { useState } from 'react'
import Perfil from './components/Perfil'
import ReposList from './components/ReposList'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />
      {nomeUsuario && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
