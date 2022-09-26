import './typeservices.css';

export const TypeServices = () => {
    return <li className="explore-services">Explore Services
        <ul className="cont-services">

            <label htmlFor="category">Category</label>
            <select name="category" id="category">

                <option value="Programming and Development">Programming and Development</option>
                <option value="Design and art">Design and art</option>
                <option value="Music and Audio">Music and Audio</option>
                <option value="Video and Animation">Video and Animation</option>
                <option value="Writing and Translation">Writing and Translation</option>
                <option value="Administrative and Secretary">Administrative and Secretary</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Business">Business</option>
                <option value="Various">Various</option>

            </select>

        </ul>
    </li>

}