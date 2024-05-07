import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './pages/Search'
import { User } from './pages/User'
import NotFoundPage from './pages/UserNotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user" element={<User />} />
          <Route path="/user404" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;