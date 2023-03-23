import UseToDo from "@/custom hooks/useToDo"

const ToDoApp = () => {

    const { setUserInput, newToDo, onClickHandler } = UseToDo()

    return (
        <>
            <input type={"text"} onChange={(e)=>setUserInput(e.target.value)} />

            <button onClick={()=>onClickHandler()} >Add</button>
        </>
    )
}

export default ToDoApp