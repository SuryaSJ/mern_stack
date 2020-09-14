import React,{useState} from 'react'
import './PlaceItem.css';
import Card from '../../../shared/components/UI/Card';
import Button from '../../../shared/components/FormElements/Button/Button';
import Modal from '../../../shared/components/UI/Modal';
import Map from '../../../shared/components/UI/Map';

const PlaceItem = (props) => {

    const [showMap,setShowMap] =useState(false);

    const openHandler=()=> setShowMap(true);

    const closeHandler=()=>setShowMap(false);
    return (
        <React.Fragment>
            <Modal 
                onCancel={closeHandler}
                show={showMap}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeHandler}>Close</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordiantes} zoom="16"/>
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div> 
                    <div className="place-item__actions">
                        <Button inverse onClick={openHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div> 
                </Card>         
            </li>
        </React.Fragment>
    )
}

export default PlaceItem;