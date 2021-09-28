// screens
import {NumericPuzzle} from './screens/numeric.puzzle'
import {Header} from './components/organisms/header'
import {Footer} from './components/organisms/footer'

function App() {
  return (
    <>
    <Header title="number to word converter" />
    <NumericPuzzle />
    <Footer title="github repo ..." />
    </>
  );
}

export default App;
