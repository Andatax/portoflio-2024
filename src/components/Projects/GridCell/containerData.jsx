const gridData = [
	{
		bgColor: "bg-tulip-tree-400",
		widthProject: "w-44",
		heightProject: "h-24 p-3",
		containerText: "About Me",
		textPropeties: "text-5xl text-cod-gray-100",
		columnProperties: " h-52",
		flexItem: "flex items-end",
		link: "#AboutMeBody",
		idTag: "AboutMeBtn",
		containerId: "AboutMeContainer",
	},
	{ isEmpty: true },
	{ isEmpty: true },
	{ isEmpty: true },
	{
		bgColor: "bg-valencia-500",
		widthProject: "w-full",
		heightProject: "h-auto p-5",
		containerText: "Todone App",
		textPropeties: "text-5xl text-cod-gray-100 ",
		columnProperties: "col-span-2 h-72",
		flexItem: "flex-wrap items-end",
		idTag: "TodoneBtn",
		link: `https://todonevf-6aecf37fb01a.herokuapp.com/`,
		containerId: "TodoneContainer",
		listbody: [
			"Javascript",
			"Node.js",
			"MVC",
			"ORM Sequelize",
			"SQL",
			"Handlebars view engine",
			"Tailwind CSS",
			"Express.js",
			"MySQL",
		],
		listStyles: "text-cod-gray-100 text-md sm:text-sm  opacity-0",
		listId: "TodoneList",
		target: "_blank",
	},
	{ isEmpty: true },
	{ isEmpty: true },
	{ isEmpty: true },
	{
		bgColor: "bg-abbey-700",
		widthProject: "w-2/3",
		heightProject: "h-auto p-5",
		containerText: "MVC Blog",
		textPropeties: "text-7xl text-cod-gray-100 ",
		columnProperties: "col-span-2 row-span-2 h-auto",
		flexItem: "flex-wrap items-end",
		idTag: "MVCBtn",
		link: `https://mvc-blog-tailwind-95c92be2d918.herokuapp.com/login`,
		containerId: "MVCContainer",
		listStyles: "text-cod-gray-100 text-md sm:text-sm opacity-0",
		listbody: [
			"Javascript",
			"Node.js",
			"MVC",
			"ORM Sequelize",
			"SQL",
			"Handlebars view engine",
			"Tailwind CSS",
			"PostCSS",
			"Express.js",
			"Mysql",
			"Cloud Service Heroku",
		],
		listId: "MVCList",
		target: "_blank",
	},

	{
		bgColor: "bg-valencia-300",
		widthProject: "w-2/3",
		heightProject: "h-auto p-5",
		containerText: "Mongo Blog DataBase",
		textPropeties: "lg:text-3xl md:text-xl text-abbey-700 ",
		columnProperties: " h-72 justify-end ",
		flexItem: "flex-wrap items-end",
		idTag: "MongoBtn",
		link: `https://github.com/Andatax/social-network-mdb`,
		listStyles: "text-abbey-700 text-md sm:text-sm opacity-0",
		listbody: ["Javascript", "Node.js", "ORM Mongoose", "MongoDb", "Express.js", "Insomnia"],
		listId: "MongoList",
		target: "_blank",
	},
	{ isEmpty: true },
	{ isEmpty: true },
	{ isEmpty: true },
	{
		widthProject: "w-2/3",
		heightProject: "h-auto p-5",
		columnProperties: "col-span-2 justify-center lg:h-72 sm:h-auto sm:col-span-3",
		textPropeties: "lg:text-lg sm:text-sm text-abbey-700 text-start",
		containerText:
			"I'm a Full-Stack developer with a background in art, design and game development. I excel in crafting mobile-first applications with smooth designs and intuitive usability. I'm passionate about problem-solving and debugging, and I pride myself on delivering exceptional results.",
		flexItem: "lg:flex sm:flex items-start ",
		idTag: "AboutMeBody",
		link: "",
		arefclass: "pointer-events-none",
	},
	{
		bgColor: "bg-tulip-tree-300",
		widthProject: "w-5/12",
		heightProject: "h-full p-5",
		containerText: "Skills",
		textPropeties: "lg:text-3xl md:text-xl text-abbey-700  text-center",
		columnProperties: " h-full justify-start row-span-2",
		flexItem: "flex-wrap items-start",
		arefclass: "pointer-events-none",
		listStyles: "text-abbey-700 text-md sm:text-sm opacity-0",
		listbody: [
			"MERN Stack",
			"Webpack",
			"MongoDB",
			"Redux",
			"Jest",
			"React",
			"Express.js",
			"OOP",
			"Tailwind CSS",
			"Bootstrap",
			"SQL",
			"CSS",
			"HTML5",
			"REST APIs",
			"Vite",
			"JWT",
			"MVC",
			"ORM",
			"Mongoose",
			"Sequelize",
			"Node.js",
			"GSAP",
		],
		idTag: "Skills",
		link: "",
		listId: "SkillsList",
	},
	{ isEmpty: true },
	{ isEmpty: true },
	{ isEmpty: true },

	{
		bgColor: "bg-valencia-600",
		widthProject: "w-2/3",
		heightProject: "h-28 p-5",
		listbody: ["English", "Spanish", "Czech"],
		textPropeties: "lg:text-3xl md:text-xl text-cod-gray-100 ",
		columnProperties: "h-32 justify-start ",
		flexItem: "flex items-end",
		listStyles: "text-cod-gray-100",
		idTag: "Languages",
		link: "",
	},
];

export default gridData;
