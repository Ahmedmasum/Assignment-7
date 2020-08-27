import React from "react";
import "./CourseItem.css";
import Button from "react-bootstrap/Button";

const CourseItem = (props) => {
  return (
    <div className="main-div">
      <div className="course-Item">
        <div className="course-image">
          <img src={props.course.image} alt="course-img" />
        </div>
        <div className="course-info">
          <p>
            <strong>Course Name:</strong> {props.course.name}
          </p>
          <p>
            <strong>Price:</strong> {props.course.price} $
          </p>
          <p>
            <strong>Course Duration:</strong> {props.course.courseDuration}
            hours
          </p>
          <Button onClick={() => props.handleAddCourse(props.course)}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
