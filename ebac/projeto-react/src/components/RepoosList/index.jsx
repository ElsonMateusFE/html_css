import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    // https://api.github.com/users/ElsonMateusFE/repos
    // id, name, language, html_url
    const [repos, setRepos] = useState([])
    const [estaCarregando, setestaCarregando] = useState(true)
    //const [deuErro, setDeuErro]

    useEffect(() => {
        setestaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setestaCarregando(false)
                setRepos(resJson)
                //console.log(resJson)
            }, 3000)
        })
        //.catch(e => {
        //    setDeuErro(true)
        //})
    }, [nomeUsuario])

    /*
    const ReposList = () => {
    // https://api.github.com/users/ElsonMateusFE/repos
    // id, name, language, html_url
    const [repos, setRepos] = useState([])
    const [estaCarregando, setestaCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/ElsonMateusFE/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setestaCarregando(false)
                setRepos(resJson)
                //console.log(resJson)
            }, 3000)
        })
    }, [])
    */

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ): (
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
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
                        <a className={styles.itemLink} target='_blank' href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList