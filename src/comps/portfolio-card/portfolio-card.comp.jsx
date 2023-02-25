import '../portfolio-card/portfolio-cards.styles.scss';

const PortfolioCards = (props) => {
    const data = props.data;

    return(
        <div className='card-grid'>
            {data.map(item => {
                return(
                    <div className='card-container'>
                        <img className src={item.image}/>
                        <div className='text-container'>
                            <h3>{item.name}</h3>
                            <p>{item.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PortfolioCards;