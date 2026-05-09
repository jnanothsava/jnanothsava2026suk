import bugHuntPoster from '../assets/posters/bug-hunt.jpeg';
import culturalStagePoster from '../assets/posters/cultural-events.jpeg';
import debatePoster from '../assets/posters/debate.jpeg';
import promptToAppPoster from '../assets/posters/prompt-to-app.jpeg';
import roboRacePoster from '../assets/posters/robo-race.jpeg';
import visualArtPoster from '../assets/posters/spot-painting-mandala-art.jpeg';
import hackathonPoster from '../assets/posters/enlighten-code.jpeg';
import cadWarPoster from '../assets/posters/cad-war.jpeg';
import knowledgeQuestPoster from '../assets/posters/knowledge-quest.jpg';
import digiWorldPoster from '../assets/posters/digi-world.jpg';
import byteTheProblemPoster from '../assets/posters/byte-the-problem.jpg';
import rangoliMehandiReelsPoster from '../assets/posters/rangoli-mehandi-reels.jpg';
import tradeQuestPoster from '../assets/posters/trade-quest.jpg';
import posterPresentationPoster from '../assets/posters/poster-presentation.jpg';
import projectExpoPoster from '../assets/posters/project-expo.jpg';
import wasteToWearPoster from '../assets/posters/waste-to-wear.jpg';
import lensRacePoster from '../assets/posters/lens-race.jpg';
import scienceExhibitionPoster from '../assets/posters/science-exhibition.jpg';

export const eventsData = [
  {
    id: 'hackathon-enlighten-code',
    title: 'Hackathon - Enlighten Code 3.0',
    category: 'Technical',
    date: '15 May 2026',
    time: '08:00 AM - 08:00 PM',
    venue: 'University Central Library',
    teamSize: '4 - 6 members',
    description:
      'A 12-hour hackathon where teams build original solutions during the event. Projects are judged on novelty, clarity, feasibility, practicability, and scalability. Join this exciting event that brings together passionate students to create innovative solutions to real-world problems within a limited time.',
    poster: hackathonPoster,
    posterAlt: 'Enlighten Code 3.0 Hackathon poster',
    topicsTitle: 'Problem Statements',
    topics: [
      'Full Stack: Municipal Complaint Management System',
      'Full Stack: Community Economic Development Platform',
      'Full Stack: Institute Resource Sharing Platform',
      'Full Stack: Digital Queue and Appointment Management System',
      'Frontend: Civic Issue Reporting UI',
      'Frontend: Food Donation Listing Interface',
      'Frontend: Mental Health Check-in Dashboard',
      'Artificial Intelligence: AI-Powered Personalized Trip Planning and Scheduling System',
      'Artificial Intelligence: AI-Based Legal Assistance and Rights Awareness System',
      'Artificial Intelligence: AI-Based Academic Planning and Task Prioritization System for Students',
    ],
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Team size: 4 - 6 members. All team members have to be from the same institution. A team cannot comprise members from various institutions.',
          'Transportation: Has to be self-arranged.',
          'Identity proof is required for verification.',
          'Teams are responsible for their resources (hardware and datasets).',
          'In-person attendance is mandatory.',
          'Project work should be done only during the hackathon; no pre-event development. Such teams will be disqualified for rule violations.',
          'Plagiarism is not allowed. Participants copy-pasting code from other repos will be disqualified.',
          'Participants will receive a certificate of recognition.',
          'Teams cannot change their domain after they have registered.',
          'Evaluation criteria: Idea novelty, complexity, clarity, feasibility, practicability and scalability.',
          'Organizers reserve the right to modify contest dates and rules, which will be communicated through the hackathon website.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Mr. Satishkumar Patil', phone: '9986159506' },
        { name: 'Mrs. Soumya G', phone: '7019964634' },
      ],
      student: [
        { name: 'Varun', phone: '9019496019' },
        { name: 'Aishwarya', phone: '6360200476' },
      ],
    },
  },
  {
    id: 'byte-the-problem',
    title: 'Byte the Problem',
    category: 'Technical',
    date: '15 May 2026',
    time: '10:00 AM - 12:00 Noon',
    venue: '2nd Floor, CSE Lab, Dept of CSE, Faculty of Engineering and Technology (Exclusively for Women)',
    teamSize: 'Individual or team (maximum 2)',
    description:
      'This coding event is designed to test participants’ programming skills, logical thinking, and problem-solving abilities. Participants will solve a set of challenges within a given time, showcasing their efficiency, accuracy, and coding expertise.',
    poster: byteTheProblemPoster,
    posterAlt: 'Byte the Problem poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Contestants have to choose any two problems from given set of problem statements to solve.',
          'Student can bring their own laptop for the coding event.',
          'Participants can take part individually or in team (maximum 2).',
          'The contest will be having only one round. The round continues for 2 hours, unless the information about the contest states other duration time.',
          'Individuals or teams of up to two people will be allowed to compete. Contestants in the same team can discuss the problems they are assigned.',
          'If any plagiarism is found in the code of the participant, he/she will be disqualified immediately.',
          'Problems can be solved in any programming languages.',
          "Judges decision will be final.",
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Chetana', phone: '8762876411' },
        { name: 'Prof. Roshni S', phone: '9110421693' },
      ],
      student: [
        { name: 'Kadambini', phone: '7338206489' },
        { name: 'Bhargavi', phone: '9148261249' },
      ],
    },
  },
  {
    id: 'robo-race',
    title: 'Robo Race',
    category: 'Technical',
    date: '15 May 2026',
    time: '10:00 AM - 11:30 AM',
    venue: '1st Floor, Seminar Hall, Mechanical Engineering Department (Co-Ed)',
    teamSize: '2 - 4 participants',
    description:
      'Robo Race involves manually controlled or autonomous robots competing to complete a track in the shortest time. The track may include hurdles like sharp turns, ramps, zig-zag paths, and uneven surfaces.',
    poster: roboRacePoster,
    posterAlt: 'Robo Race event poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'The BOT should be wireless only.',
          'The machine must be controlled manually.',
          'The maximum dimension of the bot should be 300mm x 300mm x 300mm (L x B x H), failing which the team will be disqualified from the competition.',
          'The total weight of the bot should not exceed 5 kg.',
          'The bot may be made from Lego parts, or any assembly kits, and it must be powered by electrical only.',
          'The use power of IC engine is not allowed or remote controlled cars not allowed.',
          'The power source (Battery) connected to the robot should not exceed 12 V, participants should carry extra batteries with them.',
          'Participants beware that the event may get delayed and lead to disqualification if the bot is not ready when it is your turn.',
          'There will be only one start and one finish line as per shown below in figure.',
          'The track surface and course line may have unevenness.',
          'There will be certain obstacles in the racetrack, which will try to slow down the robot.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Sushil Kumar Bijapure', phone: '9036953183' }],
      student: [{ name: 'Sangamesh', phone: '6364501110' }],
    },
  },
  {
    id: 'digi-world',
    title: 'DiGi World',
    category: 'Technical',
    date: '15 May 2026',
    time: '10:00 AM - 11:30 AM',
    venue: '3rd floor, Seminar Hall, BCA (Exclusively for Women)',
    teamSize: 'Individual or team (maximum 5)',
    description:
      'DiGi World is a technology-focused event; all activities must align with digital or IoT-related themes. Participants can register individually or in teams, as specified for each event. All participants are expected to uphold the spirit of innovation and teamwork throughout the DiGi World event to showcase and discuss advancements in AI, cybersecurity, fintech, edtech, IoT, and digital governance. It serves as a platform for learning, networking, and exploring how digital technologies are transforming businesses and society.',
    poster: digiWorldPoster,
    posterAlt: 'DiGi World poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Participants should bring their own devices (if required).',
          'Internet Usage will be allowed.',
          'The model must be innovative and student-built.',
          'Models can belong to domains such as IoT, AI/ML, Robotics, Smart systems.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Shantala P', phone: '7624972278' },
        { name: 'Prof. Suman', phone: '9986337400' },
      ],
      student: [
        { name: 'Niharika', phone: '9611954528' },
        { name: 'Deepika', phone: '7996345707' },
      ],
    },
  },
  {
    id: 'lens-race',
    title: 'Lens Race (Photography)',
    category: 'Technical',
    date: '15 May 2026',
    time: '10:00 AM - 11:30 AM',
    venue: 'Energy Engineering Department (Co-Ed)',
    teamSize: 'Individual',
    description:
      'Lens Race is a time-bound photography competition where participants must capture images based on given themes or tasks. The goal is to showcase creativity, storytelling, and technical skills through the lens.',
    poster: lensRacePoster,
    posterAlt: 'Lens Race event poster',
    detailsSections: [
      {
        title: 'Competition Format',
        items: [
          'This is a time-bound photography challenge ("Lens Race").',
          'Themes will be announced 1 day prior to the event.',
          'Only photos taken during the competition window are valid.',
        ],
      },
      {
        title: 'Location Constraint',
        items: [
          'Photography must be done strictly within the university campus.',
          'Participants are responsible for adhering to campus rules and restricted areas.',
        ],
      },
      {
        title: 'Submission Rules',
        items: [
          'Each participant can submit maximum 2 photographs.',
          'Submission must include photo (JPG/PNG format).',
          'Submission must include title of the photograph.',
          'File naming format: Student Name_USN.jpg.',
        ],
      },
      {
        title: 'Originality and Ethics',
        items: [
          'All submissions must be original work of the participant.',
          'Plagiarism or use of previously captured images will lead to disqualification.',
          'Participants must not violate privacy or ethical standards while capturing images.',
        ],
      },
      {
        title: 'Editing Guidelines',
        items: [
          'Basic editing is allowed: brightness, contrast, cropping, color correction.',
          'Not allowed: heavy manipulation.',
          'Not allowed: adding/removing elements.',
          'Not allowed: AI-generated or composite images.',
        ],
      },
      {
        title: 'Device Usage and Submission Terms',
        items: [
          'Participants may use mobile phones.',
          'Participants may use digital cameras / DSLRs.',
          'No restriction on device, but quality will be judged equally.',
          'Entries must be submitted within the stipulated time.',
          'Late submissions will not be accepted under any circumstances.',
          'The organizers reserve the right to use submitted photographs for academic, promotional, and exhibition purposes.',
          'Entries may be displayed with due credit to the participant.',
          'The decision of the judging panel will be final and binding.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Vikas Anakal', phone: '9986454100' }],
      student: [
        { name: 'MrAyan', phone: '9611343412' },
        { name: 'Shrushti K', phone: '9880430619' },
      ],
    },
  },
  {
    id: 'science-exhibition',
    title: 'Science Exhibition',
    category: 'Technical',
    date: '15 May 2026',
    time: '11:00 AM - 12:30 PM',
    venue: '2nd Floor, Department of Mathematics, Faculty of Science and Technology S.B College of Science Gulbarga',
    teamSize: 'Individual or teams (maximum 2 - 3 members)',
    description:
      'A Science Exhibition is an interactive academic event where students present innovative ideas through working models, experiments, and research-based projects. It serves as a platform to transform theoretical knowledge into practical applications, allowing participants to demonstrate how science can be used to solve real-world problems.',
    poster: scienceExhibitionPoster,
    posterAlt: 'Science Exhibition event poster',
    detailsSections: [
      {
        title: 'Themes and Categories',
        items: [
          'Projects should be based on approved themes such as Science and Innovation.',
          'Engineering Models.',
          'Environmental Sustainability.',
          'Mathematical Modelling.',
          'Artificial Intelligence and Data Science.',
          'Present Global Challenges.',
        ],
      },
      {
        title: 'Project Submission Rules',
        items: [
          'Each team must submit an abstract (250 - 300 words).',
          'Each team must submit project title and category.',
          'Each team must submit team details with team leader name.',
          'Selected projects will be notified before the exhibition date.',
          'Projects must be original work; plagiarism is strictly prohibited.',
        ],
      },
      {
        title: 'Setup and Display',
        items: [
          'Participants must set up their exhibits within the allotted time.',
          'Required materials (charts, models, laptops, etc.) must be brought by participants.',
          'Electricity requirements must be informed in advance.',
          'Posters/Displays should be neat, readable, and scientifically accurate.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Dr. Vishwas V.R.M.', phone: '7349018211' },
        { name: 'Prof. Renuka Hiremath', phone: '7619325384' },
      ],
      student: [
        { name: 'Sharanprasad', phone: '9538954543' },
        { name: 'Pavitra', phone: '6360164597' },
        { name: 'Bhagyashree G', phone: '8431742715' },
        { name: 'Shwetha', phone: '9686852942' },
      ],
    },
  },
  {
    id: 'prompt-to-app',
    title: 'Prompt to App',
    category: 'Technical',
    date: '15 May 2026',
    time: '11:30 AM - 01:00 PM',
    venue: 'CISCO Lab',
    teamSize: 'As per brochure presentation format',
    description:
      'Prompt to App is an innovative technical event where participants transform simple ideas or prompts into fully functional applications. The event encourages creativity, problem-solving, and hands-on development skills using modern tools and technologies. Participants will design, build, and present their applications within a limited time, showcasing both technical expertise and innovation. It serves as a great platform for students to enhance their coding abilities and bring their ideas to life.',
    poster: promptToAppPoster,
    posterAlt: 'Prompt to App event poster',
    detailsSections: [
      {
        title: 'Key Rules',
        items: [
          'Develop an application using AI tools.',
          'Use of tools like ChatGPT, Copilot, Gemini is mandatory.',
          'Clearly mention all AI tools used.',
          'Application must be original.',
          'Presentation includes demo (2 - 3 mins) and explanation (2 - 3 mins).',
          'Plagiarism leads to disqualification.',
          "Judges' decision is final.",
          'Total Duration: 2 to 3 Hours.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Siddaling', phone: '9916575250' }],
      student: [
        { name: 'Aditya', phone: '9307698460' },
        { name: 'Omkar', phone: '9380473500' },
        { name: 'Madhura', phone: '9663926444' },
      ],
    },
  },
  {
    id: 'cad-war',
    title: 'CAD War',
    category: 'Technical',
    date: '15 May 2026',
    time: '11:00 AM - 01:30 PM',
    venue: 'Department of Civil Engineering (Co-ed)',
    teamSize: 'Individual',
    description:
      'CAD War is a competitive design event where participants showcase their skills in Computer-Aided Design (CAD) by creating accurate and innovative 2D/3D models within a limited time. It tests technical knowledge, creativity, and speed in using CAD software tools.',
    poster: cadWarPoster,
    posterAlt: 'CAD War event poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Participants must create a detailed Residential Building plan and Elevation using AutoCAD for a 40 ft x 60 ft plot, strictly following government building setback rules and standard planning guidelines.',
          'Essential planning components: AutoCAD file should be organized into layers for a professional look.',
          'Ensure the following are included: Dimensional Accuracy, all rooms with clear dimensions, standard room sizes, and opening schedule.',
          'Time Limit: Total Time: 2.5 hours.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Prabhakar', phone: '8792087775' },
        { name: 'Prof. Sunil Kumar H', phone: '8553888969' },
        { name: 'Prof. Vishwanath H', phone: '8884595235' },
        { name: 'Prof. Poonamrani', phone: '9405912582' },
      ],
      student: [
        { name: 'Arunkumar', phone: '8374399240' },
        { name: 'Karnkumar', phone: '7259910723' },
        { name: 'Sanjana', phone: '9606497779' },
        { name: 'Vishaka', phone: '7204022737' },
      ],
    },
  },
  {
    id: 'poster-presentation',
    title: 'Poster Presentation',
    category: 'Technical',
    date: '15 May 2026',
    time: '02:00 PM - 04:00 PM',
    venue: '1st Floor, Seminar Hall, Faculty of Computer Applications',
    teamSize: 'Individual or max 2',
    description:
      'Poster Presentation is a technical event where participants visually present their ideas, research, or concepts using well-designed posters. It combines creativity with technical knowledge, allowing students to communicate complex information in a clear and engaging format.',
    poster: posterPresentationPoster,
    posterAlt: 'Poster Presentation event poster',
    detailsSections: [
      {
        title: 'Poster Rules',
        items: [
          'Title: Title of poster should be clear and concise and should provide quick summary topic ("make it informative result oriented").',
          'Abstract: Summarized entire project intro, method, results, and discussion. Abstract should be typically (250 - 300 words) appearing on top left of poster. Do not include tables, figures, or excessive acronyms.',
          'Objective: Clearly state the objective of your work (list of objectives may vary from 2 - 4).',
          'What problem you are trying to solve.',
          'What are the goals of your research.',
          'Dimension: 60 x 40 (Landscape/Portrait).',
          'Visuals: Poster should be handmade (digital images printout images are not allowed).',
          'Avoid excessively detailed content (student built).',
          'Layout: Use bold titles, bullet points.',
          'Methods: This section should be clear and concise, should include enough detail for audience.',
          'Interaction: Be prepared to give a 5 - 8 minutes simplified walkthrough of your poster.',
          'Result: Present your findings in clear and concise manner and use visual aide to help convey your results.',
          'Conclusion: Summarised key findings and the overall significance of poster / your work.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Akshata', phone: '9108554996' },
        { name: 'Prof. Jagadish', phone: '8867932361' },
      ],
      student: [
        { name: 'Nachiket', phone: '8217204054' },
        { name: 'Alok', phone: '6364181182' },
        { name: 'Nandini', phone: '9108758996' },
        { name: 'Smita', phone: '9036650014' },
      ],
    },
  },
  {
    id: 'tech-quiz',
    title: 'Tech Quiz',
    category: 'Technical',
    date: '15 May 2026',
    time: '03:00 PM - 05:00 PM',
    venue: '3rd Floor, Seminar Hall, Dept of AI & ML',
    teamSize: 'Team of 2',
    description:
      'Tech Quiz is an interactive and knowledge-based competition designed to test participants’ technical awareness, problem-solving ability, and understanding of current and emerging technologies. The event includes questions from various domains such as computer science, engineering, programming, general technology, inventions, current trends, and aptitude. The objective of the event is to enhance technical knowledge, analytical thinking, teamwork, and competitive spirit among students.',
    detailsSections: [
      {
        title: 'Competition Rules',
        items: [
          'Only team entries are allowed, and team shall consist of two persons.',
          'The decision of the quiz-master will be final and will not be subjected to any change.',
          'The participants shall not be allowed to use mobile or other electronic instruments during the quiz time.',
          'The questions shall be in the form of multiple choice, true/false statement.',
          'Audience/Supporters shall not give any hints or clues to the competitors.',
          'Replacement of any participant of a team is not allowed after registration.',
        ],
      },
      {
        title: 'Rounds',
        items: [
          'There will be two rounds in the quiz competition: Preliminary round or elimination round, and Final round or stage round.',
          'Preliminary round: Each team will be given a set of question paper containing 25 multiple choice objective type questions.',
          'Time limit: 25 minutes. Each question will carry 2 mark.',
          'Only top 6 teams will be selected for final or stage rounds.',
          'In case of tie between 2 or more teams, further 5 questions will be asked for final selection. This step will be continued till the selection of 6 teams.',
          'The selected teams shall have to appear for the final round.',
          'Final round will comprise Round 1: General Round, Round 2: Buzzer Round, Round 3: Recent Trends, Round 4: Audio/visual round, Round 5: Rapid fire round.',
        ],
      },
      {
        title: 'Final Round Scoring',
        items: [
          '10 marks will be awarded for correct answer.',
          'Response time for each question is 30 seconds.',
          'There is no pass option.',
          'Team discussion is allowed.',
          'In the rapid-fire round, each team will be asked 3 questions one after another.',
          '10 marks will be awarded for the correct answer and 5 marks will be deducted for each wrong answer.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Supriya B', phone: '9845897579' },
        { name: 'Prof. Anushka K', phone: '9342111674' },
      ],
      student: [{ name: 'Tejal', phone: '7975176419' }],
    },
  },
  {
    id: 'debate',
    title: 'Debate',
    category: 'Technical',
    date: '15 May 2026',
    time: '03:00 PM - 05:00 PM',
    venue: '1st Floor, Room1, MSc Physics Class, S B College of Science',
    teamSize: '2 - 3 participants',
    description:
      'Debate is an intellectual and interactive event where participants present and defend their viewpoints on a given topic. It focuses on critical thinking, communication skills, and the ability to argue logically and confidently.',
    poster: debatePoster,
    posterAlt: 'Debate Competition event poster',
    topics: [
      'Biological warfare is the greatest threat to human health.',
      'AI makes education more accessible and inclusive.',
    ],
    detailsSections: [
      {
        title: 'General Guidelines',
        items: [
          'The competition is open for all departments of the university and outsiders.',
          'The debate will follow a formal structured format (e.g., Parliamentary/Turn-based).',
          'Each team will represent either For (Proposition) or Against (Opposition) the given topic.',
          'Each department can nominate one team consisting of 2 - 3 participants.',
          'Teams must register before the deadline set by the organizing committee.',
        ],
      },
      {
        title: 'Technical Rules',
        items: [
          'Format: For or against on given topic.',
          'Time: 4 - 5 min speaking + 1 - 2 min rebuttal or cross questioning. Exceeding time may result in penalty marks.',
          'Language: English.',
          'Judging: Content, Clarity, Confidence, Argument strength, Rebuttal skills, Time management, Team Coordination.',
          'No interruptions: Maintain discipline and respectful language.',
          "Judge's decision is final.",
          'Report 30 minutes before event.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Dr. Pooja Mallinath', phone: '8904918883' },
        { name: 'Prof. Sanjana R Hatti', phone: '9449033677' },
      ],
      student: [
        { name: 'Afifa Naaz', phone: '8088384586' },
        { name: 'Nirmala', phone: '7892163853' },
      ],
    },
  },
  {
    id: 'bug-hunt',
    title: 'Bug Hunt (Debugging)',
    category: 'Technical',
    date: '16 May 2026',
    time: '11:30 AM - 01:00 PM',
    venue: '1st Floor, Lab -2, Dept of Artificial Intelligence & Data Science',
    teamSize: 'As per brochure event desk',
    description:
      'Bug Hunt is a technical coding event where participants identify, analyze, and fix errors (bugs) in given programs within a specified time. The event tests participants’ programming knowledge, debugging skills, logical thinking, and problem-solving ability. The objective of the event is to enhance coding efficiency, analytical skills, and understanding of programming concepts through error detection and correction.',
    poster: bugHuntPoster,
    posterAlt: 'Bug Hunt event poster',
    detailsSections: [
      {
        title: 'Technical Rules',
        items: [
          'Contestants will be given with a pair of bugged code.',
          'Students will be provided with systems for coding, no internet access will be provided.',
          'The contest consists of single round of 2 hours.',
          'Problems must be solved in Python programming language.',
          "Judge's decision will be final.",
          'Mobile phones or any smart devices are not permitted; if spotted, the contestant or team will be disqualified immediately.',
        ],
      },
      {
        title: 'Evaluation Criteria',
        items: [
          'Correctness of the output.',
          'Time taken to complete the task.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Mahalaxmi S', phone: '7022899309' }],
      student: [
        { name: 'Adeeba Kausar', phone: '8792494718' },
        { name: 'Prasheek', phone: '7676179256' },
      ],
    },
  },
  {
    id: 'project-expo',
    title: 'Project Expo (Techno Spectrum)',
    category: 'Technical',
    date: '16 May 2026',
    time: '10:00 AM - 01:00 PM',
    venue: '1st Floor, Electronics and Communication Engineering, Faculty of Engineering and Technology (Exclusively for Women)',
    teamSize: 'Individual or maximum 5 members',
    description:
      'Project Expo is an innovative event where students present their projects to demonstrate practical applications of engineering and technology. It provides a platform to showcase creativity, technical skills, and problem-solving abilities.',
    poster: projectExpoPoster,
    posterAlt: 'Project Expo event poster',
    detailsSections: [
      {
        title: 'Rules',
        items: [
          'Registration should be done before the deadline.',
          'Teams can be individual or maximum of 5 members.',
          'Participants should carry ID card of their institution.',
          'Participants can use charts, posters, or digital presentations.',
          'Students are informed to bring NO OBJECTION Certificate from Principal / HOD to participate in technical project exhibition.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Dr. Vanita K', phone: '9900978993' },
        { name: 'Prof. Vishalakshi', phone: '7760546999' },
        { name: 'Prof. Pushpa Patil', phone: '8147909513' },
        { name: 'Prof. Harshvardhan Reddy', phone: '9844444337' },
      ],
      student: [
        { name: 'Aishwarya S K', phone: '6360258532' },
        { name: 'Soundarya Kulkarni', phone: '6363791807' },
        { name: 'Veeresh Hiremath', phone: '9606855020' },
        { name: 'Shivakumar Sirwal', phone: '720442201' },
      ],
    },
  },
  {
    id: 'knowledge-quest',
    title: 'Knowledge Quest (Quiz Competition)',
    category: 'Management',
    date: '16 May 2026',
    time: '10:00 AM - 12:00 Noon',
    venue: 'BBA[Co-Ed] Department',
    teamSize: 'Generally 2 members per team',
    description:
      "A knowledge quiz competition is an engaging intellectual activity designed to test participants' recall, critical thinking, and breadth of information across various topics. These competitions, often structured with multiple-choice, rapid-fire, or audio-visual rounds, aim to stimulate curiosity and foster a spirit of healthy competition. It encourages individuals to stay informed about the world around them while stimulating curiosity and a love for learning. These competitions can be held in various formats, such as team-based games or individual challenges. Participants often prepare by reading books, following news, and practicing with trivia databases. Beyond just facts, a quiz competition helps develop critical thinking and quick recall skills. It also promotes team spirit and collaboration when played in groups.",
    poster: knowledgeQuestPoster,
    posterAlt: 'Knowledge Quest poster',
    detailsSections: [
      {
        title: 'General Rules',
        items: [
          'Team Structure: Generally, 2 members per team are allowed, representing a specific institution.',
          'Eligibility: Participants must be from the same institution/College.',
          'Decorum and Integrity: Teams must maintain discipline; any form of cheating, such as using mobile phones, smartwatches, or searching for answers online, results in immediate disqualification.',
          'Identification: Carrying a valid ID card (Institutional or Government) is typically mandatory for verification.',
          'Passing and Marking: In some formats, unattended questions can be passed to the next team. Negative marking may apply for incorrect answers or passed questions, while some rounds may not allow passing.',
          'Tie-Breakers: If scores are tied, specialized rounds (like a rapid fire) are used to determine the winner.',
        ],
      },
      {
        title: 'Competition Format and Rounds',
        items: [
          'Preliminary Round: Often a written test featuring 15 - 30 multiple-choice questions (MCQs) to filter out the top 6 - 8 teams.',
          'Main/Final Rounds may include Direct Question Round with a fixed time limit.',
          'Audio / Visual Round: Identifying logos, CEOs, or products from images; identifying brands from advertisements or famous corporate slogans.',
          'Buzzer Round: Speed-based round where the first team to hit the buzzer gets to answer.',
          'Rapid Fire: A final, high-speed round where a team answers as many questions as possible within a short window (e.g., 60 seconds).',
        ],
      },
      {
        title: 'Scoring and Conduct',
        items: [
          'Points System: Standard scoring is +10 for a correct answer. Negative marking of -5 for wrong answers.',
          'Passing Rules: If a team cannot answer, they may pass the question. In some formats, the next team can answer for half points.',
          'Electronics: The use of mobile phones, laptops, or smartwatches is strictly forbidden and results in immediate disqualification.',
          "Final Authority: The Quizmaster's decision is absolute and cannot be contested.",
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Nandini PolicePatil', phone: '8431082993' },
        { name: 'Prof. Shridevi Shastri', phone: '8762156683' },
      ],
      student: [
        { name: 'Krishnaveni', phone: '9535423264' },
        { name: 'Bhumika Rangdal', phone: '9480621880' },
        { name: 'Prof. Parikshit S N', phone: '9901099940' },
      ],
    },
  },
  {
    id: 'trade-quest',
    title: 'TradeQuest [Stock Market Game] - Adventure of Trading',
    category: 'Management',
    date: '15 May 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Doddappa Appa Sabha Mantap',
    teamSize: 'Participant/team as per game desk',
    description:
      'Trade Quest – The Adventure of Trading is an immersive stock market simulation game designed to provide participants with a dynamic, real-time trading experience in a risk-free environment. By blending learning with excitement, the game enables players to buy and sell stocks using virtual currency, analyze market trends, and make strategic investment decisions. Structured as an interactive journey, Trade Quest fosters the development of essential financial skills such as analytical thinking, risk management, and decision-making. Ideal for students and aspiring investors, it transforms theoretical knowledge into practical exposure, making the world of trading both accessible and enjoyable.',
    poster: tradeQuestPoster,
    posterAlt: 'Trade Quest poster',
    detailsSections: [
      {
        title: 'Game Setup',
        items: [
          'Each participant/team receives virtual capital (e.g., Rs. 10,00,000).',
          'Trading is done using real-time or simulated market data.',
          'Team must construct a diversified portfolio.',
          'The game will include three trading sessions.',
        ],
      },
      {
        title: 'Trading Guidelines',
        items: ['At least 5 different stocks must be held to encourage diversification.'],
      },
      {
        title: 'Evaluation Criteria',
        items: [
          'Portfolio value at the end of the game.',
          'Teams will be evaluated based on portfolio performance using income statement and balance sheet.',
        ],
      },
      {
        title: 'Code of Conduct',
        items: [
          'No external paid advisors; decisions must be student-driven.',
          'Respect deadlines and submission formats.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Dr. Spoorthi Patil', phone: '9008057629' },
        { name: 'Prof. Nitesh S V', phone: '9620496535' },
      ],
      student: [
        { name: 'Prithviraj', phone: '8147084284' },
        { name: 'Prof. Asma Parveen', phone: '9035115483' },
      ],
    },
  },
  {
    id: 'rangoli-mehandi-reels',
    title: 'Rangoli, Mehandi & Social Awareness Reels',
    category: 'Cultural',
    date: '15 May 2026',
    time: 'Rangoli: 10:00 AM - 11:30 AM | Mehandi: 11:30 AM - 01:00 PM | Reels: 02:00 PM - 04:00 PM',
    venue: 'Faculty of Languages (Dept. of Kannada & English)',
    teamSize: 'Individual',
    description: 'A vibrant showcase of cultural and social expression featuring traditional Rangoli, creative Mehandi designs, and impactful Social Awareness Reels. Participate in these creative events to express your artistic talent, cultural pride, and social responsibility.',
    poster: rangoliMehandiReelsPoster,
    posterAlt: 'Rangoli, Mehandi & Social Awareness Reels poster',
    detailsSections: [
      {
        title: 'Rangoli Rules',
        items: [
          'Participants must complete the rangoli within the given time (usually 1 - 2 hours).',
          'Participants should bring their own materials. Only dry rangoli colors are allowed (no flowers or ready-made stencils, unless permitted).',
          'Rangoli should be based on the given theme (if any). Otherwise, participants can choose their own design.',
          'Rangoli must be made within the allotted space and participants should keep their area clean.',
        ]
      },
      {
        title: 'Mehandi Rules',
        items: [
          'Each participant will be given 90 minutes to complete the design.',
          'Participants must bring their own mehndi cones and materials.',
          'Use of ready-made stickers, stencils, or printed designs is not allowed.',
          'Participants must maintain silence and discipline during the competition.',
          'No external help or copying from others is allowed.',
        ]
      },
      {
        title: 'Social Awareness Reels Rules',
        items: [
          'The reel must focus on a social awareness topic (e.g., health, environment, education, census awareness, etc.).',
          'The reel should be 30 to 60 seconds only.',
          'Content must be original. No copying or using others videos without permission.',
          'The message should be clear, respectful, and suitable for all audiences. Avoid offensive or inappropriate content.',
          'Participants must submit their reel before the deadline in the specified format/platform (e.g., WhatsApp, Google Drive, Instagram link).',
        ]
      }
    ],
    contacts: {
      faculty: [
        { name: 'Prof. Jayamala Maka (Rangoli)', phone: '7676747447' },
        { name: 'Prof. Sunita N (Mehandi)', phone: '9353369689' },
        { name: 'Prof. Swaroopa M.Y (Reels)', phone: '9019754099' }
      ],
      student: []
    }
  },
  {
    id: 'spot-painting-and-mandala-art',
    title: 'Spot Painting & Mandala Art',
    category: 'Cultural',
    date: '15 May 2026',
    time: 'Spot Painting: 11:00 AM - 01:00 PM | Mandala Art: 02:00 PM - 04:00 PM',
    venue: 'M.A. in Visual Art Department',
    teamSize: 'Individual',
    description:
      'Spot Painting & Mandala Art is an on-the-spot creative art competition where participants showcase their artistic talent, imagination, and design skills through paintings and mandala patterns within the given time. The event encourages creativity, concentration, innovation, and visual expression among students. The objective of the event is to provide a platform for students to express their ideas artistically and demonstrate their creativity through colors, patterns, and unique designs.',
    poster: visualArtPoster,
    posterAlt: 'Spot Painting and Mandala Art event poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'One fourth drawing sheet will be provide from the department and other materials can bring themselves.',
          'Duration: 2 hrs.',
          'Transportation: Has to be self-arranged.',
          'Valid college identity proof ID is required for verification.',
          'In-person attendance is mandatory.',
          'Plagiarism is not allowed.',
          'Participants will receive a certificate of recognition.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Nijaling Mugali', phone: '7892532572' }],
      student: [{ name: 'Shambhavi Kulkarni', phone: '8861871080' }],
    },
  },
  {
    id: 'waste-to-wear',
    title: 'Waste to Wear',
    category: 'Cultural',
    date: '15 May 2026',
    time: '02:00 PM - 04:00 PM',
    venue: 'Architecture Department',
    teamSize: 'Individual or teams (max 3 - 4 members)',
    description:
      'Waste to Wear is a creative and eco-friendly fashion event where participants design unique costumes using recyclable and waste materials and showcase them confidently on the ramp. The event combines creativity, sustainability, fashion, and stage presentation skills while promoting environmental awareness. The objective of the event is to encourage students to transform waste materials into innovative wearable designs and spread the message of recycling and environmental protection through fashion.',
    poster: wasteToWearPoster,
    posterAlt: 'Waste to Wear event poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Participation can be individual or in teams (max. 3 - 4 members).',
          'Strong theme/concept requirement and minimum 80% of the outfit must be made from waste materials using waste materials but not limited to paper, cardboard, plastic bottles, scrap metal, fabric waste, packaging materials, cardboard etc.',
          'Basic tools (glue, tape, thread, fasteners) are allowed for assembly.',
          'Costumes must be decent and appropriate for a public event.',
          'Presentation/time limit: each team can ramp walk / display (1 - 2 minutes) and a brief concept explanation (1 - 2 minutes).',
          'Competition time: 2 hrs.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Ar. Farida Tabassum', phone: '9916975844' }],
      student: [{ name: 'Farha Deeba', phone: '8217273428' }],
    },
  },
  {
    id: 'singing-competition',
    title: 'Singing Competition',
    category: 'Cultural',
    date: '15 May 2026',
    time: '10:00 AM - 01:00 PM',
    venue: 'Dodappa Appa Sabha Manatap',
    teamSize: 'Group song: 4 - 8 participants | Solo: individual',
    fee: 'Group Singing: Rs. 300 per group | Solo Singing: Rs. 100 per participant',
    description:
      'Singing is a musical talent event where participants showcase their vocal skills, melody, rhythm, and stage confidence through songs of different genres and languages. The event provides a platform for students to express emotions and creativity through music while entertaining the audience. The objective of the event is to encourage musical talent, confidence, artistic expression, and stage performance among students.',
    poster: culturalStagePoster,
    posterAlt: 'Cultural stage events poster',
    subEvents: ['Solo Singing', 'Group Singing', 'Classical', 'Non-Classical'],
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Team Size: For Group song 4 - 8 participants entries in each team.',
          'Time Limits: Typically 3 to 5 minutes, often including setup and exit time.',
          'Karaoke/Backing Tracks: Tracks must be submitted in advance (e.g. 30 minutes) in MP3 form through pendrive.',
          'Appropriateness: Lyrics must be suitable for a diverse audience. Vulgarity, obscenity, or explicit language leads to immediate disqualification.',
          'Theme Constraints: In some cases, songs must not be politically charged or religious, especially in general cultural categories.',
          'Vocal Quality: Pitch accuracy (Sur), tone, control, range, and breath support.',
          'Expression and Presentation: Ability to convey emotions, connection with the audience, and confidence.',
          'Stage Presence: Appropriate stage movement and overall persona.',
          'Finality: The decision of the judges is final and binding in all scenarios.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Poojalata', phone: '8951967779' }],
      student: [
        { name: 'Malavika', phone: '8197172720' },
      ],
    },
  },
  {
    id: 'dance-competition',
    title: 'Dance Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '10:30 AM - 01:00 PM',
    venue: 'University Play ground',
    teamSize: 'Group dance: 4 - 6 participants | Solo: individual',
    fee: 'Group Dance: Rs. 300 per group | Solo Dance: Rs. 100 per participant',
    description:
      'Dance is a vibrant and energetic event where participants showcase their talent, creativity, expressions, and coordination through various dance forms. The event provides a platform for students to express emotions, culture, and entertainment through movement and music. Participants can perform solo, duet, or group dance based on the event category. The objective of the event is to encourage artistic expression, confidence, teamwork, and stage performance among students.',
    poster: culturalStagePoster,
    posterAlt: 'Cultural stage events poster',
    subEvents: ['Solo Dance', 'Group Dance', 'Folk', 'Classical', 'Western'],
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Dance forms: categories may include Folk/Tribal, Classical, Free Style, Contemporary or Bollywood.',
          'Time limits: Performance time is generally 4 - 8 minutes for Group Dance and 3 - 5 minutes for Solo Dance.',
          'Music Submission: Audio tracks must be submitted in advance to the technical team (one hour before).',
          'Stage Decorum: No liquid, gel, glitter, or powders that damage the floor are allowed.',
          'Vulgarity Check: Any form of obscenity in gestures, costumes, or music will lead to immediate disqualification.',
          'Props: Use of fire, water, or hazardous materials is prohibited.',
          'Reporting: Participants must report 30 minutes before the event starts.',
          'ID Cards: Participants must carry valid college ID cards for verification with two faculties.',
          'Judgement Criteria: Rhythm, Formation, Synchronization, Expressions, Costumes, Makeup, and Overall Effect.',
          'Finality: The decision of the judges is final and binding on all participants.',
          'Penalty: Negative marking is applied for exceeding time limits or late submission of music.',
        ],
      },
    ],
    contacts: {
      faculty: [
        { name: 'Dr. Vishal Patil (Non Classical Category)', phone: '9008083132' },
        { name: 'Prof. Neha B (Classical Dance Category)', phone: '6361282605' },
      ],
      student: [
        { name: 'Akshata', phone: '8050531566' },
        { name: 'Chaitanya', phone: '8310241319' },
        { name: 'Vinod', phone: '9448359873' },
        { name: 'Basvaling', phone: '8618863318' },
      ],
    },
  },
  {
    id: 'ramp-walk-competition',
    title: 'Ramp Walk Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '08:30 AM - 10:00 AM',
    venue: 'University Play ground',
    teamSize: 'Group Ramp Walk: 4 - 6 participants | Solo: individual',
    fee: 'Group Ramp Walk: Rs. 300 per group | Solo Ramp Walk: Rs. 100 per participant',
    description:
      'Ramp Walk is a fashion and personality-based event where participants showcase their confidence, style, creativity, and stage presence while walking on the ramp. The event provides a platform for students to express themselves through fashion, attitude, and presentation skills. Participants may perform individually or in groups based on the event format. The objective of the event is to encourage self-confidence, teamwork, creativity, and presentation skills while providing entertainment to the audience.',
    poster: culturalStagePoster,
    posterAlt: 'Cultural stage events poster',
    subEvents: ['Solo Ramp Walk', 'Group Ramp Walk', 'Traditional', 'Cultural', 'Mythological', 'Historical', 'Indo Western', 'Retro'],
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Theme Adherence: Participants must adhere to a specific theme such as traditional attire, cultural related attire, mythological attire, Indo-western theme, or retro theme.',
          'Time Limits: Performances are strictly timed, typically ranging between 3 to 5 minutes for solo and 5 to 8 minutes for group shows. Exceeding the time limit usually results in penalty point.',
          'No Vulgarity: Obscene gestures, explicit clothing, or indecent exposure are strictly prohibited and will lead to immediate disqualification.',
          'Safety Restrictions: Use of fire, hazardous materials, pets, or any item that can damage the ramp is banned.',
          'Dress Code: Clothing must be appropriate for a campus environment, often with restrictions on overly revealing attire.',
          'Props and Costumes: Teams are responsible for bringing their own costumes and props. Props must be safe, non-obstructive, and portable.',
          'Judgement Criteria: Creativity and originality of costumes, confidence, attitude, walking style, theme interpretation, choreography and use of the ramp.',
          'Finality: The decision of the judges is final and binding in all scenarios.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Shruti Houde', phone: '7019161949' }],
      student: [
        { name: 'Preeti', phone: '9945753122' },
        { name: 'Sanjana', phone: '9632664586' },
        { name: 'Bhagya', phone: '8799931903' },
      ],
    },
  },
  {
    id: 'standup-comedy',
    title: 'Standup Comedy Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '01:30 PM - 02:30 PM',
    venue: 'University Play ground',
    teamSize: 'Individual',
    fee: 'Rs. 100 per participant',
    description:
      'Stand-up comedy is a fun-filled entertainment event where participants perform humorous acts, jokes, observations, or real-life experiences in front of the audience. The event encourages creativity, confidence, communication skills, timing, and stage presence. Participants can present comedy based on student life, engineering experiences, social media trends, daily situations, family, friendship, technology, or any light-hearted topic suitable for the audience. The objective of the event is to entertain the audience through clean and creative humor while promoting confidence and public speaking skills among students.',
    poster: culturalStagePoster,
    posterAlt: 'Cultural stage events poster',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'No Vulgarity or Profanity: Performances must be clean, free from cuss words, vulgarity, and dual-meaning jokes.',
          'No Obscene Language: Use of un-parliamentary, obscene, or abusive language often leads to immediate disqualification.',
          'Respectful Subject Matter: Content must not hurt the sentiments of any religion, caste, race, political party, or individual.',
          'Family-Friendly Content: Jokes should be suitable for a general university audience, often prohibiting insulting or overly aggressive roasting.',
          'Strict Time Constraints: Participants are usually given 4 - 5 mins per performance.',
          'No Props/Backgrounds: No props, background music, or special effects.',
          'No Reading: Performers are expected to deliver naturally rather than reading from a script.',
          'Reporting: Participants must report 30 minutes before the event starts.',
          'ID Cards: Participants must carry valid college ID cards for verification with two faculties.',
          'Judging: Content and originality, comic timing and delivery, audience connection/response, overall presentation.',
          'Disqualification: Violation of content rules or exceeding the time limit frequently results in disqualification.',
          "Judges' Decision: The decision of the judges is final and binding in all cases.",
          'Registration Fee: Rs. 100 per participant.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Dr Shweta Patil', phone: '9535458428' }],
      student: [{ name: 'Mallikarjun', phone: '8217638131' }],
    },
  },
]
