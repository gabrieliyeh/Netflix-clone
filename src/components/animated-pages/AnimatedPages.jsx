import React, {useEffect} from 'react'
import "./animated-pages.css"
import AOS from 'aos'

const AnimatedPages = () => {
    useEffect(() => {
        AOS.init()
    }, [])


  return (
    <>
     <main className='height'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea tenetur unde et aut. Excepturi quasi, labore, doloribus fuga quos culpa rerum numquam voluptatum deserunt nostrum laborum eveniet veniam fugit sequi!
        </main>
    <section className='card-container'>
       
        <article
        data-aos="fade-left"
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dignissimos dolorum libero laboriosam eligendi.</p>
        </article>
        <article
         >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dignissimos dolorum libero laboriosam eligendi.</p>
        </article>
        <article
        data-aos="fade-right"
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta dignissimos dolorum libero laboriosam eligendi.</p>
        </article>
    </section>
    </>
  )
}

export default AnimatedPages