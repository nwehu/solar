import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageServices() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
  });

  useEffect(() => {
    fetchServices();
  }, []);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data.services);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch services");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new service
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/service", formData);

      alert("Service added successfully!");

      setFormData({
        title: "",
        description: "",
        icon: "",
      });

      fetchServices();
    } catch (error) {
      console.log(error);
      alert("Failed to add service");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Services</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="icon"
          placeholder="Icon (Example: FaSolarPanel)"
          value={formData.icon}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Add Service</button>
      </form>

      <hr />

      <h2>All Services</h2>

      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        services.map((service) => (
          <div
            key={service._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>
              <strong>Icon:</strong> {service.icon}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ManageServices;