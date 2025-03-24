import Todo from "./Todo.jsx"

export default function TodoList() {
    return (
        <ul>
            {/* Cara untuk menggunakan function lain yaitu tinggal memanggil dan mengisi value props */}
            <Todo isCompleted={true} text="Belajar React" />
            <Todo isCompleted={true} text="Learn HTML" />
            <Todo isCompleted={true} text="Belajar CSS" />
            <Todo isCompleted={false} text="Belajar ReactJS" />
        </ul>
    )
}