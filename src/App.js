
import './App.css';
import Header from "./Component/Header"
import Banner from "./Component/Banner"
import Background from './Component/Background';
import Logo from "./Component/Logo"
import data from "./data.json"
import Box from "./Component/Box"
import Buisness from './Component/Buisness';
import SmallBox from './Component/SmallBox'
import Discover from './Component/Discover'
import Expert from "./Component/Expert"
import Footer from "./Component/Footer"
function App() {
  return (
    <div >
      <Header/>
      <Banner/>
      <Background/>
      <Logo source={data.images}/>
      <Box/>
      <Buisness value1={data.boxes1} value2={data.boxes2} value3={data.boxes3}/>
      <SmallBox value4={data.SmallBox1} value5={data.SmallBox2}  value6={data.SmallBox3}  value7={data.SmallBox4}  />
      <Discover/>
      <Expert source1={data.expert}/>
      <Footer/>
    </div>
  );
}

export default App;
