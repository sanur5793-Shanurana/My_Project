const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 2, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Update client database",
        "taskDescription": "Add recent client data into the CRM system.",
        "taskDate": "2025-10-05",
        "category": "Data Entry",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare sales report",
        "taskDescription": "Create monthly sales summary for management.",
        "taskDate": "2025-10-09",
        "category": "Reporting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client meeting follow-up",
        "taskDescription": "Send follow-up emails after client meeting.",
        "taskDate": "2025-10-07",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "taskTitle": "Design landing page",
        "taskDescription": "Create layout for the new product launch page.",
        "taskDate": "2025-10-06",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Review UI mockups",
        "taskDescription": "Provide feedback on the UI mockups shared by team.",
        "taskDate": "2025-10-08",
        "category": "Review",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting preparation",
        "taskDescription": "Prepare slides for weekly progress meeting.",
        "taskDate": "2025-10-09",
        "category": "Planning",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Bug fixing",
        "taskDescription": "Resolve frontend alignment issues reported by QA.",
        "taskDate": "2025-10-10",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "API integration",
        "taskDescription": "Connect frontend with backend APIs.",
        "taskDate": "2025-10-04",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for faster response time.",
        "taskDate": "2025-10-07",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code review",
        "taskDescription": "Review pull requests from junior developers.",
        "taskDate": "2025-10-09",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Social media update",
        "taskDescription": "Post weekly company update on LinkedIn and Twitter.",
        "taskDate": "2025-10-05",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Email campaign",
        "taskDescription": "Send promotional emails to target audience.",
        "taskDate": "2025-10-06",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Analyze campaign performance",
        "taskDescription": "Prepare report of campaign engagement metrics.",
        "taskDate": "2025-10-08",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Shanu-Rana",
    "email": "sanur5793@gmail.com",
    "password": "ronaldo67",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Develop new feature",
        "taskDescription": "develop new features in this application.",
        "taskDate": "2025-11-05",
        "category": "Developing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Email campaign",
        "taskDescription": "Send promotional emails to target audience.",
        "taskDate": "2025-10-06",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Analyze campaign performance",
        "taskDescription": "Prepare report of campaign engagement metrics.",
        "taskDate": "2025-10-08",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Customer feedback review",
        "taskDescription": "Analyze latest feedback and categorize issues.",
        "taskDate": "2025-10-07",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare FAQ updates",
        "taskDescription": "Update FAQs based on customer queries.",
        "taskDate": "2025-10-09",
        "category": "Support",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Training session",
        "taskDescription": "Conduct internal training for support staff.",
        "taskDate": "2025-10-10",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}
];
export const setlocalstorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};