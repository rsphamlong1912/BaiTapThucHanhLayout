import './App.css';
import BaiTapThucHanhLayout from './Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import Databinding from './Components/Databinding/Databinding';
import Styles from './Components/Styles/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import DanhSachSanPhamProps from './Props/DemoProps/DanhSachSanPhamProps';
import BaiTapLayoutMap from './RenderWithMap/BaiTapLayoutMap';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import StateDemo from './StateDemo/StateDemo';
// import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 />
      {/* <BaiTapThucHanhLayout /> */}
      {/* < Databinding /> */}
      {/* <Styles /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo />  */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* < BaiTapLayoutMap /> */}
      <DanhSachSanPhamProps />
    </div>
  );
}

export default App;
