import { observer } from "mobx-react-lite";

export default observer(function Qwerty({ store }) {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div>
      {qwerty.map((row) => (
        <div className="flex justify-center">
          {row.split('').map((char) => {
            const bgColor = store.exactGuesses.includes(char)
             ? "bg-green-400"
             : store.inexactGuesses.includes(char)
             ? "bg-yellow-400"
             : store.allGuesses.includes(char)
             ? 'bg-gray-400'
             : 'bg-gray-200'
             ;
            return (
              <div className={`m-px w-10 h-10 rounded-md flex items-center justify-center uppercase ${bgColor}`}>
              {char}
            </div>
              )
          })}
        </div>
      ))}
    </div>
  )
})