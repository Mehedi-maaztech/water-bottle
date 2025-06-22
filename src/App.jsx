import './App.css'
import Bottles from './component/Bottles/Bottles'
import Header from './component/Header/Header'
function App() {

  return (
    <>
      <h1 className='title-style'>Choose Your fine bottle</h1>
      <Header></Header>
      <Bottles></Bottles>
    </>
  )
}

export default App
