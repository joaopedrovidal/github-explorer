import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

// const URL = "https://api.github.com/users/joaopedrovidal/repos"

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/joaopedrovidal/github-explorer',
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
         fetch('https://api.github.com/users/joaopedrovidal/repos')
         .then(response => response.json())
         .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}