"use client"

import { useState } from "react"
import { UploadIcon } from "lucide-react"

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle file upload and conversion here
    console.log("File uploaded:", file)
  }

  return (
    <div className="bg-white shadow sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Convert your file</h2>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Upload your file and select the desired output format.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">Any supported file (max. 100MB)</p>
              </div>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
          {file && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Selected file: {file.name}</p>
            </div>
          )}
          <div className="mt-5">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Convert File
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

