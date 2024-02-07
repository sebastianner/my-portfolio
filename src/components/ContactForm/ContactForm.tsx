function ContactForm() {
  return (
    <form>
      <fieldset>
        <legend>Contact me</legend>
        <label htmlFor="Email">Your email</label>
        <input
          id="Email"
          name="Email"
          type="text"
          placeholder="youremail@example.com"
        />
        <label htmlFor="Message">Your message</label>
        <input
          id="Message"
          name="Message"
          type="text"
          placeholder="Hello Sebastian..."
        />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
