import styles from './Perfil.module.css'

const Perfil = ({ nome, endereco }) => {

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={endereco} alt="" />
            <h1 className={styles.name}>{nome}</h1>
        </header>
    )
}

export default Perfil