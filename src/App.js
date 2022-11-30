import Login from "./components/Login";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

function App() {

  var reply =window.sessionStorage.getItem("isLoggedIn")
    console.log("from local storage at app js",reply)
  return (
  <>
    
   {reply === null && <Login />} 
   {reply!== null && 

   (
   <>
   <Navbar/>
   <Details/>
   </>
   )
   }
 
  </>
  );

}
export default App;
