import UploadForm from './comps/UploadForm';
import Title from './comps/Title'
import ImageGrid from './comps/ImageGrid';
import Modals from './comps/Modals';
import {useState} from 'react'
function App() {
  const [seletecImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid  setSelectedImg = {setSelectedImg}/>
      {seletecImg && <Modals  setSelectedImg = {setSelectedImg} seletecImg = {seletecImg} /> }
    </div>
  );
}

export default App;
