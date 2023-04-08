import { Card, Button } from 'react-bootstrap';
import { useFavoritesContext } from '../contexts/FavoritesContext';

export default function PhotoCard({ info }) {

    const { addFavorites } = useFavoritesContext()

    return (
        <Card className="card">
            <div className="d-flex justify-content-center">
                <Card.Img variant="top" src={info.src.medium} className="card-img-top" />
            </div>
            <Card.Body>
                <div className="text-center">
                    <Button variant="btn btn-outline-primary" className="btn-like" onClick={() => addFavorites(info)}>Like</Button>
                    <Button variant="btn btn-outline-danger" className="btn-dislike">Dislike</Button>
                </div>
            </Card.Body>
        </Card>
    )
}



