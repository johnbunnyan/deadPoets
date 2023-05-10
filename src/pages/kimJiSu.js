import "../styles.css";

const data = {
  name: "지수",
  imageUrl: "/walk.jpeg",
  imageSize: 90,
};

function Hands() {
  return <button>사진 찍기</button>;
}

function Profile() {
  return (
    <>
      <div className="jisuPro">
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

export default function Jisu() {
  return (
    <div>
      <h1>
        나의 이야기에 온 걸 환영해. <br />
      </h1>
      <Profile />

      <p>
        우리
        <br />
        산책이나 할까?
      </p>

      <Hands />
    </div>
  );
}
