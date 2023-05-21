import React from "react";
import '../../main.css';
import TodoItem from "../components/TodoItem";
import TodoForm from "../conteiners/TodoForm";
import Header from "../components/Header";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.saveChange = this.saveChange.bind(this);
    }

    handleAdd(event) {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        this.setState({
            items: [
                ...this.state.items,
                {id: Math.random(), text, showEdit: false}
            ]
        })
        input.value = ''
    }

    handleRemove(id) {
        this.setState((state) => {
            const { items } = state;
            const newItems = items.filter(item => item.id !== id)
            return {
                items: newItems,
            }
        })
    }

    handleChange(id) {
        this.setState((state) => {
            const { items } = state;
            items.forEach((item)=>{
                if (item.id === id){
                    item.showEdit = true
                }
            })
            return {
                items: items,
            }
        })
    }

    saveChange(id, event) {
        const input = event.target.parentElement.getElementsByClassName('itemSave')[0];
        this.setState((state) => {
            const { items } = state;
            items.forEach((item)=>{
                if (item.id === id){
                    item.text = input.value
                    item.showEdit = false
                }
            })
            return {
                items: items,
            }
        })
    }
    render() {
        const {items} = this.state;
        return (
            <div className="container">
                <Header/>
                <TodoForm handleAdd={this.handleAdd}/>
                <div>
                    {items.map(item => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            showEdit={item.showEdit}
                            handleChange={this.handleChange}
                            saveChange={this.saveChange}
                            handleRemove={this.handleRemove}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Main;
