import styles from "./TestimonialsSection.module.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import customer1 from "../../assets/customer1.jpg"
import customer2 from "../../assets/customer2.jpg"
import customer3 from "../../assets/customer3.jpg"
import customer4 from "../../assets/customer4.jpg"


const users = [
    {
        id: 1,
        name: "Jane Doe",
        nickname: "@janedoe",
        review: 5,
        description: "The food was absolutely amazing! The atmosphere was perfect for a relaxing evening out. Highly recommend!",
        image: customer1
    },
    {
        id: 2,
        name: "John Smith",
        nickname: "@johnsmith",
        review: 5,
        description: "Excellent service and the best dining experience I've had in a long time. Everything was top-notch!",
        image: customer2
    },
    {
        id: 3,
        name: "Alice Johnson",
        nickname: "@alicejohnson",
        review: 5,
        description: "A truly exceptional experience! The food was exquisite, and the staff made us feel very welcome.",
        image: customer3 // Replace this with the correct image path for a woman
    },
    {
        id: 4,
        name: "Bob Brown",
        nickname: "@bobbrown",
        review: 4,
        description: "The food was great, but the wait time was a bit longer than expected. Overall, a good experience.",
        image: customer4
    }
];


const TestimonialsSection = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                <h2 className={styles.testimonialsHeading}>What do people say about us?</h2>
                <div className={styles.testimonialsContainer}>
                    {users.map(user => (
                        <TestimonialCard key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection