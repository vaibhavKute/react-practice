import axios from "axios";
import React, { useState, useEffect } from "react";
import {useHistory, useParams} from "react-router-dom";

const EditDevice = () => {
  let history = useHistory();
  const { id } = useParams();
  const [device, setDevice] = useState({
    image: "",
    dname: "",
    category: "",
    price: "",
    description: "",
  });

  const { image, dname, category, price, description } = device;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    // setDevice({...device,[e.target.image]: e.target.value})
    setDevice({...device,[e.target.name]: e.target.value})
  };

  useEffect(() => {
      loadDevice()
  }, []);

  const onSubmit = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:3500/devices/${id}`, device);
    history.push("/crud");
  }

  const loadDevice = async () => {
    const result = await axios.get(`http://localhost:3500/devices/${id}`);
    setDevice(result.data);
  }

  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <h3 className="text-center">Edit Device</h3>
      <form class="main_form" onSubmit={e => onSubmit(e)}>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              class="form-control"
              placeholder="Image URL"
              type="text"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              class="form-control"
              placeholder="Device Name"
              type="text"
              name="dname"
              value={dname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              class="form-control"
              placeholder="Device Category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <input
              class="form-control"
              placeholder="Device Price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div class="col-md-12">
            <textarea
              class="textarea"
              placeholder="Device Description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            ></textarea>
          </div>
          <div class="col-md-12" style={{ marginBottom: "5%" }}>
            <button class="send">Update Device</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDevice;
