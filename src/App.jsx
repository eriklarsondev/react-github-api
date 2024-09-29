import { GithubRepos } from './components/GithubRepos'

function App() {
  const username = 'eriklarsondev'

  return (
    <>
      <GithubRepos username={username} />
    </>
  )
}

export default App
