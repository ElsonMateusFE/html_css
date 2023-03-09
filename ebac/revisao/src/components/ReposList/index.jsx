import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRespos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false)
                    setRespos(resJson)
                }, 3000)
            })
    })
    return (
        <div className="container">
        <>
            {carregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <div className={styles.itemLink}>
                                <a href={html_url}>GitHub</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
        </div>
    )
}

export default ReposList