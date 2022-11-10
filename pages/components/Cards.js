import React from "react";
import LinearGraph from "./LinearGraph";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

const Cards=(props)=>
{
  return(
    <>
    {props.data.map((val, ind)=>{
      return(
        <div className="basicCard" key={ind}>
          <img className="card-image" src={val[1].url}/>
          <div>Username: {val[1].username}</div>
          <div>Fullname: {val[1].full_name}</div>
          <div>Followers: {val[1].followers}</div>
          <div>Vqs: {val[1].vqs}</div>
          <div>Category: {val[1].category}</div>
        </div>
      )
    })}
 
    </>
  )
    // return(
    //     <>
    //         {similarCards.map((ind, value)=>{
    //       <div key={key} className="single-card-container">
    //                   {/* {props.data[key].username === "xxxxxx" && <PaymentPopUp />}
    //                   <div
    //                     className={
    //                       props.data[key].username === "xxxxxx" ? "single-card blur" : "single-card"
    //                     }
    //                   >
    //                     {props.displayPopUp.status &&
    //                       props.displayPopUp.index &&
    //                       props.displayPopUp.index === key && (
    //                         <PopUp
    //                           displayPopUp={props.displayPopUp}
    //                           setDisplayPopUp={props.setDisplayPopUp}
    //                         />
    //                       )} */}
    //                     <div>
    //                       <div className="single-card-info-container">
    //                         {/* <img
    //                           src={props.data[key].url}
    //                           alt="profile"
    //                           className="single-card-info-image"
    //                         /> */}
    //                         <div className="single-card-info-text-container">
    //                           <p
    //                             className="single-card-info-company"
    //                             style={{
    //                               marginBottom: "2px",
    //                             }}
    //                           >
    //                             {props.data[key].full_name}
    //                           </p>
    //                           <div className="display-flex-row width-100 justify-content-between">
    //                             <p className="single-card-info-username">
    //                               @{props.data[key].username}
    //                             </p>
    //                             <p className="single-card-info-category">
    //                               {props.data[key].category}
    //                             </p>
    //                           </div>

    //                           <p className="single-card-info-country">{props.data[key].country}</p>
    //                         </div>
    //                         <BootstrapTooltip
    //                           title="You can create lists and add profiles to lists."
    //                           placement="top-start"
    //                         >
    //                           <BookmarkBorderIcon
    //                             id="card-bookmark-button"
    //                             onClick={() => {
    //                               findCard(key, props.data[key].full_name, props.data[key]);
    //                             }}
    //                           />
    //                         </BootstrapTooltip>
    //                       </div>
    //                       <div className="single-card-status-container">
    //                         <div className="single-card-status-aiscore-container">
    //                           <BootstrapTooltip
    //                             title="vHub Score tells you about the overlap between this profile and the searched profile"
    //                             sx={{ width: "10%" }}
    //                             placement="left-start"
    //                           >
    //                             <p className="single-card-status-aiscore-heading">VHub Score</p>
    //                           </BootstrapTooltip>

    //                           <p className="single-card-status-aiscore-value">
    //                             {props.data[key].iou}%
    //                           </p>
    //                         </div>
    //                         <div className="single-card-status-follow-container">
    //                           <BootstrapTooltip
    //                             title=" vHub Quality Score tells you about how influential the account is w.r.t similar accounts."
    //                             sx={{ width: "20%" }}
    //                             placement="top-start"
    //                           >
    //                             <p className="single-card-status-follow-heading">VQS</p>
    //                           </BootstrapTooltip>
    //                           <p className="single-card-status-follow-value">
    //                             {props.data[key].vqs}
    //                           </p>
    //                         </div>
    //                       </div>
    //                       <div className="display-flex-row filter-filpCard-followers-container">
    //                         <div className="flip-card">
    //                           <div className="single-card-status-growth-graph-heading">Growth</div>
    //                           <div className="flip-card-inner">
    //                             <div className="flip-card-front">
    //                               <LinearGraph data={props.data[key].growth} id={parseInt(key)} />
    //                             </div>
    //                             {/* <div className="flip-card-back">
    //                               <div className="single-card-btn-container">
    //                                 <button className="single-card-btn" onClick={() => additem(key)}>
    //                                   Compare
    //                                 </button>
    //                               </div>
    //                             </div> */}
    //                           </div>
    //                         </div>
    //                         <div className="single-card-status-follower-container">
    //                           <div className="inner-single-card-status-follower-container">
    //                             <p className="single-card-status-follower-heading">Followers</p>
    //                             <p className="single-card-status-follower-value">
    //                               {format(props.data[key].followers)}
    //                             </p>
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div id="show-more">
    //                         <a
    //                           onClick={() => {
    //                             setSlidingBarDisplay(props.data[key].username);
    //                           }}
    //                         >
    //                           <u className="single-card-more-details-option">More Details</u>
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 {/* </div> */}
    //     })}
    //     </>
    // )
}

export default Cards;