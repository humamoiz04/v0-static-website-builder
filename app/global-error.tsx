"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-cream via-light-pink to-light-orange flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-text-gray mb-4">Something went wrong!</h2>
            <button
              onClick={() => reset()}
              className="bg-gradient-to-r from-coral to-orange-400 hover:from-coral/90 hover:to-orange-400/90 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
