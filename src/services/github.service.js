async function getRepos(username) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`)
  return repos
}

export const githubService = {
  getRepos
}
