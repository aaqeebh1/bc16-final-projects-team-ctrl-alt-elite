import styles from './ClickCard.module.css'
import Cross from '../../assets/Cross.svg'

export default function ClickCard(props) {
    return (
        <main className={styles.wrapper} style = {{display:props.vis}} >
        <div className={styles.clickCard} style={{border:`5px solid ${props.depColor}`}}
        >
            <div style={{background: props.depColor}} className={styles.campaignTitle}>
                <span>{props.campaign}</span>
                <img src = {Cross} alt = 'cross' className={styles.cross} onClick={props.clickHere} />
            </div>
            <div className={styles.cardDetails}>
                {props.blurbThree && props.blurbTwo && props.blurb ?
                    <>
                        <span className={styles.blurb}>{props.blurb}</span>
                        <span className={styles.blurb}>{props.blurbTwo}</span>
                        <span className={styles.blurb}>{props.blurbThree}</span>
                    </> :
                    props.blurbTwo && props.blurb ?
                        <>
                            <span className={styles.blurb}>{props.blurb}</span>
                            <span className={styles.blurb}>{props.blurbTwo}</span>
                        </> :
                        props.blurb ?
                        <span className={styles.blurb}>{props.blurb}</span> :
                            null
                }
            </div>
                <div className={styles.campaignDates}>
                    <span className={styles.assignedTo}> Assigned to {props.assigned}</span>
                    {props.project === 'yes' ? (
                        <span>{`Start: ${props.startDate.toDateString()}`}</span>
                    ) : (
                        <span>{props.startDate.toDateString()}</span>
                    )}
                    {props.project === "yes" ?
                    <span className={styles.endDate}>
                    Ends: {props.endDate.toDateString()}
                        </span> :
                        null
                    }
                </div>
        </div>
        </main>
    )
}