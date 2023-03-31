export function paginate(pageSize, pageNum, items){
    const startIndex=(pageSize*(pageNum -1));
    let pageItems=[];
    for(let i=startIndex; i<startIndex+pageSize && i<items.length; i++){
        pageItems.push(items[i]);
    }
    return pageItems;
}