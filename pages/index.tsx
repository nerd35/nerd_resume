import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { services } from "../data"
import { ServiceCard } from "../components"

const index = () => {
  console.log(services)
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
      Experienced Software Engineer with a passion for developing
innovative solutions that expedite the efficiency and effectiveness of
organizational success.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service => (
              <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                <ServiceCard service={service}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}



export default index

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  
//   // Calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)
//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
  
//   // Calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)
//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }
