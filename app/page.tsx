"use client"
import {toast} from 'react-toastify'

export default function Home() {
  return <div>home page
    <button onClick={()=>toast.error("sme")}>toast error</button>
  </div>;
}

