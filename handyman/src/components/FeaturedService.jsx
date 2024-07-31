import { featuredServiceCardInfo } from "../data/data"
import { ServiceCard } from "./ServiceCard"

export const FeaturedService = () => {
  return (<section className="featured-service grid place-items-center">
    <h2 className="md:text-7xl ">Featured Services</h2>
    <div className="grid grid-flow-col grid-rows-2 gap-8">
      {featuredServiceCardInfo.map(item => <ServiceCard key={item.title} title={item.title} description={item.description} />)}
    </div>
  </section>)
}