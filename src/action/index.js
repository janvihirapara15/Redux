export const addData = (oobj) =>{
    return { type: "Add", payload: oobj};
}
export const DeleteData = (index) =>{
    return { type: "Delete", payload: index};
}
export const updateData = (editobject, index) => {
    return { type: "Update", payload: { record: editobject, editIndex: index}};
};