import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ToDoApp from '@/components/toDoApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    

       <h1> To Do App </h1> <br/>

        <ToDoApp/>

    </>
  )
}
