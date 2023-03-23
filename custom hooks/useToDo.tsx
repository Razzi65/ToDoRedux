import { type } from "os"
import { useState } from "react"

const UseToDo = () => {

        const [userInput, setUserInput] = useState("")
        const [newToDo, setNewToDo] = useState<toDoType[]>([])

        type toDoType = {
            item:string,
            id?:string
        }

        const addedToDo:toDoType = {
            item:userInput
        }


       const onClickHandler = () => {
            setNewToDo([...newToDo, addedToDo])
            console.log(newToDo);
            

        }


    return {
        setUserInput,onClickHandler, newToDo
    }
}


export default UseToDo