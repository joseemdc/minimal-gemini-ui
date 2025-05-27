import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

import { setUser, setSelectedModel } from './store/user/userSlice'

import './App.css'

import Chat from './pages/Chat/Chat'

function App() {
  const dispatch = useDispatch()
  
useEffect(() => {
    // Configura aquí tu API key y nombre fijos
    dispatch(setUser({
      name: 'Jose',        // Cambia esto por el nombre que quieras
      API_KEY: import.meta.env.VITE_GEMINI_API_KEY,   // Cambia esto por tu API key
      proxy: undefined
    }))
    dispatch(setSelectedModel('gemini-1.5-flash'))
  }, [dispatch])
  return (
    <main className={`app-wrapper light`}>
     
        <Chat />
        
    </main>
  )
}

export default App
