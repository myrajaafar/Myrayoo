const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center 
      items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${ // if backgroundColor is provided, render it, else render default
        backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-[#8F5F7B] text-white border-[#8F5F7B]'} ${fullWidth && 'w-full'}`}>
        {label}
        {iconURL && // if iconURL is provided, render the icon
        <img src={iconURL} alt="arrow right icon" 
            className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button