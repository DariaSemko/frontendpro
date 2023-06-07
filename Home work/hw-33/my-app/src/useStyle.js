import {createUseStyles} from "react-jss";

const useStyle = createUseStyles({
        container: {
            width: "100%",
            margin: "0 auto",
            maxWidth: "75%",
        },

        formStyle: {
            background: "#fff",
            padding: "10px",
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "center",
        },

        form__input: {
            minHeight: "25px",
            padding: "10px",
            width: "100%",
            border: "1px solid",
        },

        form__btn: {
            background: "#0be69d",
            border: "none",
            cursor: "pointer",
            width: "100px",
            height: "40px",
            margin: "2px",
        },

        todo_item: {
            display: "flex",
            padding: "10px",
            background: "#fff",
            borderRadius: "10px",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
        },

        todo_item__description: {
            flexGrow: "1",
            paddingLeft: "10px",
        },

        todo_item__delete: {
            background: "#0be69d",
            border: "none",
            cursor: "pointer",
            width: "95px",
            padding: "10px",
        },

        itemSave: {
            flexGrow: "1",
            paddingLeft: "10px",
        },

        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
        },

        nav: {
            listStyle: "none",
            display: "flex",
        },

        error: {
            color: "red",
            display: "inline-block",
            margin: "0 0 0 10px",
        },
    }
)
    export default useStyle