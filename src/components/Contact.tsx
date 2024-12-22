"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);

    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
      alert(
        "Wiadomość została już wysłana. Poczekaj przed wysłaniem kolejnej."
      );
      setIsSubmitting(false);
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.privacyPolicy
    ) {
      alert("Proszę wypełnić wszystkie pola!");
      setIsSubmitting(false);
      return;
    }

    const body = {
      email: "biuro@n20.pl", // do zamiany na odpowiedni adres
      subject: `Sadowa 20 - Wiadomość od: ${formData.name}`,
      message: `Imię i nazwisko: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\n${formData.message}`,
    };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "_just-a'test\"key,or>is<it?",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert("Wiadomość została wysłana pomyślnie!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        });
        setLastSubmissionTime(now);
      } else {
        throw new Error("Błąd podczas wysyłania wiadomości");
      }
    } catch (error) {
      alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center bg-grey relative scroll-mt-20 py-10"
    >
      <div className="w-3/4 text-center">
        <div>
          <p className="text-6xl text-green4 font-bold break-words max-w-full">
            DOMY
          </p>
        </div>
        <p className="text-3xl font-bold text-green2 pt-3">
          Masz jakieś pytania? Zainteresowała Cię nasza oferta? Zapraszamy
          serdecznie do kontaktu.
        </p>
        <div className="flex justify-between mt-8 w-full">
          <div className="w-full lg:w-1/2 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.777323362113!2d20.137808876927075!3d50.014469518658906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471646d96c0c9cf5%3A0xd9655f478a456d52!2sBrzozowa%2C%2032-003%20Zakrz%C3%B3w!5e1!3m2!1spl!2spl!4v1734886297634!5m2!1spl!2spl"
              frameBorder="0"
              className="w-160 h-112 rounded-lg shadow-lg"
            ></iframe>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-160 h-112 lg:w-1/2 px-6 pt-2 bg-white shadow-lg rounded-lg"
          >
            <div className="">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-gray-700"
              >
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-wrap -mx-2 pt-2">
              <div className="w-full sm:w-1/2 px-2">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 ">
                <label
                  htmlFor="phone"
                  className="block text-lg font-bold text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="pt-2">
              <label
                htmlFor="message"
                className="block text-lg font-bold text-gray-700"
              >
                Treść wiadomości
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 text-black rounded-md h-28 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-center mb-6">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="privacyPolicy" className="text-gray-700">
                Zgadzam się z polityką prywatności
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green2 text-white text-lg rounded-md shadow-md hover:bg-green4 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center items-center ">
          <a
            href="https://www.n20.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-8"
          >
            <Image
              src="/n20logoCzarne.png"
              alt="N20"
              width={294}
              height={184}
            />
          </a>
          <div className="text-left font-bold text-gray-800">
            <h2 className="text-2xl mb-3">Kontakt biura nieruchomości</h2>
            <p className="text-lg flex items-center mb-0">
              <FaEnvelope className=" text-orange-500 mr-2"></FaEnvelope>
              biuro@n20.pl
            </p>
            <p className="text-lg flex items-center mb-0">
              <FaPhone className=" text-orange-500 mr-2"></FaPhone> +48 12 433
              38 78
            </p>
            <p className="text-lg flex items-center mb-0">
              <FaMobile className=" text-orange-500 mr-2"></FaMobile> +48 790
              557 504
            </p>
            <p className="text-lg flex items-center mb-0">
              <FaMobile className=" text-orange-500 mr-2"></FaMobile> +48 790
              557 057
            </p>
            <p className="text-lg flex items-center mb-0">
              <FaLocationDot className=" text-orange-500 mr-2"></FaLocationDot>
              Plac Wolnica 13/21, 31-060 Kraków
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
