import Homepage from "./pages/Homepage";
import PageState from "./context/PagesStateManager";

function App() {
  return (
    <PageState>
      <Homepage />
    </PageState>
  );
}

export default App;
