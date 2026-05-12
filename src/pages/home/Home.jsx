import { useEffect, useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Счётчик изменился:", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
    <main style={{ padding: '3rem 2rem' }}>
      <h1>Счётчик: {count}</h1>
      <button onClick={handleClick}>Клик</button>
    </main>
    <div></div>
    </>
   
  )
}

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(count + 1);
//   });