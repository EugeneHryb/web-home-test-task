import styles from './style/App.module.scss';
import CommentsList from '../CommentsList/CommentsList';

function App() {
 
  return (
    <div className={styles.background}>
      <div className = {styles.container} >
          <CommentsList></CommentsList>
      </div>
    </div>
  );
}

export default App;
