let nome: string

namespace casting {
    let nome: any
    (nome as string).length,
    (nome as number).toFixed(2),
    (nome as number[]).forEach(x => {
        console.log(x)
    })

    let idade: string = 12 as unknown as string
}