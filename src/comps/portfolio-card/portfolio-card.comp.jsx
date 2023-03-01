import {useState, useEffect} from 'react';

import '../portfolio-card/portfolio-cards.styles.scss';

const PortfolioCards = (props) => {
    
    const [dataState, setDataState] = useState(props.data)
    const data = dataState;

    // Decides on which state to use based on page size at load
    useEffect(() => {
        let w = window.innerWidth
        if (w > 800) {
            setDataState(props.data)
        } else if (w <= 800) {
            setDataState(props.data2)
        }
    }, [props.data, props.data2])

    // Adjusts page size if the window size changes
    window.addEventListener("resize", function() {
        let w = window.innerWidth
        if (w > 800) {
            setDataState(props.data)
        } else if (w <= 800) {
            setDataState(props.data2)
        }
    })

    return(
        <div className='card-grid'>
            {data.map(item => {
                return(
                    <div key={item.key} className='card-container'>
                        <img src={item.image}/>
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