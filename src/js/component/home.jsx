import React, { useEffect, useState } from "react";
import Todo from "./todo";

//create your first component
const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body text-center">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
