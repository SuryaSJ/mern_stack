import React,{useState} from 'react'
import './PlaceItem.css';
import Card from '../../../shared/components/UI/Card';
import Button from '../../../shared/components/FormElements/Button/Button';
import Modal from '../../../shared/components/UI/Modal';
import Map from '../../../shared/components/UI/Map';

const PlaceItem = (props) => {

    const [showMap,setShowMap] =useState(false);
    const [showDeleteConfirm,setDeleteConfirm] =useState(false);

    const openHandler=()=> setShowMap(true);

    const closeHandler=()=>setShowMap(false);

    const showDeleteConfirmHandler=()=>setDeleteConfirm(true);

    const closeDeleteHandler=()=>setDeleteConfirm(false);

    const deleteHandler=()=>{ console.log("Deleting...")};
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
            <Modal 
                onCancel={closeDeleteHandler}
                show={showDeleteConfirm}
                header={"Are you sure?"}
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={closeDeleteHandler}>Cancel</Button>
                        <Button danger onClick={deleteHandler}>Continue</Button>
                    </React.Fragment>
                }
            >
                <p>Are you sure want to delete the place? Please note that this action cannot be undone!</p>
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
                        <Button danger onClick={showDeleteConfirmHandler}>DELETE</Button>
                    </div> 
                </Card>         
            </li>
        </React.Fragment>
    )
}

export default PlaceItem;
