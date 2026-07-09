import { useEffect, useState } from "react";

function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContacts(data.contacts);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    alert(data.message);

    setContacts(contacts.filter((contact) => contact._id !== id));
  } catch (error) {
    console.log(error);
    alert("Failed to delete contact");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Contact Messages</h1>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>
  <button onClick={() => handleDelete(contact._id)}>
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;