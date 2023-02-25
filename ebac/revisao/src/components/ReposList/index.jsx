import { useEffect, useState } from "react"

const ReposList = () => {
    // https://api.github.com/users/ElsonMateusFE/repos
    // id, name, language, html_url
    const [ repos, setRepos ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/ElsonMateusFE/repos')
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
        })
    })

    return (
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus velit magni aliquam porro quibusdam deleniti atque corrupti, a incidunt eius labore reprehenderit ad voluptatibus sed eveniet nesciunt dolorum odio iusto.</p>
    )
}

export default ReposList