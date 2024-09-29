import React, { useEffect, useState } from 'react'
import { githubService } from '../services/github.service'

export function GithubRepos({ username }) {
  const [repos, setRepos] = useState()

  useEffect(() => {
    githubService
      .getRepos(username)
      .then(res => {
        setRepos(res)
      })
      .catch(err => console.log(err))
  }, [username])

  return (
    <>
      <h1>{username}</h1>
      <p>{JSON.stringify(repos)}</p>
    </>
  )
}
