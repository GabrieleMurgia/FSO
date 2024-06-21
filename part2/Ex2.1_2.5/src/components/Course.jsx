import Content from "./Content"
import Header from "./Header"
import './Course.css';

const Course = ({course}) => {

    const total = course.parts.reduce((sum,init)=>{
        return sum + init.exercises
    },0)    

    return(
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <p className="bold_p">total of {total} exercises</p>
        </div>
    )
    
}

export default Course