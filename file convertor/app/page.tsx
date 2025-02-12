import FileUpload from "./components/FileUpload"
import SupportedFormats from "./components/SupportedFormats"
import Features from "./components/Features"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">File Conversion Platform</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <FileUpload />
            <SupportedFormats />
            <Features />
          </div>
        </div>
      </main>
    </div>
  )
}

