export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize project development and seamless user experiences",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My main tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for robotics",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a conversational AI Assistant to run on the web",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "Created my personal portfolio using React, TailwindCSS, TypeScript, and Framer Motion for the animations.",
    img: "/portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "www.github.com/aokhader/aokhader.github.io",
  },
  {
    id: 2,
    title: "DevJournal - Full-stack Developer Journal",
    des: "Maintain a journal to track your daily journey, as well as show your tasks and action items in a calendar display.",
    img: "/DevJournal.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/figma.svg"],
    link: "www.github.com/cse110-sp24-group21/cse110-sp24-group21",
  },
  {
    id: 3,
    title: "Visual Graph Algorithms",
    des: "Implemented various graph algorithms such as BFS and SCC using C++ and displayed them on a web browser.",
    img: "/wg.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/cpp.svg"],
    link: "www.github.com/aokhader/GraphAlgorithms",
  },
  {
    id: 4,
    title: "YouTubeOffline - YouTube Video Downloader",
    des: "Download any YouTube video for free using PyTube and MoviePy by providing the link in a text file or directly into the terminal.",
    img: "/YTOffline.png",
    iconLists: ["/python.svg", "/datastream.svg"],
    link: "www.github.com/aokhader/YouTubeOffLine",
  },
  {
    id: 5,
    title: "Huffman Coding Encryption",
    des: "Encrypt and compress your files using the Huffman Coding algorithm, and do it using 25% less space for smaller files.",
    img: "/Huffman.png",
    iconLists: ["/cpp.svg", "/binary.svg"],
    link: "www.github.com/aokhader/HuffmanCoding",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Product Manager Accelerator",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Ocelot",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Break Through Tech AI at UCLA",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "University of California - San Diego",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    desc: "Developing a AI chess coach that analyzes a player's games and discover reoccuring mistakes.",
    className: "md:col-span-2",
    thumbnail: "/PMA_2.png",
  },
  {
    id: 2,
    title: "AI Studio Fellow",
    desc: "Creating a chatbot the uses conversational context to cover a range of topics for students.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ocelot.png",
  },
  {
    id: 3,
    title: "AI Fellow",
    desc: "Implemented machine and deep learning models, such as CNNs and ensemble modeling.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/bttai.svg",
  },
  {
    id: 4,
    title: "Instructional Assistant",
    desc: "Assisted in the instruction and assessment of 800+ students in advanced topics using C.",
    className: "md:col-span-2",
    thumbnail: "/UCSD_Seal.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];