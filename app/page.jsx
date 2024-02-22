// import ProfileInfo from '../components/ProfileInfo'
// import Repos from '../components/Repos'

import ProfileInfo from '@/components/ProfileInfo'
import Search from '@/components/Search'
import SortRepos from '@/components/SortRepos'

// import Spinner from '../components/Spinner'
const HomePage = () => {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo />
        {/* <Repos /> */}
        {/* <Spinner // 1:02:00
        /> */}
      </div>
    </div>
  )
}
export default HomePage
