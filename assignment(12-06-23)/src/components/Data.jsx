import React, { useState, useEffect, useContext } from "react";
import "./data.css";
import SearchContext from "../SearchContext";

function Data() {
  const [posts, setPosts] = useState([]); //useSate
  const [wholeArr, setWholeArr] = useState([]);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const {search} = useContext(SearchContext);
  console.log(search);


  const element = 6;
  const pageArr = [];
  let i = 1;
  while (i <= wholeArr.length / element + 1) {
    pageArr.push(i);
    i++;
  }

  const getUsers = async () => {
    await fetch(`http://localhost:8080/movies`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * element;
        const start = page - 1;
        const newData = data.slice(start * element, end);
        setPosts(newData);
      });
  };
console.log(posts);
  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/movies/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          getUsers();
          console.log("Product deleted successfully");
        } else {
          console.log("Failed to delete product");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = () => {
    const newProduct = {
      name: formData.name,
      image: formData.image,
    };

    fetch("http://localhost:8080/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        getUsers();
        setWholeArr([...wholeArr, data]);
        alert("product added successful");
        setFormData({
          name: "",
          image: "",
        });
        setShow(false);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    getUsers();
  }, [page]);

//   const handleSearch = () => {
    const filteredPosts = wholeArr.filter((post) =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );
//   };
const box = search==="" ?  posts : filteredPosts 
 
// console.log(page);
  return (
    <div className="">
     <button className="btn btn-primary my-2 float-end mx-2" onClick={add}> Add</button>
      {show && (
        <>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="name"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image"
          />
          <button onClick={handleAdd}>submit</button>
        </>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,2fr)" }}>

            {box.map(
            (
                el //mapping each data from the data
            ) => (
                <div className=" mx-5 box">
                <h4>Id:{el.id}</h4>
                <h4 className="title"> {el.name}</h4>
                <hr />
                <img src={el.image} alt="error" />
                <hr />
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => deleteProduct(el.id)}
                >
                    Delete
                </button>
                </div>
            )
            )}
       
       
      </div>
      <footer>
        {pageArr.map((el) => {
          return (
            <button
              className="btn btn-primary mx-1"
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          );
        })}
      </footer>
    </div>
  );
}

export default Data;
