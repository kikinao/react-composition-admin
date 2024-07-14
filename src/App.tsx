import MyLayout from "./components/MyLayout/MyLayout"
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <>
      <MyLayout children={<Outlet />}>
        {/* <div>主要内容</div> */}
      </MyLayout>
    </>
  )
}

export default App