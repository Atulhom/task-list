import React from "react";
import Todo from "./todo";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
    <div className="form-control w-50 mx-auto text-center mt-5 bg-light">
      <Todo />
    </div>
  );
};

export default Home;
