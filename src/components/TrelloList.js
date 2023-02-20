import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";


const TrelloList = ({title,card}) => {
    return(
        <div style={styles.container}>
            <h3>{title}</h3>
            {card.map(cards => (<TrelloCard key = {cards.id} text={cards.text} id = {cards.id} />))}
            <TrelloActionButton />
        </div>
    )
}

const styles = {
    container:{
        backgroundColor:"#dfe3e6",
        borderRadius:"3px",
        width:300,
        padding:8,
        marginRight:8,
        height:"100%"
    }
}

export default TrelloList;