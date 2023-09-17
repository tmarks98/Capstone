import { thunkGetPins } from "../../store/pin";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PinsFeed } from "../PinsFeed"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Masonry from 'react-masonry-css'
import './index.css'

export default function PinFeedViews() {
  const dispatch = useDispatch();
  const history = useHistory();
  const pinsObj = useSelector((state) => state.pins);
  const pinValues = Object.values(pinsObj.pins);

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
