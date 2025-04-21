import BackButton from '@/components/ui/BackButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-red-100 p-6 mb-6">
          <svg className="h-12 w-12 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Recipe Not Found</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          The recipe you're looking for doesn't exist or might have been removed.
        </p>
        <BackButton href="/" />
      </div>
    </div>
  );
} 