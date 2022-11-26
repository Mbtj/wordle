import { observer } from 'mobx-react-lite';

export default observer(function Home() {
  const store = useLocalObservable (() => PuzzleStore)
  return <div>
    <h1>Wordle</h1>
    <Guess/>
    <h1>won/loss</h1>
    <Querty/>
  </div>
})