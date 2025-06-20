import { useState } from "react"

// imutabilidade

// usuarios = ['joao', 'jefferson', 'guilherme', 'gelson']

// usuarios.push('sirlea') -> forma incorreta no REACT

// novoUsuarios = [...usuarios, 'sirlea'] -> forma correta | faz uma cópia do arrey e adiciona o novo valor na próxima posição


export function Counter(){
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}