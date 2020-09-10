import React from 'react'
import Card from '../../../shared/components/UI/Card';
import './PlaceList.css';
import PlaceItem from '../PlaceItem/PlaceItem';
import Button from '../../../shared/components/FormElements/Button/Button';
const PlaceList = (props) => {

    if(props.items.length===0){
        return (
            <div className="place-list center">
                <Card>
                    <h2> No Places found. Maybe you would like to create one?</h2>
                    <Button>Share place</Button>
                </Card>
            </div>
        )
    }

    return (
        <ul className="place-list">
            {props.items.map(place=> <PlaceItem key={place.id} id={place.id} title={place.title} image={place.image} description={place.description} address={place.address} creatorId={place.creatorId} coordiantes={place.location}/>)}
        </ul>
    )
  
}

export default PlaceList;
