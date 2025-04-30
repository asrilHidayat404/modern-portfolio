import ContactForm from "@/components/ContactForm";
import ContactInformation from "@/components/ContactInformation";
import Social from "@/components/Social";

const Contact = () => {
  return (
    <div
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-10"
      id="contact"
    >
      <header className="font-bold text-4xl text-center mb-10">Contact</header>
      <div className="w-2/3 mx-auto flex gap-10 lg:flex-row flex-col">
        <Social />
      </div>
      <div className="w-2/3 mx-auto bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md p-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
