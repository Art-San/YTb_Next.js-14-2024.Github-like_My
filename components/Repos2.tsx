import { Repository } from '@/models/models'
import Repo from './Repo'

interface IPropsRepos {
  repos: Repository[]
  alwaysFullWidth: boolean
}

const Repos2 = ({ repos, alwaysFullWidth = false }: IPropsRepos) => {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'
  console.log('repos', repos[0])
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
export default Repos2
