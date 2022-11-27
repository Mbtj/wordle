export default function Guess({isGuessed, guess, word}) {
  
  return (
  <div className="grid grid-cols-5 gap-1 mb-2">
    {new Array(5).fill(0).map((_, i) => {
      const bgColor = !isGuessed
      ? 'bg-black'
      : guess[i] === word[i]
      ? 'bg-green-400'
      : word.includes(guess[i])
      ? 'bg-yellow-400'
      : 'bg-black'
  
     return <div className={`h-16 w-16 border-gray-400 bg-black text-white flex uppercase items-center font-bold justify-center ${bgColor}`}>{guess[i]}</div>
})}
  </div>
  )
}