// Define team members for each group within each team
const teams = {
    development: {
        group1: [
            { name: "Aarav", age: 28, experience: "5 years in Full-Stack Development" },
            { name: "Bhavya", age: 35, experience: "10 years in Backend Development" },
            { name: "Chirag", age: 30, experience: "7 years in Frontend Development" }
        ],
        group2: [
            { name: "Disha", age: 27, experience: "4 years in DevOps" },
            { name: "Eklavya", age: 29, experience: "6 years in Cloud Engineering" },
            { name: "Farhan", age: 32, experience: "8 years in Data Science" }
        ],
        group3: [
            { name: "Gaurav", age: 33, experience: "10 years in Machine Learning" },
            { name: "Harsh", age: 31, experience: "7 years in Security Engineering" },
            { name: "Isha", age: 28, experience: "5 years in AI Development" }
        ],
        group4: [
            { name: "Jay", age: 29, experience: "6 years in Mobile Development" },
            { name: "Kiran", age: 32, experience: "8 years in Game Development" },
            { name: "Leela", age: 27, experience: "4 years in Blockchain Development" }
        ]
    },
    marketing: {
        group1: [
            { name: "Meena", age: 29, experience: "6 years in Digital Marketing" },
            { name: "Nikhil", age: 32, experience: "8 years in Content Strategy" },
            { name: "Om", age: 33, experience: "10 years in Brand Strategy" }
        ],
        group2: [
            { name: "Pooja", age: 31, experience: "7 years in SEO" },
            { name: "Raj", age: 29, experience: "5 years in PPC Marketing" },
            { name: "Simran", age: 28, experience: "4 years in Social Media Marketing" }
        ],
        group3: [
            { name: "Tanvi", age: 30, experience: "6 years in Public Relations" },
            { name: "Utkarsh", age: 31, experience: "9 years in Market Research" },
            { name: "Vani", age: 27, experience: "5 years in Event Marketing" }
        ],
        group4: [
            { name: "Yash", age: 34, experience: "10 years in Influencer Marketing" },
            { name: "Zara", age: 28, experience: "5 years in Affiliate Marketing" },
            { name: "Aman", age: 29, experience: "6 years in Content Creation" }
        ]
    },
    design: {
        group1: [
            { name: "Bhumi", age: 26, experience: "4 years in Graphic Design" },
            { name: "Chetan", age: 32, experience: "8 years in UX/UI Design" },
            { name: "Divya", age: 30, experience: "7 years in Motion Graphics" }
        ],
        group2: [
            { name: "Ekta", age: 28, experience: "5 years in Illustration" },
            { name: "Farhan", age: 33, experience: "9 years in Product Design" },
            { name: "Gauri", age: 31, experience: "6 years in Visual Design" }
        ],
        group3: [
            { name: "Hina", age: 29, experience: "6 years in 3D Design" },
            { name: "Ishaan", age: 30, experience: "7 years in UI Prototyping" },
            { name: "Jiya", age: 27, experience: "5 years in Animation" }
        ],
        group4: [
            { name: "Kavya", age: 31, experience: "8 years in Packaging Design" },
            { name: "Lakshya", age: 29, experience: "5 years in Print Design" },
            { name: "Mihir", age: 30, experience: "7 years in Web Design" }
        ]
    },
    sales: {
        group1: [
            { name: "Naveen", age: 37, experience: "15 years in B2B Sales" },
            { name: "Ojas", age: 29, experience: "6 years in Retail Sales" },
            { name: "Prerna", age: 28, experience: "5 years in Account Management" }
        ],
        group2: [
            { name: "Qasim", age: 30, experience: "7 years in Channel Sales" },
            { name: "Ritika", age: 25, experience: "3 years in Territory Sales" },
            { name: "Sanjay", age: 32, experience: "10 years in Client Relations" }
        ],
        group3: [
            { name: "Tina", age: 29, experience: "5 years in Sales Strategy" },
            { name: "Uday", age: 31, experience: "8 years in Customer Success" },
            { name: "Vidya", age: 27, experience: "4 years in Lead Generation" }
        ],
        group4: [
            { name: "Wasim", age: 34, experience: "12 years in Field Sales" },
            { name: "Yamini", age: 29, experience: "5 years in Inside Sales" },
            { name: "Zubin", age: 30, experience: "7 years in Product Sales" }
        ]
    }
};

// Function to show group buttons based on selected team
function showGroups(team) {
    const groupButtonsDiv = document.getElementById("group-buttons");
    groupButtonsDiv.innerHTML = ""; // Clear previous buttons

    const teamData = teams[team];
    if (teamData) {
        Object.keys(teamData).forEach(group => {
            const button = document.createElement("button");
            button.innerText = `Group ${group.slice(-1)}`;
            button.onclick = () => showTeamMembers(team, group);
            groupButtonsDiv.appendChild(button);
        });
    }
}

// Function to display team members based on selected team and group
function showTeamMembers(team, group) {
    const teamMembersDiv = document.getElementById("team-members");
    teamMembersDiv.innerHTML = ""; // Clear previous content

    const teamData = teams[team][group];
    if (teamData) {
        teamData.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.className = "team-card";
            memberDiv.innerHTML = `
                <h3>${member.name}</h3>
                <p>Age: ${member.age}</p>
                <p>Experience: ${member.experience}</p>
            `;
            teamMembersDiv.appendChild(memberDiv);
        });
    }
}
