import React, { useMemo } from "react";
import Card from "../Card/Card";
import "./column.css";
import UserIcon from "../UserIcons/UserIcon";

// Import icons from assests
import AddIcon from "../../assests/add.svg"; // Example for Add icon
import MoreIcon from "../../assests/dotmenu.svg"; // Example for More icon
import NoPriorityIcon from "../../assests/No-priority.svg"; // Example for No Priority
import LowPriorityIcon from "../../assests/low.svg"; // Example for Low Priority
import MediumPriorityIcon from "../../assests/medium.svg"; // Example for Medium Priority
import HighPriorityIcon from "../../assests/high.svg"; // Example for High Priority
import UrgentPriorityIcon from "../../assests/urgent.svg"; // Example for Urgent Priority

import { getPriorityIcon, getStatusIcon } from "../../utils/helper";

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy]?.name;
  }, [grouping, groupBy]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") {
      switch (groupBy) {
        case "No priority":
          return <img src={NoPriorityIcon} alt="No priority" width={15} height={15} />;
        case "Low":
          return <img src={LowPriorityIcon} alt="Low priority" width={15} height={15} />;
        case "Medium":
          return <img src={MediumPriorityIcon} alt="Medium priority" width={15} height={15} />;
        case "High":
          return <img src={HighPriorityIcon} alt="High priority" width={15} height={15} />;
        case "Urgent":
          return <img src={UrgentPriorityIcon} alt="Urgent priority" width={15} height={15} />;
        default:
          return <img src={NoPriorityIcon} alt="No priority" width={15} height={15} />;
      }
    }
    if (grouping === "user")
      return (
        <UserIcon
          name={userIdToData[groupBy]?.name}
          available={userIdToData[groupBy]?.available}
        />
      );
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title" style={{ fontWeight: 600 }}>
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <img src={AddIcon} alt="Add" width={16} height={16} />
          <img src={MoreIcon} alt="More" width={16} height={16} />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
