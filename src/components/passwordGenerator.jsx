// mohamad's file 

import { useState } from 'react';

import './generatePasswords.css'

import img from '../assets/image 7.png'

import {Copy} from 'lucide-react'

const GeneratePasswords = () => {

    const [passwordGen, setPasswordGen] = useState({
        length: 8,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      });
      const [handelText, setHandelText] = useState('');
      const [rangeval, setRangeval] = useState(passwordGen.length);

      const [eyeleft, setEyeleft] = useState(false);
      const [eyeright, setEyeright] = useState(false);


    
      const handleChangeUppercase = () => {
        setPasswordGen({
          ...passwordGen,
          uppercase: !passwordGen.uppercase,
        });
      };
    
      const handleChangeLowercase = () => {
        setPasswordGen({
          ...passwordGen,
          lowercase: !passwordGen.lowercase,
        });
      };
    
      const handleChangeNumbers = () => {
        setPasswordGen({
          ...passwordGen,
          numbers: !passwordGen.numbers,
        });
      };
    
      const handleChangeSymbols = () => {
        setPasswordGen({
          ...passwordGen,
          symbols: !passwordGen.symbols,
        });
      };
    
      const setPasswordLength = (val) => {
        setPasswordGen({
          ...passwordGen,
          length: val,
        });
      };
    
      function generatePassword() {

        const numbersArrayy = Array.from(Array(10)).map((_e, i) => i + 48);
        const characterCodesNumber = numbersArrayy.map((code) =>
        String.fromCharCode(code),
        );

        const symbolsArray = Array.from(Array(7)).map((_e, i) => i + 58)
        .concat(Array.from(Array(6)).map((_e, i) => i + 91))
        .concat(Array.from(Array(15)).map((_e, i) => i + 33));
        const characterCodesSymbols = symbolsArray.map((code) =>
        String.fromCharCode(code),
        );

        const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
        const lowerCaseLetters = characterCodes.map((code) =>
        String.fromCharCode(code),
        );

        const upperCaseLetters = lowerCaseLetters.map((letter) =>
          letter.toUpperCase()
        );
    
        const { length, uppercase, lowercase, numbers, symbols } = passwordGen;
    
        const generateTheWord = (
          _length,
          uppercase,
          lowercase,
          numbers,
          symbols
        ) => {
          const shuffleArrayFirst = (array) => array.sort(() => Math.random() - 0.5);


          const availableCharacters = [
            ...(lowercase ? shuffleArrayFirst(lowerCaseLetters.slice(0, 12)) : []),
            ...(uppercase ? shuffleArrayFirst(upperCaseLetters.slice(0, 12)) : []),
            ...(numbers ? shuffleArrayFirst(characterCodesNumber.concat(characterCodesNumber)) : []),
            ...(symbols ? shuffleArrayFirst(characterCodesSymbols) : []),
          ];
          const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
          const characters = shuffleArray(availableCharacters).slice(0, rangeval);


          setHandelText(characters.join(''));
          return characters;
        };
    
        generateTheWord(length, uppercase, lowercase, numbers, symbols);
      }


      const changeEye = (() =>
      setEyeleft(current => !current) +
      setEyeright(current => !current)
    );

    
      return (
        <div className='hold_all'>

        <div className="card">
            <h1>Generate random password</h1>
            <p>Start Now !</p>
            <div className='line'></div>
            <div className='hold_info'>
            <p className='Password_Length'>Password Length</p>
            <button
                className="copy-button"
                onClick={() => {
                  if (handelText.length > 0) {
                    navigator.clipboard.writeText(handelText);
                    // setCopied(true);
                    setInterval(() => {
                      // setCopied(false);
                    }, 2000);
                  }
                }}
              >
                <Copy />
              </button>
            </div>

            <div className="password_box">
              <input
                className="password"
                type={eyeleft? "password" :"text"}
                value={handelText}
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setHandelText(e.target.value)}
              />


              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="70" viewBox="0 0 90 70" fill="none" className='eyes' onClick={changeEye}>
              <g filter="url(#filter0_d_1_132)">
                <ellipse cx="53.2996" cy="25" rx="11.7022" ry="15" transform="rotate(-180 53.2996 25)" fill="#FBFBFB"/> 
                <ellipse className='movement' cx={eyeright && handelText.length > 0? "47.9744" : "36"} cy="25.0004" rx="3.19151" ry="5" transform="rotate(-180 47.9744 25.0004)" fill="#292643"/>
                <ellipse cx="26.7022" cy="25" rx="11.7022" ry="15" transform="rotate(-180 26.7022 25)" fill="#FBFBFB"/>
                <ellipse  className='movement' cx={eyeleft && handelText.length > 0? "21.377" : "10"} cy="25.0004" rx="3.19151" ry="5" transform="rotate(-180 21.377 25.0004)" fill="#292643"/>
              </g>
              <defs>
                <filter id="filter0_d_1_132" x="0" y="3.8147e-06" width="90.0018" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="5" dy="10"/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_132"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_132" result="shape"/>
                </filter>
              </defs>
            </svg>


            </div>
            
            <div className='hold_checkbox'>
            <div className="word-crieteria__box">
              <div className='hold_check'>
              <input type="checkbox" checked={passwordGen.uppercase}
                  value={passwordGen.uppercase}
                  onChange={handleChangeUppercase}
                />
                <label>Uppercase</label>
              </div>
            </div>

            <div className="word-crieteria__box">
              <div className='hold_check'>
              <input type="checkbox" checked={passwordGen.lowercase}
                  value={passwordGen.lowercase}
                  onChange={handleChangeLowercase}
                />
                <label>Lowercase</label>
              </div>
            </div>
            </div>

            <div className='hold_checkbox'>
            <div className="word-crieteria__box">
              <div className='hold_check'>
              <input type="checkbox" checked={passwordGen.numbers}
                  value={passwordGen.numbers}
                  onChange={handleChangeNumbers}
                />
                <label>Number</label>
              </div>
            </div>
            <div className="word-crieteria__box">
              <div className='hold_check'>
              <input type="checkbox" checked={passwordGen.symbols}
                  value={passwordGen.symbols}
                  onChange={handleChangeSymbols}
                />
                <label>Symbols</label>
              </div>
            </div>
            </div>
            <div className="word-crieteria__box">
              <div>
                <label>Number of Password</label>
              </div>
              <div>
                <input
                  className="characterAmountRange"
                  type="number"
                  min="8"
                  max="12"
                  value={rangeval}
                  onChange={(e) => setPasswordLength(e.target.value)}
                />
                <input type="range" min="8" max="12" value={rangeval}  onChange={(event) => setRangeval(event.target.value)} />
              </div>
            </div>
            <button className="generate_button" onClick={generatePassword}>
                Generate password
              </button>
          </div>

          <div className='hold_img'>
            <img src={img} alt="" />
          </div>
          </div>
      );
}

export default GeneratePasswords