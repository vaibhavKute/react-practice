import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Crud = () => {
    const [devices, setDevice] = useState([]);

    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
        // const result = await axios.get(`${process.env.REACT_APP_API}`);
        const result = await axios.get("http://localhost:3500/devices");
        // console.log('result', result.data);
        setDevice(result.data);
    }

    const deleteDevice = async id => {
      await axios.delete(`http://localhost:3500/devices/${id}`);
      loadDevices();
    }

    return (
      <div>
        <div className="container">
          <table class="table border shadow" style={{ marginTop: "8%" }}>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td><img style={{maxWidth: "20%"}} src={device.image}/></td>
                  <td>{device.dname}</td>
                  <td>{device.category}</td>
                  <td>Rs. {device.price}</td>
                  <td>{device.description}</td>
                  <td>
                      <Link to={`/edit-device/${device.id}`} class="btn-sm btn-warning mr-2">Edit</Link>
                      <Link to="/#" class="btn-sm btn-danger mr-2" onClick={() => deleteDevice(device.id)}>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Crud;
