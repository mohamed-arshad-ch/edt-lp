import { MapPin } from "lucide-react"

export default function Map() {
  return (
    <section className="h-[500px] relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-[#D64B65]" />
          <span className="font-medium">Expert Digi Health HQ</span>
        </div>
      </div>
    </section>
  )
}

