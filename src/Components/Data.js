import { FaPlus } from "react-icons/fa";
const mkt = require("../Assets/srvc-icon3.png")
const sm  =require("../Assets/21.jpg")
const sm1 = require("../Assets/22.jpg")
const mobileApp = require("../img/Instagram-ios.png")
const vid = require("../img/vid.png")
const graph = require("../img/graphics.jpg")
// const seo = ("../img/seo.png")
const pxl = require("../img/pixeltrack.png")
const afl = require("../Assets/srvc-icon2.png")
const bsw = require("../Assets/srvc-icon1.png")
const card = require("../Assets/srvc-icon1.png")
const card1 = require("../Assets/srvc-icon2.png")
const card2 = require("../Assets/srvc-icon3.png")
const card3 = require("../Assets/srvc-icon4.png")

export const Data = [
    {
        name: "Social Media Marketing",
        amount:" $250 USD/Monthly",
        price: 250,
        icon: <FaPlus  size={20}/>,
        item1: "Facebook",
        item2: "Instagram",
        item3: "Youtube  (On Request)",
        item4: "TikTok  (On Request)",
        item5: "Twitter  (On Request)",
        image : sm,
        id: 12,
    },
     {
        name: "Mobile App",
        amount: "$1000 - 10,000 USD",
        price: 1000,
        icon: <FaPlus  size={20}/>,
        item1: "Pending On Requirements",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        image : mobileApp,
        id: 8,
    },
    {
        name: "SEO",
        amount: "$200 USD/Monthly",
        price: 200,
        icon: <FaPlus  size={20}/>,
        item1: " Advanced Targeted SEO",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        image : sm1,
        id: 10,
    },
    {
        name: "Basic Website",
        amount: "$450 USD",
        price: 450,
        icon: <FaPlus  size={20}/>,
        item1: "Than 4 - 5 Pages",
        item2: "Standard Design",
        item3: "Professional Content",
        item4: "",
        item5: "",
        image : bsw,
        id: 1,
    },
    {
        name: "E Commerce (Basic)",
        amount: "$700 - 1000 USD",
        price: 700,
        icon: <FaPlus  size={20}/>,
        item1: "Than 4 - 5 Pages",
        item2: "Standard Design",
        item3: "Professional Content",
        item4: "Customized E Commerce System",
        item5: "Basic Admin Dashboard",
        image : mkt,
        id: 2,
    },
    {
        name: "E Commerce (Advance)",
        amount:"$1500 - 1800 USD",
        price: 1500,
        icon: <FaPlus  size={20}/>,
        item1: "More Than 4 - 5 Pages",
        item2: "Standard Design",
        item3: "Professional Content",
        item4: "Customized E Commerce System",
        item5: "Advanced Admin Dashboard",
        image : mkt,
        id:3,
    },
    {
        name: "Affiliate Website",
        amount: "$600 USD",
        price: 600,
        icon: <FaPlus  size={20}/>,
        item1: "More Than 4 - 5 Pages",
        item2: "Standard Design",
        item3: "Professional Content",
        item4: "",
        item5: "",
        image : afl,
        id: 4,
    },
    {
        name: "Graphic Design",
        amount: "$100 USD",
        price: 100,
        icon: <FaPlus  size={20}/>,
        item1: "5 Static Banners",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        image : graph,
        id:5,
    },
    {
        name: "Video Editing",
        amount:" $100 USD",
        price: 100,
        icon: <FaPlus  size={20}/>,
        item1: "1 - 1.5 Mins",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        image : vid,
        id: 6,
    },
    {
        name: "Lead Generation",
        amount: "$100 USD",
        price: 100,
        icon: <FaPlus  size={20}/>,
        item1: "50 legit lead",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        image : mkt,
        id: 7,
    },
   
    {
        name: "Logo Packages/Logo Redo",
        amount:"$100 USD",
        price: 100,
        icon: <FaPlus  size={20}/>,
        item1: "1 Logo",
        item2: "3 Revisions",
        item3: "3 Business Cards",
        item4: "",
        item5: "",
        image : mkt,
        id: 9,
    },
    {
        name: "Pixel/Analytic Code Integration",
        amount: "$100 USD",
        price: 100,
        icon: <FaPlus  size={20}/>,
        item1: "Standard Analytic Dashboard",
        item2: "Deep Analytic Insight",
        item3: "",
        item4: "",
        item5: "",
        image : pxl,
        id: 11,
        
    },
    
]
// 

export const Service = [
    {
        Image: card,

        id:1,
        title: "Website Design",

        content: "Web Design & Development: A visually appealing and user-friendly website is crucial for capturing and retaining online visitors. Our web design and development services encompass creating aesthetically pleasing designs, intuitive navigation, and mobile responsiveness. We focus on optimizing user experiences, improving page load speeds, and implementing effective call-to-action elements to drive conversions."
    },

    {
        Image: card1,
        id:2,

        title: "Mobile App",

        content: "App Development: In the mobile-driven world, having a well-designed and functional mobile app can enhance your business's reach and customer experience. Our app development team specializes in creating intuitive and feature-rich mobile applications for both iOS and Android platforms. We ensure seamless user experiences, intuitive interfaces, and robust functionality, tailored to meet your specific business needs."
    },

    {
        Image: card2,
        id:3,

        title: "Digital Marketing",

        content: "Digital Marketing: Our digital marketing services encompass a comprehensive range of strategies and techniques to promote your business online. We utilize various channels, including search engines, social media, email marketing, content marketing, and more, to reach and engage your target audience. Our goal is to drive website traffic, generate leads, and increase conversions for your business."
    },

    {
        Image: card,
        id:4,

        title: "SEO and SMO",

        content: "SEO & SMO (Search Engine Optimization & Social Media Optimization): SEO (Search Engine Optimization) focuses on improving your website's visibility and organic search rankings on search engines. We employ strategies such as keyword research, on-page optimization, link building, and technical enhancements to boost your website's visibility and attract more targeted organic traffic. SMO (Social Media Optimization) involves optimizing your social media profiles and content to increase brand awareness, engagement, and visibility on social platforms."
    },
]

export const save = [
    
    {
        Image: card,

        id:5,
        title: "Graphic Design",

        content: "Graphic Design: Good design plays a vital role in brand identity and recognition. Our graphic design services cover logo design, branding elements, marketing collateral, social media graphics, and more. We create visually stunning and cohesive designs that reflect your brand's personality, values, and goals, helping you stand out in a crowded digital landscape."
    },

    {
        Image: card1,
        id:6,

        title: "Video Editing",

        content: "Content Creation & Marketing: Compelling content is essential for attracting and engaging your audience. Our content creation and marketing services involve creating high-quality, relevant, and valuable content in various formats, such as blog posts, articles, videos, infographics, and more. We develop a content strategy tailored to your audience and business objectives, aiming to establish thought leadership, increase brand visibility, and drive user engagement."
    },

    {
        Image: card2,
        id:7,

        title: "Lead Generation",

        content: "Pay-Per-Click Ads (PPC): Pay-Per-Click advertising is an effective way to drive targeted traffic to your website. We create and manage PPC campaigns on platforms like Google Ads and social media advertising networks. By carefully selecting keywords, creating compelling ad copy, and optimizing landing pages, we help you maximize your return on investment and achieve your advertising goals."
    },

    {
        Image: card3,
        id:8,

        title: "Logo Design",

        content: "Email Campaigns & Marketing: Email marketing remains a powerful tool for nurturing customer relationships and driving conversions. We design and execute effective email marketing campaigns, including targeted email newsletters, promotional offers, drip campaigns, and customer retention strategies. We focus on crafting personalized, engaging content and optimizing email deliverability to ensure your messages reach the right audience at the right time."
    },
]