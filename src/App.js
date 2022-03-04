import SideMenu from './components/sideMenu/sidemenu';
import Main from './components/mainBody/main'
// import './App.css'
function App() {
  return (
    <div className="row">
      <div className="col-1" style={{zIndex:99}}>
        <SideMenu/>
      </div>
      <div className="col-11 col-m-8 col-s-4">
        <Main/>
      </div>
    </div>
  );
}

export default App;
