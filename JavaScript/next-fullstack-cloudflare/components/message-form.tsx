"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addMessageToDatabase } from "@/actions/add-message-to-database";

export default function MessageForm() {
  const [message, setMessage] = React.useState("");

  async function handleAddMessageToDatabase() {
    const response = await addMessageToDatabase(message);

    if (response.ok) {
      setMessage("");
    }
  }
  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="add a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleAddMessageToDatabase}>Submit</Button>
    </div>
  );
}
