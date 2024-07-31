import PropTypes from 'prop-types';

export const ServiceCard = ({ title, img, description }) => {
  return (<div className="grid gap-2 max-w-lg place-items-center">
    {img && <img src={img} alt="" />}
    <div className="grid grid-flow-col gap-2 place-items-center grid-rows-2 md:max-w-xs">
      <h4 className={`font-bold ${description && "justify-self-start self-end row-span-1"} row-span-2 text-lg`}>{title}</h4>
      {description &&
        <p className='line-clamp-3 max-w-32'>{description}</p>
      }
      <button className="font-bold border-2 p-2 border-yellow-400 rounded-lg row-span-2">Get a quote</button>
    </div>
  </div >)
}
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string
};