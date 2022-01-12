import Onsubmit from './component/Onsubmit'
import Dynamicinput from './component/Dynamicinput'
import './App.css';
import Codespliting from './component/Codespliting'
import CalElectricityBill from './component/CalElectricityBill'
import SetHierarchy from './component/SetHierarchy'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';



function App() {
  return (
   <>
  
      <AppProvider>
   {/* <Onsubmit /> */}
   {/* <Dynamicinput /> */}
   {/* <CalElectricityBill /> */}
   <SetHierarchy />
   {/* {console.log(Codespliting(16, 24))} */}
   </AppProvider>

   </>
  );
}

export default App;
