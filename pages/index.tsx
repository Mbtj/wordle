import { observer } from 'mobx-react-lite';
import Guess from "../components/Guess";
import Qwerty from "../components/Qwerty";
import PuzzleStore from '../stores/PuzzleStore';
export default observer(function Home() {
  const store = useLocalObservable (() => PuzzleStore)
  return <div>
    <h1>Wordle</h1>
    <Guess/>
    <h1>won/loss</h1>
    <Qwerty/>
  </div>
})