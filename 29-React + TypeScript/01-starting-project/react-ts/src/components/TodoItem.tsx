// import React from "react";
// import Todo from "../models/todo";

// const TodoItem = (props: any) => {
//     // function Todos(props: { items: string[], children:}) {
//     // children is special or built-in prop
//     // or base prop object, items is a custom prop.
//     return (
//         <ul>
//             {props.items.map((item: any) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     );
// };

// export default TodoItem;

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string , onRemoveTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    );
};

export default TodoItem;