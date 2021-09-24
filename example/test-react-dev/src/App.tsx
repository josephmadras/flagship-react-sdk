import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import { DecisionMode, FlagshipProvider} from "@flagship.io/react-sdk"
import {ENV_ID, API_KEY} from './config'
import Home from './Home';

interface IVisitorData{
  id: string
      context?: {
          age: number
  }
}

interface IAppContext {
  visitorData: IVisitorData
  setVisitorData: Dispatch<SetStateAction<IVisitorData>>;
}
const initStat = {
  visitorData:{
    id:"visitor_1",
    context:{
      age:20
    },
  },
  setVisitorData:()=>{}
}

export const appContext = React.createContext<IAppContext>(initStat)

let count=0

const loadingComponent = ()=>{
  return <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At doloremque neque eveniet voluptatem dicta optio sint quam vero tempore! Tempora exercitationem recusandae numquam dicta illum quisquam non est distinctio ad!
  </div>
}
function App() {
  const [visitorData,setVisitorData] = useState<IVisitorData>(initStat.visitorData)
  console.log("app");

  const onClick=()=>{
    console.log("count",count);
    setVisitorData({...visitorData,id:'visitor_'+ count })
    count++
  }
  return(
  <FlagshipProvider visitorData={visitorData} pollingInterval={5} loadingComponent={loadingComponent()} envId={ENV_ID} timeout={5} apiKey={API_KEY} decisionMode={DecisionMode.DECISION_API}>
    <Home />
    <button style={{width:100, height:50}} value={"click me"} onClick={()=>{onClick()}}></button>
  </FlagshipProvider>
  )
}

export default App;
