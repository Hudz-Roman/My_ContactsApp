import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input
        type='search'
        placeholder='Search'
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={s.input_field}
      ></input>
    </div>
  );
};

export default SearchBox;
