import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2 className=" text-white">Not Found</h2>
      <p className=" text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
