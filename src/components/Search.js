import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from '@fortawesome/free-solid-svg-icons'


const Search = () => {
    return <Container fluid={true} className="px-0 mb-2">
             <form className="form-inline d-flex">
                <input className="form-control mr-sm-2 form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline my-sm-0 bg-white py-2" type="submit">
                <FontAwesomeIcon icon={faSearch} size="2xl" />
                </button>
             </form>
           </Container>
}

export default Search;