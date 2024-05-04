document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { 
            title: "Programming and Problem Solving (PoP) - 2022", 
            description: "The introductory course to programming at UCPH primarily focuses on F# with a bit of Python towards the end of the course. As of 2022, the main lecturer, Jon Sporring, uses his own course notes as material for the course, and the lectures are adequate. The course is fairly easy for experienced programmers but challenging for beginners. Graded as pass/fail.", 
            grade: "Pass",
            link: "https://kurser.ku.dk/course/ndab15009u/"
        },
        { 
            title: "Discrete Mathematics and Algorithms (DMA) - 2022", 
            description: "An introductory course to discrete mathematics, algoritms and data structures. Covers elementary logic and set theory, asymptotic analysis and basic data structures and sorting algorithms. Taught by Mikkel Abrahamsen, who in my opinion is a great lecturer. The course if of adequate difficulty - Graded as pass/fail.", 
            grade: "Pass",
            link: "https://kurser.ku.dk/course/ndab15008u/" 
        },
        { 
            title: "Software Development (SU) - 2023", 
            description: "An introductory course to software design and software development in C#. I was personally not the biggest fan of this course. The lectures were not the greatest, and a lot of the material can easily be self-taught / learned during employment. The practical component of this course consisted mainly of game development.", 
            grade: "10",
            link: "https://kurser.ku.dk/course/ndab15011u/" 
        },
        { 
            title: "Interaction Design (Inter) - 2023/2024", 
            description: "Attended in 2023 and taught as TA in 2024. Introductory course to human-computer interaction and interaction design. The lecturer, Kasper Hornbæk, mainly uses his own notes/course book. The course is mainly theoretical and covers several concepts in HCI e.g. user-centered design and system evaluation. It is not very hard to pass the course, but to get a high grade requires good grasp of concepts reviewed in this course.", 
            grade: "12",
            link: "https://kurser.ku.dk/course/ndab15003u/" 
        },
        { 
            title: "Linear Algebra in Computer Science (LinAlgDat) - 2023", 
            description: "Probably my favorite course in the Bachelors. Covers Gaussian elimination, matrix operations, bases for vector spaces, orthogonality, determinant, eigenvalues, complex numbers, and diagonalization. Includes some practical implementation in python. The course is well structured and taught very well (perhaps not very surprising as it is offered by the institut of mathematics). Difficulty is adequate.", 
            grade: "12",
            link: "https://kurser.ku.dk/course/nmab15002u/" 
        },
        { 
            title: "Computer Systems (CompSys) - 2023", 
            description: "Covers servaral concepts in machine architecture, operating systems, and computer networks. Practical component of this course is done in C. I quite enjoyed this course, but beware that this course covers quite a lot of topics - this aspect made the exam pretty difficult. I recommend not falling behind in the course schedule.", 
            grade: "",
            link: "https://kurser.ku.dk/course/ndab16005u" 
        },
        { 
            title: "Introduction to the Mathematical Sciences (MatIntroMat) - 2023", 
            description: "Essentially a calculus course. Covers complex numbers, limits, functions, derivatives, integrals, and more. Course is taught by the institute of mathematics and quite well structued. The course is not very difficult, and in my opinion of the easier courses in the Bachelors (perhaps even the easiest).", 
            grade: "12",
            link: "https://kurser.ku.dk/coursepreview/83281/da-DK" 
        },
        { 
            title: "Probability Theory and Statistics (SS) - 2023", 
            description: "This course covers stochastic variables, discrete and continuous distributions, mean and variance, estimation, hypothesis testing, linear regression, an introduction to the statistical software system R, and more. One of the harder courses in the Bachelors. I recommend not falling behind in this course.", 
            grade: "",
            link: "https://kurser.ku.dk/course/nmaa09014u/2023-2024" 
        },
        { 
            title: "Fundamentals of Data Science (GDS) - 2024", 
            description: "Gives an overview of the steps in a data science pipeline, covering data collection, processing, and cleaning, to the implementation of statistical machine learning models and data exploration. The exam in this course is a group project on fake news detection. The course is quite is not very hard.", 
            grade: "12",
            link: "https://kurser.ku.dk/course/ndab23000u/2023-2024" 
        },
        { 
            title: "Algorithms and Data Structures (AD) - 2024", 
            description: "Standard Algorithm and Data Structures course. It builds on DMA, and covers various algorithmic paradigms. I can't speak about the teaching quality (I was a TA in anothe course), but the exam was quite challenging. ", 
            grade: "",
            link: "https://kurser.ku.dk/course/ndaa04010u/" 
        },
        { 
            title: "Databases and Information Systems (DIS) - 2024", 
            description: "Currently undertaking.", 
            grade: "",
            link: "https://kurser.ku.dk/course/NDAB21010U" 
        },
        { 
            title: "Randomised Algorithms for Data Analysis (RAD) - 2024", 
            description: "Currently undertaking.", 
            grade: "",
            link: "https://kurser.ku.dk/course/ndab18001u" 
        }
    ];

    const container = document.getElementById('courses-container');

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'bg-white shadow-md rounded-lg p-4';
        courseElement.innerHTML = `
            <h2 class="text-xl font-semibold">${course.title}</h2>
            <p>${course.description}</p>
            <p class="mt-2">Grade: ${course.grade}</p>
            <a href="${course.link}" class="text-blue-500 hover:text-blue-700">Course Description</a>
        `;
        container.appendChild(courseElement);
    });
});
