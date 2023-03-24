import { type } from "os"
import { useState } from "react"
import { useAppDispatch } from "./hooks"
import {addToDo} from "../store/toDoSlice"

const UseToDo = () => {

        const [userInput, setUserInput] = useState("")
        const [newToDo, setNewToDo] = useState<toDoType[]>([])
        const dispatch = useAppDispatch()

        type toDoType = {
            item:string,
            id?:string
        }

        const addedToDo:toDoType = {
            item:userInput
        }


       const onClickHandler = () => {
          dispatch(addToDo(userInput))
           

        }


    return {
        setUserInput,onClickHandler, newToDo
    }
}


export default UseToDo