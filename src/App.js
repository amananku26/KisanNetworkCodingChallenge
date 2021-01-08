import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar';
import Homepage from './Components/Homepage';
import {Route, Switch} from "react-router-dom"
import Info from './Components/Info';
import SendSms from './Components/SendSms';


function App() {
  return (
    // BEm naming convention
    <div className="app">
     <Appbar/>
     <Switch>
       <Route path="/" exact render={()=> <Homepage/>}/>
       <Route path="/info/:id" exact render={()=> <Info/>}/>
       <Route path="/info/sendsms/:id" exact render={()=> <SendSms/>}/>
     </Switch>
    
    </div>
  );
}

export default App;