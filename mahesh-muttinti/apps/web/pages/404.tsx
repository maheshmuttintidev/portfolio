import Link from 'next/link'

export default function CustomErrorPage({ statusCode = 404 }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl text-red-500 font-bold mb-4">{statusCode}</h1>
      <p className="text-xl text-gray-800 mb-8">
        {statusCode === 404 ? 'Page Not Found' : 'Oops! Something went wrong.'}
      </p>
      <div>
        <Link href="/">
          <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go back to home
          </a>
        </Link>
      </div>
    </div>
  )
}

// export function getServerSideProps({ res, err }: any) {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//   return { props: { statusCode } }
// }
