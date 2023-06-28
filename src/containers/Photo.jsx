import { useEffect, useState } from "react";

const Photo = (props) => {
  const [photo, setPhoto] = useState({});

  const getPhoto = async (id) => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos/" + id
    )
      .then((res) => res.json())
      .catch((error) => console.error(error));

    // console.log(data);
    setPhoto(data);
  };

  useEffect(() => {
    console.log("component di-render");
    getPhoto(props.index);
  }, []);

  return (
    <img
      src={photo.url}
      alt={photo.title}
      style={{
        width: 100,
        height: 100,
        objectFit: "contain",
      }}
    />
  );
};

export default Photo;
