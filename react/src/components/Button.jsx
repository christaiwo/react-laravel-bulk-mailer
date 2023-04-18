export const PrimaryButton = ({onclick, test}) => {
  return (
    <button onclick={onclick} className='bg-blue-600 text-white font-bold py-2 px-2 rounded-md' >{test}</button>
  )
}

export const SuccessButton = ({onclick, test}) => {
    return (
      <button onclick={onclick} className='bg-green-600 text-white font-bold py-2 px-2 rounded-md' >{test}</button>
    )
}

export const DangerButton = ({onclick, test}) => {
    return (
      <button onclick={onclick} className='bg-red-600 text-white font-bold py-2 px-2 rounded-md' >{test}</button>
    )
}

export const WarningButton = ({onclick, test}) => {
    return (
      <button onclick={onclick} className='bg-yellow-500 text-white font-bold py-2 px-2 rounded-md' >{test}</button>
    )
}

export const DarkButton = ({onclick, test}) => {
    return (
      <button onclick={onclick} className='bg-black text-white font-bold py-2 px-2 rounded-md' >{test}</button>
    )
}


// outline buttons
export const PrimaryButtonOutline = ({onclick, test}) => {
    return (
      <button onclick={onclick} className='border-2 border-blue-600 text-black font-bold py-2 px-2 rounded-md' >{test}</button>
    )
  }
  
  export const SuccessButtonOutline = ({onclick, test}) => {
      return (
        <button onclick={onclick} className='border-2 border-green-600 text-black font-bold py-2 px-2 rounded-md' >{test}</button>
      )
  }
  
  export const DangerButtonOutline = ({onclick, test}) => {
      return (
        <button onclick={onclick} className='border-2 border-red-600 text-black font-bold py-2 px-2 rounded-md' >{test}</button>
      )
  }
  
  export const WarningButtonOutline = ({onclick, test}) => {
      return (
        <button onclick={onclick} className='border-2 border-yellow-500 text-black font-bold py-2 px-2 rounded-md' >{test}</button>
      )
  }
  
  export const DarkButtonOutline = ({onclick, test}) => {
      return (
        <button onclick={onclick} className='border-2 border-red-600 text-black font-bold py-2 px-2 rounded-md' >{test}</button>
      )
  }