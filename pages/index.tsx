import { observer, useLocalObservable } from 'mobx-react-lite';
import Guess from "../components/Guess";
import Qwerty from "../components/Qwerty";
import PuzzleStore from '../stores/PuzzleStore';
export default observer(function Home() {
  const store = useLocalObservable (() => PuzzleStore)
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-600">
      <h1>Wordle</h1>
      <Guess/>
      <h1>won/loss</h1>
      <Qwerty/>
    </div>
  )
})