import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    {
        title: 'Job Title', icon: IconSearch, options: ['Designer', 'Developer',
            'Product Manager', 'Marketing Specialist', 'Data Analyst',
            'Sales Executive', 'Content Writer', 'Customer Support']
    }, {
        title: 'Location', icon: IconMapPin, options: ['New York', 'Seattle',
            'Chicago', 'Pittsburgh', 'San Francisco', 'Toronto', 'London',
            'Boston', 'Harrison'
        ]
    }, {
        title: 'Experience', icon: IconBriefcase, options: ['Entry Level',
            'Intermediate', 'Expert'
        ]
    }, {
        title: 'Job Type', icon: IconRecharging, options: ['Full Time', 'Part Time',
            'Contract', 'Freelance', 'Internship'
        ]
    }
];

const jobList = [
    {
        jobTitle: "Frontend Developer",
        organization: "Google",
        applicant: 154,
        experience: "Intermediate",
        jobType: "Full Time",
        location: "Mountain View",
        package: "$130k",
        postedDaysAgo: 1,
        description: "Build scalable web interfaces using React and TypeScript in a dynamic and inclusive environment. "
      },
      {
        jobTitle: "Backend Engineer",
        organization: "Amazon",
        applicant: 98,
        experience: "Expert",
        jobType: "Full Time",
        location: "Seattle",
        package: "$150k",
        postedDaysAgo: 12,
        description: "Work on distributed systems and REST APIs using Java, AWS, and microservices architecture."
      },
      {
        jobTitle: "Full Stack Developer",
        organization: "Meta",
        applicant: 72,
        experience: "Entry Level",
        jobType: "Contract",
        location: "New York",
        package: "$115k",
        postedDaysAgo: 0,
        description: "Develop full-stack applications with React, Node.js, and GraphQL to power social experiences."
      },
      {
        jobTitle: "UI/UX Designer",
        organization: "Netflix",
        applicant: 46,
        experience: "Entry Level",
        jobType: "Part Time",
        location: "Los Angeles",
        package: "$105k",
        postedDaysAgo: 7,
        description: "Create user-centric designs and prototypes that enhance the viewer experience across platforms."
      },
      {
        jobTitle: "DevOps Engineer",
        organization: "Spotify",
        applicant: 34,
        experience: "Expert",
        jobType: "Full Time",
        location: "Boston",
        package: "$160k",
        postedDaysAgo: 30,
        description: "Automate CI/CD pipelines, monitor cloud infrastructure, and ensure high availability at scale."
      },
      {
        jobTitle: "Data Scientist",
        organization: "Apple",
        applicant: 89,
        experience: "Intermediate",
        jobType: "Freelance",
        location: "Cupertino",
        package: "$140k",
        postedDaysAgo: 2,
        description: "Analyze user behavior and drive insights to improve product performance across Apple services."
      },
      {
        jobTitle: "Machine Learning Engineer",
        organization: "Meta",
        applicant: 57,
        experience: "Expert",
        jobType: "Full Time",
        location: "San Francisco",
        package: "$180k",
        postedDaysAgo: 15,
        description: "Design and deploy ML models for real-world applications with a focus on safety and scalability."
      },
      {
        jobTitle: "Product Manager",
        organization: "Adobe",
        applicant: 43,
        experience: "Intermediate",
        jobType: "Contract",
        location: "San Jose",
        package: "$145k",
        postedDaysAgo: 5,
        description: "Lead cross-functional teams to deliver innovative features for Adobe Creative Cloud users."
      },
      {
        jobTitle: "QA Automation Engineer",
        organization: "Amazon",
        applicant: 29,
        experience: "Entry Level",
        jobType: "Internship",
        location: "Portland",
        package: "$100k",
        postedDaysAgo: 21,
        description: "Write automated tests and ensure code quality in high-performance computing products."
      },
      {
        jobTitle: "Cloud Solutions Architect",
        organization: "Microsoft",
        applicant: 61,
        experience: "Expert",
        jobType: "Full Time",
        location: "Redmond",
        package: "$175k",
        postedDaysAgo: 9,
        description: "Design and deliver scalable Azure solutions for enterprise customers and internal teams."
      }
];

export { jobList, dropdownData };