const Users=[
    {
        id:1,
        username: 'admin',
        password: '123456',
        name: 'Nguyen Van Duc'
    },
    {
        id:2,
        username: 'admin2',
        password: '123456',
        name: 'Nguyen Van Duc'
    },
    {
        id:3,
        username: 'admin3',
        password: '123456',
        name: 'Nguyen Van Duc'
    },
]
const PolularSkills=[
  {
    IDSkill: 1,
    SkillName: 'Angular'
  },
  {
    IDSkill: 2,
    SkillName: 'JavaScript'
  },
  {
    IDSkill: 3,
    SkillName: 'C#'
  },
  {
    IDSkill: 4,
    SkillName: 'Java'
  },
  {
    IDSkill: 5,
    SkillName: 'Data Analysis'
  },
  {
    IDSkill: 6,
    SkillName: 'ASP.NET'
  },
  {
    IDSkill: 7,
    SkillName: 'Node.js'
  },
  {
    IDSkill: 8,
    SkillName: 'Design Patterns'
  },
  {
    IDSkill: 9,
    SkillName: 'Python'
  },
  {
    IDSkill: 10,
    SkillName: 'React'
  },
  {
    IDSkill: 11,
    SkillName: '.NET'
  },
  {
    IDSkill: 12,
    SkillName: 'SQL Server'
  },
  {
    IDSkill: 13,
    SkillName: 'Data Administration'
  },
  {
    IDSkill: 14,
    SkillName: 'Part Modeling'
  },
  {
    IDSkill: 15,
    SkillName: 'Infomation Security'
  },
  {
    IDSkill: 16,
    SkillName: 'Android'
  },
  {
    IDSkill: 17,
    SkillName: 'Machine Learning'
  },
  {
    IDSkill: 18,
    SkillName: 'Type Script'
  },
  {
    IDSkill: 19,
    SkillName: 'ASP.NET Core'
  },
  
];

const Authors = [
  {
    IDAuthor: 1,
    AuthorName: "Deborah Kurata"
  },
  {
    IDAuthor: 2,
    AuthorName: "Scott Allen"
  },
  {
    IDAuthor: 3,
    AuthorName: "Joe Eames"
  },
  {
    IDAuthor: 4,
    AuthorName: "Jim Cooper"
  },
  {
    IDAuthor: 5,
    AuthorName: "Jim Wilson"
  },
  {
    IDAuthor: 6,
    AuthorName: "Samer Buna"
  },
  {
    IDAuthor: 7,
    AuthorName: "Mark Zamoyta"
  },
  {
    IDAuthor: 8,
    AuthorName: "Simon Allardice"
  },
  {
    IDAuthor: 9,
    AuthorName: "Ross Bagurdes"
  },
  {
    IDAuthor: 10,
    AuthorName: "Cory House"
  },
  {
    IDAuthor: 11,
    AuthorName: "Shawn Widermuth"
  },
  {
    IDAuthor: 12,
    AuthorName: "Austin Bingham"
  },
  {
    IDAuthor: 13,
    AuthorName: "Robert Smallshire"
  },
  {
    IDAuthor: 14,
    AuthorName: "Google Cloud"
  },
  {
    IDAuthor: 15,
    AuthorName: "Jon Flanders"
  },
  {
    IDAuthor: 16,
    AuthorName: "Nigel Poulton"
  },
  {
    IDAuthor: 17,
    AuthorName: "Jason Olson"
  },
];

const Courses = [
    {
        "idcourse": 1,
        "coursename": "Angular: Getting Started",
        "author": "Deborah Kurata",
        "level": "Beginner",
        "released": "4",
        "duration": "5h 53m",
        "star": 5,
        "numberofstar": 3963,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease2.jpg")'
    },
    {
        "idcourse": 2,
        "coursename": "Defensive Coding in C#",
        "author": "Deborah Kurata",
        "level": "Beginner",
        "released": "4",
        "duration": "2h 14m",
        "star": 4,
        "numberofstar": 48,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease3.jpg")'
    },
    {
        "idcourse": 3,
        "coursename": "Angular Reactive Forms",
        "author": "Deborah Kurata",
        "level": "Intermediate",
        "released": "4",
        "duration": "3h 52m",
        "star": 3,
        "numberofstar": 599,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease4.jpg")'
    },
    {
        "idcourse": 4,
        "coursename": "Angular Routing ",
        "author": "Deborah Kurata",
        "level": "Intermediate",
        "released": "5",
        "duration": "4h 49m",
        "star": 4,
        "numberofstar": 501,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease5.jpg")'
    },
    {
        "idcourse": 5,
        "coursename": "RxJS in Angular: reactive Development",
        "author": "Deborah Kurata",
        "level": "Beginner",
        "released": "3",
        "duration": "3h 48m",
        "star": 4,
        "numberofstar": 186,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease6.jpg")'
    },
    {
        "idcourse": 6,
        "coursename": "Object-Oriented Programming Fundamentals",
        "author": "Deborah Kurata",
        "level": "Beginner",
        "released": "2",
        "duration": "3h 26m",
        "star": 3,
        "numberofstar": 2890,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease2.jpg")'
    },
    {
        "idcourse": 7,
        "coursename": "Angular NgRx: Getting Started",
        "author": "Deborah Kurata",
        "level": "Beginner",
        "released": "1",
        "duration": "4h 4m",
        "star": 5,
        "numberofstar": 314,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease3.jpg")'
    },
    {
        "idcourse": 8,
        "coursename": "Angular Component Communication",
        "author": "Deborah Kurata",
        "level": "Inter",
        "released": "2.5",
        "duration": "3h 39m",
        "star": 5,
        "numberofstar": 1043,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease4.jpg")'
    },
    {
        "idcourse": 9,
        "coursename": "C# Best Practices: Collections and Generics",
        "author": "Deborah Kurata",
        "level": "Intermediate",
        "released": "4",
        "duration": "3h 35m",
        "star": 4,
        "numberofstar": 644,
        "idauthor": 1,
        "img": 'require("../../assets/img/newrelease5.jpg")'
    },
    {
        "idcourse": 10,
        "coursename": "Angular: Getting Started",
        "author": "Scott Allen",
        "level": "Beginner",
        "released": "4.5",
        "duration": "5h 53m",
        "star": 5,
        "numberofstar": 3963,
        "idauthor": 2,
        "img": 'require("../../assets/img/newrelease6.jpg")'
    },
    {
        "idcourse": 11,
        "coursename": "Defensive Coding in C#",
        "author": "Scott Allen",
        "level": "Beginner",
        "released": "3",
        "duration": "2h 14m",
        "star": 4,
        "numberofstar": 48,
        "idauthor": 2,
        "img": 'require("../../assets/img/newrelease3.jpg")'
    },
    {
        "idcourse": 12,
        "coursename": "Angular Reactive Forms",
        "author": "Scott Allen",
        "level": "Intermediate",
        "released": "3.5",
        "duration": "3h 52m",
        "star": 4,
        "numberofstar": 599,
        "idauthor": 2,
        "img": 'require("../../assets/img/newrelease4.jpg")'
    },
    {
        "idcourse": 13,
        "coursename": "Angular Routing ",
        "author": "Scott Allen",
        "level": "Intermediate",
        "released": "4.2",
        "duration": "4h 49m",
        "star": 4,
        "numberofstar": 501,
        "idauthor": 2,
        "img": 'require("../../assets/img/newrelease5.jpg")'
    },
    {
        "idcourse": 14,
        "coursename": "RxJS in Angular: reactive Development",
        "author": "Joe Eames",
        "level": "Beginner",
        "released": "4.2",
        "duration": "3h 48m",
        "star": 4,
        "numberofstar": 186,
        "idauthor": 3,
        "img": 'require("../../assets/img/newrelease6.jpg")'
    },
    {
        "idcourse": 15,
        "coursename": "Object-Oriented Programming Fundamentals",
        "author": "Joe Eames",
        "level": "Beginner",
        "released": "4.9",
        "duration": "3h 26m",
        "star": 4,
        "numberofstar": 2890,
        "idauthor": 3,
        "img": 'require("../../assets/img/newrelease4.jpg")'
    },
    {
        "idcourse": 16,
        "coursename": "Angular NgRx: Getting Started",
        "author": "Joe Eames",
        "level": "Beginner",
        "released": "4.1",
        "duration": "4h 4m",
        "star": 4,
        "numberofstar": 314,
        "idauthor": 3,
        "img": 'require("../../assets/img/newrelease5.jpg")'
    },
    {
        "idcourse": 17,
        "coursename": "Angular Component Communication",
        "author": "Joe Eames",
        "level": "Inter",
        "released": "4",
        "duration": "3h 39m",
        "star": 5,
        "numberofstar": 1043,
        "idauthor": 3,
        "img": 'require("../../assets/img/newrelease6.jpg")'
    },
    {
        "idcourse": 18,
        "coursename": "C# Best Practices: Collections and Generics",
        "author": "Joe Eames",
        "level": "Intermediate",
        "released": "2.5",
        "duration": "3h 35m",
        "star": 4,
        "numberofstar": 644,
        "idauthor": 3,
        "img": 'require("../../assets/img/newrelease2.jpg")'
    }
]

const Path = [
  {
      "idpath": 1,
      "pathname": "Angular Denver 2019",
      "pathnum": 44,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 2,
      "pathname": "Big Data LDN 2019",
      "pathnum": 101,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 3,
      "pathname": "BSides Huntsville 2020",
      "pathnum": 8,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 4,
      "pathname": "BSides Huntsville 2019",
      "pathnum": 16,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 5,
      "pathname": "CodeMash Conference",
      "pathnum": 94,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 6,
      "pathname": "COVID-19: The State & Future of Pandemics",
      "pathnum": 21,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 7,
      "pathname": "Devintersection 2019",
      "pathnum": 20,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 8,
      "pathname": "Droidcon Botston 2019",
      "pathnum": 32,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 9,
      "pathname": "Droidcon SF 2019",
      "pathnum": 70,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 10,
      "pathname": "Font UX $ Product Management Case Study",
      "pathnum": 13,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 1,
      "idskill": 99
  },
  {
      "idpath": 11,
      "pathname": "Understading Cisco DevNet Software Development",
      "pathnum": 3,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 12,
      "pathname": "Planning, Tracking and Releasing Software with Jara",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 13,
      "pathname": "AWS Application Development",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 14,
      "pathname": "C# Development Dundamentals",
      "pathnum": 14,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 15,
      "pathname": "CSSLP (Certified Secure Software Lifecycle Professional",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 16,
      "pathname": "Java Development Environments",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 17,
      "pathname": "Unity Augmented Reality Development",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 18,
      "pathname": "IOS App Development",
      "pathnum": 12,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 19,
      "pathname": "Unity Virtual Reality Development",
      "pathnum": 8,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 20,
      "pathname": "Application Development on Microsoft Azure",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 2,
      "idskill": 99
  },
  {
      "idpath": 21,
      "pathname": "Fundamentals Of IT Operations",
      "pathnum": 20,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 22,
      "pathname": "AWS Operations",
      "pathnum": 7,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 23,
      "pathname": "Managing Security Operrations in Microsoft Azure",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 24,
      "pathname": "Microsoft Azure Stack Planning and Operations",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 25,
      "pathname": "Microsoft Ignite 2019: Managing clould Operations",
      "pathnum": 2,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 26,
      "pathname": "Monitoring Microsoft Resources with System Center",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 27,
      "pathname": "Microsoft Ignite 2019: Managing clould Operations",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 3,
      "idskill": 99
  },
  {
      "idpath": 28,
      "pathname": "CCSP (Certified Cloud Security Professional)",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 29,
      "pathname": "CISSP (Certified Infomation Systems Security Professional)",
      "pathnum": 18,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 30,
      "pathname": "Introduction to Professional Scrum",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 31,
      "pathname": "Project Management",
      "pathnum": 14,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 32,
      "pathname": "Program Management",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 33,
      "pathname": "Security Management",
      "pathnum": 16,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 34,
      "pathname": "Security Fundamentals",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 35,
      "pathname": "AWS Certified Devops Engineer",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 36,
      "pathname": "Certified Business Analysis Professional ",
      "pathnum": 16,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 37,
      "pathname": "ICAgile Certified Professional",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 4,
      "idskill": 99
  },
  {
      "idpath": 38,
      "pathname": "JavaScript Core Language",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 2
  },
  {
      "idpath": 39,
      "pathname": "C# Coding Pratices",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 3
  },
  {
      "idpath": 40,
      "pathname": "Design Patterns in C#",
      "pathnum": 16,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 3
  },
  {
      "idpath": 41,
      "pathname": "C# Development Fundamentals",
      "pathnum": 14,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 3
  },
  {
      "idpath": 42,
      "pathname": "C# Application Pratices",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 3
  },
  {
      "idpath": 43,
      "pathname": "C# Unit Testing with xUnit",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 3
  },
  {
      "idpath": 44,
      "pathname": "JavaLanguage fundamentals",
      "pathnum": 17,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 45,
      "pathname": "Design Patternsin Java",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 46,
      "pathname": "Java Unit Testing",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 47,
      "pathname": "Java EE Foundations",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 48,
      "pathname": "Java coding Practices",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 49,
      "pathname": "Java Development Enviroment",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 4
  },
  {
      "idpath": 50,
      "pathname": "Exploratory Data Analysis",
      "pathnum": 2,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 51,
      "pathname": "Micro Excel Data",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 52,
      "pathname": "Malware Analysis",
      "pathnum": 13,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 53,
      "pathname": "Agile Analysis",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 54,
      "pathname": "Entry Certificate ",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 55,
      "pathname": "Certified Business Analysis Professional ",
      "pathnum": 16,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 56,
      "pathname": "Certified Business Analysis Professional ",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 5
  },
  {
      "idpath": 57,
      "pathname": "Securing ASP.NET and ASP.NET Core Applications",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 6
  },
  {
      "idpath": 58,
      "pathname": "ASP.NET Core",
      "pathnum": 13,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 6
  },
  {
      "idpath": 59,
      "pathname": "API Development in ASP.NET Core",
      "pathnum": 7,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 6
  },
  {
      "idpath": 60,
      "pathname": "ASP.NET MVC 5",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 6
  },
  {
      "idpath": 61,
      "pathname": "Node.js",
      "pathnum": 11,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "img": require("../../assets/img/newrelease4.jpg"),
      "idskill": 7
  },
  {
      "idpath": 62,
      "pathname": "Working with Node.js",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 7
  },
  {
      "idpath": 63,
      "pathname": "Node.js developer on Microsoft Azure",
      "pathnum": 3,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 7
  },
  {
      "idpath": 64,
      "pathname": "Design Patterns C++",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 8
  },
  {
      "idpath": 65,
      "pathname": "Graphic Design",
      "pathnum": 21,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 8
  },
  {
      "idpath": 66,
      "pathname": "Domain-Driven Design",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 8
  },
  {
      "idpath": 67,
      "pathname": "Unity Game Dev: Design",
      "pathnum": 10,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 8
  },
  {
      "idpath": 68,
      "pathname": "Python",
      "pathnum": 8,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 9
  },
  {
      "idpath": 69,
      "pathname": "Core Python",
      "pathnum": 8,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 9
  },
  {
      "idpath": 70,
      "pathname": "Interpreting Data with Python",
      "pathnum": 10,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 9
  },
  {
      "idpath": 71,
      "pathname": "Python for Data Anlysts",
      "pathnum": 3,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 9
  },
  {
      "idpath": 72,
      "pathname": "React",
      "pathnum": 12,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 10
  },
  {
      "idpath": 73,
      "pathname": ".NET Developer on MA",
      "pathnum": 3,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 11
  },
  {
      "idpath": 74,
      "pathname": ".NET Base Class Library",
      "pathnum": 6,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 11
  },
  {
      "idpath": 75,
      "pathname": "Developing SQL Server DB",
      "pathnum": 10,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 12
  },
  {
      "idpath": 76,
      "pathname": "Queying Data with T-SQL from SQL Server",
      "pathnum": 7,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 12
  },
  {
      "idpath": 77,
      "pathname": "Queying Data with SQL in Maria DB",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 12
  },
  {
      "idpath": 78,
      "pathname": "Kubernetes Administration",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 13
  },
  {
      "idpath": 79,
      "pathname": "G Suite Administration",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 13
  },
  {
      "idpath": 80,
      "pathname": "Beginning Salesforce Administration",
      "pathnum": 10,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 13
  },
  {
      "idpath": 81,
      "pathname": "Group Policy Administration",
      "pathnum": 4,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 13
  },
  {
      "idpath": 82,
      "pathname": "Maya: Modeling",
      "pathnum": 10,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 14
  },
  {
      "idpath": 83,
      "pathname": "Game Enviroment Modeling",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 14
  },
  {
      "idpath": 84,
      "pathname": "Maya: Enviroment Modeling",
      "pathnum": 13,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 14
  },
  {
      "idpath": 85,
      "pathname": "Maya: Character Modeling",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 14
  },
  {
      "idpath": 86,
      "pathname": "Survey of information Security",
      "pathnum": 12,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 15
  },
  {
      "idpath": 87,
      "pathname": "Information Security Testing",
      "pathnum": 3,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 15
  },
  {
      "idpath": 88,
      "pathname": "Typescript Core Language",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 17
  },
  {
      "idpath": 89,
      "pathname": "Maching Learning Literacy",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 18
  },
  {
      "idpath": 90,
      "pathname": "AWS Machine Learning/AI",
      "pathnum": 9,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 18
  },
  {
      "idpath": 91,
      "pathname": "Android Development with Kotlin",
      "pathnum": 5,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 19
  },
  {
      "idpath": 92,
      "pathname": "Google: Associate Android Developer",
      "pathnum": 7,
      "pathimage": "null",
      "pathdescription": "PathDescription",
      "idcategory": 99,
      "idskill": 19
  }
]; 
export { PolularSkills, Authors, Courses, Path, Users };
