function ToyCard({ imgURL, changeBigImage, bigImg }) {
    const handleClick = () => {
        if(bigImg !== imgURL.bigToy) {
            changeBigImage(imgURL.bigToy);
        }
    }
  return (
    <div className={`border-2 rounded-xl 
        ${bigImg === imgURL.bigToy ? 
            'border-[#8F5F7B]':'border-transparent'} cursor-pointer max-sm:flex-1
        `}
    onClick={handleClick}>
        <div className="flex justify-center items-center
        bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img 
                src={imgURL.thumbnail}
                alt="Toy collection"
                height={127}
                width={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ToyCard