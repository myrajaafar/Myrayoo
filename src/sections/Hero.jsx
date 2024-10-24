import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics, toys } from "../constants"
import { cancoul } from "../assets/images"
import ToyCard from "../components/ToyCard"
import { useState } from "react"

const Hero = () => {
  const [bigImg, setBigImg] = useState(cancoul);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatiner">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        
        <h1 className="mt-20 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-[#FFF4F4] xl:whitespace-nowrap relative z-10 pr-10">
            Meet Our New
          </span>
          <br />
          <span className="text-[#8F5F7B] inline-block mt-3">
            Babies
          </span>
        </h1>
        <p className="font-montserrat text-[#976B85] text-lg font-bold leading-8 mt-6 mb-14 sm:max-w-sm">
          Adopt Joy. One Toy at a Time.
        </p>
        <Button label="Adopt now !"
        iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screem max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigImg}
          alt="toy collection" 
          width={500} 
          height={500} 
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-20">
          {toys.map((image,index) => 
          (
            <div key={index}>
              <ToyCard
                index={index}
                imgURL={image}
                changeBigImage={(bigToy) => setBigImg(bigToy)} 
                bigImg={bigImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero