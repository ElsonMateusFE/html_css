let idade: number = 1

namespace casting {
    let idade: any
    (idade as number).toFixed();
    (idade as string).length;
    //(idade as Array<number>).forEach();

    let nome: number = 'Charles' as unknown as number
}