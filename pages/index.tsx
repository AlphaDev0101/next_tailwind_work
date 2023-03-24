import MainLayout from '../layouts'
import Main from '../components/Main'
import JoinCommunity from '../components/JoinCommunity'

const App = () => {
  return (
    <>
      <Main />
      <JoinCommunity />
    </>
  )
}

export default App

App.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
