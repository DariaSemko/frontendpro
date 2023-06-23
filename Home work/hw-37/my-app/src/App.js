import Header from "./ui/components/Header";
import TodoForm from "./ui/conteiners/TodoForm";
import "./main.css"
import Footer from "./ui/components/form/Footer";
import {Provider} from "react-redux";
import {store} from "./engine/init/store";
import ItemsList from "./ui/conteiners/itemsList";

function App() {

    return (
        <Provider store={store}>
            <div className="container">
                <Header/>
                <TodoForm/>
                <ItemsList/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
