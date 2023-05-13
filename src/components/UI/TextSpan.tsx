// TextSpan component
// add motion
import { motion, useAnimationControls } from "framer-motion"
import { useState, ReactNode } from "react"

interface TextSpanProps {
  children: ReactNode;
  className: string
}

const TextSpan: React.FC<TextSpanProps> = ({ children }) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    })
    setIsPlaying(true)
  }

  return (
    <motion.span
      className='hover:text-[#08fdd8]'
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand()
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  )
}

export default TextSpan
