import {useEffect, useState} from "react";
import '../../main.css';
import Header from "../components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main";
import Contacts from "./contacts";
import About from "./about";
import ErrorBoundary from "../conteiners/errorBoundary";

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);

    const handleAdd = (event) => {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems = [...items, {id: Math.random(), text, showEdit: false}];
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
        input.value = ''
    }

    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id)
        localStorage.setItem("items", JSON.stringify(newItems))
        setItems(newItems)
    }

    const handleChange = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                item.showEdit = true
            }
            return item
        })
        setItems(newItems)
    }

    const saveChange = (id, event) => {
        const input = event.target.parentElement.getElementsByClassName('itemSave')[0];
        const newItems = items.map((item) => {
            if (item.id === id) {
                item.text = input.value
                item.showEdit = false
            }
            return item
        })
        localStorage.setItem("items", JSON.stringify(newItems))
        setItems(newItems)
    }

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Main handleAdd={handleAdd}
                                                           items={items}
                                                           handleChange={handleChange}
                                                           saveChange={saveChange}
                                                           handleRemove={handleRemove}/>}>
                            </Route>
                            <Route path="/contacts" element={<Contacts/>}></Route>
                            <Route path="/about" element={<About/>}></Route>
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App;
