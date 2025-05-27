import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { setUser, setSelectedModel } from './store/user/userSlice'

import './App.css'
import Welcome from './pages/Welcome/Welcome'
import Chat from './pages/Chat/Chat'

function App() {
  const dispatch = useDispatch()
  const { API_KEY } = useSelector((state: RootState) => state.user)
useEffect(() => {
    // Configura aquí tu API key y nombre fijos
    dispatch(setUser({
      name: 'Jose',        // Cambia esto por el nombre que quieras
      API_KEY: 'AIzaSyAivCOD-NXXmO9NUxi0eHCuJQmesN60L8I',   // Cambia esto por tu API key
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
