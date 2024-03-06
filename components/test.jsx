export const useGetRepositories = create((set) => ({
  repos: [],
  loading: false,
  getRepositories: async (url) => {
    set({ loading: true })
    const repos = await getRepositories(url)
    set({ repos, loading: false })
  },
  sortRepositories: (sortType) => {
    set((state) => {
      let sortedRepos = [...state.repos]
      if (sortType === 'recent') {
        sortedRepos.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        )
      } else if (sortType === 'stars') {
        sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count)
      } else if (sortType === 'forks') {
        sortedRepos.sort((a, b) => b.forks_count - a.forks_count)
      }
      return { repos: sortedRepos }
    })
  }
}))

const Repos = ({ alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
  const [profile] = useGetGitProfile((state) => [state.profile])
  const [repos, loading, getRepositories, sortRepositories] =
    useGetRepositories((state) => [
      state.repos,
      state.loading,
      state.getRepositories,
      state.sortRepositories
    ])

  useEffect(() => {
    if (profile && profile.repos_url) {
      getRepositories(profile.repos_url)
    }
  }, [profile, getRepositories])

  // Пример использования функции сортировки
  // const handleSort = (sortType) => {
  //   sortRepositories(sortType);
  // };

  if (loading)
    return (
      <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
        <Spinner />
      </div>
    )

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center justify-center h-32 ">
            No repos found
          </p>
        )}
      </ol>
    </div>
  )
}
