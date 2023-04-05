import './Card.scss';


export default function Card({ children, title }) {
  return (
    <div className='cardContainer' data-testid='card-container' >
      <div className='cardBody'>
        <h4>{title}</h4>
        <div className='cardText'>{children}</div>
      </div>
    </div>
  )
};