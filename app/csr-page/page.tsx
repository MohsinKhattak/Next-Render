"use client";

import { useEffect, useState } from "react";
import User from "../models/user";
export default function CSRPage() {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user: User) => setData(user))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading client-side data...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Website:</strong> {data.website}
      </p>
    </div>
  );
}
