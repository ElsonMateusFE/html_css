import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <Projetos />
      </main>
    </>
  )
}

export default App
