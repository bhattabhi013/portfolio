import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/Bahubali-The-beginning.webp'
import IMG2 from '../../assets/kgf.jfif'
import IMG3 from '../../assets/rrr.webp'
import IMG4 from '../../assets/jagame.jpg'
import IMG5 from '../../assets/the kashmir files.jfif'
import IMG6 from '../../assets/ranjhana.jfif'

const data= [
    {
        id:'1',
        title:'bahubali',
        github:'https://github.com',
        img:IMG1,
    },
    {
        id:'2',
        title:'kgf',
        github:'https://github.com',
        img:IMG2,
    },
    {
        id:'3',
        title:'rrr',
        github:'https://github.com',
        img:IMG3,
    },
    {
        id:'4',
        title:'jagame-thandiram',
        github:'https://github.com',
        img:IMG4,
    },
    {
        id:'5',
        title:'kashmirfiles',
        github:'https://github.com',
        img:IMG5,
    },
    {
        id:'6',
        title:'ranjhana',
        github:'https://github.com',
        img:IMG6,
    },

]
    


const portfolio = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>projects</h2>
        <div className='projects_container'>
            {
        data.map(({id,title,github,img}) => {
            return (
        
            <article key={id} className='projects_item'>
                <div className='projects_item-image'>
                    <img src={img} alt={title}/>
                </div>
               
                <h3>{title}</h3>
                <div className='cta'>
                <a href={github} className='btn' target='_blank'>movie</a>
                </div>
            </article>
            ) 
             })
            }
             

            </div>
           
    </section>
  )
}

export default portfolio