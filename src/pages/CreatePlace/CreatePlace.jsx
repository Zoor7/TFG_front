import React from "react";
import CreatePlaceCard from "../../components/createPlaceCard/CreatePlaceCard";

import './createPlace.scss'



const CreatePlace = () => {
  return (
    <div className='create-container container'>
      <CreatePlaceCard />
    </div>
  );
};

export default CreatePlace;
