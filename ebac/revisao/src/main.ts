let idade: number
namespace casting {
    let idade: any
    (idade as string).length;
    (idade as number).toFixed();
    
    let nome: number = 'Charles' as unknown as number
}