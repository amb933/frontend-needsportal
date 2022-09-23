export const NewServicePage = () => {
    return <>
        <form action="#">
            <fieldset>
                <legend>New Service</legend>
                <ul>
                    <li>
                        <label htmlFor="titleService">Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="titleService"
                            placeholder="Name your service"
                            autoFocus
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="typeServices">Type of service</label>
                        <select name="typeServices" id="typeServices">
                            <option value="Various">Various</option>
                            <option value="programming">Programming and Development</option>
                            <option value="art">Design and art</option>
                            <option value="music">Music and Audio</option>
                            <option value="video">Video and Animation</option>
                            <option value="write">Writing and Translation</option>
                            <option value="admin">Administrative and Secretary</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="business">Business</option>


                        </select>
                    </li>

                    <li>
                        <label htmlFor="descriptionService">Description:</label>
                        <textarea name="description" id="descriptionService" rows="10" cols="80" placeholder="Describe your service"></textarea>
                    </li>

                    <li>
                        <input type="file" />
                    </li>


                </ul>
            </fieldset>
            <button type="submit">Add Service</button>

        </form>
    </>
}