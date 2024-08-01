export const Contact = () => {
  return (<section className="contact-us">
    <h2 className="5xl md:text-7xl text-center mb-10">Contact Us</h2>
    <form action="" className="grid place-items-center gap-8">
      <input placeholder="Full Name" type="text" name="full-name" className="max-w-44 border-2 rounded-md p-2" />
      <input placeholder="Email Address" type="email" name="email" className="max-w-44 border-2 rounded-md p-2" />
      <input placeholder="Phone Number" type="text" name="phone" className="max-w-44 border-2 rounded-md p-2" />
      <textarea placeholder="Message" name="message" id="" className="w-96 border-2 rounded-md p-2"></textarea>
      <button type="submit" className="bg-yellow-400 px-16 text-lg py-2 rounded-lg">Send</button>
    </form>
  </section>)
}