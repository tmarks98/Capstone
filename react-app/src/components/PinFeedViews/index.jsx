import { thunkGetPins } from "../../store/pin";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PinsFeed } from "../PinsFeed"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Masonry from 'react-masonry-css'
import './index.css'
import { thunkGetComments } from "../../store/comment";
// import { thunkGetUsers } from "../../store/user";

export default function PinFeedViews() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pinsObj = useSelector((state) => state.pins);
  const pinValues = Object.values(pinsObj.pins);
  const commentsObj = useSelector((state) => state.comments)
  const commentValues = Object.values(commentsObj.comments);
  // const usersObj = useSelector((state) => state.users);
  // const usersValues = Object.keys(usersObj.users);

  // console.log('eeeeeeeeeeeee', pinValues)

  const columnsObj = {
    default: 7,
    1750: 6,
    1500: 5,
    1265: 4,
    1020: 3,
    775: 2,
    525: 1,
  }

  useEffect(() => {
    dispatch(thunkGetPins());
    dispatch(thunkGetComments());
    // dispatch(thunkGetUsers());
  }, [dispatch]);

  return (
    <div>
    <Masonry
    breakpointCols={columnsObj}
    className="my-pinfeed-masonry-grid"
    columnClassName="my-pinfeed-masonry-grid_column"
    >
      {pinValues.map((ele) => {
        return <PinsFeed key={ele.id} pin={ele} imageUrl={ele.imageUrl}/>;
      })}
    </Masonry>
    </div>
  );
}
