
import AOS from 'aos';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  const Projects = [
    {
    img: '/img/PokePc2.png',
    title: "Poke-App",
    About: "I've created a Pokemon app that allows users to search for specific Pokemon and view their attack, type, name, and other details using a Pokemon API. The app serves as a handy resource for Pokemon enthusiasts, making it easy to explore and strategize gameplay effectively.",
    link:'https://pkmon.netlify.app/'
  },
  {
    img: '/img/calculator.png',
    title: "Calculator",
    About: "My calculator app offers a user-friendly interface for basic arithmetic functions, ensuring quick and efficient mathematical calculations on the go. It's a simple yet essential tool for everyday use.",
    link:'https://angelo-misuhara.github.io/Calculator/',
    },
  {
    img: '/img/dictionary.png',
    title: "Dictionary-App",
    About: "Introducing my dictionary app – redefine your word learning experience. Discover meanings seamlessly through a reliable API, and with our integrated voice speech feature, conquer word pronunciation like a pro. Unlock a new level of linguistic mastery with our app today.",
    link:'https://dictioanry.vercel.app/',
    },
  {
    img: '/img/newsAp.png',
    title: "nwsp-App",
    About: "Discover real-time updates in our user-friendly news app. Explore breaking stories, trends, and reliable articles for effortless, convenient, and informed browsing. Stay updated with ease.",
    link:'https://n-app-xnkp.vercel.app/',
    },
  {
    img: '/img/todolist.png',
    title: "todo-App",
    About: "Introducing our To-Do List app – your ultimate productivity companion. Organize, prioritize, and conquer tasks effortlessly. Say hello to a more organized and accomplished you. Simplify tasks, elevate productivity – it's all here.",
    link:'https://td-lst.vercel.app/',
    },
  {
    img: '/img/searchapp.png',
    title: "imgsrch-App",
    About: "Discover, download, and explore with our Image Search App. Effortlessly find diverse images using our intuitive interface and powerful image API. Your gateway to endless inspiration – all just a tap away.",
    link:'https://srchimg.netlify.app/',
    }
  ]

  
  return (
    <>
      <h1 className="mt-[13rem] font-black text-6xl text-center p-9 text-[#4fa165] text-" id="Projects">Recent <span className="text-4xl">Projects</span></h1>
      <div className="flex flex-col gap-[5rem] overflow-hidden pb-2">
        {Projects.map((Proj,key) => (
         <div className=" rounded-lg m-9 flex flex-row justify-center gap-[9rem] p-9" id="container-Proj" data-aos="fade" key={key} data-aos-duration="800" data-aos-delay="100">
           <div className="basis-2/4 flex flex-col gap-2 pt-4" id="containercontext">
               <a href={Proj.link}><h1 className="text-3xl font-medium" data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">{Proj.title }</h1></a>
              <p className="text-justify" data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">{Proj.About}</p>
             <div className='mt-5' data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
           </div>
            </div>
          
              <img src={Proj.img} alt="" className="w-2/6 rounded" data-aos="fade-left" data-aos-duration="500" data-aos-delay="400" />
           
          </div>
            
        ))}
      </div>
    </>
  )
}

export default Projects

  