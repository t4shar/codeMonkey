import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode ,faDownload ,faUsers, faQuestion , faUser , faGears} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './card.module.css';
import Card from './Card';


type FeatureArr = {
    name : string,
    description : string,
    icon?: IconDefinition,
    path?: string
}


const Featurecard = () => {
    const data: FeatureArr[] = [
  {
    "name": "Code Editor",
    "description": "An integrated, syntax-highlighted editor supporting multiple programming languages.",
    "icon": faCode,
    "path": "/ide/compiler"
  },
  {
    "name": "Code Compiler",
    "description": "Compile and run code directly from the browser.",
    "icon": faGears,
    "path": "/ide/compiler"
  },
  {
    "name": "Code Saving",
    "description": "Users can save their code for later access.",
    "icon": faDownload,
    "path": "/mycodes"
  },
  {
    "name": "Problem Solving",
    "description": "A curated set of programming problems to practice and improve coding skills.",
    "icon": faQuestion,
    "path": "/problems"
  },
  {
    "name": "User Accounts",
    "description": "Secure registration and login system.",
    "icon": faUser,
    "path": "/account"
  },
  {
    "name": "Community",
    "description": "Connect and collaborate with other developers.",
    "icon": faUsers,
    "path": "/community"
  }
]

  return (
    <div className='flex flex-row flex-wrap '>
      {
        data.map((card,index) =>{
          return(
            <Card name={card.name} description={card.description} icon={card.icon} path={card.path} key={index}/>
          )
        })
      } 
    </div>
  )
}
export default Featurecard;