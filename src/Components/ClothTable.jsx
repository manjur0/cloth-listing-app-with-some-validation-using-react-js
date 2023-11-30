import { useEffect } from "react";
import "./ClothTable.css";
import { MdDelete } from "react-icons/md";

const ClothTable = ({ input, setInput }) => {
  const handleDelete = (idx) => {
    console.log(idx);
    const newInput = input.filter((item) => item.clothId !== idx);
    setInput(newInput);
  };

  // delete all data from table
  const handleDeleteAll = () => {
    setInput([]);
  };

  // set local storage
  useEffect(() => {
    localStorage.setItem("cloth", JSON.stringify(input));
  }, [input]);

  return (
    <>
      <h2>Cloth Listing Table</h2>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Cloth Name</th>
              <th>Cloth Id</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Colors </th>
              <th>Date </th>
              <th>Your Size </th>
              <th>Terms </th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {input.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.clothId}</td>
                <td>$ {item.price} </td>
                <td>{item.quantity}</td>
                <td>{item.color}</td>
                <td>{item.date}</td>
                <td>{item.size}</td>
                <td>{item.checkbox}</td>
                <td>{item.description}</td>
                <MdDelete
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    marginTop: "12px",
                  }}
                  onClick={() => handleDelete(item.clothId)}
                />
              </tr>
            ))}
            {/* delete all button */}
          </tbody>
        </table>
        <div onClick={handleDeleteAll} className="delete-btn">
          <button>Delete All</button>
        </div>
      </div>
    </>
  );
};

export default ClothTable;
