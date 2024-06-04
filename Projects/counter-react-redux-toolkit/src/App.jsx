import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <Container>
          <Header />
          {privacy ? <DisplayCounter /> : <Privacy />}
          <Controls />
        </Container>
      </div>
    </>
  );
}

export default App;
