import { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "916379063282"; // ← Replace with your WhatsApp number (with country code)
    const encodedMessage = encodeURIComponent(
      `Hi, I'm ${name}. ${message}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="py-20 px-4 bg-beige">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-10 text-center font-serif text-4xl text-cocoa">Contact Me</h2>

        <form onSubmit={handleWhatsApp} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cocoa">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-cocoa/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cocoa"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-cocoa">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-md border border-cocoa/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cocoa"
              placeholder="Tell me about your event or inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-cocoa px-6 py-3 text-beige font-semibold hover:opacity-90 transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
