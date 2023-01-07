import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpro from './files/pro/main';
import Proskills from './files/pro/skills';
import Procerti from './files/pro/certificate';
import Proabout from './files/pro/abouts';
import Proproject from './files/pro/project';


import Emoji from './files/FeedBack App/feed';
import Emoji2 from './files/FeedBack App/feed2';

        import Main from './files/reusable/Main';
        import Login from './files/login/login';
        import Congrats from './files/Congrats/Congrats';
        import Match from './files/super/match';
        import Button from './files/social button/button';
        import Notification from './files/notification/notification';
        import Card from './files/card/card'
        import Hello from './files/hello/hello';

import Dash from './files/z sample file/dashboard';
import Home from './files/z sample file/home';
import Works from './files/z sample file/works';
import Form from './files/z sample file/form';
import About from './files/z sample file/about';
import Testimonial from './files/z sample file/testimonial';
import Organicfood from './files/z sample file/organicfood';
import Products from './files/z sample file/products';
import Responce from './files/z sample file/responce';
import Incrementt from './files/hooks/hooks';
import Fruit from './files/Fruits Counter/fruits';
import Dates from './files/date/date';
import Crypto from './files/frontend/fcard';
import View from './files/view page/viewdata';
import Details from './files/view page/viewpage';
import Proedu from './files/pro/edu';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World in React JS</h1>
      <h1>create the React JS App and display the Hello World</h1> */}
      {/* <Card/> program */}
      {/* <Match/> */}
      {/* <Button/> */}
      {/* <Notification/> */}
      {/* <Login/> */}
      {/* <Card/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Notification' element={<Notification/>}/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/Match' element={<Match/>}/>
        <Route path='/Congrats' element={<Congrats/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/Hello' element={<Hello/>}/>
        <Route path='/Responce' element={[<Main/>,<Dash/>,<Responce/>]}/>

        <Route path='/Dash' element={<Dash/>}/>
        <Route path='/Home' element={[<Dash/>,<Home/>]}/>
        <Route path='/Works' element={[<Dash/>,<Works/>]}/>
        <Route path='/Form' element={[<Dash/>,<Form/>]}/>
        <Route path='/About' element={[<Dash/>,<About/>]}/>
        <Route path='/Testimonial' element={[<Dash/>,<Testimonial/>]}/>
        <Route path='/Organicfood' element={[<Dash/>,<Organicfood/>]}/>
        <Route path='/Products' element={[<Dash/>,<Products/>]}/>
        <Route path='/Responce' element={[<Dash/>,<Responce/>]}/>
        <Route path='/Emoji' element={[<Main/>,<Emoji/>]}/>
        <Route path='/Emoji2' element={[<Main/>,<Emoji2/>]}/>
        <Route path='/Fruit' element={[<Main/>,<Fruit/>]}/>
        <Route path='/Incrementt' element={[<Main/>,<Incrementt/>]}/>
        <Route path='/Dates' element={[<Main/>,<Dates/>]}/>
        <Route path='/Crypto' element={[<Main/>,<Crypto/>]}/>
        <Route path='/View' element={[<Main/>,<View/>]}/>
        <Route path='/Details/:id' element={<Details/>}/>
        
        <Route path='/' element={[<Mainpro/>,<Proedu/>,<Proskills/>,<Procerti/>,<Proabout/>]}/>
        <Route path='/Proskills' element={<Proskills/>}/>
        <Route path='/Procerti' element={<Procerti/>}/>
        <Route path='/Proabout' element={<Proabout/>}/>
        {/* <Route path='/Proproject' element={<Proproject/>}/> */}
        <Route path='/Proedu' element={<Proedu/>}/>
        

      </Routes>
      </BrowserRouter>
      {/* <Incrementt/> */}
      {/* <Fruit/> */}
    </div>
  );
}

export default App;