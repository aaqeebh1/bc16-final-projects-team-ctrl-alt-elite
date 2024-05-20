const HoverCard = (props) => {
    return (
        <div className="hover-card">
            <div style={{background: props.depColor}} className="campaign-title">
                {props.campaign}
            </div>
            <div className="card-details">
                <div className="campaign-type">
                    {/*<span>{props.camType}</span>*/}
                    <span>{props.blurb}</span>
                </div>
                <div className="campaign-date">
                    Starts: {props.startDate.toDateString()}
                    <br/>
                    Ends: {props.endDate.toDateString()}
                </div>
            </div>
        </div>
    )
}

export default HoverCard;