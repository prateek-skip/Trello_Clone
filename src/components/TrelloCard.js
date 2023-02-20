import { React } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

const TrelloCard = ({text,id}) =>{
    return(
            <Card sx={{ maxWidth: 345 }} style={styles.cardContainer}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
        
    </Card>
    )
}

const styles = {
    cardContainer: {
        margin:4
    }
}

export default TrelloCard;