'use client';
import React, {  useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import style from './editor.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGear, faRepeat } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { compileCode } from '@/lib/compiler';
import CodeOutput from "../../types/codeOutput";
import { languages } from '@/data/languages';


const Editor: React.FC = () => { 
  const [languageId, setLanguageId] = useState<string>("105");
  const [code, setCode] = useState<string>(languages[4].template ?? '// write your code here');
  const [codeOutput, setcodeOutput] = useState<CodeOutput | null>(null);
  const [inputArea, setInputArea] = useState<string>('')
  const [compiling, setCompiling] = useState<boolean>(false);

  const languageIdx = languages.findIndex(lang => String(lang.id) === languageId);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLangId = e.target.value as string;
    const newIdx = languages.findIndex(lang => String(lang.id) === newLangId);
    
    if (newIdx !== -1) {
      setLanguageId(newLangId);
      setCode(languages[newIdx].template);
    }
  };
  async function handleCodeRun() {
    setCompiling(true);
    const response = await compileCode(languageId, code, inputArea);
    setcodeOutput(response);
    setCompiling(false);
  }
  return (
    <div className="flex flex-row py-4 px-1 bg-recessive" style={{ height: '103vh' }} >
      <div className='w-1/2'>

        <div className='editorNav py-2 px-2 flex flex-row justify-between'>
          <select id="language-select" className={style.select + " p-1 border border-gray-300 bg-primary  focus:outline-none"} value={languageId} onChange={handleLanguageChange} >
            {languages.map((lang, index) => {
              return (
                <option key={index} id={String(index)} value={String(lang.id ?? '')}>{lang.name}</option>
              )
            })}
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
            language={languages[languageIdx].monaco}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>

      </div>
      <div className='w-1/2 flex flex-col px-3'>
        <div className='editorNav py-2 px-1 flex flex-row justify-between' title='Run Code'>
          <Button text="Run" style='btn btn-primary buttonSmall' onClick={handleCodeRun} />
        </div>
        <div className="my-1">
          <textarea name="inputArea" value={inputArea} onChange={(e) => setInputArea(e.target.value)} id="inputArea" className={style.inputArea} placeholder='If your code takes input, Enter you Input here'></textarea>
        </div>
        <p>Output</p>
        <div className={style.outputArea + ' my-1 p-3'}>
          {
            compiling ? <span> Compiling....</span> : (codeOutput &&
              <div className='outPutArea__wrapper border p-3 h-full'>
                <div className="status"> Status : {codeOutput.status?.description ?? "Pending"} </div>
                <div className='flex flex-wrap my-5'>
                  {codeOutput.time && <div className='w-[150px] flex flex-col'>
                    <span>Time:</span>
                    <span> {codeOutput.time} </span>
                  </div>}
                  {codeOutput.memory && <div className='w-[150px] flex flex-col'>
                    <span>Memory:</span>
                    <span>{codeOutput.memory}</span>
                  </div>
                  }
                  {codeOutput.message && <p>{codeOutput.message}</p>}
                  {codeOutput.stderr && (
                    <div className='w-full'>
                      <p className='mb-2'>Error</p>
                      <div className='p-1 bg-recessive'>
                        <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>
                          {codeOutput.stderr}
                        </pre>
                      </div>
                    </div>
                  )}

                  {codeOutput.stdout && <div className='w-full'>
                    <p className='mb-2'>Your Output</p>
                    <div className='p-2 bg-recessive'>
                      <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>
                        {codeOutput.stdout}
                      </pre>
                    </div>
                  </div>
                  }

                  {codeOutput.compile_output && (
                    <div className='w-full'>
                      <p className='mb-2'>Compile Output</p>
                      <div className='p-1 bg-recessive'>
                        <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>
                          {codeOutput.compile_output}
                        </pre>
                      </div>
                    </div>
                  )}


                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Editor;
