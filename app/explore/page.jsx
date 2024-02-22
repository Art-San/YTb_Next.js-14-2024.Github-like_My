import Image from 'next/image'

const ExplorePage = () => {
  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <Image
            width={0}
            height={0}
            src="/javascript.svg"
            alt="JavaScript"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <Image
            width={0}
            height={0}
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <Image
            width={0}
            height={0}
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <Image
            width={0}
            height={0}
            src="/python.svg"
            alt="Python logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <Image
            width={0}
            height={0}
            src="/java.svg"
            alt="Java logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
export default ExplorePage
