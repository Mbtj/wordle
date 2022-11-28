export default function Qwerty() {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div>
      {qwerty.map((row) => (
        <div className="flex justify-center">
          {row.split('').map((key) => (
            <div className="m-px w-10 h-10 bg-gray-400 rounded-md flex items-center justify-center uppercase">
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}