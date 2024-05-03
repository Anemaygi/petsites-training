'use client'
import MyComponent from "@/components/myComponent";
import Name from "./name";
import Data from "./data.json";
import { useState } from "react";



export default function Membros() {
    const [nome,setNome] = useState('a');
    return (
        <div>
            <MyComponent nomes={Data.names} />
            {nome}
            <div onClick={() => setNome("aaaaa")} className="bg-green-500" >Clica aquiiii</div>
            <Name />
        </div>
  );
}
