import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {

  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  return (
    <div>
        <p className={css.findeContact}>Find contacts by name</p>
        <input type="text" value={inputValue} onChange={e => dispatch(changeFilter(e.target.value))} className={css.searchPlace} />
    </div>
  )
}

export default SearchBox