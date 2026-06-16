import { useState } from "react"
import ListCard from "./components/cards/ListCard"
import Header from "./components/header/Header"
import ToDoListData from "./data/to-do-list.data"
import type { TTodoList } from "./models/to-do-items.model"

export function App() {
   // useState adalah sebuah hook yang digunakan untuk menyimpan
  // state di dalam functional component
  // State adalah sebuah data yang dapat berubah-ubah seiring dengan waktu
  // useState akan mengembalikan sebuah array yang berisi dua elemen
  // Elemen pertama adalah nilai dari state, dan elemen kedua adalah fungsi untuk mengubah nilai state
  const [todoList, setTodoList] = useState<TTodoList>(ToDoListData) 

    // Fungsi ini memfilter todoList state tanpa mengubah data state aslinya
  // memampukan kita untuk menggunakan return value dari filter
  // untuk menampilkan daftar tugas yang sesuai dengan filter yang dipilih oleh pengguna
  // Jika langsung melakukan filter dalam setTodoList,
  // maka data state asli akan berubah dan diganti dengan list yang sudah terfilter,
  // sehingga kita tidak bisa lagi mengakses data state asli untuk melakukan filter ulang
  // atau operasi lainnya
  // Ini sebutannya derived state, yaitu state yang nilainya diturunkan dari state lain (todoList)

  return (
    <>
      <Header />
      <div className="relative -top-12 container mx-auto max-w-135.25">
        <ListCard data={todoList}  />
      </div>
    </>
  )
}

export default App;