
 
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; //  zxcvbn library for password strength estimation
import med from '/src/assets/med.png'
import strong from '/src/assets/strong.png'
import veryStrong from '/src/assets/veryStrong.png'
import weak from '/src/assets/weak.png'
import veryWeak from '/src/assets/veryWeak.png'
function PasswordStrength() {
  const [strength, setStrength]=useState('')
  const [filledBar, setFilledBar]=useState('0%')
  const [barColor, setBarColor]=useState('')
  const [emoji, setEmoji]=useState('')

  const handlePasswordChange=(e)=>{

    const score = zxcvbn(e.target.value).score

    switch(score){
      case 0 :
        setStrength('Very Weak')
        setFilledBar('w-[0%]')
        setEmoji(veryWeak)
        
        break;
      case 1 :
        setStrength('Weak')
        setFilledBar('w-[25%]')
        setBarColor('bg-[#E71F1F]')
        setEmoji(weak)
        break;
      case 2 :
        setStrength('Medium')
        setFilledBar('w-[50%]')
        setBarColor('bg-[#E5E851]')
        setEmoji(med)
        break;
      case 3 :
        setStrength('strong')
        setFilledBar('w-[80%]')
        setBarColor('bg-[#0A7AFF]')
        setEmoji(strong)

        break;
      case 4 :
        setStrength('Very Strong')
        setFilledBar('w-[100%]')
        setBarColor('bg-[#75975E]')
        setEmoji(veryStrong)
        break;


      default:
        setStrength('')
        setFilledBar('w-[0%]')
        
      
    }
  }

  return (
    <div className=' rounded border w-96 h-[500px] flex flex-col gap-8 justify-center items-center shadow-lg'>
      <div className=' flex justify-center items-center flex-col'>
        <h1 className=' text-2xl font-bold text-[#786581]'>Test password strength </h1>
        <p className=' text-[#44426E]'>Start Now !</p>
      </div>

      <hr className=' w-3/5' />

      <div className='flex flex-col gap-2 w-full px-14'>
        <p className='text-[#44426E] font-medium text-sm '>Password </p>
        <input className=' text-[#292643] p-2 px-4 border-solid w-full border-[#44426E] border outline-[#44426E] rounded-lg'   onChange={handlePasswordChange} placeholder="Enter your password" />
        <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
        <div className={` h-2.5 rounded-full ${barColor} ${filledBar}`} ></div>
        </div> 
        <div className=' flex gap-2 items-center'>
          {emoji && <img className=' h-4' src={emoji} alt="" />}
         <p className=' text-xs text-[#00000082]'> {strength} </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default PasswordStrength;


