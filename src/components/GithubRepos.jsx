import React, { useEffect, useState } from 'react'

export function GithubRepos({ username }) {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        setRepos(response.data)
      })
      .catch(error => console.error(error))
  }, [username])

  return (
    <>
      <h1>{username}</h1>
      <p>{JSON.stringify(repos)}</p>
    </>
  )
}
