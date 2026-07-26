import { useEffect, useState } from "react";
import api from "../api/axios";
import "./ManageServices.css";

function ManageServices() {
  const [services, setServices] = useState([]);

  const [formData, setFormData] = useState({
    number: "",
    title: "",
    description: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  // Fetch Services
  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data.services);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, formData);
        alert("Service Updated Successfully");
      } else {
        await api.post("/services", formData);
        alert("Service Added Successfully");
      }

      setFormData({
        number: "",
        title: "",
        description: "",
        image: "",
      });

      setEditingId(null);

      fetchServices();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  // Edit
  const handleEdit = (service) => {
    setEditingId(service._id);

    setFormData({
      number: service.number,
      title: service.title,
      description: service.description,
      image: service.image,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await api.delete(`/services/${id}`);

      alert("Service Deleted Successfully");

      fetchServices();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="manage-services-container">

      {/* Header */}
      <h1 className="page-title">
        Manage Services
      </h1>

      {/* Form */}
      <div className="service-form-card">
        <form className="service-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="number"
            placeholder="01 SERVICE"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="hero6.jpg"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <button className="submit-btn" type="submit">
            {editingId ? "Update Service" : "Add Service"}
          </button>

        </form>
      </div>

      {/* Heading */}
      <h2 className="services-heading">
        All Services
      </h2>

      {/* Cards */}
      <div className="services-grid">

        {services.length === 0 ? (
          <p>No Services Found</p>
        ) : (
          services.map((service) => (
            <div className="service-card" key={service._id}>

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="image-name">
                <strong>Image:</strong> {service.image}
              </div>

              <div className="service-buttons">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(service)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default ManageServices;