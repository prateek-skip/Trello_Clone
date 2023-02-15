import React from 'react';
import { connect } from 'react-redux';
import TrelloList from './TrelloList'


const App = (props)=> {
  
  const {lists} = props;

  return (
    <div className="App">
      <h2>Hello Cruel World</h2>
      <div style={styles.listContainer}>
        
      {
        lists.map(list => (
          <TrelloList key={list.id}  title={list.title} card={list.cards} />
        ))
      }
      
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
