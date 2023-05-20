import Link from 'next/link'

export default function notFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-xl text-gray-800 mb-8">Page Not Found</p>
      <div>
        <Link
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go back to home
        </Link>
      </div>
    </div>
  )
}
