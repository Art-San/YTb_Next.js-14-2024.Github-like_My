'use client'
import ProfileInfo from '@/components/ProfileInfo'
import Repos3 from '@/components/Repos3'
import Repos from '@/components/Repos'

// import Search from '@/components/Search'

import Search2 from '@/components/Search2'
import SortRepos from '@/components/SortRepos'
import { useGetGitProfile } from '@/store/useGetGitProfile'
import { useGetRepositories } from '@/store/useGetRepositories'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

const HomePage = () => {
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
  return (
    <div className="m-4">
      {/* <Search /> */}
      <Search2 />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo />
        <Repos repos={repos} alwaysFullWidth={false} />
      </div>
    </div>
  )
}
export default HomePage
