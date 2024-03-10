import ProfileInfo from '@/components/ProfileInfo'
import Repos from '@/components/Repos'

// import Search from '@/components/Search'

import Search2 from '@/components/Search2'
import SortRepos from '@/components/SortRepos'

const HomePage = () => {
  console.log('process.env.MONGO:', process.env.MONGO)
  console.log(
    'process.env.VITE_GITHUB_API_KEY_7DAY:',
    process.env.VITE_GITHUB_API_KEY_7DAY
  )
  return (
    <div className="m-4">
      {/* <Search /> */}
      <Search2 />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo />
        <Repos />
      </div>
    </div>
  )
}
export default HomePage
