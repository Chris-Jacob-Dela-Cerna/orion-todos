
import { isBefore, isAfter, isEqual } from "date-fns";


function sortByName(ascending = true) {
  return (a, b) => {
    if (ascending) 
      return a.name.localeCompare(b.name);
    else
      return b.name.localeCompare(a.name);
  };
}

function sortByDate(key, ascending = true) {
  return (a, b) => {
    if (!isEqual(a[key], b[key])) {
      if (ascending)
        return isBefore(a[key], b[key]) ? -1 : 1;
      else
        return isAfter(a[key], b[key])  ? -1 : 1;
    }
    return sortByName(ascending)(a, b);
  };
}

function sortByPriority(ascending = true) {
  return (a, b) => {
    if (a.priorityLevel !== b.priorityLevel) {
      if (ascending)
        return a.priorityLevel - b.priorityLevel;
      else
        return b.priorityLevel - a.priorityLevel;
    }
    return sortByName(ascending)(a, b);
  };
}


export default {
  nameAscending: sortByName(),
  nameDescending: sortByName(false),
  dueDateAscending: sortByDate("dueDate"),
  dueDateDescending: sortByDate("dueDate", false),
  lastModifiedAscending: sortByDate("lastModified"),
  lastModifiedDescending: sortByDate("lastModified", false),
  priorityLevelAscending: sortByPriority(),
  priorityLevelDescending: sortByPriority(false)
};