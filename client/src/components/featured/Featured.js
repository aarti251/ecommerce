import "./featured.css";
import { useNavigate } from "react-router-dom";
const Featured = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
   
    navigate("/Register", );
  };
  return (
    
    <div className="featured ">
      <div className="featuredItem ">
        <img
          src="https://th.bing.com/th/id/OIP.95-Lz4WG9iId7MUOQnS0rwHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
          className="featuredImg  "
        />
        <div className="featuredTitles">
          
          <button onClick={handleSearch}>Add to Cart</button>
        </div>
      </div>
      <div className="featuredItem ">
        <img
          src="https://th.bing.com/th/id/OIP.XCGY_O_QGsgY85lBVPGF3gAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7
          "
          className="featuredImg  "
        />
        <div className="featuredTitles ">
         
          <button onClick={handleSearch}>Add to Cart</button>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.ldc-Ptx2ZMlvEeCNckdhfQAAAA?w=146&h=194&c=7&r=0&o=5&pid=1.7"
          alt=""
          className="featuredImg "
        />
        <div className="featuredTitles ">
         
          <button onClick={handleSearch}>Add to Cart</button>
      </div>
      </div>
      <div className="featuredItem ">
        <img
          src="https://th.bing.com/th/id/OIP.eg-MpW0GHpmKPBPCB4juugHaK4?pid=ImgDet&w=191&h=280&c=7"
          alt=""
          className="featuredImg "
        />
        <div className="featuredTitles">
        
          <button onClick={handleSearch}>Add to Cart</button>
        </div>
      </div>



  </div>
  );
};

export default Featured;
