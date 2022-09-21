export const RegisterPage = () => {
  return <>
    <form action="#">
      <fieldset>
        <legend>Register</legend>
        <ul>
          <li>
            <label for="username">Username: </label>
            <input
              type="text"
              name="name"
              id="username"
              autofocus
              required
            />
          </li>
          <li>
            <label for="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="pass"
              required
            />
          </li>
          <li>
            <label for="pass">Repeat password</label>
            <input
              type="password"
              name="password"
              id="pass"
              required
            />
          </li>
          <li>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
            />
          </li>
        </ul>
      </fieldset>
      <button type="submit">Join us!</button>
    </form>
  </>
}