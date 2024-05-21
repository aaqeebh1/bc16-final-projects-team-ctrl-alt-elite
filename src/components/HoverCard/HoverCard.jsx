import './HoverCard.css'

const HoverCard = (props) => {
    return (
        <div className="hover-card" style={{border:`5px solid ${props.depColor}`}}>
            <div style={{background: props.depColor}} className="campaign-title">
                {props.campaign}
            </div>
            <div className="card-details">
                    {props.blurb ?
                    <span className='blurb'>{props.blurb}</span> :
                        null
                    }
                    {props.assigned && props.blurb ? <><br/><br/></> : null}
                    {props.assigned ?
                    <span>Assigned to {props.assigned}</span>
                        :
                        null
                    }
                <div>
                    Starts: {props.startDate.toDateString()}
                    <br/>
                    Ends: {props.endDate.toDateString()}
                </div>
            </div>
        </div>
    )
}

export default HoverCard;