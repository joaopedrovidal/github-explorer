import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

export function RepositoryList() {

    interface Repository {
        name: string,
        description: string,
        html_url: string,
    }

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/joaopedrovidal/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        }, []);
        
        console.log(repositories)
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })} 
            </ul>
        </section>
    )
}