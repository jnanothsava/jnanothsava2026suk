import bugHuntPoster from '../assets/posters/bug-hunt.jpeg';
import debatePoster from '../assets/posters/debate.jpeg';
import promptToAppPoster from '../assets/posters/prompt-to-app.jpeg';
import roboRacePoster from '../assets/posters/robo-race.jpeg';
import visualArtPoster from '../assets/posters/spot-painting-mandala-art.jpeg';

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
        { name: 'Mahesh', phone: '9019797103' },
        { name: 'Yogita', phone: '9742423710' },
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
    venue: '2nd Floor, Seminar Hall, Dept of CSE, Faculty of Engineering and Technology (Exclusively for Women)',
    teamSize: 'Individual or team (maximum 2)',
    description:
      'A coding challenge where participants solve any two problems from the given problem set within a single round. Open to individuals or teams of up to two members, this event tests logical thinking, speed, and programming skills. It is a great opportunity to compete, collaborate, and showcase problem-solving ability under time pressure.',
    detailsSections: [
      {
        title: 'General Rules',
        items: [
          'Participants must register before the deadline.',
          'Carry ID Card.',
          'Participants can take part individually or in team (maximum 2).',
        ],
      },
      {
        title: 'Coding Rules',
        items: [
          'Contestants have to choose any two problems from given set of problem statements to solve.',
          'Student can bring their own laptop for the coding event.',
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
        { name: 'Mrs. Chethana S. Patil', phone: '8762876411' },
        { name: 'Ms. Roshni A. Sevlani', phone: '8660469036' },
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
    venue: 'Seminar Hall, Mechanical Engineering Department (Co-Ed)',
    teamSize: '2 - 4 participants',
    description:
      'A robotics race where manually controlled wireless bots compete on a track with checkpoints and obstacles. Teams must design a bot within the specified size, weight, and power limits and guide it successfully to the finish line. This event combines technical creativity, speed, and control in an exciting competitive format.',
    poster: roboRacePoster,
    posterAlt: 'Robo Race event poster',
    detailsSections: [
      {
        title: 'General Rules',
        items: [
          'Minimum of 2 participants and maximum of 4 participants in a team allowed.',
          'The Robot will be placed at the start line. The robot starts when the timer starts.',
          'If robot is off track then, the robot should be started from the previous check point.',
          'The timer will stop as soon as the robot crosses the finish line.',
          'Robot should meet the specifications.',
        ],
      },
      {
        title: 'Robot Specifications',
        items: [
          'The BOT should be wireless only.',
          'The machine must be controlled manually.',
          'The maximum dimension of the bot should be 300mm x 300mm x 300mm (L x B x H), failing which the team will be disqualified from the competition.',
          'The total weight of the bot should not exceed 5 kg.',
          'The bot may be made from Lego parts, or any assembly kits, and it must be powered by electrical only.',
          'The use power of IC engine is not allowed or remote controlled cars not allowed.',
          'The power source (Battery) connected to the robot should not exceed 12 V, participants should carry extra batteries with them.',
          'Participants beware that the event may get delayed and lead to disqualification if the bot is not ready when it is your turn.',
        ],
      },
      {
        title: 'Race Track',
        items: [
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
    venue: '3rd Floor, Seminar Hall, BCA (Exclusively for Women)',
    teamSize: 'Individual or team (maximum 5)',
    description:
      'A student innovation showcase featuring digital models and ideas from domains such as IoT, AI/ML, robotics, and smart systems. Participants may take part individually or in teams and present projects that are original, student-built, and practically useful. This event highlights creativity, technical application, and future-ready thinking.',
    detailsSections: [
      {
        title: 'General Rules',
        items: [
          'Participants must register before the deadline.',
          'Carry ID Card.',
          'Participants can take part individually or in team (maximum 5).',
        ],
      },
      {
        title: 'Technical Rules',
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
      'A time-bound photography challenge where participants capture original images within the university campus during the event window. Themes are announced in advance, and entries are judged on originality, composition, and visual storytelling. The event encourages creativity, observation, and ethical photography with only basic editing allowed.',
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
        { name: 'Mr Ayan', phone: '9611343412' },
        { name: 'Shrushti K', phone: '9880430619' },
        { name: 'Anand', phone: '8073647178' },
        { name: 'Keerthi', phone: '9100938874' },
      ],
    },
  },
  {
    id: 'science-exhibition',
    title: 'Science Exhibition',
    category: 'Technical',
    date: '15 May 2026',
    time: '11:00 AM - 12:30 PM',
    venue: '2nd Floor, Department of Mathematics, Faculty of Science and Technology, S.B. College of Science, Gulbarga',
    teamSize: 'Individual or teams (maximum 2 - 3 members)',
    description:
      'A project exhibition that provides students with a platform to present original scientific and technical models. Projects may be based on science and innovation, engineering models, environmental sustainability, mathematical modelling, artificial intelligence, data science, and global challenges. This event promotes creativity, research thinking, and practical demonstration of ideas.',
    detailsSections: [
      {
        title: 'General Guidelines',
        items: [
          'The exhibition is open to all students.',
          'Participation can be individual or in teams (maximum 2 - 3 members).',
          'All participants must register within the stipulated deadline.',
          'Each team/project must have a Team Leader.',
        ],
      },
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
      'An AI-based application development challenge where participants create an original application using tools such as ChatGPT, Copilot, or Gemini. The event focuses on innovation, smart use of AI, and clear presentation of a working demo. Participants get a chance to transform ideas into functional solutions using modern AI-assisted workflows.',
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
          "Plagiarism leads to disqualification. Judges' decision is final.",
          'Total Duration: 2 to 3 Hours.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Siddaling', phone: '9916575250' }],
      student: [
        { name: 'Aditya', phone: '9307698460' },
        { name: 'Omkar', phone: '9380473500' },
        { name: 'Mahantesh', phone: '9110471767' },
        { name: 'Madhura', phone: '9663926444' },
        { name: 'Nikita', phone: '9034580991' },
        { name: 'Mansi', phone: '8431256750' },
      ],
    },
  },
  {
    id: 'cad-war',
    title: 'CAD War',
    category: 'Technical',
    date: '15 May 2026',
    time: '11:30 AM - 01:00 PM',
    venue: 'Department of Civil Engineering (Co-ed)',
    teamSize: 'Individual',
    description:
      'An AutoCAD design competition focused on creating a residential building plan and elevation for a 40 ft x 60 ft plot. Participants must follow standard planning guidelines, government setback rules, and maintain professional layer organization with clear dimensions. The event tests drafting accuracy, planning sense, and technical design presentation.',
    detailsSections: [
      {
        title: 'General Rules',
        items: [
          'Participants must register before the deadline.',
          'Carry ID Card.',
          'Participants can take part individually.',
        ],
      },
      {
        title: 'Technical Rules',
        items: [
          'Participants must create a detailed Residential Building plan and Elevation using AutoCAD for a 40 ft x 60 ft plot, strictly following government building setback rules and standard planning guidelines.',
          'AutoCAD file should be organized into layers for a professional look.',
          'Ensure the following are included: Dimensional Accuracy, all rooms with clear dimensions, standard room sizes, and opening schedule.',
        ],
      },
      {
        title: 'Time Limit',
        items: ['Total Time: 2.5 hours (customize as per event plan).'],
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
    venue: 'Seminar Hall, Faculty of Computer Applications',
    teamSize: 'Individual or max 2',
    description:
      'A handmade poster event where participants present their project or idea in a clear, visually engaging, and informative format. The poster should include title, abstract, objectives, methods, results, and conclusion, followed by a short explanation to the audience. This event rewards clarity, originality, presentation skills, and effective visual communication.',
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
    venue: '3rd Floor, Seminar Hall, Dept of AIML',
    teamSize: 'Team of 2',
    description:
      'A multi-round technical quiz for teams of two that includes a preliminary written round followed by exciting stage rounds. Participants face general questions, buzzer challenges, recent trends, audio-visual prompts, and rapid-fire questions. This event is ideal for students who enjoy technology, quick recall, and competitive teamwork.',
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
          'In the rapid-fire round, each team will be asked 3 question one after another.',
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
    venue: '1st Floor, Room 1, MSc Physics Class, S B College of Science',
    teamSize: '2 - 3 participants',
    description:
      'A formal debate competition where teams speak either for or against the assigned topic in a structured format. Participants are judged on content, clarity, confidence, argument strength, rebuttal skills, and time management. The event encourages thoughtful discussion, respectful expression, and strong public speaking ability.',
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
    title: 'Bug Hunt (Decoding)',
    category: 'Technical',
    date: '16 May 2026',
    time: '11:30 AM - 01:00 PM',
    venue: '1st Floor, Lab - 2, Dept of Artificial Intelligence and Data Science',
    teamSize: 'As per brochure event desk',
    description:
      'A debugging and decoding event for participants who enjoy spotting errors, tracing problems, and solving technical challenges under pressure. Bug Hunt (Decoding) is designed to test attention to detail, logical reasoning, and fast correction skills. It is an engaging event for students who like competitive problem-solving in a technical setting.',
    poster: bugHuntPoster,
    posterAlt: 'Bug Hunt event poster',
    detailsSections: [
      {
        title: 'Brochure Details',
        items: [
          'The brochure provides the official event title, schedule, venue, and coordinator details for this event.',
          'Please contact the event coordinators for the detailed round structure and additional instructions on the event day.',
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
    venue: '1st Floor Electronics and Communication Engineering, Faculty of Engineering and Technology (Exclusively for Women), Sharnbasva University, Kalaburagi',
    teamSize: 'Individual or maximum 5 members',
    description:
      'A technical project exhibition where students present innovative ideas through models, charts, posters, or digital presentations. Participants may compete individually or in teams and showcase their work with institutional approval. This event creates a platform to demonstrate practical knowledge, creativity, and presentation excellence.',
    detailsSections: [
      {
        title: 'Rules',
        items: [
          'Registration should be done before the deadline.',
          'Teams can be individual or maximum of 5 members.',
          'Participants should carry ID card of their institution.',
          'Participants can use charts, poster or digital presentations.',
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
    date: '15 May 2026',
    time: '10:00 AM - 12:00 Noon',
    venue: 'Doddappa Appa Sabha Mantap',
    teamSize: 'Generally 2 members per team',
    description:
      'A management quiz competition that tests business awareness, presence of mind, and team coordination. Teams compete through preliminary and final rounds that may include direct questions, buzzer segments, audio-visual prompts, and rapid fire. This event is perfect for participants who enjoy strategy, current affairs, and competitive quizzing.',
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
      ],
    },
  },
  {
    id: 'trade-quest',
    title: 'TradeQuest [Stock Market Game] - Adventure of Trading',
    category: 'Management',
    date: '15 May 2026',
    time: '02:00 PM - 04:00 PM',
    venue: 'Doddappa Appa Sabha Mantap',
    teamSize: 'Participant/team as per game desk',
    description:
      'A stock market simulation game where participants manage virtual capital and build diversified portfolios across multiple trading sessions. The event focuses on decision-making, trading strategy, and portfolio performance in a competitive environment. It offers an engaging introduction to market thinking and financial analysis.',
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
    id: 'rangoli',
    title: 'Rangoli',
    category: 'Cultural',
    date: '15 May 2026',
    time: '10:00 AM - 11:30 AM',
    venue: 'Lecture Hall 1, Department of English, Faculty of Languages',
    teamSize: 'Individual',
    description:
      'A creative rangoli competition where participants design and complete their artwork within the allotted time using their own materials. The event celebrates color sense, neatness, symmetry, and originality while allowing participants to interpret a theme or create a unique design. It is a vibrant cultural activity that showcases artistic skill and tradition.',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Participants must complete the rangoli within the given time (usually 1 - 2 hours).',
          'Participants should bring their own materials. Only dry rangoli colors are allowed (no flowers or ready-made stencils, unless permitted).',
          'Rangoli should be based on the given theme (if any). Otherwise, participants can choose their own design.',
          'Rangoli must be made within the allotted space and participants should keep their area clean.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Sunita N', phone: '9353369689' }],
      student: [],
    },
  },
  {
    id: 'mehandi',
    title: 'Mehandi',
    category: 'Cultural',
    date: '15 May 2026',
    time: '11:30 AM - 01:00 PM',
    venue: 'Department of Kannada, Faculty of Languages',
    teamSize: 'Individual',
    description:
      'A mehandi design competition where participants create detailed and original patterns within a fixed 90-minute duration. The event highlights creativity, precision, and patience while strictly avoiding ready-made stickers, stencils, or copied designs. It provides a platform for participants to showcase artistic expression through traditional body art.',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'Each participant will be given 90 minutes to complete the design.',
          'Participants must bring their own mehndi cones and materials.',
          'Use of ready-made stickers, stencils, or printed designs is not allowed.',
          'Participants must maintain silence and discipline during the competition.',
          'No external help or copying from others is allowed.',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Jayamala Maka', phone: '7676747447' }],
      student: [],
    },
  },
  {
    id: 'social-awareness-reels',
    title: 'Social Awareness Reels',
    category: 'Cultural',
    date: '15 May 2026',
    time: '02:00 PM - 04:00 PM',
    venue: 'Lecture Hall 1, Department of Kannada, Faculty of Languages',
    teamSize: 'Individual / team as per submission',
    description:
      'A short-form reel-making event centered on social awareness themes such as health, environment, education, and public responsibility. Participants create original 30 to 60 second reels that deliver a clear, respectful, and impactful message. This event combines creativity, digital storytelling, and social relevance in an engaging format.',
    detailsSections: [
      {
        title: 'Key Rules and Regulations',
        items: [
          'The reel must focus on a social awareness topic (e.g., health, environment, education, census awareness, etc.).',
          'The reel should be 30 to 60 seconds only.',
          'Content must be original. No copying or using others videos without permission.',
          'The message should be clear, respectful, and suitable for all audiences. Avoid offensive or inappropriate content.',
          'Participants must submit their reel before the deadline in the specified format/platform (e.g., WhatsApp, Google Drive, Instagram link).',
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Prof. Swaroopa M.Y', phone: '9019754099' }],
      student: [],
    },
  },
  {
    id: 'spot-painting',
    title: 'Spot Painting',
    category: 'Cultural',
    date: '15 May 2026',
    time: '11:00 AM - 01:00 PM',
    venue: 'M.A. in Visual Art Department',
    teamSize: 'Individual',
    description:
      'A live painting event where participants create an original artwork on the spot within a two-hour duration. The competition encourages imagination, artistic discipline, and fresh visual expression using self-brought materials along with the drawing sheet provided by the department. It is a space for artists to display creativity in real time.',
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
    id: 'mandala-art',
    title: 'Mandala Art',
    category: 'Cultural',
    date: '15 May 2026',
    time: '02:00 PM - 04:00 PM',
    venue: 'M.A. in Visual Art Department',
    teamSize: 'Individual',
    description:
      'A focused mandala art event where participants create detailed circular designs that emphasize balance, pattern, and visual harmony. Conducted within a fixed time, the event values originality, patience, and artistic precision. It offers participants a chance to showcase concentration, creativity, and decorative design skill.',
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
      'A themed cultural design event where participants create wearable outfits primarily from waste materials such as paper, cardboard, plastic bottles, fabric waste, and similar items. The event highlights sustainability, creativity, styling, and presentation through concept-based costume design and a short display on stage. It encourages participants to turn discarded materials into imaginative fashion statements.',
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
    time: '02:30 PM',
    venue: 'Doddappa Sabha Mantap',
    teamSize: 'Group song: 4 - 8 participants | Solo: individual',
    fee: 'Group Singing: Rs. 300 per group | Solo Singing: Rs. 100 per participant',
    description:
      'A vocal performance competition for both solo and group entries where participants showcase singing talent, musical expression, and stage confidence. Performances are judged on vocal quality, pitch accuracy, breath control, expression, and audience connection. This event creates a lively platform for students to celebrate music and performance.',
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
          'Reporting: Participants must report 30 - 60 minutes before the event starts.',
          'ID Cards: Participants must carry valid college ID cards for verification with two faculties.',
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
        { name: 'Bhagyashree', phone: '' },
        { name: 'Bhavani', phone: '' },
        { name: 'Malavika', phone: '8197172720' },
        { name: 'Pallavi', phone: '' },
      ],
    },
  },
  {
    id: 'dance-competition',
    title: 'Dance Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '10:30 AM',
    venue: 'Doddappa Sabha Mantap',
    teamSize: 'Group dance: 4 - 6 participants | Solo: individual',
    fee: 'Group Dance: Rs. 300 per group | Solo Dance: Rs. 100 per participant',
    description:
      'A solo and group dance competition featuring styles such as folk, tribal, classical, freestyle, contemporary, and Bollywood. Participants are judged on rhythm, formation, synchronization, expressions, costumes, and overall stage impact. The event offers an energetic platform to showcase performance skill, creativity, and coordination.',
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
        { name: 'Basavalinga', phone: '8618863318' },
      ],
    },
  },
  {
    id: 'ramp-walk-competition',
    title: 'Ramp Walk Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '08:30 AM',
    venue: 'Doddappa Sabha Mantap',
    teamSize: 'Group Ramp Walk: 4 - 6 participants | Solo: individual',
    fee: 'Group Ramp Walk: Rs. 300 per group | Solo Ramp Walk: Rs. 100 per participant',
    description:
      'A themed solo and group ramp walk event where participants present costumes and concepts with confidence, attitude, and stage presence. Judging focuses on creativity, originality, theme interpretation, choreography, and use of the ramp. This event blends fashion, performance, and cultural expression in an exciting presentation format.',
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
          'Reporting: Participants must report 30 minutes before the event starts.',
          'ID Cards: Participants must carry valid college ID cards for verification with two faculties.',
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
        { name: 'Vaishnavi', phone: '9980985653' },
        { name: 'Bhagya', phone: '8799931903' },
      ],
    },
  },
  {
    id: 'standup-comedy',
    title: 'Standup Comedy Competition',
    category: 'Cultural',
    date: '16 May 2026',
    time: '01:30 PM',
    venue: 'Doddappa Sabha Mantap',
    teamSize: 'Individual',
    fee: 'Rs. 100 per participant',
    description:
      'A solo standup comedy event where participants entertain the audience through clean humor, original content, and confident stage delivery. Judging is based on comic timing, storytelling, audience response, and overall presentation. This event is ideal for performers who can engage a crowd with wit, creativity, and strong stage presence.',
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
          "Judges' Decision: The decision of the judges is final and binding in all cases.",
        ],
      },
    ],
    contacts: {
      faculty: [{ name: 'Dr Shweta Patil', phone: '9535458428' }],
      student: [{ name: 'Mallikarjun', phone: '8217638131' }],
    },
  },
]
