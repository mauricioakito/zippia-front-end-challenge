import './App.css'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Table } from './components/Table'
import { Footer } from './components/Footer'
import { Message } from './components/Message'

const App = () => {

  return (
    <>
      <Header />
      <Message />
      <Search />
      <Table />
      <Footer />
    </>
  )
}

export default App
