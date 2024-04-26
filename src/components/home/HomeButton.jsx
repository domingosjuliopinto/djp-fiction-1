import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function HomeButton(props) {
  return (
    <div>
        <Link to={props.to}>
            <div className="mb-2 d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                    {props.text}
                </Button>
            </div>
        </Link>
    </div>
  );
}

export default HomeButton;
