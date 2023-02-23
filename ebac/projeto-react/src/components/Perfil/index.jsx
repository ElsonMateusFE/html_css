import './perfil.css'

//export default () => {
//export default function() {

//const Perfil = (props) => {
const Perfil = ({ endereco, nome }) => {
    /*
    const usuario = {
        nome: 'Elson Mateus',
        avatar: 'https://github.com/ElsonMateusFE.png'
    }
    */
   //const { endereco, nome } = props

    return (
        <div>
            <img className="perfil-avatar" src={endereco}/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

/*
{JSON.stringify(props)}
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3>

{JSON.stringify(props)}
            <img className="perfil-avatar" src={props.endereco}/>
            <h3 className='perfil-titulo'>{props.nome}</h3>
*/

export default Perfil