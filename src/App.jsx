import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './redux/catSlice';

import './App.css'
import {userActions} from "./redux/userSlice.js";

function App() {

    console.log("█████ here 000")
    ///saga-7
  const userDataWork = useSelector(state => state.userState.JSONFromServer);
  const userGUID = useSelector(state => state.userState.userGUID);
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
      ///saga-6

    dispatch(userActions.getData())
    dispatch(getCatsFetch())
  }, [dispatch]);

  // console.log(cats);
  console.log("████ userGUID",userGUID);

  return (
    <div className='App'>
      <h1>CAT GALLERY</h1> <hr />
        {userGUID && <div>{userGUID}</div>}
        <button
            onClick={()=>{
                dispatch(userActions.setGUID(Date.now().toString()))
            }}
        >
            Set GUID
        </button>
        <div>{JSON.stringify(userDataWork)}</div>
      <div className='Gallery'>
        {cats.map(cat =>
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              <img
                src={cat.url}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </div>
      <button>
        View More
      </button>
    </div>

  )
}

export default App
