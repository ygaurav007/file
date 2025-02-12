const formats = [
  { category: "Images", types: ["JPG", "JPEG", "PNG", "BMP", "GIF", "TIFF", "SVG", "HEIC", "WEBP"] },
  { category: "Documents", types: ["PDF", "DOC", "DOCX", "TXT", "RTF", "HTML", "XML", "ODT", "EPUB"] },
  { category: "Presentations & Spreadsheets", types: ["PPT", "PPTX", "ODP", "XLS", "XLSX", "CSV", "ODS"] },
  { category: "Video Files", types: ["MP4", "AVI", "MOV", "MKV", "WMV", "FLV", "MPEG", "3GP", "WEBM"] },
  { category: "Audio Files", types: ["MP3", "WAV", "AAC", "FLAC", "OGG", "WMA", "M4A"] },
  { category: "Other Formats", types: ["ZIP", "RAR", "TAR", "7Z", "ISO", "EXE", "DMG"] },
]

export default function SupportedFormats() {
  return (
    <div className="bg-white shadow sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Supported Formats</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <div key={format.category} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900">{format.category}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {format.types.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

