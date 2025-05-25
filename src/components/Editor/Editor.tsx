'use client';
import React, { useState } from 'react';
import MonacoEditor  from '@monaco-editor/react';
import style from './editor.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload , faGear , faRepeat} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


type Language = 'javascript' | 'python' | 'java' | 'cpp';

// Default code templates for each language
const defaultCode: Record<Language, string> = {
  javascript: `// JavaScript Example
console.log("Hello, world!");`,
  python: `# Python Example
print("Hello, world!")`,
  java: `// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}`,
  cpp: `// C++ Example
#include <iostream>
int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}`,
};

const Editor: React.FC = () => {
  const [language, setLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState<string>(defaultCode.javascript);

  // Handle when the user selects a different language
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setLanguage(newLang);
    // Load default code for the newly selected language
    setCode(defaultCode[newLang] || '');
  };

  return (
    <div className="flex flex-row py-4 px-1 bg-recessive" style={{ height : '100vh'}} >
      <div className='w-1/2'>

        <div className='editorNav py-2 px-2 flex flex-row justify-between'>
          <select id="language-select" className={style.select + " p-1 border border-gray-300 bg-primary  focus:outline-none"}  value={language} onChange={handleLanguageChange} >
            <option  value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
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
            language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>
      
      </div>
      <div className='w-1/2 flex flex-col px-3'>
        <div className='editorNav py-2 px-1 flex flex-row justify-between' title='Run Code'>
          <Button text="Run" style='btn btn-primary buttonSmall'  />
        </div>
        <div className="my-1">
            <textarea name="" id="" className={style.inputArea} placeholder='If your code takes input, Enter you Input here'></textarea>
        </div>
        <div className={style.outputArea+ ' my-1'}>
          <p>Output</p>
          <textarea name=""  id=""></textarea>
        </div>
      </div>
    </div>
  );
};

export default Editor;
