//RegEx
//[0] -> localiza todos os (0) do arquivo >> 29921'0'
//[02] -> localiza todos os (0 ou 2) do arquivo >> 8'2'93'0'9
//[0-9] -> localiza todos os de (0 a 9) do arquivo >> '9299012'
//[0][0] ou [0]{2} -> localiza todos os (00) do arquivo >> 29'00'9292
//[0-9]{6} -> localiza os 6 primeiros digitos >> '123456'789
//[0-9]{6}$ -> localiza os 6 últimos digitos da linha >> 12'345678'
//^[0-9]{6}$ -> localiza digitos de 6 númeors >> '123456' e não 1234567
//^[0-9]+[-][a-z]$ -> 760606-p

// CPF - 037.626.860-33
// [0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][-][0-9]{2}

// data comum -> 10/02/2023
// ([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})
//  Grupo 1      Grupo 2      Grupo 3
// $3/$2/$1

//nome@gamil.com
//const condicao = /^[a-z0-9]+@[a-z]+.[a-z]?/i