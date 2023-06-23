

const classes={
    image: 'card-img',
    button: 'card-btn',
}

const Card = ({pr,fc}) => {
    return (
        <>
            <div>
                <img src={pr.img} className={classes.image} alt='user'/>
                <h1>{pr.title}</h1>
                <h2>{pr.subtitle}</h2>
                <button className={classes.button} onClick={fc}>{pr.button}</button>
            </div>
        </>

    )
}
export default Card