'use client'
import MyComponent from "@/components/myComponent";
import Name from "./name";
import Data from "./data.json";
import { useState } from "react";



export default function Membros() {
    const [nome, setNome] = useState('Pedro');
    return (
        <div>
            <Name />
            <div className="flex w-full my-2"><MyComponent nomes={Data.names} /></div>
            <div>
                State
                <div className="flex w-fit m-2 items-center justify-center my-2">
                    {nome}
                    <div onClick={() => setNome((prevName) => prevName == "Pedro" ? "Maria" : "Pedro")} className="bg-green-500 m-2 p-2 rounded-full" >Clique aqui para mudar o state</div>
                </div>
            </div>
            
        </div>
    );
}
