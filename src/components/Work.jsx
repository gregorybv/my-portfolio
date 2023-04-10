import React from "react"
import WorkItem from "./WorkItem.jsx"

const data = [
  {
    year: "2022 - 2023",
    title: "Salt&Pepper Agency",
    duration: "1 Year",
    details:
      "• UI design\n" +
      "• Implementation of new functionality\n" +
      "• Adaptive and cross-browser layout using HTML, CSS and JavaScript\n" +
      "• Developing web applications using React.js, project support from the beginning of development to putting them into production\n" +
      "• Support of completed web projects\n" +
      "• Interaction with backend developers",
  },
  {
    year: "2021 - 2022",
    title: "Bk company",
    duration: "1.6 Years",
    details:
      "• UI design\n" +
      "• Implementation of new functionality\n" +
      "• Adaptive and cross-browser layout using HTML, CSS and JavaScript\n" +
      "• Developing web applications using React.js, project support from the beginning of development to putting them into production\n" +
      "• Support of completed web projects\n" +
      "• Interaction with backend developers",
  },
  {
    year: "2019 - 2021",
    title: "Alidi",
    duration: "2 Years",
    details:
      "• Creation and administration of local network\n" +
      "• Configuration and maintenance of trade equipment\n" +
      "• PC maintenance (routine maintenance, diagnostics, repair, new pc assembly, software installation and configuration)\n"+
      "• User support",
  },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 pt-12 py-16'>
      <h2 className='text-5xl font-bold text-center text-[#001b5e] mb-6'>Work</h2>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
