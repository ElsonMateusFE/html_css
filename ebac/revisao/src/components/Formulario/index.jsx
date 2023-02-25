import { useEffect, useState } from "react"

const Formulario = () => {
    const [ nome, setNome ] = useState('')
    const [ notaA, setNotaA ] = useState(0)
    const [ notaB, setNotaB ] = useState(0)
    const [ notaC, setNotaC ] = useState(0)

    useEffect(() => {
        console.log('Iniciando')   

        return () => {
            console.log('Encerrando')
        }
    }, [])

    const digiteNome = (evento) => {
        setNome(() => {
            return evento.target.value
        })
    }

    const somaNotasEMedia = () => {
        const soma = notaA + notaB + notaC

        const media = soma / 3

        if(media >= 7){
            return (
                <p>{nome} aprovado</p>
            )
        }else{
            return (
                <p>{nome} reprovado</p>
            )
        }
    }

    return (
        <>
        <input type="text" placeholder="Digite um nome" onChange={digiteNome}/> <br />
        <input type="number" placeholder="Nota A" onChange={e => setNotaA(Number(e.target.value))}/> <br />
        <input type="number" placeholder="Nota B" onChange={({ target }) => setNotaB(Number(target.value))}/> <br />
        <input type="number" placeholder="Nota C" onChange={e => setNotaC(Number(e.target.value))}/> <br />
        {somaNotasEMedia()}
        </>
    )
}

export default Formulario