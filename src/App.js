import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap'
import Options from './components/Options';
import Search from './components/Search';
import PostList from './components/PostList';


function App() {
  return (
      <Container>
        <Search />
        <Options />
        <PostList />
      </Container>
  );
}

export default App;
