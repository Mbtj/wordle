export default function Guess({isGuessed, guess, word}) {
  return (
  <div className="grid grid-cols-5 gap-1 mb-2">
    {new Array(5).fill(0).map((_, i) => (
      <div className="h-16 w-16 border-gray-400 bg-black text-white flex uppercase items-center font-bold justify-center">{guess[i]}</div>
    ))}
  </div>
  )
}