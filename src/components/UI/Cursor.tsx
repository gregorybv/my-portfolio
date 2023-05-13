// Cursor component

// add animatedcursor
import AnimatedCursor from "react-animated-cursor"

const Cursor: React.FC = () => {
  return (
    <div>
      {/* animated cursor title */}
      <AnimatedCursor
        innerSize={12}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  )
}

export default Cursor
