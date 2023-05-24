import {useState, useEffect} from "react";
import '../../main.css';
import TodoItem from "../components/TodoItem";
import TodoForm from "../conteiners/TodoForm";
import Header from "../components/Header";

function Main() {
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
        const newItems = items.map((item)=>{
            if (item.id === id){
                item.text = input.value
                item.showEdit = false
            }
            return item
        })
        localStorage.setItem("items", JSON.stringify(newItems))
        setItems(newItems)
    }

    return (
        <div className="container">
            <Header/>
            <TodoForm handleAdd={handleAdd}/>
            <div>
                {items.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        showEdit={item.showEdit}
                        handleChange={handleChange}
                        saveChange={saveChange}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    )
}

export default Main;
