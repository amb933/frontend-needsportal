export const LoginPage = () => {
  return <><form action="#">
    <fieldset>
      <legend>Login</legend>
      <ul>
        <li>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
          />
        </li>
        <li>
          <label for="pass">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="pass"
            required
          />
          <input type="checkbox" name="showPassword" value="showPassword" id="showPassword" />
          <label for="showPassword">Show password</label>
        </li>


      </ul>
    </fieldset>
    <button type="submit">Login</button>
  </form>
  </>
}