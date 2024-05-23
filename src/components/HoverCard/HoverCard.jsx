import './HoverCard.css'
import styles from "../ClickCard/ClickCard.module.css";

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
                    {props.project === 'yes' ? (
                        <span>{`Start: ${props.startDate.toDateString()}`}</span>
                    ) : (
                        <span>{props.startDate.toDateString()}</span>
                    )}
                    <br/>
                    {props.project === "yes" ?
                        <span className={styles.endDate}>
                    Ends: {props.endDate.toDateString()}
                        </span> :
                        null
                    }
                </div>

            </div>
        </div>
    )
}

export default HoverCard;