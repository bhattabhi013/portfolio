import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island  from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { keyboard, soundoff, soundon, swipe } from '../assets/icons'


const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const adjustIslandForScreens = () => {
    let scale, position = [0, -6.5, -43.4]; // x y z;
    // let rotation = [0.1, 4.7, 0];
    if(window.innerWidth < 768){
      scale = [0.9, 0.9, 0.9];
    }else{
      scale = [1, 1, 1];
    }

    return [scale, position];
  }

  useEffect(() => {
    if(isPlayingMusic){
      audioRef.current.play();
    }

    return() => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustPlaneForScreens = () => {
    let scale, position; // x y z;

    if(window.innerWidth < 768){
      scale = [1.5,1.5,1.5];
      position = [0, -1.5, 0];
    }else{
      scale = [3, 3, 3];
      position = [0, -4, -4];
    }

    return [scale, position];
  }

  const [islandScale, islandPosition] = adjustIslandForScreens();
  const [planeScale, planePosition] = adjustPlaneForScreens();
  return (
    <section className='w-full h-[100vh] relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo 
        currentStage = {currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-tansparent ${
        isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000}}>
      <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={[2]}/> // from a distance ex: sunlight
        <ambientLight intensity={[0.5]}/> // illuminate obj without shadows
        <pointLight position={[10, 5, 10]} intensity={2} /> // light coming from a point in all direction : not needed
        <spotLight 
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}/> // same as point but in shape of cone : not needed
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/> // gradient to scene

        <Bird />
        <Sky 
        isRotating= {isRotating}
        />
        <Island 
          position = {islandPosition}
          scale= {islandScale}
          rotation= {[0.1, 4.7077, 0]}
          isRotating= {isRotating}
          setIsRotating= {setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane 
          isRotating={isRotating}
          scale = {planeScale}
          position= {planePosition}
          rotation= {[0,20,0]}
        />
      </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} 
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        alt="soundon" />
      </div>
      <div className='absolute bottom-1 right-2'>
        <img src={!isRotating ? swipe : keyboard } 
        className='w-10 h-10 cursor-pointer object-contain justify-center'
        alt="soundon" />
        <p>
          <span className='purple-gradient_text font-semibold drop-shadow items-center justify-center'>
            Swipe
          </span>
        </p>
      </div>
    </section>
  )
}

export default Home