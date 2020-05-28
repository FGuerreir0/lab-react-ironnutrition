import React from 'react';

const MealBox = (props) => {
  return (
    <div className='media'>
      <img src={props.image} alt='Food' className='img-thumbnail mr-3 mw-25 border-0' width={80} />
      <div className='media-body align-self-center'>
        <h5 className='mt-0 mb-1'>{props.name}</h5>
        <small>{props.calories} cal</small>
      </div>
      <form className='row align-self-center'>
        <input className='form-control col-9' type='number' value='1' />
        <button className='btn btn-primary col-3'>+</button>
      </form>
    </div>
  );
};

export default MealBox;
