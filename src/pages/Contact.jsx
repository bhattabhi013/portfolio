import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import useAlert from '../hooks/useAlert';
import Alert from '../Components/Alert';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name: ' ', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();


  const handleChange = ({ target: { name, value } }) => {
    setForm({...form, [name]: value})
  }
  const handleFocus = (e) => {
   setCurrentAnimation('walk');
  }
  const handleBlur = () => {
    setCurrentAnimation('idle');  
  }

  const handleSubmit = (e) => {
    e.preventDeault();
    setIsLoading(true);
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
      {
        from_name  : form.name,
        to_name : 'Abhishek',
        from_email : form.email,
        to_email : 'bhattabhi013@gmail.com',
        message : form.message
      },
      import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY   
    ).then((e) => {
      showAlert({show: true, 
        text: 'Message sent succesfully! 😃', 
        type:'success'})
      setIsLoading(false);
      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation('idle');
        setForm({name: ' ', email: '', message: ''});
      }, [3000])
    },(e) => {
      showAlert({show: true, 
        text: 'Mail Not Sent! 😢', 
        type:'danger'})
      setCurrentAnimation('idle')
      console.log(e);
      setIsLoading(false);
    })
  }


  return (
   <section className='relative flex lg:flex-row flex-col max-container '>
    {alert.show && <Alert {...alert}/>}
    <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>
        Get in Touch
      </h1>
      <form
      ref={formRef} 
      className='w-full flex flex-col gap-7 mt-14'
      onSubmit={handleSubmit}>
        <label className='text-black-500 font-semibold'>
          Name
          <input 
          type='text' 
          name='name' 
          className='input' 
          placeholder='Abhi'
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input 
          type='text' 
          name='email' 
          className='input' 
          placeholder='ab@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Your Message
          <textarea 
          type='text' 
          rows={4}
          name='message' 
          className='textarea' 
          placeholder='How can I assist you?'
          required
          value={form.message} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <button type='submit' 
        disabled={isLoading}
        className='btn'
        onFocus={handleFocus}
        onBlur={handleBlur}>
          {isLoading ? 'Sending ...' : 'Send Message'}
        </button>
      </form>
    </div>

    <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
    <Canvas camera={{
        position: [0,0,5],
        fov: 75,
        near: 0.1,
        far: 1000
      }}>
        <directionalLight
        intensity={2.5}
        position= {[0,0,1]} />
        <ambientLight
        intensity={1}
        />
        <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
      <Suspense fallback={null}>
        <Fox 
        position= {[0.5, 0.35, 0]}
        rotation= {[12.7,-0.6,0]}
        scale= {[0.5, 0.5, 0.5]}
        currentAnimation={currentAnimation}
        />
      </Suspense>
    </Canvas>
    </div>
   </section>
  )
}

export default Contact