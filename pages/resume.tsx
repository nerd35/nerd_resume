import { languages, tools } from "../data"
import { Bar } from "../components"

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //education & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Business Administration</h5>
            <p className="font-semibold">Babcock University(2000 - 2008)</p>

          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 font-bold text-md">Frontend Web Developer</h5>
            <p className="text-sm font-semibold">Chaka Technology ( Aug 2020 - Jan 2021)</p>
            <h5 className="my-2 font-bold text-md">Frontend  Developer</h5>
            <p className="text-sm font-semibold">Ekaruz Technology ( July 2019 - June 2020)</p>
            <h5 className="my-2 font-bold text-md">Data Analyst</h5>
            <p className="text-sm font-semibold">Careers24 Nigeria ( Feb 2015 - May 2018)</p>

          </div>
        </div>
      </div>

      {/* Language & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name}/>)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
