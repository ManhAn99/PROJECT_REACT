import React from 'react'
import AddMember from './components/AddMember'
import DetailMember from './components/DetailMember'
import EditMember from './components/EditMember'
import Header from './components/Header'
import MemberList from './components/MemberList'
import { useGlobalState } from './context/GlobalState'
import Zoom from 'react-reveal/Zoom';
import Modal from "react-modal";

const App = () => {
    const {data} = useGlobalState()
    const {detailMember} = data
    return (
        <div className = 'app'>
           <Header />
           {data.idEdit &&  <EditMember />}
           {data.isOpenForm && <AddMember />}
           <MemberList />
          {Object.keys(detailMember).length !== 0 && (
              <Modal isOpen = {true}>
                  <Zoom>
                      <DetailMember detailMember = {detailMember} />
                  </Zoom>
              </Modal>
          )}
           
        </div>
    )
}

export default App
