'use client';
import React, { useEffect, useState } from 'react';
import MonacoEditor  from '@monaco-editor/react';
import style from './editor.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload , faGear , faRepeat} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import {compileCode , getAllLangauages} from '@/lib/compiler';


interface language {
  id? : number,
  name? : string
}



const Editor: React.FC = () => {
  const [language, setLanguage] = useState<string>("63");
  const [Languages, setLanguages] = useState<language[]>([])
  const [code, setCode] = useState<string>('Write Your Code Here');
  const [codeOutput, setcodeOutput] = useState<string>('')
  const [inputArea, setInputArea] = useState<string>('')


  useEffect(() => {
    const setDefaultLang = async() =>{
      const data = await getAllLangauages();
      if(data){
        setLanguages(data);
      }
    }
    setDefaultLang();
  }, [])
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as string;
    setLanguage(newLang);
  };
  async function handleCodeRun(){
   const response = await  compileCode(language,code,inputArea);
   setcodeOutput('Write Your Code Here')
   setcodeOutput(response)
  }
  return (
    <div className="flex flex-row py-4 px-1 bg-recessive" style={{ height : '100vh'}} >
      <div className='w-1/2'>

        <div className='editorNav py-2 px-2 flex flex-row justify-between'>
          <select id="language-select" className={style.select + " p-1 border border-gray-300 bg-primary  focus:outline-none"}  value={language} onChange={handleLanguageChange} >
            { Languages.map( (lang,index) =>{
              return (
                <option key={index} value={lang.id}>{lang.name}</option>
              )
            } ) }
          </select>

          <div className='rightNav'>
            <span className='px-2 ' title='download'>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <span className='px-2 ' title='reset code '>
              <FontAwesomeIcon icon={faRepeat} />
            </span>
            <span className='px-2 ' title='settings'>
              <FontAwesomeIcon icon={faGear} />
            </span>
          </div>
        </div>
        

        {/* Monaco Editor */}
        <div className="border border-gray-200 rounded editorContainer">
          <MonacoEditor
            height="100%"
            // language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>
      
      </div>
      <div className='w-1/2 flex flex-col px-3'>
        <div className='editorNav py-2 px-1 flex flex-row justify-between' title='Run Code'>
          <Button text="Run" style='btn btn-primary buttonSmall' onClick={handleCodeRun}  />
        </div>
        <div className="my-1">
            <textarea name="inputArea" value={inputArea} onChange={(e)=> setInputArea(e.target.value)} id="inputArea" className={style.inputArea} placeholder='If your code takes input, Enter you Input here'></textarea>
        </div>
        <div className={style.outputArea+ ' my-1'}>
          <p>Output</p>
          <textarea name="outPutArea"  id="outPutArea" readOnly value={codeOutput}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Editor;
