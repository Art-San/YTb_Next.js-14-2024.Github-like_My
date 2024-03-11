'use client'
import Repo from './Repo'
import { useEffect } from 'react'
import { useGetGitProfile } from '@/store/useGetGitProfile'
import { useGetRepositories } from '@/store/useGetRepositories'
import Spinner from './Spinner'

const Repos3 = ({ alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
  const [profile] = useGetGitProfile((state) => [state.profile])
  const [repos, loading, getRepositories] = useGetRepositories((state) => [
    state.repos,
    state.loading,
    state.getRepositories
  ])

  useEffect(() => {
    if (profile && profile.repos_url) {
      getRepositories(profile.repos_url)
    }
  }, [profile, getRepositories])
  //   /**TODO: */
  //   //  ERROR // GET http://localhost:3000/undefined 404 (Not Found)
  // useEffect(() => {
  //   getRepositories(profile.repos_url)
  // }, [profile.repos_url, getRepositories])

  if (loading)
    return (
      <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
        {' '}
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

export default Repos3
