'use client'

import { useState, FormEventHandler, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useDebounce } from '../hooks/debounce'
import { useSearchGitProfile } from '@/store/useSearchGitProfile'
import { useGetGitProfile } from '@/store/useGetGitProfile'

const Search2 = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)
  const getProfileArt = useGetGitProfile((state) => state.getProfileArt)
  const { serverResponse, loading, getSearchProfile } = useSearchGitProfile()

  useEffect(() => {
    if (debounced.length >= 3) {
      getSearchProfile(debounced)
    }
  }, [debounced, getSearchProfile])

  useEffect(() => {
    setDropdown(debounced.length >= 3 && serverResponse?.length > 0)
  }, [debounced, serverResponse])

  const clickHandler = async (username: string) => {
    await getProfileArt(username)
    setDropdown(false)
    setSearch('')
  }

  return (
    <div className="max-w-xl mx-auto p-2 z-50">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none">
          <IoSearch className="w-5 h-5" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent "
          placeholder="i.e. John Doe"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[62px] left-0 right-0 max-h-[420px] overflow-y-scroll bg-glass bg-transparent z-10">
            {loading && <p className="text-center"> Loading...</p>}
            {serverResponse?.map((user) => (
              <li
                key={user.id}
                onClick={() => clickHandler(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-color cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Search2
