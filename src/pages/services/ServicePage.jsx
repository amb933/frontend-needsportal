export const ServicePage = () => {
    return <>
        <h1>
            Una aiurita porfavó
        </h1>
        <div>Various</div>
        <button>Edit service</button>
        <br></br>
        <input type="checkbox" name="finish" value="finished" id="finished" />
        <label htmlFor="finished">Mark as complete</label>
        <p>Si me lo arreglas te compro un helau</p>
        <ul>
            <li>Cada respuesta</li>
        </ul>
        <ul> <li>
            <label htmlFor="reply">Reply:</label>
            <textarea name="reply" id="reply" rows="10" cols="80" placeholder="Insert a reply"></textarea>
        </li>

            <li>
                <input type="file" />
            </li>
        </ul>
        <button type="submit">Reply</button>
    </>
}