import TrelloCard from "./TrelloCard";


const TrelloList = ({title,card}) => {
    return(
        <div style={styles.container}>
            <h3>{title}</h3>
            {card.map(cards => (<TrelloCard key = {cards.id} text={cards.text} id = {cards.id} />))}
        </div>
    )
}

const styles = {
    container:{
        backgroundColor:"#808080",
        borderRadius:"3px",
        width:300,
        padding:8,
        marginRight:8
    }
}

export default TrelloList;