import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log('o componente iniciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log(`materia A mudou para: ${materiaA}`)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            //console.log(estadoAnterior)

            //Não existe isso no react (SAIBA MAIS: PURE FUNCTION)
            // estadoAnteriro = valorNovo

            return evento.target.value
        })
    }

    const renderizaResuldado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma /  3

        //console.log(soma)
        //console.log(media)

        if(media >= 7){
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        }else{
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(Number(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value))} />
            {renderizaResuldado()}
        </form>
    )
}

/*
{materiaA}
{materiaB}
{materiaC}
*/

export default Formulario