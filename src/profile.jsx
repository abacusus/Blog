import React from "react";
import { useState } from "react";
import proImg from './proImg.svg'
import { useDispatch } from "react-redux";
import { addUser } from "./blog";
import { useNavigate } from "react-router-dom";
const profile = () => {
  const call = ()=>{
      dispatch(addUser({
              image : image,
              name : name,
            }))
      navigate("/home")
  }
  const [ name , setName] = useState('')
  const navigate = useNavigate()
  const data = localStorage.getItem("email");
  const [hover, setHover] = useState("");
  const [pronoun, setPronoun] = useState("");
  const[btn , setBtn] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch()
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setImage(imageData);
      console.log(imageData);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 800,
        backgroundColor: "#09344c",
      }}
    >
      {/* <div style={{position:"absolute"}}>
        <img style={{height:398,width:"100%"}} src={proImg}/>
      </div> */}
      <div
        style={{
          paddingLeft: 30,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          height: 500,
          width: 500,
          boxShadow: "0px 0px 5px black",
          backgroundColor:"white",
          paddingBottom:20
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ color: "black", fontFamily: "roboto" }}>
            Profile Information
          </h2>
          
        </div>
        {image == null ? (
          <div
            style={{
              backgroundColor: "rgb(128, 164, 206)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 55,
              width: 55,
              borderRadius: "50%",
              color: "white",
              fontFamily: "roboto",
              fontSize: "25px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            id="gmail"
          >
            {data ? data.charAt(0).toUpperCase() : "?"}
          </div>
        ) : (
          <img
            style={{ height: 55, width: 55, borderRadius: "50%" }}
            src={image}
          />
        )}

        <input
          style={{ position: "absolute", top: "39.5%", width: 60,opacity: 0  }}
          type="file"
          placeholder="Photo"
          onChange={handleImage}
        />
        <div style={{ display: "flex", gap: 20, fontFamily: "roboto" }}>
          <p style={{ color: "green", fontSize: 15 }}>Update</p>
          <p onClick={()=>setImage(null)} style={{ color: "red", fontSize: 15 ,cursor:"pointer"}}>Remove</p>
        </div>
        <p style={{ color: "black", fontFamily: "roboto" }}>Name</p>
        <input
          onChange={(e)=>setName(e.target.value)}
          style={{
            color: "black",
            fontFamily: "roboto",
            width: 450,
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "0px 0px 5px black",
            outline: "none",
            height: 30,
            borderRadius: 5,
            paddingLeft: 7,
          }}
          type="text"
        />
        <p style={{ color: "black", fontFamily: "roboto" }}>Pronouns</p>
        <select
          style={{
            color: "black",
            fontFamily: "roboto",
            width: 455,
            backgroundColor: "white",
            border: "none",
            boxShadow: "0px 0px 5px black",
            outline: "none",
            height: 30,
            borderRadius: 5,
            paddingLeft: 7,
            
          }}
          value={pronoun}
          onChange={(e) => setPronoun(e.target.value)}
        >
          <option
            style={{
              color: "black",
              fontFamily: "roboto",
            }}
            value="he"
          >
            {" "}
            He{" "}
          </option>
          <option
            style={{
              color: "black",
              fontFamily: "roboto",
            }}
            value="her"
          >
            {" "}
            Her{" "}
          </option>
          <option
            style={{
              color: "black",
              fontFamily: "roboto",
            }}
            value="she"
          >
            {" "}
            She{" "}
          </option>
          <option
            style={{
              color: "black",
              fontFamily: "roboto",
            }}
            value="them"
          >
            {" "}
            Them
          </option>
          <option
            style={{
              color: "black",
              fontFamily: "roboto",
            }}
            value="they"
          >
            {" "}
            They{" "}
          </option>
        </select>
        <p style={{ color: "black", fontFamily: "roboto" }}>Short Bio</p>
        <input
          style={{
            color: "black",
            fontFamily: "roboto",
            width: 450,
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "0px 0px 5px black",
            outline: "none",
            height: 55,
            borderRadius: 5,
            paddingLeft: 7,
          }}
          type="text"
        />
        <div id="empty" style={{ height: 30 }}></div>
        <div
          style={{
            display: "flex",
            gap: 15,
            justifyContent: "flex-end",
            paddingRight: 50,
          }}
        >
          <button
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            style={{
              backgroundColor: hover ? "rgb(128, 164, 206)" : "rgb(9, 52, 76)",
              borderRadius: 18,
              border: "1px solid rgb(128, 164, 206)",
              color: hover ? "black" : "rgb(128, 164, 206)",
              cursor: "pointer",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
              paddingBottom: 5,
              fontFamily: "roboto",
              width: 80,
              height: 35,
            }}
          >
            Cancel
          </button>
          <button
            onMouseLeave={() => setBtn(false)}
            onMouseEnter={() => setBtn(true)}
          
            onClick={()=>call()}
            style={{
              backgroundColor: btn ? "rgb(128, 164, 206)" : "rgb(9, 52, 76)",
              borderRadius: 18,
              border: "1px solid rgb(128, 164, 206)",
              color: btn ? "black" : "rgb(128, 164, 206)",
              cursor: "pointer",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
              paddingBottom: 5,
              fontFamily: "roboto",
              width: 80,
              height: 35,
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default profile;
