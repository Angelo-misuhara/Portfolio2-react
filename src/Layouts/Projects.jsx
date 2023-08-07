import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Projects = () => {

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
    }
  ]

  
  return (
    <>
      <h1 className="mt-[9rem] font-black text-6xl text-center p-9 text-[#4fa165] text-" id="Projects">Recent <span className="text-4xl">Projects</span></h1>
      <div className="flex">
        <div className=" rounded-lg m-9 flex flex-row justify-center gap-[9rem] p-9" id="container-Proj">
          <div className="basis-2/4 flex flex-col gap-2 pt-4" id="containercontext">
            <h1 className="text-3xl font-medium">PokeMon App</h1>
            <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis assumenda ullam cum distinctio aperiam nesciunt! Officiis omnis tenetur reprehenderit.</p>
            <div className='mt-5'>
              <Button className='px-2 bg-[#d3e3e9] hover:bg-[#6fb8a7]'>
        <p>
        Visit Site
        </p>
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
          </div>
          </div>
          <img src="/img/PokePc2.png" alt="" className="w-2/6 rounded" />
        </div>
      </div>
    </>
  )
}

export default Projects