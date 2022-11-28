import { observer, useLocalObservable } from 'mobx-react-lite';
import { useEffect } from 'react';
import Guess from "../components/Guess";
import Qwerty from "../components/Qwerty";
import PuzzleStore from '../stores/PuzzleStore';
export default observer(function Home() {
  const store = useLocalObservable (() => PuzzleStore)
  useEffect(() => {
    store.init()
    window.addEventListener('keyup', store.handleKeyup);

    //clean up function
    return () => {
      window.removeEventListener('keyup', store.handleKeyup);
    }
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-600">
      <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">Wordle</h1>
      {store.guesses.map((_, i) => (
        <Guess
          key={i}
          word={store.word}
          guess={store.guesses[i]}
          isGuessed={i < store.currentGuess}
        />
      ))}
      <h1>won/loss</h1>
      <Qwerty/>
      {store.word}
    </div>
  )
})