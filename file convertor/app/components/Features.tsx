import { ShieldCheck, Zap, Code } from "lucide-react"

const features = [
  {
    name: "Secure File Handling",
    description: "Your files are encrypted during transfer and processing, ensuring the highest level of security.",
    icon: ShieldCheck,
  },
  {
    name: "Fast Conversion",
    description: "Our advanced algorithms ensure quick and efficient file conversions with minimal wait times.",
    icon: Zap,
  },
  {
    name: "API Access",
    description: "Integrate our file conversion capabilities into your own applications with our robust API.",
    icon: Code,
  },
]

export default function Features() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Key Features</h2>
        <div className="mt-5">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

