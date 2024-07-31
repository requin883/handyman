import { serviceCardInfo } from "../data/data"
import { ServiceCard } from "./ServiceCard"

export const ServiceCategories = () => {
  return (<div>
    <section className="services-categories m-20 p-8 border-8 rounded-md">
      <h3 className="md:text-5xl font-bold">Categories</h3>
      <div className="grid grid-flow-col grid-rows-2 gap-8">
        {serviceCardInfo.map(item => <ServiceCard key={item.title} title={item.title} img={item.img} />)
        }
      </div>
    </section>
  </div>)
}