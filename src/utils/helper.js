import React from 'react';

// Import icons from assests
import NoPriorityIcon from "../assests/No-priority.svg";
import LowPriorityIcon from "../assests/low.svg";
import MediumPriorityIcon from "../assests/medium.svg";
import HighPriorityIcon from "../assests/high.svg";
import UrgentPriorityIcon from "../assests/urgent.svg";

import BacklogIcon from "../assests/Backlog.svg";
import TodoIcon from "../assests/To-do.svg";
import InProgressIcon from "../assests/in-progress.svg";
import DoneIcon from "../assests/Done.svg";
import CanceledIcon from "../assests/Cancelled.svg";

// Function to get the icon based on priority level
export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'No priority':
      return <img src={NoPriorityIcon} alt="No priority" width={15} height={15} />;
    case 'Low':
      return <img src={LowPriorityIcon} alt="Low priority" width={15} height={15} />;
    case 'Medium':
      return <img src={MediumPriorityIcon} alt="Medium priority" width={15} height={15} />;
    case 'High':
      return <img src={HighPriorityIcon} alt="High priority" width={15} height={15} />;
    case 'Urgent':
      return <img src={UrgentPriorityIcon} alt="Urgent priority" width={15} height={15} />;
    default:
      return <img src={NoPriorityIcon} alt="No priority" width={15} height={15} />;
  }
};

// Function to get the icon based on task status
export const getStatusIcon = (status) => {
  switch (status) {
    case 'Backlog':
      return <img src={BacklogIcon} alt="Backlog" width={24} height={24} />;
    case 'Todo':
      return <img src={TodoIcon} alt="Todo" width={24} height={24} />;
    case 'In progress':
      return <img src={InProgressIcon} alt="In progress" width={16} height={16} />;
    case 'Done':
      return <img src={DoneIcon} alt="Done" width={16} height={16} />;
    case 'Canceled':
      return <img src={CanceledIcon} alt="Canceled" width={16} height={16} />;
    default:
      return <img src={CanceledIcon} alt="Canceled" width={16} height={16} />;
  }
};
