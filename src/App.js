import React,{ useState, useEffect, useContext } from 'react'
import * as ReactDOM from 'react-dom';
import Profile from './layout/Profile'
import TopBar from './layout/TopBar'
import axios from 'axios';
import { Switch } from 'antd';


import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';

// Styles START
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { config } from 'chai';
const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 5,
      }}
      spin
    />
);

const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius:"50%",
    verticalAlign: "middle",
    cursor: "pointer"
}

const firstDiv = {
    fontSize: "0",
    paddingBottom: "15px",
    borderBottom: "1px solid #eee",
    marginBottom: "15px",
    height: "80px"
}

const secondDiv = {
    width: "45px",
    height: "45px",
    borderRadius: "60%",
    display: "inline-block",
    verticalAlign: "middle",
}

const adjDiv = {
  width: "45px",
  height: "45px",
  marginLeft: "100px",
  borderRadius: "60%",
  display: "inline-block",
  verticalAlign: "middle",
}

const thirdDiv = {
    // width: "calc(200% - 100px)",
    marginLeft: "70px",
    marginTop: "-40px",
    padding: "0",
    display: "inline-block",
    verticalAlign: "middle",
}

const pStyle = {
    width: "100%",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
    fontFamily: "Roboto, sans-serif",
    padding: "0",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    // overflow: "hidden",
    marginLeft: "-40px",
    marginTop: "40px"
}

const p2Style = {
  width: "100%",
  fontSize: "12px",
  fontWeight: "500",
  color: "#444",
  fontFamily: "Roboto, sans-serif",
  padding: "0",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginTop: "40px"
}

const p3Style = {
  width: "100%",
  fontSize: "16px",
  fontWeight: "500",
  color: "#444",
  fontFamily: "Roboto, sans-serif",
  padding: "0",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  // overflow: "hidden",
  marginLeft: "0px",
  marginTop: "0px"
}

const likeStyle = {
    lineHeight: "120%",
    fontSize: "13px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    color: "#555",
}

const spanOne = {
    marginTop: "0px",
    marginTop: "-295px",
    padding: "0",
    border: "0",
    font: "inherit",
    verticalAlign: "baseline",
    display: "block",
}

const spanTwo = {
  marginTop: "-80px",
  marginLeft: "80px",
  padding: "0",
  border: "0",
  font: "inherit",
  verticalAlign: "baseline",
  display: "block",
}

const heartStyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    lineHeight: "100%",
    verticalAlign: "middle",
    margin: "0 2px",
    marginTop: "280px",
    marginLeft: "-40px"
}

const heart2Style = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    lineHeight: "100%",
    verticalAlign: "middle",
    margin: "0 2px",
    marginTop: "290px"
}

const likeAvailable = {
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "15px",
    // marginTop: "-17px",
    marginTop: "280px",
    // marginLeft: "-20px",
    // marginLeft: "30px",
}

const like2Available = {
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "15px",
    // marginTop: "-17px",
    marginTop: "290px",
    // marginLeft: "-20px",
    // marginLeft: "30px",
}

const imageStyle = {
    width: "70px",
    height: "70px",
    verticalAlign: "middle"
}

const inputStyle = {
  height: "36px",
  width: "90%",
  marginTop: "00px",
  padding: "8px 10px",
  boxSizing: "border-box",
  fontSize: "14px",
  borderRadius: "4px",
  color: "#444",
  border: "1px solid #e0e0e0",
  display: "block"
}

const divStyle = {
  maxWidth: "250px",
  marginLeft: "25px",
  marginRight: "25px",
  borderRadius: "6px",
  padding: "10px 14px",
  fontSize: "14px",
  boxShadow: "0px 2px 8px 0px rgb(0 0 0 / 25%)",
  display: "block",
  width: "auto",
  height: "40px",
  outline: "none",
  cursor: "pointer",
  border: "0",
  color: "white",
  background: "linear-gradient(135deg, #9b7aff, #6f45ef)",
  fontFamily: "Heebo , sans-serif",
  letterSpacing: "0.5px",
  fontWeight: "700",
  lineHeight: "140%",
  transition: "0.2s linear box-shadow",
  textAlign: "center",
}

// Styles END


// Components Tree START
const Three = ({ message }) => (
  <div onClick={() => popToTop()}>
    <h1>{message}</h1>
    <p>Click me to pop to the top</p>
  </div>
);

const Home = ({ dp, feed, username }) => {
  return (
    <>
      <div style={firstDiv}>
        <div style={secondDiv}>
            <img crossOrigin="anonymous" src={`${dp}`} style={avatarStyle} alt="profile_pic" />
        </div>
        <div style={thirdDiv}>
            <p style={pStyle}>username</p>
        </div>
      </div>
      <div style={firstDiv}>
        <div style={secondDiv}>
          <p style={p3Style}>Liking:</p>
          <Switch />
        </div>
        <div style={adjDiv}>
          <p style={p3Style}>Available:</p>
          <div style={likeStyle}>
              <span style={spanOne}>
                  <img style={heart2Style} src="heart.png"/>
                  <span style={like2Available}>26</span>
              </span>
          </div>
        </div>
      </div>
      <hr/>
      <Link style={{color: "white"}} component={Withdraw} props={{ dp: dp, feed: feed, username: username }}>
        <div style={firstDiv}>
          <div style={divStyle}>
              Withdraw Likes
          </div>
        </div>
      </Link>
      
    </>
  );
};

const Withdraw = ({ dp, feed, username }) => {
  console.log('dp');
  console.log(dp);
  console.log("feed");
  console.log(feed);
  // console.log(feed[0].image_versions2.candidates[0].url);
  const counter = [1,2,3,4,5,6,7,8];
  return (
  <>
    <TopBar />
    <hr />
    <div style={firstDiv}>
        <div style={secondDiv}>
            <img crossOrigin="anonymous" src={`${dp}`} style={avatarStyle} alt="profile_pic" />
        </div>
        <div style={thirdDiv}>
            <p style={pStyle}>username</p>
            {/* <p style={pStyle}>{username}</p> */}
            <div style={likeStyle}>
                <span style={spanOne}>
                    <img style={heartStyle} src="heart.png"/>
                    <span style={likeAvailable}>26</span>
                </span>
            </div>
        </div>
    </div>
    <Row style={{overflowY: "auto"}}>
      {/* {
        feed.length > 0 ? 
        feed.map((item, index) => {
          return (
            <Col style={{ height: "20px", marginTop: "40px" }} span={8} key={index}>
              <img crossOrigin="anonymous" onClick={() => goTo(RequestWithdraw, "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")} src={`${item.image_versions2.candidates[0].url}`} style={avatarStyle}></img>
            </Col>
          )
        }) 
        : <div>No Feed</div>
      } */}
      {
        counter.map((item, index) => {
          console.log(index)
          return (
          index < 3 ?
            (
              <Col style={{ height: "20px", marginTop: "0px" }} span={8}>
                  <img onClick={() => goTo(RequestWithdraw, "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={avatarStyle}></img>
              </Col>
            ):
            (
              <Col style={{ height: "20px", marginTop: "40px" }} span={8}>
                  <img onClick={() => goTo(RequestWithdraw, "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={avatarStyle}></img>
              </Col>
            )
          )
        })
      }
    </Row>
  </>
  )
};

const RequestWithdraw = ({ message }) => (
  <>
    <TopBar />
    <hr />
    <div style={firstDiv}>
        <div style={secondDiv}>
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={avatarStyle}></img>
        </div>
        <div style={thirdDiv}>  
            <p style={pStyle}>umairr_7</p>
            <div style={likeStyle}>
                <span style={spanOne}>
                    <img style={heartStyle} src="heart.png"></img>
                    <span style={likeAvailable}>26</span> 
                </span>
            </div>
        </div>
    </div>
    <div style={firstDiv}>
        <div style={secondDiv}>
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={imageStyle}></img>
        </div>
        <div style={{}}>
            {/* <p style={p2Style}>Likes to receive</p> */}
            {/* <p style={{marginTop: "-310px"}}>Likes to recsasdasdasdasdsadsadasdeive</p> */}
            <div style={likeStyle}>
                <span style={spanTwo}>
                <p style={p2Style}>Likes to receive</p>
                    <p onClick={() => goBack()} style={{marginTop: "-28px", marginLeft: "170px", fontSize: "16px", fontWeight: "bold", cursor: "pointer"}}>x</p>
                    <input type="number" placeholder='Enter amount' style={inputStyle}></input>
                    {/* <img style={heartStyle} src="heart.png"></img>
                    <span style={likeAvailable}>26</span>  */}
                </span>
            </div>
        </div>
    </div>
    <div style={firstDiv}>
      <div style={divStyle}>
          Request Likes
      </div>
    </div>
    </>
);

// Components Tree END

const App = () => {
  const [data, setData] = useState([]);
  const [dp, setDp] = useState("https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/11850309_1674349799447611_206178162_a.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5JV3QEa0ktcAX_rvqGV&edm=AJfeSrwBAAAA&ccb=7-5&oh=00_AT_7fuwF5bOOKD1z0ApNGbVK5qOZQvgSD7nbFtZWgwNn5g&oe=62FCF044&_nc_sid=588073");
  const [feed, setFeed] = useState([]);
  const [username, setUsername] = useState("");

  async function getInstagramFeed () {
    const res = await axios.get("/api/v1/instagram-feeds/username");
  }

  useEffect(() => {
    // getInstagramFeed();
    // const options = {
    //   method: 'GET',
    //   url: 'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile',
    //   params: {ig: 'therock', response_type: 'feeds'},
    //   withCredentials: true,
    //   headers: {
    //     'X-RapidAPI-Key': 'a4bb364e7cmsh53f8c62bcf5b8b3p1cf230jsnfa07dd68635e',
    //     'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setData(response.data);
    //   setDp(response.data[0].profile_pic_url);
    //   setFeed(response.data[0].feed.data);
    //   setUsername(response.data[0].username);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    // fetchImage(dp);
  }, []);

  // const fetchImage = async (url) => {
  //   console.log('fetch func...');
  //   console.log(url);
  //   let picResult = await fetch(url);
  //   let blob = await picResult.blob();
  //   console.log("blob")
  //   console.log(blob);
  //   let reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   console.log("reader")
  //   console.log(reader)
  //   // reader.onload = function () {
  //   //     profilePicElement.src = reader.result;
  //   //     return reader.result;
  //   // }
  // }

  return (
    <>
      {
        // data.length === 0 ?
        // <Spin />
        // :
        <Router>
          <Home dp={dp} feed={feed} username={username} />
        </Router>
      }
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));