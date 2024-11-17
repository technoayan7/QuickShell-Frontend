import React from "react";
import "./card.css";
import UserIcon from "../UserIcons/UserIcon";
import { getStatusIcon } from "../../utils/helper";

// Import custom icon for the more icon (LuMoreHorizontal equivalent)
import MoreIcon from "../../assests/dotmenu.svg"; // replace with actual path to your custom icon

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {!hideProfileIcon && (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">
          <img src={MoreIcon} alt="More" width={16} height={16} /> {/* Using custom "More" icon */}
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
