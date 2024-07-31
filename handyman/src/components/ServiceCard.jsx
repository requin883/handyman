import PropTypes from 'prop-types';

export const ServiceCard = ({ title, img }) => {
  return (<div className="grid gap-2 max-w-lg place-items-center">
    {img && <img src={img} alt="" />}
    <div className="grid grid-flow-col gap-2 place-items-center">
      <p className="font-bold">{title}</p>
      <button className="font-bold border-2 p-2 border-yellow-400 rounded-lg">Get a quote</button>
    </div>
  </div>)
}
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string
};