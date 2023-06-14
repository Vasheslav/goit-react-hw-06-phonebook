import React from 'react';
import { Label, Input } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filters } from '../../redux/filterSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filters(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={handleChangeFilter} />
    </Label>
  );
};

export default Filter;
