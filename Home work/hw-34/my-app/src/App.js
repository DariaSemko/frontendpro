import {Provider} from "react-redux";
import {store} from "./engine/init/store";
import Counter from "./ui/conteiners/counter";

function App() {
  return (
      <Provider store={store}>
          <Counter/>
      </Provider>
  );
}

export default App;
