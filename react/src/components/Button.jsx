export const PrimaryButton = ({onclick, text}) => {
  return (
    <button onClick={onclick} className='bg-blue-600 text-white font-bold py-2 px-2 rounded-md' >{text}</button>
  )
}

export const SuccessButton = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='bg-green-600 text-white font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const DangerButton = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='bg-red-600 text-white font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const WarningButton = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='bg-yellow-500 text-white font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const DarkButton = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='bg-black text-white font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}


// outline buttons
export const PrimaryButtonOutline = ({onclick, text}) => {
  return (
    <button onClick={onclick} className='border-2 border-blue-600 text-black font-bold py-2 px-2 rounded-md' >{text}</button>
  )
}

export const SuccessButtonOutline = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='border-2 border-green-600 text-black font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const DangerButtonOutline = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='border-2 border-red-600 text-black font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const WarningButtonOutline = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='border-2 border-yellow-500 text-black font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}

export const DarkButtonOutline = ({onclick, text}) => {
    return (
      <button onClick={onclick} className='border-2 border-red-600 text-black font-bold py-2 px-2 rounded-md' >{text}</button>
    )
}