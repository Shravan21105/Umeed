export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text">
          404 | Page Not Found
        </h1>
        <a
          href="/"
          className="mt-6 px-6 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-pink-600 hover:from-blue-600 hover:to-pink-700 transition-all duration-300"
        >
          Go to Home
        </a>
      </div>
    );
  }
  