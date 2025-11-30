import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [users, setUsers] = useState([]);

  const load = async () => {
    let res = await axios.get("/api/subscription/list");
    setUsers(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="mt-5">
        {Object.keys(users).map(email => (
          <div key={email} className="border p-3 mb-2">
            <h3>{email}</h3>
            <p>Plan: {users[email].subscription}</p>
            <p>Status: {users[email].active ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
