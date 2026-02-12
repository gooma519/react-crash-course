import './App.css'
import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
  const [modalVisible, setModalVisible] = useState(true)

  const showModalHandler = () => {
    setModalVisible(true)
  }

  const hideModalHandler = () => {
    setModalVisible(false)
  }

  return (
      <>
        <MainHeader onCreatePost={showModalHandler}/>
        <main>
          <PostList onClose={hideModalHandler} modalVisible={modalVisible}/>
        </main>
      </>
  )
}

export default App
