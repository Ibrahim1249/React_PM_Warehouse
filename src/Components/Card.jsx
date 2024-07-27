import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { handleLikedData } from "../Redux/slice"
import { useNavigate } from 'react-router-dom';

function Card({ warehouse }) {
  const dispatch = useDispatch();
  const {likedData} = useSelector(state => state.homeReducer);
  const isLiked = likedData.some(item => item.id === warehouse.id);
  const navigate = useNavigate()
  function handleLiked() {
    dispatch(handleLikedData(warehouse));
  }

  function handleView(e,id){
    navigate(`/${id}`)
  }

  return (
    <>
      <div className="card">
        <div className="title">
          <h2>{warehouse?.name}</h2>
          <span onClick={handleLiked}>
            {isLiked ? (
              <FavoriteIcon style={{ fill: "red", cursor: "pointer" }} />
            ) : (
              <FavoriteBorderIcon style={{ fill: "black", cursor: "pointer" }} />
            )}
          </span>
        </div>
        <div className="details">
          <div className="card-detail">
            <p className='name'>{warehouse.city}</p>
            <p><span>Type :</span><span>{warehouse?.type}</span></p>
            <p><span>Cluster :</span><span>{warehouse?.cluster}</span></p>
            <p><span>Registered :</span><span>{warehouse?.is_registered ? "Yes" : "No"}</span></p>
            <p><span>Live :</span><span>{warehouse?.is_live ? "Yes" : "No"}</span></p>
          </div>
          <button className='button button-red' onClick={(e)=>{handleView(e,warehouse?.id)}}>View</button>
        </div>
      </div>
    </>
  )
}

export default Card;