import AOS from 'aos';
import { useEffect } from 'react';

const MainPage = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  const contacts = [
    {
      link: 'https://www.instagram.com/gel.hong/',
      img: '/img/instagram-24.png'
    },
    {
      link: 'https://www.facebook.com/angelo.yocor?mibextid=ZbWKwL',
      img: '/img/facebook-24.png'
    },
    {
      link: 'https://www.linkedin.com/in/angelo-yocor-0885aa254/',
      img: '/img/linkedin-24.png'
    }
  ]

  const techStock =['/img/java-64.png','/img/javascript-64.png','/img/react-64.png','/img/mysql-644.png','/img/tailwind-64.png','/img/c++-64.png']
  return (
    <>
      <div className="flex flex-row pt-[5rem] flex-wrap justify-between overflow-hidden" id='mainpageIntro'>
        <div className=" p-7 basis-2/4" id="intros">
          <h1 data-aos="fade" data-aos-duration="1500" data-aos-delay="200" className="text-6xl font-black" id="intro">FrontEnd<span  data-aos="fade-left" data-aos-duration="900" data-aos-delay="400" className="text-2xl text-[#4fa165]"> Developer</span></h1>
          <p className="text-justify" data-aos="fade-right" data-aos-duration="800" data-aos-delay="700"> Hi! Im Angelo. Im aspiring Web Dev, My creativity is the compass that guides me through the boundless ocean of coding possibilities. I approach each project fearlessly, experimenting, and pushing the boundaries to create unforgettable digital experiences.</p>
          <div className="flex flex-row gap-2 pt-2">
            {contacts.map((img, key) => (
                <a href={img.link} rel='noreferrer' target='_blank' key={key}>
                    <img src={img.img} alt="" className='w-[1rem]'/>
              </a>
            ))}
          </div>
          <div className="flex flex-col pt-9 gap-3" id='tecchstock'>
            <h1 className="text-3xl" id="techStock" data-aos="fade" data-aos-duration="800" data-aos-delay="1100">
              Tech Stock
            </h1>
            <div className="flex flex-row gap-3" id='containerimgstock'>
              {techStock.map((tech, key) => (
                <img src={tech} alt="" key={key} className="w-[2rem]" data-aos="fade-up" data-aos-duration="800" data-aos-delay={key*200} />
              ))}
            </div>
          </div>
        </div>
        <div className=" justify-center flex pr-9" id="container-img" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
          <img src="/img/rei.png" alt="" className=" mx-[2rem] mt-[5rem] origin-bottom hover:origin-buttom hover:-rotate-12 transition-all " />
        </div>
      </div>
    </>
  )
}

export default MainPage