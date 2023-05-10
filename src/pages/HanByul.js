import "../styles.css";
import { useState } from 'react';


const data = {
  name: "한별",
  imageUrl: "/star.png",
  imageSize: 90,
};

function Hands() {
  return <button>별 만들기</button>;
}

function Profile() {
  return (
    <>
      <div className="byulPro">
        <h1>{data.name}</h1>
        <img
          className="avatar"
          src={data.imageUrl}
          alt={"Photo of " + data.name}
          style={{
            width: data.imageSize,
            height: data.imageSize,
          }}
        />
      </div>
    </>
  );
}

export default function HanByul() {
  return (
    <div>
      <h1>
        안녕, 또 보네. <br />
      </h1>
      <Profile />

      <p>
        너의 꿈을 잃지마
        <br />
        우리의 별을 지켜.
      </p>

      <Hands />
    </div>
  );
}
