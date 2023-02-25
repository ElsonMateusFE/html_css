//import './perfil.css'
import styles from './Perfil.module.css'

//export default () => {
//export default function() {

//const Perfil = (props) => {
//const Perfil = ({ endereco, nome }) => {
const Perfil = ({ nomeUsuario }) => {
    /*
    const usuario = {
        nome: 'Elson Mateus',
        avatar: 'https://github.com/ElsonMateusFE.png'
    }
    */
   //const { endereco, nome } = props

    return ( 
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

/*
{JSON.stringify(props)}
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3>

{JSON.stringify(props)}
            <img className="perfil-avatar" src={props.endereco}/>
            <h3 className='perfil-titulo'>{props.nome}</h3>

<header>
            <img className="perfil-avatar" src={endereco}/>
            <h1 className='perfil-titulo'>{nome}</h1>
        </header>

        <h1 className='perfil-titulo'>
                {nomeUsuario}
            </h1>
*/

export default Perfil