import React, { useState } from "react";

const InviteModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");

  const handleInvite = () => {
    // Add logic to send invite to the provided email
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Invite Users</h2>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleInvite}>Send Invite</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default InviteModal;
