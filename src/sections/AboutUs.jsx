import Button from "../components/Button"

const AboutUs = () => {
    return (
        <section id="about-us"
        className="flex justify-between items-center gap-10 mx-lg:flex-col w-full max-container">
          <div className="flex flex-1 gap-10 flex-col items-center">
            <h2 className="font-palanquin text-4xl capitalize font-bold text-center">
              We Provide You
              <span className="text-[#8F5F7B]"> Super Quality </span>
              Forever Friend
            </h2>
            <p className="mt-4 lg:max-w-screen-md info-text text-center">
            We specialize in rescuing one-of-a-kind thrifted plush toys and giving them a new life through adoption. 
            Each of our Cuddle Companions has its own unique story, waiting for the perfect forever home. 
            Join us in spreading joy, one plushie at a time!
            </p>
            <div className="mt-11">
              <Button label="View detail"/>
            </div>
          </div>
        </section>
      )
}

export default AboutUs