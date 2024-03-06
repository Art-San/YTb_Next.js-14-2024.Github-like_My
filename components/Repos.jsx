'use client'
import Repo from './Repo'
import { useEffect } from 'react'
import { useGetGitProfile } from '@/store/useGetGitProfile'
import { useGetRepositories } from '@/store/useGetRepositories'
import Spinner from './Spinner'

const Repos = ({ alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
  const [profile] = useGetGitProfile((state) => [state.profile])
  const [repos, loading, getRepositories] = useGetRepositories((state) => [
    state.repos,
    state.loading,
    state.getRepositories
  ])

  console.log(1, 'render 1')
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

export default Repos

// 'use client'
// import Repo from './Repo'
// import { useGetGitProfile } from '@/store/useGetGitProfile'
// import { getRepositories } from '@/services/getRepositories'
// import { useState, useEffect } from 'react'
// import Spinner from './Spinner'

// const Repos = ({ alwaysFullWidth = false }) => {
//   const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
//   const [profile] = useGetGitProfile((state) => [state.profile])
//   const [repos, setRepos] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (profile && profile.repos_url) {
//       setLoading(true)
//       getRepositories(profile.repos_url)
//         .then((data) => setRepos(data))
//         .catch((error) => {
//           console.error('Error fetching repositories:', error)
//         })
//         .finally(() => setLoading(false))
//     }
//   }, [profile])
//   // useEffect(() => {
//   /**TODO: */
//   //  ERROR // GET http://localhost:3000/undefined 404 (Not Found)
//   //   if (profile && profile.repos_url) {
//   //   }
//   //   setLoading(true)
//   //   getRepositories(profile.repos_url)
//   //     .then((data) => setRepos(data))
//   //     .catch((error) => {
//   //       console.error('Error fetching repositories:', error)
//   //     })
//   //     .finally(() => setLoading(false))
//   // }, [profile.repos_url])

//   // console.log('Repos repositories', repos)
//   if (loading)
//     return (
//       <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
//         {' '}
//         <Spinner />
//       </div>
//     )

//   return (
//     <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
//       <ol className="relative border-s border-gray-200">
//         {repos.map((repo) => (
//           <Repo key={repo.id} repo={repo} />
//         ))}
//         {repos.length === 0 && (
//           <p className="flex items-center justify-center h-32 ">
//             No repos found
//           </p>
//         )}
//       </ol>
//     </div>
//   )
// }

// export default Repos
