import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import img from "./progr.jpeg";


function App() {

  // Initial Lab task
  // return (
  //   <>
  //     <Header color="red" />
  //     <Content />
  //     <Footer />
  //     <img src={img} alt="Programming Tears" />
  //   </>
  // )

  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="SE God, if you exist, please help me!" />
      <Footer />
      <img src={img} alt="Programming Tears" />
    </>
  )

}

export default App
