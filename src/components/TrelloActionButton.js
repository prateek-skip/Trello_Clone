import TextareaAutosize from 'react-textarea-autosize';
import AddIcon from '@mui/icons-material/Add';
import React, {useState} from "react";
import { Card } from '@mui/material';
import {Button} from '@mui/material';
import Icon from '@mui/material/Icon';
import { connect, useDispatch } from 'react-redux';
import { addList } from '../actions';


const TrelloActionButton = ({type}) => {

    const [form, setForm] = useState(false);
    const [text, setText] = useState("");

    const addNew = () => {
        console.log(type);
        setForm(true);
    }

    const closeForm =() => {
        setForm(false);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    const dispatch = useDispatch()

    const handleAddList = (props) => {
        
        

        if(text){
            dispatch(addList(text));
        }
        return;
    }

    const renderAddButton = () => {
        return (<div onClick={addNew}
             style={
            {...styles.openForButtonGroup,
            opacity:buttonTextOpacity,
            color:buttontextColor,
            background:buttonTextBackground
        }}>
            <AddIcon />  
            <p>{buttonText}</p>
           
        </div>);
    }



    const renderForm =() => {
        let placeHolder = type?"Enter List title":"Enter a title for this card";
        let buttonTitle = type?"Add List":"Add Card";

        return <div>
            <Card style={{
                minHeight:80,
                width:272,
                padding:"6px 8px 2px"
            }}>
            <TextareaAutosize 
                placeholder={placeHolder}
                autoFocus
                onBlur={closeForm}
                value={text}
                onChange={handleTextChange}
                style ={{
                    resize:"none",
                    width:"100%",
                    border:"none",
                    outline:"none",
                    overflow:"hidden"
                }}
            />  
            </Card>
            <div style={styles.formButtonGroup}>
                <Button onMouseDown={handleAddList} variant="contained" style={{color:"white", backgroundColor:"#5aac44"}} > {buttonTitle}</Button>
                <Icon onClick={closeForm} style={{marginLeft:8, cursor:"pointer"}} >close</Icon>
            </div>
                  
             </div>
    }

    const buttonText = type?'Add another List':'Add another Card';
    const buttonTextOpacity = type?1:0.5;
    const buttontextColor = type?"white":"inherit";
    const buttonTextBackground = type? "rgba(0,0,0,.15)":"inherit";

    
    return(
        form?renderForm(): renderAddButton()
    );
}

const styles= {
    openForButtonGroup : {
        display: "flex",
        alignItems:"center",
        cursor:"pointer",
        borderRadius: "3px",
        height:"36",
        width:"272",
        paddingLeft:10
    },
    formButtonGroup : {
        display:"flex",
        marginTop:'8px',
        alignItems:"center"
    }
}


export default connect()(TrelloActionButton);