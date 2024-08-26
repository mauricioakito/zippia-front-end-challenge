import { Header } from './components/Header'
import { Search } from './components/Search'
import { Table } from './components/Table'
import { Footer } from './components/Footer'
import { Message } from './components/Message'
import { Modal } from './components/Modal'

const App = () => {

  return (
    <>
      <Header />
      <Message />
      <Search />
      <Table />
      <Modal />
      <Footer />
    </>
  )
}

export default App
