
import { isBefore, isEqual } from "date-fns";


function sortByName(ascending = true) {
  const sign = ascending ? 1 : -1;
  return (a, b) => a.name.localeCompare(b.name) * sign;
}

function sortByDate(key, ascending = true) {
  const sign = ascending ? 1 : -1;
  return (a, b) => {
    if (!isEqual(a[key], b[key])) {
      return isBefore(a[key], b[key]) ? -sign : sign;
    }
    return sortByName(ascending)(a, b);
  };
}

function sortByPriority(ascending = true) {
  const sign = ascending ? 1 : -1;
  return (a, b) => {
    if (!isEqual(a.priorityLevel, b.priorityLevel)) {
      return (a.priorityLevel - b.priorityLevel) * sign;
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