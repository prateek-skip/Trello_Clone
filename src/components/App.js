import React from 'react';
import { Button, Container, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import TrelloList from './TrelloList'
import '../styles/App.css'
import { ThemeContext, themes } from '../theme/ThemeContext';
import ToggleDark from './../toggleButtons/Toggledark';
const App = (props)=> {
  
  const {lists} = props;
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <div className="App">
      <div style={{display:"flex", height:100}}>
        <h2 id="welcomeText" className='white-text-content'>Hello Cruel World</h2>
          <ThemeContext.Consumer>
          {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
          </ThemeContext.Consumer>
      </div>
      <div style={styles.listContainer}>
        
      {
        lists.map(list => (
          <TrelloList key={list.id}  title={list.title} card={list.cards} />
        ))
      }
      <TrelloActionButton type='list' />
      
      </div>
      
    </div>
  );
}

const styles = {
  listContainer : {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists : state.lists
});

export default connect(mapStateToProps)(App) ;
