// Define team members for each group with Indian names
const teams = {
    development: [
        { name: "Aarav", age: 28, experience: "5 years in Full-Stack Development" },
        { name: "Bhavya", age: 35, experience: "10 years in Backend Development" },
        { name: "Chirag", age: 30, experience: "7 years in Frontend Development" }
    ],
    marketing: [
        { name: "Devika", age: 32, experience: "6 years in Digital Marketing" },
        { name: "Esha", age: 29, experience: "5 years in SEO and Content Marketing" },
        { name: "Farhan", age: 40, experience: "12 years in Brand Strategy" }
    ],
    design: [
        { name: "Garima", age: 26, experience: "4 years in UX/UI Design" },
        { name: "Harsh", age: 33, experience: "8 years in Graphic Design" },
        { name: "Ishita", age: 31, experience: "6 years in Product Design" }
    ],
    sales: [
        { name: "Jatin", age: 37, experience: "15 years in B2B Sales" },
        { name: "Kavita", age: 29, experience: "6 years in Customer Success" },
        { name: "Lakshya", age: 34, experience: "10 years in Sales Strategy" }
    ]
};

// Function to display team members based on selected team
function showTeam(team) {
    const teamMembersDiv = document.getElementById("team-members");
    teamMembersDiv.innerHTML = ""; // Clear previous content

    const teamData = teams[team];
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
