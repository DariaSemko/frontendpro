import TodoForm from "../conteiners/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Main(props) {
    const {handleAdd, handleChange, saveChange, handleRemove, items} = props
    return (
        <div>
            <TodoForm handleAdd={handleAdd}/>
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
    )
}