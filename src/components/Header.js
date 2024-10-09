import todoImage from "../Assets/todo-svgrepo-com.svg"

function Header(){
    return (
        <div className="header">
        <h1>To-Do-List</h1>
        <img className="todo-img" src={todoImage} alt="to-do-list" />
        </div>
    )
}

export default Header;