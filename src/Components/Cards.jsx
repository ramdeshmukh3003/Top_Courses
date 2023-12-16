import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {

    const[likedCourses,setLikedCourses]=useState([]);
    
    function getCourses() {
       let allCourses=[];
       if(props.category === 'All'){
           
            Object.values(props.courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })

            return allCourses;
       }
       else{
            return props.courses[props.category];
       }
    }


    
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
           {

            getCourses().map((course) => (
                <Card key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses} />
            ))

            
           }
        </div>
    );
};

export default Cards;
