import logo from './logo.svg';
import './App.css';
import Program1 from './Test/Program1';
import UseEffectDemo from './Test/UseEffectDemo';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import TestUseEffect from './Test/TestUseEffect';
import Twowaybinding from './Test/Twowaybinding';
import { DemoForm } from './Test/DemoForm';
import {DemoForms} from  './TestingDemos/DemoForms'
 import { TestFormYupValidation } from './Test/TestFormYupvalidation';
import { TestTwoCounts } from './Test/TestTwoCounts';
import { DemoUseMemo } from './Test/DemoUseMemo';
import { UseCallbackDemo } from './Test/UseCallbackDemo';
import { TestThrottle } from './Test/TestThrottle';
import { TestDebouncing } from './Test/TestDebouncing';
import { Demo1 } from './ResponsiveDemo.js/Demo1';
import { ApiCall } from './ApiTest.js/ApiCall';


function App() {
  
  return (
    <>
   {/* <Program1 />
   <hr />
   <UseEffectDemo /> */}

   {/* <Twowaybinding /> */}
   {/* <  DemoUseMemo /> */}
   {/* <  UseCallbackDemo /> */}

   {/* <TestThrottle /> */}

   {/* <TestDebouncing /> */}

   {/* <DemoForms /> */}
   {/* <Demo1 /> */}
   <ApiCall />

   {/* <TestFormYupValidation /> */}

<BrowserRouter>
   <Routes>

<Route path ="/testUseEffect"  element={< TestUseEffect />} />
<Route path ="/program"  element ={<Program1 />} />

<Route path ="/formDemo" element={<DemoForm />} />

{/* <Route path="/" element={<TestTwoCounts />}  />  */}
{/* <Route path="/" element={<TestFormYupValidation />}  />  */}
   </Routes>
   </BrowserRouter>
   

   </>
  );
}

export default App;
