import styles from './style/App.module.scss';
import CommentsList from '../CommentsList/CommentsList';
import CommentForm from '../CommentForm/CommentForm';

function App() {
 
  return (
    <div className={styles.background}>
      <div className = {styles.container} >
          <CommentsList></CommentsList>
          <CommentForm></CommentForm>
      </div>
    </div>
  );
}

export default App;
