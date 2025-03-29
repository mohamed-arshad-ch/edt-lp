interface WaveDividerProps {
  invert?: boolean
}

export default function WaveDivider({ invert = false }: WaveDividerProps) {
  return (
    <div className="w-full overflow-hidden">
      {invert ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      )}
    </div>
  )
}

