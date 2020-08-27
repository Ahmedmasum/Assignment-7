import React from "react";
import CourseItem from "./CourseItem";

const Courses = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <CourseItem
          handleAddCourse={props.handleAddCourse}
          course={course}
          key={course.id}
        ></CourseItem>
      ))}
    </div>
  );
};

export default Courses;
