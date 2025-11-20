import { nanoid } from "@reduxjs/toolkit";
export const FORM_SECTIONS = {
    INTRO: "intro",
    OBJECTIVE: "objective",
    SKILLS: "skills",
    PROJECT: "project",
    EDUCATION: "education",
    EXPERIENCE: "experience",
    CERTIFICATIONS: "certifications",
    INTERNSHIP : "internship"
}

// Projects state structur
const project = [
    {
        displayQuestion: "Project Name",
        id: nanoid(),
        type: "text",
        answer: "",
        isFilled: false,
    },
    {
        displayQuestion: "Project Description",
        id: nanoid(),
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
    {
        displayQuestion: "Tech Stack",
        id: nanoid(),
        type: "text",
        answer: ""
    },
    { displayQuestion: "Live Link", id: nanoid(), type: "url", answer: "" }

];


export const experience = [
    {
        displayQuestion: "Company Name",
        id: nanoid(),
        type: "text",
        answer: "",
        isFilled: false,
    },
    {
        displayQuestion: "Role / Position",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Start Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    { displayQuestion: "End Date", id: nanoid(), type: "date", answer: "" },
    {
        displayQuestion: "description",
        id: nanoid(),
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
];

const intro = [
    {
        displayQuestion: "First Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Last Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    { displayQuestion: "Git Link", id: nanoid(), type: "url", answer: "" },
    {
        displayQuestion: "LinkedIn Link",
        id: nanoid(),
        type: "url",
        answer: "",
    },
    { displayQuestion: "email", id: nanoid(), type: "mail", answer: "" },
    {
        displayQuestion: "Phone Number",
        id: "mobile",
        type: "number",
        answer: "",
    },
]

const objective = [
    {
        displayQuestion: "Objecive",
        id: "objective",
        type: "textarea",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    },
]

const skills = {
    languages: [
        {
            displayQuestion: "Languages",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
        },
    ],
    frameworks: [
        {
            displayQuestion: "Frameworks",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
        },
    ],
    database: [
        {
            displayQuestion: "Databases ",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
            canSkip: true
        },
    ],
    others: [
        {
            displayQuestion: "Other tools ",
            id: nanoid(),
            type: "text",
            answer: "",
            isFilled: false,
            canSkip: true
        },
    ],
}

const education = {
    school: [
        {
            displayQuestion: "10th CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "School Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],

    higherSchool: [
        {
            displayQuestion: "12th CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Junior College Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],

    Degree: [
        {
            displayQuestion: "College Name",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Degree CGPA/Percentage",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        //   If key element is present then display the given element or else input or text editory
        {
            displayQuestion: "Degree Type",
            id: nanoid(),
            element: "select",
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Branch",
            id: nanoid(),
            type: "text",
            answer: "",
        },
        {
            displayQuestion: "Start Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
        {
            displayQuestion: "End Date",
            id: nanoid(),
            type: "date",
            answer: "",
        },
    ],
}

const certifications = [
    {
        displayQuestion: "Certification Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Verify Link",
        id: nanoid(),
        type: "url",
        answer: "",
    },

    {
        displayQuestion: "Description",
        id: nanoid(),
        type: "text",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,

    },
]

const intership = [
    {
        displayQuestion: "Certification Name",
        id: nanoid(),
        type: "text",
        answer: "",
    },
    {
        displayQuestion: "Start Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    {
        displayQuestion: "End Date",
        id: nanoid(),
        type: "date",
        answer: "",
    },
    {
        displayQuestion: "Description",
        id: nanoid(),
        type: "text",
        answer: "",
        isEditorEnabled: true,
        aiEnabled: true,
    }
]


export const SKIPPABLE_FORMS = {CERTIFICATIONS : FORM_SECTIONS.CERTIFICATIONS, INTERNSHIP : FORM_SECTIONS.INTERNSHIP}


export const initialState = {
    intro,

    objective,

    skills,

    projects: {
        project1: [...project],
        project2: [...project],
        project3: [...project],
    },

    education,

    certifications,

    intership,

    renderingQuestions: intro,
    currentForm: FORM_SECTIONS.INTRO
}


// Templates

export const TEMPLATES_ID = {
    TEMPLATE_1 : "template_1",
    TEMPLATE_2 : "template_2"

}

export const templates = [
    {
        id: TEMPLATES_ID.TEMPLATE_1,
        src: "https://njvawavweamzvvakmsgn.supabase.co/storage/v1/object/public/accioresume/resume.png",
    },
    { id: TEMPLATES_ID.TEMPLATE_2, src: "https://njvawavweamzvvakmsgn.supabase.co/storage/v1/object/public/accioresume/templateShumit.png"},
];