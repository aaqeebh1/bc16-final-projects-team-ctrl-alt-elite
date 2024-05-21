import styles from './ClickCard.module.css'

export default function ClickCard(props) {
    return (
        <main className={styles.wrapper} style = {{display:props.vis}} >
        <div className={styles.clickCard} style={{border:`5px solid ${props.depColor}`}}
        >
            <div style={{background: props.depColor}} className={styles.campaignTitle}>
                <span>{props.campaign}</span>
                <span className={styles.cross} onClick={props.clickHere}> X </span>
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
                {props.assigned && props.blurb ? <><br/><br/></> : null}
                    {props.assigned ?
                    <span className={styles.assignedTo}><br/>Assigned to {props.assigned}</span>
                        :
                        null
                    }
            </div>
                <div className={styles.campaignDates}>
                    <span>
                    Starts: {props.startDate.toDateString()}
                        </span>
                    <span>
                    Ends: {props.endDate.toDateString()}
                        </span>
                </div>
        </div>
        </main>
    )
}