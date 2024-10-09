import { sort } from 'fast-sort';

let SortOptions = Object.freeze({
  NONE: 0,
  NAME: 1,
  SIZE: 2,
  DATE_CREATED: 3,
  DATE_MODIFIED: 4
});
let SortOrders = Object.freeze({
  ASCENDING: 0,
  DESCENDING: 1
});

let cache = {};
onmessage = async ({ data }) => {
  let { type, hash, id, items, sort_option, sort_order } = data;
  if (type != "sort")
    return;
  if (sort_option == SortOptions.NONE) {
    postMessage({ id, sorted_items: items, type: "sorted" });
    return;
  }
  if (cache[hash] != null) {
    postMessage({ id, sorted_items: cache[hash], type: "sorted" });
    return;
  }
  console.log("sorting", hash);
  for (let item of items) {
    if (item.type == "folder") {
      item.size = 0;
    }
  }
  let order_key = sort_order == SortOrders.ASCENDING ? "asc" : "desc";
  let option_key = "name";
  switch (sort_option) {
    case SortOptions.NAME:
      option_key = "name";
      break;
    case SortOptions.SIZE:
      option_key = "size";
      break;
    case SortOptions.DATE_CREATED:
      option_key = "date_created";
      break;
    case SortOptions.DATE_MODIFIED:
      option_key = "date_modified";
      break;
  }
  let predicate = {};
  predicate[order_key] = (elm) => {
    if (option_key == "name") {
      return elm[option_key].toLowerCase();
    } else {
      return elm[option_key];
    }
  };
  let sorted_items = sort(items).by([predicate]);
  postMessage({ id, sorted_items, type: "sorted" });
};
//# sourceMappingURL=sort-f74195ba.js.map
