document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', function(){

        const horas = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']

        let minutos = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

        let horaAleatoria = Math.floor(Math.random() * horas.length)

        let minutosAleatorios = Math.floor(Math.random() * minutos.length)

        let ha = Math.floor(Math.random() * horas.length)

        document.querySelector('#horas').innerHTML = `${horas[horaAleatoria]}h:${minutos[minutosAleatorios]}m`
    })
})