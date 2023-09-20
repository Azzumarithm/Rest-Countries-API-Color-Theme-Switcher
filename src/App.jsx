
import './App.css'
import { useGlobalContext } from "./Components/Context/Context";
import Country from './Components/Country/Country';
import Home from './Components/Home/Home';

function App() {
  const {URL} = useGlobalContext()

  return (
    <>
      <main className={`app`}>
        <Home URL={URL}/>
      </main>
    </>
  )
}

export default App
