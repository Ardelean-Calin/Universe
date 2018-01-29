export let subjects = [
  {
    title: "PID Control",
    subtitle: "Basics of control theory.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Ab dolores neque nobis quae. Aut dolor esse obcaecati quam, quis veritatis.",
    image: require("./assets/img/subject-1.jpg"),
    index: 1, // This is the Course number. i.e the first course of the semester
    courses: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:01:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ],
    laboratories: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ]
  },
  {
    title: "E-Mobility",
    subtitle: "Electric Powertrain & Batteries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Ab dolores neque nobis quae. Aut dolor esse obcaecati quam, quis veritatis.",
    image: require("./assets/img/subject-2.jpg"),
    index: 2, // This is the Course number. i.e the first course of the semester
    courses: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ],
    laboratories: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ]
  },
  {
    title: "Material Science",
    subtitle: "Short description here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Ab dolores neque nobis quae. Aut dolor esse obcaecati quam, quis veritatis.",
    image: require("./assets/img/subject-3.jpg"),
    index: 3, // This is the Course number. i.e the first course of the semester
    courses: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ],
    laboratories: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ]
  },
  {
    title: "Computer Aided Design",
    subtitle: "Short description here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Ab dolores neque nobis quae. Aut dolor esse obcaecati quam, quis veritatis.",
    image: require("./assets/img/subject-4.jpg"),
    index: 4, // This is the Course number. i.e the first course of the semester
    courses: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ],
    laboratories: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ]
  },
  {
    title: "Mechatronics",
    subtitle: "Short description here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Ab dolores neque nobis quae. Aut dolor esse obcaecati quam, quis veritatis.",
    image: require("./assets/img/subject-5.jpg"),
    index: 5, // This is the Course number. i.e the first course of the semester
    courses: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ],
    laboratories: [
      {
        number: 1,
        title: "Flyback converter",
        subtitle: "",
        date: "Mon Jan 29 2018 20:11:18 GMT+0200 (GTB Standard Time)"
      },
      {
        number: 2,
        title: "PFC",
        subtitle: "Power factor correction circuits.",
        date: "Mon Jan 29 2018 16:00:00 GMT+0200 (GTB Standard Time)"
      }
    ]
  }
];

let courseQuestions = [
  {
    title: "How would you rate the course?",
    detail:
      "Please rate the content of the course and it's usefulness to your personal development."
  },
  {
    title: "How would you rate the redaction of the course?",
    detail: "Was the course presented in a meaningful way? Was it engaging?"
  },
  {
    title: "How likely are you to recommend this course?",
    detail:
      'This is the overall "cool factor" of the course. Did you think it was worth your time?'
  }
];

let laboratoryQuestions = [
  {
    title: "How would you rate the laboratory?",
    detail:
      "Please rate the content of the laboratory and it's usefulness to your personal development."
  },
  {
    title: "How would you rate the redaction of the laboratory?",
    detail: "Was the laboratory presented in a meaningful way? Was it engaging?"
  },
  {
    title: "How likely are you to recommend this laboratory?",
    detail:
      'This is the overall "cool factor" of the laboratory. Did you think it was worth your time?'
  }
];
