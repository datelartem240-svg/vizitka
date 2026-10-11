import './App.css'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'
import { useRef, useEffect} from 'react'
import { canvasForMouse } from './styles/canvass'

export default function App() {

  /*const canvasRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    if(canvas){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cl = new canvasForMouse(canvas, window.innerWidth, window.innerHeight);
    }else{
      console.log('canvas hot found, ref is null')
    };
  },[]);*/

  return (
    <>
    <div className='app'>
      {/*<canvas ref={canvasRef} className='canvas'/>*/}
      <Routes>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
    </>
  )
};