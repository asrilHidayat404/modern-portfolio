import { Facebook, Instagram, Github } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: (
      <Facebook
        className="text-blue-600 hover:scale-110 transition-transform"
        size={28}
      />
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: (
      <Instagram
        className="text-pink-500 hover:scale-110 transition-transform"
        size={28}
      />
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/asrilHidayat404",
    icon: (
      <Github
        className="text-gray-800 hover:scale-110 transition-transform dark:text-gray-200"
        size={28}
      />
    ),
  },
];

const Social = () => {
  return (
    <div className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-2xl shadow-lg p-6 mb-6 flex-1">
      <h2 className="text-2xl font-bold mb-6 text-center">Social Media</h2>
      <ul className="flex justify-center items-center gap-6">
        {socialLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
