import React from "react";
import Courses from "../course/Courses";
import Cart from "../cart/Cart";
import { useState } from "react";
import "./OnlineLearning.css";

const OnlineLearning = () => {
  const courseList = [
    {
      id: 1,
      name: "Full Stack javascript",
      price: 20,
      courseDuration: 2,
      image:
        "https://www.hiddenbrains.com/blog/wp-content/uploads/2019/07/kotlin-for-android-app-development.gif",
    },
    {
      id: 2,
      name: "Android Development",
      price: 20,
      courseDuration: 4,
      image:
        "https://www.hiddenbrains.com/blog/wp-content/uploads/2019/07/kotlin-for-android-app-development.gif",
    },
    {
      id: 3,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 4,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 5,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
    {
      id: 6,
      name: "Game Development",
      price: 20,
      courseDuration: 8,
      image: "https://hackernoon.com/drafts/h7yw28l8.png",
    },
  ];

  const [course, setCourse] = useState(courseList);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    console.log("new course added", newCart);
  };

  return (
    <div className="online-learning-container">
      <div className="courses-container">
        <Courses handleAddCourse={handleAddCourse} courses={course}></Courses>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OnlineLearning;
