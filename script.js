document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { 
            title: "Programming and Problem Solving (PoP) - 2022", 
            description: "The introductory course to programming at UCPH primarily focuses on F# with a bit of Python towards the end of the course. As of 2022, the main lecturer, Jon Sporring, uses his own course notes as material for the course, and the lectures are adequate. The course is fairly easy for experienced programmers but challenging for beginners. Graded as pass/fail.", 
            grade: "Pass",
            link: "https://kurser.ku.dk/course/ndab15009u/"
        },
        { 
            title: "Course Title 2", 
            description: "Description for Course 2", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 3", 
            description: "Description for Course 3", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 4", 
            description: "Description for Course 4", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 5", 
            description: "Description for Course 5", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 6", 
            description: "Description for Course 6", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 7", 
            description: "Description for Course 7", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 8", 
            description: "Description for Course 8", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 9", 
            description: "Description for Course 9", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 10", 
            description: "Description for Course 10", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 11", 
            description: "Description for Course 11", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 12", 
            description: "Description for Course 12", 
            grade: "",
            link: "#" 
        },
        { 
            title: "Course Title 13", 
            description: "Description for Course 13", 
            grade: "",
            link: "#" 
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
            <a href="${course.link}" class="text-blue-500 hover:text-blue-700">Learn more</a>
        `;
        container.appendChild(courseElement);
    });
});
