import { useState } from "react"
import Banner from "./Banner"
import Header from "./Header"
import Main from "./Section/Main"
import { foodData } from "./Section/food-cart";


function App() {

  let [index, setIndex] = useState(0);

  let clicjHandelar = function () {
    setIndex((old) => {
      if (old < foodData.length - 1) {
        return old + 1;
      } else {
        return 0; // শেষের পর প্রথম ছবিতে ফিরে যাবে
      }
    });
    
  }


  let previousHandler = function () {
    setIndex((old) => {
      if (old > 0) {
        return old - 1;
      } else {
        return foodData.length - 1; // প্রথমে গেলে শেষেরটায় চলে যাবে
      }
    });
  };


  // setIndex((old) => {
  //   if (foodData.length -1 > old) {
  //     return old + 1;
  //   }
  //   else {
  //     return old;
  //   }
  // })


  


  return (
    <>
      <Header />
      <Banner />
      <Main data={foodData[index]} onClick={clicjHandelar} onPreviousClick={previousHandler} />
    </>
  )
}

export default App
