import React from "react";

export default function UserData(props) {
  const { username, password } = props;
  // let { username, password } = useParams()
  return (
    <>
      <div style={{ padding: "16px" }}>
        <div>{username}</div>
        <div>{password}</div>
      </div>
    </>
  );
}
