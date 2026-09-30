// PSIS Content Mentoring & Video Production Operating System (Enterprise Edition)
// Comprehensive dataset: 33 Lessons with Do's/Don'ts, Frameworks, Personas, Competitor Teardowns, Checklist & Idea Engine

const PSIS_DATA = {
  system: {
    name: "PSIS CONTENT PLAYBOOK & OS",
    version: "v2.5 Enterprise",
    institution: "Paññāsāstra International School (PSIS)",
    mentors: "Chhit (Lead Content Mentor) × DG × PSIS Media Team",
    lastUpdated: "2026",
    mottoKhmer: "បង្ហាញថា អ្វីដែល PSIS ធ្វើ មានន័យអ្វីសម្រាប់កូន និងអនាគតរបស់កូន",
    mottoEnglish: "Beyond Memorization → Understanding → Character → Future",
    brandPillars: [
      { en: "Future-focused", km: "តម្រង់ទិសអនាគត", desc: "រៀបចំកុមារសម្រាប់សតវត្សរ៍ទី ២១ មិនមែនត្រឹមតែការប្រឡងយកពិន្ទុ" },
      { en: "Kindness", km: "មេត្តាករុណា & ក្តីស្រឡាញ់", desc: "ការយកចិត្តទុកដាក់ បរិយាកាសកក់ក្តៅ និងការគោរពសេចក្តីថ្លៃថ្នូរ" },
      { en: "Collaboration", km: "កិច្ចសហប្រតិបត្តិការ", desc: "ការចេះធ្វើការជាក្រុម រវាងសិស្សនិងសិស្ស គ្រូនិងមាតាបិតា" }
    ]
  },

  brand: {
    title: "PSIS GUIDELINE & BRAND ARCHITECTURE",
    tuitionRange: "$3,200 - $3,800 / ឆ្នាំ (មធ្យម ~$3,500)",
    personality: "Modern • Caring • Future-focused • Disciplined • Collaborative • Student-centered",
    colors: [
      { name: "PSIS Navy Deep", hex: "#06134b", rgb: "6, 19, 75", cmyk: "92, 75, 0, 71", role: "Primary Base, Headers & Badges" },
      { name: "PSIS Royal Blue", hex: "#0d47a1", rgb: "13, 71, 161", cmyk: "92, 56, 0, 37", role: "Secondary, Hero Gradients & Accents" },
      { name: "Electric Blue", hex: "#2563eb", rgb: "37, 99, 235", cmyk: "84, 58, 0, 8", role: "Call-to-Action, Active States & Links" },
      { name: "Prestige Gold", hex: "#f59e0b", rgb: "245, 158, 11", cmyk: "0, 36, 96, 4", role: "Key Highlights, Badges & Accents" },
      { name: "Soft Canvas Slate", hex: "#f8fafc", rgb: "248, 250, 252", cmyk: "2, 1, 0, 1", role: "Page Background & High Comfort Canvas" },
      { name: "Border Subtle", hex: "#e2e8f0", rgb: "226, 232, 240", cmyk: "6, 3, 0, 6", role: "Dividers, Card Outlines & Grid Borders" },
      { name: "Deep Ink Charcoal", hex: "#0f172a", rgb: "15, 23, 42", cmyk: "64, 45, 0, 84", role: "High-contrast Typography & Headings" }
    ],
    typography: {
      primaryFont: "Kantumruy Pro",
      fallbacks: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      hierarchy: [
        { level: "Display Title (H1)", size: "28px - 32px", weight: "700", use: "Page Hero & Major Section Headings" },
        { level: "Section Heading (H2)", size: "20px - 24px", weight: "700", use: "Panels, Categories & Feature Titles" },
        { level: "Card Heading (H3)", size: "17px - 19px", weight: "700", use: "Lesson English Titles & Persona Names" },
        { level: "Body Text", size: "14.5px - 15.5px", weight: "400 - 500", use: "Descriptions, Explanations & Content" },
        { level: "Meta & Caption", size: "11.5px - 13px", weight: "500 - 600", use: "Tags, Timestamps, Steps & Shortcuts" }
      ]
    },
    specs: {
      aspectRatio: "9:16 (Vertical Reel / TikTok) & 16:9 (YouTube / Landscape)",
      safeZones: "កម្ពស់ខាងលើ 15% (Logo & Top Header), កម្ពស់ខាងក្រោម 25% (Captions, CTA & UI Buttons)",
      captionRule: "អក្សរលើអេក្រង់មិនលើសពី ២ បន្ទាត់ក្នុងមួយ Screen, ប្រើពណ៌ស ឬលឿង មានស្រមោល Drop-shadow ខ្មៅ"
    },
    campuses: [
      { code: "TK", name: "Toul Kork Campus (ទួលគោក)", focus: "Kindergarten to High School, Elite Academic Hub" },
      { code: "TTP", name: "Toul Tom Poung Campus (ទួលទំពូង)", focus: "Central City, Interactive Classrooms & Language Center" },
      { code: "RSK", name: "Russey Keo Campus (ឫស្សីកែវ)", focus: "Modern Facilities, Sports Courts & Science Labs" },
      { code: "CAP", name: "Chbar Ampov Campus (ច្បារអំពៅ)", focus: "Spacious Campus, Kindergarten & Primary Excellence" },
      { code: "NR3", name: "National Road 3 Campus (ផ្លូវជាតិលេខ ៣)", focus: "Growing Community, Scholarship & Quality Education" },
      { code: "BTB", name: "Battambang Campus (ខេត្តបាត់ដំបង)", focus: "Regional Flagship, Traditional & Future Skills Combined" }
    ],
    facilities: [
      { name: "ICT & Computer Lab", desc: "បំពាក់កុំព្យូទ័រទំនើប សម្រាប់រៀន Coding, CodeMonkey និងស្រាវជ្រាវ" },
      { name: "Science Lab", desc: "បន្ទប់ពិសោធន៍រូបវិទ្យា គីមីវិទ្យា និងជីវវិទ្យា តាមស្តង់ដារសុវត្ថិភាព" },
      { name: "Interactive Classroom", desc: "បំពាក់ក្តារខៀនឆ្លាតវៃ Infinity Pro Whiteboard និង Projector" },
      { name: "Library & Reading Hub", desc: "ប្រមូលផ្តុំសៀវភៅជាតិ-អន្តរជាតិ និងកម្មវិធី Raz-Kids" },
      { name: "Art & Creativity Studio", desc: "កន្លែងហាត់គូរគំនូរ សូនរូប និងអភិវឌ្ឍការស្រមើលស្រមៃ" },
      { name: "Sports Arena & Pool", desc: "តារាងបាល់ទាត់ បាល់បោះ និងអាងហែលទឹកស្តង់ដារ" },
      { name: "Meditation Room", desc: "បន្ទប់ស្ងប់អារម្មណ៍ បណ្តុះសមាធិ និងសីលធម៌ពុទ្ធសាសនា" },
      { name: "Rest & Nap Area", desc: "កន្លែងគេងសម្រាកថ្ងៃត្រង់មានផាសុកភាពសម្រាប់កុមារតូច" },
      { name: "Secure School Bus & Access", desc: "ឡានក្រុងមានសុវត្ថិភាព និងប្រព័ន្ធស្កេនកាតសិស្សចេញ-ចូល" }
    ],
    programs: [
      { name: "ELIF Program", desc: "កម្មវិធីរៀនភាសាអង់គ្លេសតាមបែបធម្មជាតិ បង្កើតភាពសប្បាយរីករាយ និងទំនុកចិត្ត" },
      { name: "CodeMonkey & Robotics (Kubo/Kubit)", desc: "បណ្តុះបណ្តាលការគិតបែបក្បួនដោះស្រាយ (Computational Thinking) តាំងពីកុមារ" },
      { name: "Raz-Kids Reading", desc: "ពង្រឹងទម្លាប់អានភាសាអង់គ្លេសតាមកម្រិតសមត្ថភាពសិស្សនីមួយៗ" },
      { name: "Seamo X & STEM", desc: "ការប្រកួតប្រជែងគណិតវិទ្យា និងវិទ្យាសាស្ត្រកម្រិតអន្តរជាតិ" },
      { name: "Trilingual Curriculum", desc: "ភាសាខ្មែរ ភាសាអង់គ្លេស និងភាសាចិន ជាមួយគ្រូបរទេសនិងក្នុងស្រុក" },
      { name: "Taekwondo & Swimming", desc: "ពង្រឹងសុខភាពផ្លូវកាយ វិន័យខ្លួនឯង និងជំនាញការពារខ្លួន" },
      { name: "Good Morals & Life Skills", desc: "បណ្តុះបណ្តាលសីលធម៌ គុណធម៌ និងការទទួលខុសត្រូវក្នុងជីវិតប្រចាំថ្ងៃ" }
    ],
    competitors: [
      { name: "Western International School", type: "Direct", strength: "Strong marketing reach", weakness: "Focuses heavily on discounts; lacks deep character storytelling" },
      { name: "Sovannaphumi School", type: "Direct", strength: "Large campus branch network", weakness: "High classroom density; more traditional rote approach" },
      { name: "Beltei International", type: "Indirect", strength: "Strict discipline & large scale", weakness: "Rote-memorization oriented; less focus on 21st century creative skills" }
    ]
  },

  dossier: {
    parent: {
      name: "Pitou (ប៉ា ពីទូ)",
      avatarInitial: "P",
      age: 35,
      role: "Director of Operations, Chipmong Group",
      location: "Borey Chipmong Land 271, Phnom Penh",
      family: "ភរិយា: Lida (អាយុ 32 ឆ្នាំ), កូនស្រី: Vichera (អាយុ 7 ឆ្នាំ រៀននៅ PSIS CAP), កូនប្រុស: Virakboth (អាយុ 5 ឆ្នាំ)",
      incomeStatus: "High-income ($3,000 - $6,000/ខែ), Bank ~$50k, ជិះរថយន្តទំនើប",
      lifestyle: "រវល់ការងារខ្លាំង ចូលចិត្តលេងបាល់ទាត់ ញ៉ាំអាហារល្អសម្រាប់សុខភាព ចុងសប្តាហ៍ទៅ Camping ឬលំហែនៅកំពតជាមួយគ្រួសារ",
      mediaBehavior: "ប្រើប្រាស់ Facebook ច្រើនរាល់ថ្ងៃ តែជា 'Silent Consumer' (មិនសូវ Post រូបខ្លួនឯងទេ តែចូលចិត្តមើល Reel ស្រាវជ្រាវការអប់រំកូន)",
      coreAspirations: "ចង់ឱ្យកូនឆ្លាត ក្លាហាន ចេះដោះស្រាយបញ្ហាពិត មានជំនាញអង់គ្លេសស្ទាត់ និងមានឱកាសទៅផ្លាស់ប្តូរការសិក្សានៅប្រទេសអូស្ត្រាលី (Australia Exchange) ថ្ងៃមុខ",
      keyPainPoints: [
        "កូនទន្ទេញចាំតែមេរៀនពេលប្រឡង តែពេលចេញក្រៅមិនចេះយកទៅអនុវត្តជាក់ស្តែង",
        "កូនខ្មាស់អៀន មិនហ៊ានលើកដៃ ឬនិយាយបញ្ចេញមតិនៅមុខមនុស្សច្រើន",
        "ខ្លួនរវល់ធ្វើការខ្លាំង បារម្ភពីសុវត្ថិភាព របបអាហារថ្ងៃត្រង់ និងការសម្រាករបស់កូននៅសាលា"
      ],
      dislikes: "មិនចូលចិត្តការអួតអាង (Show off), មិនចូលចិត្តការលក់បញ្ចុះតម្លៃខ្លាំងពេក, មិនចូលចិត្តវីដេអូរញ៉េរញ៉ៃគ្មានខ្លឹមសារអប់រំ"
    },
    student: {
      name: "Vichera Cheata (កូនស្រី វិច្ឆិកា)",
      avatarInitial: "V",
      age: 7,
      grade: "Grade 2 (បឋមសិក្សា)",
      campus: "PSIS Chbar Ampov (CAP)",
      hobbies: "ចូលចិត្តរៀន English, គូរគំនូរ, តុក្កតា, មើលតុក្កតាភាសាអង់គ្លេស",
      challenge: "ពេលខ្លះស្ទាក់ស្ទើរ ខ្លាចខុស ញ័រដៃពេលគ្រូហៅឡើងនិយាយមុខថ្នាក់រៀន"
    }
  },

  ideaBank: {
    programs: ["Coding & CodeMonkey", "Science Lab Experiment", "ELIF Fun English", "Swimming Class", "Nap & Lunch Routine", "Group Discussion & Teamwork", "Traditional Monk Ethics Class", "Taekwondo Discipline"],
    angles: ["សំណួរចាក់ដោតពីកង្វល់ម៉ាក់ប៉ា (Think)", "ភាពផ្ទុយពីការរំពឹងទុក (Shock)", "ដំណើរផ្លាស់ប្តូររបស់កូន (Before/After)", "ការណែនាំពីគ្រូជំនាញ (Teacher Insight)", "ទស្សនៈពីកូនសិស្សផ្ទាល់ (Student POV)"],
    painPoints: ["កូនមិនហ៊ាននិយាយភាសាអង់គ្លេស", "កូនចាំតែមេរៀន មិនយល់ការអនុវត្ត", "កូនញៀនទូរស័ព្ទនៅផ្ទះ", "កូនគ្មានវិន័យ និងការទទួលខុសត្រូវ", "កូនមិនចេះសហការជាមួយមិត្តភក្តិ"]
  },

  lessons: [
    {
      id: 1,
      category: "foundation",
      titleEn: "Understanding Where You Are",
      titleKm: "ស្គាល់ចំណុចខ្លាំង និងអ្វីដែលត្រូវកែលម្អ",
      subtitle: "វាយតម្លៃសមត្ថភាពផ្ទាល់ខ្លួន និងកំណត់គោលដៅអភិវឌ្ឍន៍ជំនាញ",
      core: "Self-awareness + Improvement: ជ្រើសជំនាញមួយហាត់ ហើយប្រៀបធៀបការងារមុន និងក្រោយ។",
      learn: "វាយតម្លៃសមត្ថភាពបច្ចុប្បន្ន អ្វីធ្វើបានដោយខ្លួនឯង អ្វីត្រូវការ Mentor និងកំណត់គោលដៅ ៣ ខែ / ១ ឆ្នាំ។ គោលដៅរៀនរួមមាន Creative ideas, Modern design, Video production, Editing, Impactful content, English, Planning, Reporting និង Research។",
      action: "រាល់ខែ កត់អ្វីដែលប្រសើរឡើង ចំណុចនៅខ្សោយ និងជំនាញត្រូវហាត់បន្ទាប់។ ធ្វើ Self-reflection ជាប្រចាំ។",
      example: "ជ្រើសរើសជំនាញជាក់លាក់មួយ (ឧទាហរណ៍៖ ការកាត់ត Footage ឬការសរសេរ Hook) ហើយប្រៀបធៀបស្នាដៃខែមុន និងខែនេះ ដើម្បីវាស់ស្ទង់ការវិវឌ្ឍ។",
      dos: ["កត់ត្រាការរីកចម្រើនប្រចាំខែ", "ហ៊ានសុំ Feedback ពី Mentor និងសមាជិកក្រុម", "ផ្តោតលើជំនាញមួយឱ្យច្បាស់លាស់មុនប្តូរទៅជំនាញបន្ទាប់"],
      donts: ["កុំគិតថាខ្លួនឯងចេះអស់ហើយដោយមិនព្រមរៀនអ្វីថ្មី", "កុំខ្លាចកំហុសក្នុងដំណាក់កាលសាកល្បងគំនិតច្នៃប្រឌិត"],
      tags: ["Mindset", "Self-growth", "Skill Assessment"]
    },
    {
      id: 2,
      category: "foundation",
      titleEn: "Understanding the Client",
      titleKm: "ស្គាល់ PSIS មុនសរសេរ Content",
      subtitle: "យល់ច្បាស់ពីប្រព័ន្ធសាលា កម្មវិធីសិក្សា និងបរិក្ខារនានា",
      core: "Know the Brand: កុំជ្រើសប្រធានបទត្រឹមតែដោយសារមានអ្វីថត។",
      learn: "យល់ពីប្រភេទសាលា កម្មវិធី Facilities, Campus, Extra programs, Mission, Vision, តម្លៃ គោលដៅអាជីវកម្ម និងគោលដៅ Social media។ បញ្ជីក្នុងសេចក្តីសង្ខេប៖ ICT Room, Science Lab, Art Room, Library, Playground, Canteen, Event Hall, School Bus, Interactive Classroom, Student Card Security, Football, Basketball, Meditation Room និង Nap/Rest Area។ កម្មវិធី៖ English, Khmer, Chinese, Maths, Science, Art, ICT, Good Morals, ELIF, Taekwondo, Swimming, Robotics, Raz-Kids និង CodeMonkey។",
      action: "ផ្ទៀងផ្ទាត់ព័ត៌មានតាម Campus រួចសួរថា៖ អ្វីដែលខ្ញុំថត បង្ហាញអ្វីពី PSIS? តើវាឆ្លុះបញ្ចាំងពីគុណតម្លៃសាលាយ៉ាងដូចម្តេច?",
      example: "មុននឹងផលិតវីដេអូពី Robotics ត្រូវដឹងថាសិស្សកម្រិតណាខ្លះដែលរៀន ហើយវាជួយអ្វីដល់ការគិតបែបរិះគន់ (Critical thinking) របស់កូន។",
      dos: ["ផ្ទៀងផ្ទាត់វត្តមានពិតប្រាកដនៃសម្ភារ និងកម្មវិធីតាម Campus នីមួយៗ", "រាល់សកម្មភាពត្រូវឆ្លុះបញ្ចាំងពីអត្តសញ្ញាណ PSIS"],
      donts: ["កុំជ្រើសរើសប្រធានបទគ្រាន់តែដោយសារតែឃើញមានរបស់ស្អាតថត", "កុំផ្សព្វផ្សាយកម្មវិធីណាដែល Campus នោះមិនទាន់មាន"],
      tags: ["Brand Identity", "PSIS Context", "Facilities"]
    },
    {
      id: 3,
      category: "foundation",
      titleEn: "Client Goals",
      titleKm: "Content នីមួយៗត្រូវមានគោលដៅ",
      subtitle: "កំណត់គោលដៅច្បាស់លាស់មុនពេលចាប់ផ្តើមផលិត",
      core: "Clear Objectives: កំណត់គោលដៅចម្បងមួយមុនថត និងជ្រើសលទ្ធផលដែលត្រូវតាមដាន។",
      learn: "គោលដៅអាចជា Enrollment, Awareness, Inquiries, School visits, Parent trust, Promote programs, Differentiation, Positioning, Education philosophy និងផ្តល់ប្រយោជន៍ដល់ Parent។",
      action: "ជ្រើសរើសគោលដៅចម្បងតែមួយគត់សម្រាប់វីដេអូនីមួយៗ ដើម្បីចៀសវាងភាពរញ៉េរញ៉ៃនៃសារ។",
      example: "Rest Time → Trust; 3 Languages → Differentiation; Enrollment → Action; Teacher explains Science → Educational authority។",
      dos: ["កំណត់គោលដៅតែមួយចម្បងក្នុងមួយវីដេអូ", "ភ្ជាប់គោលដៅទៅកាន់សូចនាករវាស់វែង (KPI)"],
      donts: ["កុំព្យាយាមដាក់គោលដៅច្រើនពេកក្នុងវីដេអូតែមួយ ធ្វើឱ្យអ្នកមើលវង្វេង"],
      tags: ["Goal Setting", "Objectives", "KPI"]
    },
    {
      id: 4,
      category: "audience",
      titleEn: "Understanding Target Audience",
      titleKm: "ស្គាល់អ្នកមើលលើសពីអាយុ និងទីតាំង",
      subtitle: "សិក្សាស៊ីជម្រៅលើចិត្តសាស្ត្រ និងទម្លាប់របស់មាតាបិតា",
      core: "Right Message → Right Person: Parent រវល់ការងារ អាចចាប់អារម្មណ៍ Routine និងការថែទាំកូន។",
      learn: "សិក្សា Age, Gender, Location, Income, Job, Family, Lifestyle, Hobbies, Likes, Dislikes, Shopping habits, Social media behavior, កង្វល់ និងបំណងប្រាថ្នាសម្រាប់កូន។",
      action: "ប្រមូលសំណួរពិតពី Parent តាមរយៈការសាកសួរក្រុមការងារ Admission ឬគ្រូប្រចាំថ្នាក់ ហើយសរសេរអ្វីដែលពួកគេចង់ដឹងពិតប្រាកដ។",
      example: "មាតាបិតាដែលធ្វើការងារការិយាល័យពេញម៉ោង ច្រើនតែបារម្ភពីរបបអាហារថ្ងៃត្រង់ ការសម្រាក និងសុវត្ថិភាពក្នុងការធ្វើដំណើររបស់កូន។",
      dos: ["សិក្សាលើទម្លាប់ និងកង្វល់ផ្លូវចិត្តរបស់មាតាបិតា", "ស្តាប់សំណួរពិតដែលមាតាបិតាសួរក្រុមការងារ Admission"],
      donts: ["កុំសន្មតព័ត៌មានទស្សនិកជនដោយគ្មានមូលដ្ឋានទិន្នន័យជាក់ស្តែង"],
      tags: ["Audience Research", "Demographics", "Psychographics"]
    },
    {
      id: 5,
      category: "audience",
      titleEn: "Creating Audience Persona",
      titleKm: "សរសេរដូចនិយាយទៅកាន់មនុស្សម្នាក់",
      subtitle: "បង្កើតរូបតំណាងទស្សនិកជនជាក់លាក់ (Persona)",
      core: "Talk to Someone, Not Everyone: កុំសន្មតព័ត៌មាន Persona ថាជាការពិត បើគ្មានទិន្នន័យគាំទ្រ។",
      learn: "Persona រួមមានកន្លែងរស់នៅ កូន ការងារ ចំណូល ចំណូលចិត្ត អ្វីមិនចូលចិត្ត ទម្លាប់ប្រើ Facebook និងក្តីរំពឹងចំពោះកូន។ ក្នុងឯកសារស្រាវជ្រាវ PSIS បានលើកយក Persona 'ប៉ា ពីទូ (Pitou)' អាយុ ៣៥ ឆ្នាំ ធ្វើការនៅ Chipmong Group រស់នៅបុរី ២៧១។",
      action: "សរសេររូបរាងទស្សនិកជនគោលដៅមួយ រួចអាន Script ដូចកំពុងនិយាយទៅកាន់គាត់ដោយផ្ទាល់។",
      example: "ស្រមៃមើល 'ប៉ា Pitou' អាយុ ៣៥ ឆ្នាំ មានកូនស្រីរៀននៅ PSIS ចង់ឱ្យកូនក្លាហាន ចេះដោះស្រាយបញ្ហាពិត និងមានឱកាសទៅសិក្សានៅអូស្ត្រាលី។",
      dos: ["ប្រើរូបភាពតំណាងជាក់លាក់ដូចជា 'ប៉ា ពីទូ'", "អាន Script ឮៗដើម្បីមើលថាតើសម្តីនោះស្តាប់ទៅសមរម្យសម្រាប់មនុស្សម្នាក់នោះឬទេ"],
      donts: ["កុំសរសេរ Script ជារួមៗដែលគ្មានអ្នកណាមានអារម្មណ៍ថាត្រូវនឹងខ្លួន"],
      tags: ["Persona", "Pitou", "Targeting", "Tone"]
    },
    {
      id: 6,
      category: "audience",
      titleEn: "Audience Pain Points",
      titleKm: "ចាប់ផ្តើមពីកង្វល់របស់ម៉ាក់ប៉ា",
      subtitle: "ស្វែងយល់ពីបញ្ហាពិតដែលមាតាបិតាព្រួយបារម្ភរាល់ថ្ងៃ",
      core: "Solve Real Problems: ជ្រើសកង្វល់មួយភ្ជាប់ទៅសកម្មភាពពិតដែលអាចបង្ហាញបាន។",
      learn: "កង្វល់អាចជា កូនមិនហ៊ាននិយាយ ខ្មាស់អៀន ចាំតែមិនយល់ សុវត្ថិភាព គ្មានអ្នកមើលថ្ងៃត្រង់ អនាគត ភាសាអង់គ្លេស វិន័យ ទំនុកចិត្ត បច្ចេកវិទ្យា និងការគិតដោយខ្លួនឯង។",
      action: "កត់ត្រាបញ្ហាទាំងនេះទុក ហើយយកមកធ្វើជាប្រធានបទចាប់ផ្តើមវីដេអូ។",
      example: "«កូនរៀន English រាល់ថ្ងៃ… តែហេតុអីនៅតែមិនហ៊ាននិយាយ?» — ប្រើ Hook នេះដើម្បីបើកបង្ហាញពីរបៀបដែល PSIS ហាត់ឱ្យកូននិយាយក្នុងថ្នាក់។",
      dos: ["ចាប់ផ្តើមវីដេអូពីកង្វល់ចាក់ដោតដែលមាតាបិតាជួបប្រទះពិតប្រាកដ", "ផ្តល់ដំណោះស្រាយជាក់ស្តែងដែលសាលាអាចធ្វើបាន"],
      donts: ["កុំយកបញ្ហាដែលគ្មានដំណោះស្រាយមកនិយាយធ្វើឱ្យមាតាបិតាកាន់តែភ័យខ្លាច"],
      tags: ["Pain Points", "Parent Psychology", "Empathy"]
    },
    {
      id: 7,
      category: "strategy",
      titleEn: "Effective Content",
      titleKm: "Message + Audience + Purpose + Emotion + Result",
      subtitle: "រូបមន្តមាតិកាដែលមានឥទ្ធិពល និងអត្ថន័យ",
      core: "Content Must Have Meaning: មួយវីដេអូ ផ្តោតលើសារចម្បងមួយ។",
      learn: "រូបស្អាត Video smooth, Transition និង Camera ជាផ្នែកមួយ។ ខ្លឹមសារត្រូវមានសារច្បាស់ និងអត្ថន័យចំពោះអ្នកមើល។",
      action: "មុនផលិត សរសេរ៖ Viewer គួរដឹងអ្វី? មានអារម្មណ៍អ្វី? ធ្វើអ្វី?",
      example: "វីដេអូមិនមែនគ្រាន់តែបង្ហាញកុមារលេងពណ៌នោះទេ តែត្រូវបង្ហាញថាការលេងពណ៌ជួយអភិវឌ្ឍខួរក្បាល និងការសម្រេចចិត្តរបស់កុមារកម្រិតណា។",
      dos: ["កំណត់សារចម្បងតែមួយគត់ឱ្យច្បាស់មុនថត", "ធ្វើឱ្យវីដេអូបង្កប់អារម្មណ៍កក់ក្តៅ និងមានន័យ"],
      donts: ["កុំផ្តោតតែលើ Transition និង Effects ភ្លឺផ្លេកតែគ្មានខ្លឹមសារ"],
      tags: ["Content Core", "Effectiveness", "Production Value"]
    },
    {
      id: 8,
      category: "strategy",
      titleEn: "Types of Content",
      titleKm: "ជ្រើសប្រភេទ Content ឲ្យត្រូវគោលដៅ",
      subtitle: "ការបែងចែក Content Pillars ទាំង ៦ ប្រភេទ",
      core: "Content Pillars: កុំឲ្យផែនការពេញមួយខែមានតែប្រភេទតែមួយ។",
      learn: "Educational: Tips, Teacher advice, Parenting។ Proof: Speaking, Problem solving, Presentation, Coding, Group work។ Trust: Lunch, Rest, Safety, Care, Routine។ Program: ELIF, IFL, Robotics, Coding, Taekwondo, Art។ Story: Student, Parent, Teacher, Achievement។ Enrollment: Admissions, Promotion, Visit, CTA។",
      action: "ប្រើក្រុមទាំងនេះដើម្បីរៀបចំ Calendar ប្រចាំខែឱ្យមានតុល្យភាព។",
      example: "សប្តាហ៍ទី១ ផ្តោតលើ Educational & Trust; សប្តាហ៍ទី២ ផ្តោតលើ Program & Proof; សប្តាហ៍ទី៣ ផ្តោតលើ Story; សប្តាហ៍ទី៤ បញ្ចូល Enrollment CTA។",
      dos: ["រៀបចំសមាមាត្រមាតិកាឱ្យមានតុល្យភាពគ្រប់ Pillars ទាំង ៦", "សាកល្បងប្រភេទមាតិកាថ្មីៗជាប្រចាំ"],
      donts: ["កុំផុសតែមាតិកាលក់ (Enrollment) រាល់ថ្ងៃ ធ្វើឱ្យអ្នកមើលធុញទ្រាន់"],
      tags: ["Content Pillars", "Calendar", "Diversity"]
    },
    {
      id: 9,
      category: "strategy",
      titleEn: "Effective Marketing",
      titleKm: "យល់តម្រូវការ រួចបង្ហាញតម្លៃ",
      subtitle: "ពីការស្គាល់មនុស្ស ទៅការកសាងទំនុកចិត្ត និងសកម្មភាព",
      core: "Right Message → Right Person: Advertising ជាផ្នែកមួយនៃ Marketing។",
      learn: "ស្គាល់មនុស្ស → យល់តម្រូវការ → បង្កើត Message → បង្ហាញ Value → បង្កើត Trust → Action។",
      action: "ពិនិត្យថា សារនេះសមនឹងអ្នកមើល និងដំណាក់កាលសម្រេចចិត្តរបស់គេឬអត់។",
      example: "កុំទាន់អាលទាក់ទាញឱ្យគាត់ចុះឈ្មោះ បើគាត់ទើបតែឃើញសាលាយើងលើកដំបូង។ ត្រូវបង្ហាញពីតម្លៃសាលាសិន។",
      dos: ["ផ្តល់តម្លៃ និងចំណេះដឹងមុនទាមទារសកម្មភាព", "កសាងទំនុកចិត្តជាជំហានៗ"],
      donts: ["កុំគិតតែពីការ Boost Ads ដោយគ្មានយុទ្ធសាស្ត្រយល់ចិត្តអតិថិជន"],
      tags: ["Marketing", "Value Proposition", "Strategy"]
    },
    {
      id: 10,
      category: "strategy",
      titleEn: "Marketing Funnel",
      titleKm: "Awareness → Interest → Trust → Action",
      subtitle: "ដំណើរនៃការសម្រេចចិត្តរបស់មាតាបិតា",
      core: "Funnel Alignment: សម្គាល់ Funnel stage របស់ Post នីមួយៗ ហើយប្រើ CTA សមស្រប។",
      learn: "Awareness: Reels, Activities, Events។ Interest: Program explanation, Classroom experience, Teaching methods។ Trust: Teacher expertise, Student proof, Testimonials, Care, Safety, Results។ Action: Message, Visit, Ask price, Register, Enroll។",
      action: "កំណត់ថាវីដេអូនីមួយៗស្ថិតក្នុងដំណាក់កាលណា ហើយកុំលាយឡំ CTA ខុសដំណាក់កាល។",
      example: "អ្នកទើបស្គាល់សាលា អាចត្រូវការយល់ពីថ្នាក់រៀន (Interest/Trust) មុនសម្រេចចិត្តមកទស្សនា ឬចុះឈ្មោះ (Action)។",
      dos: ["តម្រឹម CTA ទៅតាមកម្រិត Funnel នីមួយៗ", "ប្រើ Reels ទាក់ទាញ Awareness និងប្រើ Long-form បង្កើត Trust"],
      donts: ["កុំដាក់ CTA ចុះឈ្មោះភ្លាមៗលើវីដេអូទើបតែចាប់ផ្តើម Awareness"],
      tags: ["Funnel", "Customer Journey", "Conversion"]
    },
    {
      id: 11,
      category: "strategy",
      titleEn: "Advertising Without Being Pushy",
      titleKm: "ផ្តល់តម្លៃ មុនស្នើឲ្យធ្វើសកម្មភាព",
      subtitle: "កសាងមាតិកាដែលទាក់ទាញដោយមិនបង្ខំឱ្យចុះឈ្មោះ",
      core: "Value-First Approach: ផ្តល់តម្លៃ មុនស្នើឲ្យធ្វើសកម្មភាព។",
      learn: "បើគ្រប់វីដេអូផ្តោតតែ Enroll Now ឬ Register Now អ្នកមើលអាចមានអារម្មណ៍ថាត្រូវបានលក់ខ្លាំងពេក និងធុញទ្រាន់។",
      action: "បង្ហាញអ្វីដែលកូនហាត់រៀន និងភស្តុតាង រួចដាក់ CTA ស្រាលនៅចុងក្រោយ។",
      example: "«ពេលរៀន Coding កូនកំពុងហាត់គិតជាជំហានៗ និងដោះស្រាយបញ្ហា» — បង្ហាញសកម្មភាពដែលគាំទ្រសារនេះ រួចបញ្ចប់ដោយ 'ស្វែងយល់បន្ថែមអំពីកម្មវិធីសិក្សា'។",
      dos: ["បង្ហាញលទ្ធផលជាក់ស្តែងដែលកុមារទទួលបាន", "ប្រើពាក្យអញ្ជើញទស្សនាសាលាដោយភាពរាក់ទាក់"],
      donts: ["កុំប្រើពាក្យបង្ខិតបង្ខំ ឬការបញ្ចុះតម្លៃខ្លាំងពេកដែលធ្វើឱ្យបាត់តម្លៃសាលា"],
      tags: ["Soft Selling", "Value First", "CTA"]
    },
    {
      id: 12,
      category: "trust",
      titleEn: "Show Value Behind Activities",
      titleKm: "Activity → Skill → Benefit → Future",
      subtitle: "បង្ហាញអត្ថន័យ និងអត្ថប្រយោជន៍នៅពីក្រោយសកម្មភាពនីមួយៗ",
      core: "Deep Meaning: ជ្រើសជំនាញមួយដែល Footage បង្ហាញច្បាស់ រួចភ្ជាប់ទៅប្រយោជន៍សម្រាប់កូន។",
      learn: "Group discussion អាចបង្ហាញការហាត់ Communication, Confidence, Listening, Teamwork និង Critical thinking។ ប្រាប់ហេតុអ្វីសកម្មភាពនេះមានន័យ។",
      action: "រាល់ពេលថតសកម្មភាពមួយ សួរថា៖ សកម្មភាពនេះជួយអ្វីដល់កូន? ហាត់ជំនាញអ្វី? ផ្តល់ប្រយោជន៍អ្វីថ្ងៃមុខ?",
      example: "ឃើញសិស្សស្តាប់មិត្ត ហើយឆ្លើយតប → មិនមែនគ្រាន់តែអង្គុយជជែកគ្នាទេ គឺការហាត់ស្តាប់ដោយយកចិត្តទុកដាក់ និងការចែករំលែកគំនិត។",
      dos: ["ភ្ជាប់សកម្មភាពសាមញ្ញទៅកាន់ជំនាញសតវត្សរ៍ទី ២១", "ពន្យល់ហេតុផលដែលសកម្មភាពនេះជួយដល់អនាគតកូន"],
      donts: ["កុំថតសកម្មភាពចោលដោយគ្មានការពន្យល់អត្ថន័យអប់រំ"],
      tags: ["Value Creation", "Skills", "Future Benefit"]
    },
    {
      id: 13,
      category: "storytelling",
      titleEn: "Impactful Video",
      titleKm: "ធ្វើឲ្យអ្នកមើលឈប់ មានអារម្មណ៍ និងចងចាំ",
      subtitle: "គោលការណ៍ Stop + Feel + Remember ក្នុងផលិតកម្មវីដេអូ",
      core: "Make People Stop + Feel + Remember: វិនាទីដំបូង សារ និងអារម្មណ៍ត្រូវស៊ីគ្នា។",
      learn: "រួមមាន Strong first seconds, Clear idea, Visual proof, Human emotion, Story, Result, Short message និង Strong ending។",
      action: "ពិនិត្យបើកវីដេអូ សារចម្បង ភស្តុតាង និងចុងបញ្ចប់ឲ្យស៊ីចង្វាក់គ្នា។",
      example: "វិនាទីដំបូងបញ្ឈប់ការ Scroll ដោយរូបភាពប្លែក ឬសំណួរចាក់ដោត → បង្កើតអារម្មណ៍កក់ក្តៅ → បញ្ចប់ដោយសារដែលធ្វើឱ្យគាត់ចងចាំឈ្មោះ PSIS។",
      dos: ["ទាក់ទាញក្នុងរយៈពេល ៣ វិនាទីដំបូង", "រក្សាភាពស៊ីចង្វាក់រវាងរូបភាព សំឡេង និងអារម្មណ៍"],
      donts: ["កុំបើកវីដេអូយឺតយ៉ាវដោយ Logo Intro វែងអន្លាយ"],
      tags: ["Video Production", "Hook", "Retention"]
    },
    {
      id: 14,
      category: "storytelling",
      titleEn: "Hooks: Think / Shock / Pain Point",
      titleKm: "Hook ទាញចំណាប់អារម្មណ៍ក្នុងវិនាទីដំបូង",
      subtitle: "ទម្រង់ Hook ទាំង ៣ ប្រភេទ និងការអនុវត្តជាក់ស្តែង",
      core: "The First 3 Seconds: សរសេរ Hook ៣ ជម្រើស រួចជ្រើសមួយដែលពាក់ព័ន្ធបំផុត។",
      learn: "THINK ធ្វើឲ្យគិត។ SHOCK បង្ហាញអ្វីផ្ទុយការរំពឹង។ Pain-point ចាប់ផ្តើមពីកង្វល់ Parent។ ប្រើ ១–៣ វិនាទីជាគោលរំលឹកសម្រាប់ការបើក។",
      action: "មុនថត សរសេរ Hook ទាំង ៣ ប្រភេទទុក ហើយយកមួយណាដែល Footage អាចឆ្លើយតបបានល្អបំផុត។",
      example: "THINK: «រៀនបានពិន្ទុល្អ… តែបើមិនហ៊ាននិយាយវិញ?» | SHOCK: «មកសាលា… តែអត់ប្រើសៀវភៅ?» | Pain-point: «កូនញ៉ាំបាយហើយឬនៅ?»",
      dos: ["រៀបចំជម្រើស Hook យ៉ាងតិច ៣ មុនពេលសម្រេចចិត្តថត", "ជ្រើស Hook ណាដែល Footage អាចបញ្ជាក់បានពិតៗ"],
      donts: ["កុំប្រើ Clickbait បោកប្រាស់ដែលវីដេអូមិនអាចឆ្លើយតបបាន"],
      tags: ["Hook", "Engagement", "Attention"]
    },
    {
      id: 15,
      category: "storytelling",
      titleEn: "Thinking Outside the Box",
      titleKm: "សកម្មភាពមួយ អាចមានច្រើនមុំសាច់រឿង",
      subtitle: "One Activity = Many Stories",
      core: "Diverse Angles: សរសេរមុំ ៣ ពី Footage ដូចគ្នា មុនជ្រើសរបៀបកាត់។",
      learn: "Science Class អាចធ្វើជា Why, Student POV, Parent POV, Teacher challenge, Before/After, Problem/Solution, Q&A ឬ Story។",
      action: "កុំមើលសកម្មភាពក្នុងផ្លូវតែមួយ។ ប្តូរមុំមើលពីទស្សនៈគ្រូ សិស្ស ឬមាតាបិតា។",
      example: "ការពិសោធន៍វិទ្យាសាស្ត្រមួយ៖ មុំទី១ បង្ហាញពីការចង់ដឹងរបស់កូន; មុំទី២ បង្ហាញពីវិធីគ្រូជួយកូនពេលធ្វើខុស; មុំទី៣ បង្ហាញពីភាពសប្បាយរីករាយពេលរកឃើញលទ្ធផល។",
      dos: ["ស្វែងរកមុំសាច់រឿងថ្មីៗពីសកម្មភាពប្រចាំថ្ងៃដដែលៗ", "សាកល្បងថតពីកម្រិតភ្នែករបស់កុមារ (Eye-level shot)"],
      donts: ["កុំថតតាមទម្លាប់ដដែលៗដោយគ្មានគំនិតច្នៃប្រឌិត"],
      tags: ["Creativity", "Angles", "Perspectives"]
    },
    {
      id: 16,
      category: "storytelling",
      titleEn: "Ideating From Pain Points",
      titleKm: "Pain Point → Question → Hook → Proof → Solution",
      subtitle: "រូបមន្តបង្កើតគំនិតមាតិកាចេញពីបញ្ហាជាក់ស្តែង",
      core: "Systematic Ideation: គំនិតកើតពីកង្វល់ជាក់លាក់ ហើយត្រូវភ្ជាប់ទៅភស្តុតាងដែលមាន។",
      learn: "Pain Point → Question → Hook → Proof → Solution។ ដំណើរការនេះជួយឱ្យ Video មានទម្ងន់ និងមិនទទេស្អាត។",
      action: "កត់កង្វល់ សំណួរ Hook និង Footage ត្រូវការ លើបន្ទាត់តែមួយក្នុង Template មុនផលិត។",
      example: "កូនខ្មាស់អៀន → «កូនចេះចម្លើយ តែមិនហ៊ានលើកដៃ?» → Student presentation footage → ឱកាសហាត់និយាយ និងបរិយាកាសលើកទឹកចិត្តនៅ PSIS។",
      dos: ["កត់ត្រាបញ្ហាពិតរបស់មាតាបិតាចូលក្នុង Ideation Template", "ភ្ជាប់រាល់កង្វល់ទៅនឹងភស្តុតាងសកម្មភាពក្នុងថ្នាក់"],
      donts: ["កុំបង្កើត Hook ដាច់ដោយឡែកពីដំណោះស្រាយដែលសាលាមាន"],
      tags: ["Ideation", "Problem Solving", "Scripting"]
    },
    {
      id: 17,
      category: "optimization",
      titleEn: "Review & Feedback",
      titleKm: "មើល Feedback ជាឱកាសកែលម្អ",
      subtitle: "របៀបវាយតម្លៃវីដេអូ និងការរៀនសូត្រពីកំហុស",
      core: "Review → Learn → Improve: កត់បញ្ហា ការកែ និងលទ្ធផលក្រោយកែ។",
      learn: "ពិនិត្យ Hook ខ្សោយ Story យឺត Message មិនច្បាស់ Video វែង Footage ខ្សោយ ឬ CTA លក់ខ្លាំងពេក។",
      action: "បន្ទាប់ពី Review ជ្រើសចំណុចមួយកែលម្អក្នុងវីដេអូបន្ទាប់។ កុំព្យាយាមកែអ្វីៗគ្រប់យ៉ាងក្នុងពេលតែមួយ។",
      example: "ប្រសិនបើទិន្នន័យបង្ហាញថាអ្នកមើលចាកចេញនៅវិនាទីទី ៣ បញ្ជាក់ថា Hook មិនទាន់ទាក់ទាញ ឬ Footage បើកឆាកយឺតពេក។",
      dos: ["មើល Feedback ក្នុងផ្លូវវិជ្ជមានដើម្បីពង្រឹងជំនាញ", "កត់ត្រាមេរៀនដែលបានរៀនក្រោយពីវីដេអូនីមួយៗផុសរួច"],
      donts: ["កុំអាក់អន់ចិត្តពេលការងារត្រូវបានកែសម្រួលដើម្បីគុណភាព"],
      tags: ["Feedback", "Continuous Improvement", "Quality"]
    },
    {
      id: 18,
      category: "strategy",
      titleEn: "Content Planning",
      titleKm: "រៀបផែនការ មុនចាប់ផ្តើមផលិត",
      subtitle: "Plan Before Production ដើម្បីប្រសិទ្ធភាពការងារ",
      core: "Structured Planning: កំណត់អ្នកទទួលខុសត្រូវ និងកាលកំណត់សម្រាប់ការងារជាក់ស្តែង។",
      learn: "ផែនការមាន Content pillar, Funnel stage, Target audience, Topic, Hook, Footage, CTA និង Publish date។ គោលដៅក្នុងសេចក្តីសង្ខេបគឺរៀបចំមុនមួយខែ។",
      action: "កំណត់ប្រធានបទសប្តាហ៍ រួចបញ្ជី Footage ដែលត្រូវសុំតាម Campus ជាមុន។",
      example: "បង្កើត Calendar ប្រចាំខែ ចែកកាលវិភាគថតឱ្យច្បាស់លាស់ជាមួយ Campus ដើម្បីត្រៀមសិស្ស និងគ្រូឱ្យរួចរាល់។",
      dos: ["រៀបចំកាលវិភាគផលិត និងកាលបរិច្ឆេទចេញផ្សាយទុកជាមុន", "ទំនាក់ទំនងជាមួយ Campus ជាមុនដើម្បីត្រៀមទីតាំង"],
      donts: ["កុំរង់ចាំដល់ថ្ងៃផុសទើបគិតថាគួរផលិតអ្វី"],
      tags: ["Planning", "Workflow", "Production Calendar"]
    },
    {
      id: 19,
      category: "storytelling",
      titleEn: "Powerful Hooks + Storytelling",
      titleKm: "Hook ទាញចូល Story ឲ្យគេមើលបន្ត",
      subtitle: "ការតភ្ជាប់ពីការទាក់ទាញចំណាប់អារម្មណ៍ ទៅកាន់សាច់រឿង",
      core: "Hook-to-Story Flow: កុំបើកសំណួរមួយ ហើយបង្ហាញសាច់រឿងដែលមិនឆ្លើយសំណួរនោះ។",
      learn: "Hook → Context → Action → Result → Meaning។ សាច់រឿងត្រូវបន្តឆ្លើយការចង់ដឹងដែល Hook បង្កើត។",
      action: "ដាក់លំដាប់ Shot ឱ្យអ្នកមើលយល់ពីអ្វីកំពុងកើតឡើង និងចង់ដឹងលទ្ធផល។",
      example: "បើ Hook សួរថា 'តើកុមារអាយុ ៦ ឆ្នាំអាចបង្កើត Game ដោយខ្លួនឯងបានទេ?' — សាច់រឿងបន្ទាប់ត្រូវបង្ហាញពីដំណើរការដែលគាត់អង្គុយសរសេរកូដ CodeMonkey ពិតប្រាកដ។",
      dos: ["ធានាថាសាច់រឿងឆ្លើយតបនឹងការចង់ដឹងដែល Hook បានបង្កើត", "រៀបលំដាប់ Shot ឱ្យមានចង្វាក់ញាប់ល្មមទាក់ទាញ"],
      donts: ["កុំបើកសំណួរមួយហើយបង្ហាញសាច់រឿងមួយផ្សេងទៀតដែលមិនទាក់ទងគ្នា"],
      tags: ["Hook", "Story Structure", "Pacing"]
    },
    {
      id: 20,
      category: "storytelling",
      titleEn: "Storytelling",
      titleKm: "សូម្បី Classroom activity ក៏អាចជាសាច់រឿង",
      subtitle: "ស្វែងរកសាច់រឿងក្នុងសកម្មភាពប្រចាំថ្ងៃធម្មតាៗ",
      core: "Authentic Stories: រកពេលវេលាពិតដែលមានសកម្មភាព និងការផ្លាស់ប្តូរ។ មិនចាំបាច់មាន Drama ទេ។",
      learn: "រឿងអាចកើតពីគ្រូសួរ សិស្សស្ទាក់ស្ទើរ សាកឆ្លើយ និងទទួលបានលទ្ធផល។ មិនចាំបាច់មាន Actor ឬ Drama។",
      action: "ចាប់យកពេលវេលាពិតនៃការតស៊ូ និងការជម្នះឧបសគ្គរបស់សិស្សក្នុងថ្នាក់។",
      example: "«ដំបូងគាត់មិនហ៊ាននិយាយ…» ប្រើបាននៅពេលមានភស្តុតាងនៃស្ថានភាពដើម។ កុំប្រឌិតប្រវត្តិសិស្សពី Clip ខ្លី។",
      dos: ["ចាប់យកពេលវេលាពិត (Authentic micro-moments)", "បង្ហាញការជួយគាំទ្ររបស់គ្រូ និងមិត្តរួមថ្នាក់"],
      donts: ["កុំប្រឌិតរឿង Drama ក្លែងក្លាយដែលមិនឆ្លុះបញ្ចាំងពីការពិត"],
      tags: ["Classroom Story", "Authenticity", "Micro-moments"]
    },
    {
      id: 21,
      category: "storytelling",
      titleEn: "Constructing a Captivating Story",
      titleKm: "Character → Problem → Change",
      subtitle: "រចនាសម្ព័ន្ធតួអង្គ និងការផ្លាស់ប្តូរទាំង ៦ ធាតុ",
      core: "6-Element Framework: ផ្តោតលើមនុស្សម្នាក់ និងការផ្លាស់ប្តូរមួយ។",
      learn: "សាច់រឿងមាន Character: អ្នកណា? Want: ចង់អ្វី? Problem: អ្វីរារាំង? Action: ធ្វើអ្វី? Change: ផ្លាស់ប្តូរអ្វី? Meaning: អ្នកមើលបានអ្វី?",
      action: "សរសេរ ៦ ចំណុចនេះជាប្រយោគខ្លី មុនសរសេរ Script ពេញ។",
      example: "តួអង្គ (សិស្សថ្នាក់ទី៣) → ចង់ (ធ្វើបទបង្ហាញមុខថ្នាក់) → បញ្ហា (ខ្លាចខុស ញ័រដៃ) → សកម្មភាព (គ្រូលើកទឹកចិត្ត និងឱ្យមិត្តភក្តិទះដៃ) → ការផ្លាស់ប្តូរ (ញញឹម និងនិយាយចប់) → អត្ថន័យ (PSIS ជាកន្លែងដែលកូនមានទំនុកចិត្ត)។",
      dos: ["ផ្តោតលើតួអង្គតែម្នាក់ និងការផ្លាស់ប្តូរតែមួយក្នុងមួយវីដេអូ", "បញ្ចប់ដោយអត្ថន័យអប់រំច្បាស់លាស់"],
      donts: ["កុំដាក់តួអង្គច្រើនពេកដែលនាំឱ្យសាច់រឿងបែកខ្ញែក"],
      tags: ["Story Arc", "Character", "Transformation"]
    },
    {
      id: 22,
      category: "audience",
      titleEn: "Parent-Focused Content",
      titleKm: "ផ្តល់ហេតុផលឲ្យម៉ាក់ប៉ាចង់តាមដាន",
      subtitle: "បង្កើត Page ឱ្យក្លាយជាធនធានចំណេះដឹងសម្រាប់មាតាបិតា",
      core: "Give Parents a Reason to Follow: Page អាចជាធនធានចំណេះដឹងសម្រាប់ Parent។",
      learn: "Page អាចផ្តល់ Parenting tips, Child development, Educational tips, Teacher insights, Learning tips, Student achievement, Program explanation និង Real stories។",
      action: "ជ្រើសសំណួរដែល Parent សួរញឹកញាប់ រួចឱ្យគ្រូជួយពន្យល់ និងណែនាំដំណោះស្រាយ។",
      example: "វីដេអូខ្លីពីគ្រូចែករំលែកវិធីជួយកូនកុំឱ្យញៀនទូរស័ព្ទនៅផ្ទះ ឬវិធីជួយកូនឱ្យឆាប់ចាំពាក្យអង់គ្លេស។",
      dos: ["ចែករំលែកចំណេះដឹងដែលផ្តល់ផលប្រយោជន៍ដល់ការចិញ្ចឹមកូន", "អញ្ជើញគ្រូជំនាញមកផ្តល់ដំបូន្មាន"],
      donts: ["កុំឱ្យ Page ក្លាយជាកន្លែងផ្សាយតែពាណិជ្ជកម្មសុទ្ធសាធ"],
      tags: ["Parent Resource", "Value Add", "Community"]
    },
    {
      id: 23,
      category: "trust",
      titleEn: "Building Parent Trust",
      titleKm: "បង្ហាញភស្តុតាងនៃការថែទាំ និងការរៀន",
      subtitle: "Show, Don’t Claim — កសាងទំនុកចិត្តតាមរយៈការពិត",
      core: "Show, Don't Claim: ជ្រើសរូបភាព សំឡេង ឬមតិពិតដែលគាំទ្រអ្វីដែលបាននិយាយ។",
      learn: "Trust អាចកើតពី Teacher care, Student confidence, Safety, Routine, Learning environment, Results, Student voice និង Parent testimonials។",
      action: "បង្ហាញសកម្មភាពថែទាំជាក់ស្តែង ជាជាងការអួតអាងដោយពាក្យសម្តី។",
      example: "ជំនួសឱ្យការសរសេរថា 'គ្រូយើងយកចិត្តទុកដាក់' — ថតសកម្មភាពគ្រូកំពុងអង្គុយជង្គង់ចុះជួយចងខ្សែស្បែកជើង ឬពន្យល់មេរៀនសិស្សមួយទល់មួយ។",
      dos: ["ថតសកម្មភាពពិតនៃការយកចិត្តទុកដាក់ និងការថែទាំ", "ប្រើសំឡេងពិត និងទឹកមុខធម្មជាតិរបស់សិស្ស"],
      donts: ["កុំប្រើពាក្យអួតអាងទទេស្អាតដោយគ្មានភស្តុតាងក្នុងវីដេអូ"],
      tags: ["Trust Building", "Proof", "Authenticity"]
    },
    {
      id: 24,
      category: "trust",
      titleEn: "Educational Authority",
      titleKm: "ចែករំលែកចំណេះដឹងតាមអ្នកអប់រំ",
      subtitle: "Teach Before You Sell ដើម្បីបង្កើនកិត្យានុភាពអប់រំ",
      core: "Teach Before You Sell: ការពន្យល់ច្បាស់ផ្តល់ប្រយោជន៍ និងជួយកសាងទំនុកចិត្ត។",
      learn: "គ្រូអាចពន្យល់ហេតុអ្វីកុមារត្រូវការសម្រាក, Group work, Coding, Art ឬ Confidence មានតួនាទីអ្វីក្នុងការរៀន។",
      action: "រៀបចំសំណួរខ្លីមួយ ឱ្យគ្រូឆ្លើយជាភាសាងាយយល់ និងបង្ហាញសកម្មភាពគាំទ្រក្នុងថ្នាក់។",
      example: "គ្រូពន្យល់ពីសារៈសំខាន់នៃការគេងថ្ងៃត្រង់ចំពោះការលូតលាស់នៃខួរក្បាលរបស់កុមារកម្រិតមត្តេយ្យ។",
      dos: ["ពន្យល់ដោយប្រើភាសាងាយយល់ និងមានភស្តុតាងវិទ្យាសាស្ត្រគាំទ្រ", "បង្ហាញពីវិជ្ជាជីវៈ និងបទពិសោធន៍របស់គ្រូ"],
      donts: ["កុំប្រើពាក្យបច្ចេកទេសស្មុគស្មាញពេកដែលធ្វើឱ្យមាតាបិតាពិបាកយល់"],
      tags: ["Thought Leadership", "Authority", "Educational Insight"]
    },
    {
      id: 25,
      category: "trust",
      titleEn: "Student Success Stories",
      titleKm: "Before → Practice → Progress → Achievement",
      subtitle: "ដំណើរនៃការខិតខំ និងការរីកចម្រើនរបស់សិស្ស",
      core: "Proof Through People: ពានរង្វាន់ជាចុងរឿង ការហាត់រៀនជាសាច់រឿង។",
      learn: "បង្ហាញការខិតខំ និងដំណើរមុនទទួលសមិទ្ធផល ដើម្បីឱ្យអ្នកមើលយល់តម្លៃនៃលទ្ធផល។",
      action: "ប្រមូល Footage ហាត់រៀន មតិសិស្ស និងសមិទ្ធផលពិត ដើម្បីរៀបចំជា Case Study ខ្លី។",
      example: "មិនមែនគ្រាន់តែបង្ហាញសិស្សឈរកាន់មេដាយនោះទេ ត្រូវបង្ហាញពីថ្ងៃដំបូងដែលគាត់ហាត់ហែលទឹក ធ្លាក់ទឹក តស៊ូ រហូតដល់ឈ្នះការប្រកួត។",
      dos: ["បង្ហាញពីដំណើរការតស៊ូ និងការហាត់រៀនយ៉ាងលំបាក", "ឱ្យសិស្សផ្ទាល់ជាអ្នករៀបរាប់ពីអារម្មណ៍របស់ខ្លួន"],
      donts: ["កុំបង្ហាញតែរូបភាពឈរកាន់ពានដោយគ្មានរឿងរ៉ាវនៅពីក្រោយ"],
      tags: ["Case Study", "Student Success", "Growth Journey"]
    },
    {
      id: 26,
      category: "trust",
      titleEn: "Teacher Expertise",
      titleKm: "បង្ហាញមនុស្សនៅពីក្រោយការអប់រំ",
      subtitle: "Humanize the School តាមរយៈសំឡេង និងមុខមាត់គ្រូបង្រៀន",
      core: "Humanize the School: សំឡេងគ្រូ និងការបង្រៀនពិតជួយឱ្យ Parent ស្គាល់សាលា។",
      learn: "ទម្រង់មាន Teacher explains, Teacher tip, Classroom demonstration, Quick Q&A និង Teacher philosophy។",
      action: "ឱ្យគ្រូពន្យល់វិធីជួយសិស្សមួយ ហើយបង្ហាញការអនុវត្តក្នុងថ្នាក់ជាក់ស្តែង។",
      example: "ស៊េរី 'មួយនាទីជាមួយលោកគ្រូអ្នកគ្រូ PSIS' ឆ្លើយតបសំណួរមាតាបិតាពីការបង្រៀនកូនរៀនអាន។",
      dos: ["បង្ហាញពីភាពកក់ក្តៅ និងការយកចិត្តទុកដាក់របស់លោកគ្រូអ្នកគ្រូ", "បង្កើតទម្រង់វីដេអូខ្លីៗ 'Teacher Tips'"],
      donts: ["កុំរៀបចំ Script ឱ្យគ្រូទន្ទេញចាំរហូតដល់បាត់បង់ភាពធម្មជាតិ"],
      tags: ["Teacher Spotlight", "Human Connection", "Credibility"]
    },
    {
      id: 27,
      category: "trust",
      titleEn: "Character Development",
      titleKm: "ការអប់រំរួមមានចរិត និងទម្លាប់",
      subtitle: "Education Beyond Grades — ការបណ្តុះបណ្តាលសីលធម៌ និងចរិយាសម្បត្តិ",
      core: "Values Beyond Marks: ថតសកម្មភាពតូចៗដែលបង្ហាញតម្លៃពិត។",
      learn: "Discipline, Responsibility, Independence, Compassion, Kindness, Good morals និង Collaboration។",
      action: "ថតសកម្មភាពតូចៗដែលបង្ហាញតម្លៃទាំងនេះ ដូចជាជួយមិត្ត ទុករបស់ឱ្យមានរបៀប ឬទទួលខុសត្រូវលើការងារ។",
      example: "សិស្សរៀបចំចានបាយទុកដាក់ដោយខ្លួនឯងក្រោយញ៉ាំរួច ឬការសំពះសួរសុខទុក្ខលោកគ្រូអ្នកគ្រូដោយទឹកមុខរីករាយ។",
      dos: ["ថតសកម្មភាពតូចៗប្រចាំថ្ងៃដែលបង្ហាញពីចរិយាសម្បត្តិល្អ", "បង្ហាញពីការចេះជួយគ្នាទៅវិញទៅមកក្នុងចំណោមសិស្ស"],
      donts: ["កុំផ្តោតតែលើពិន្ទុប្រឡងរហូតមើលរំលងការអប់រំចិត្តគំនិត"],
      tags: ["Morals", "Character", "Discipline"]
    },
    {
      id: 28,
      category: "trust",
      titleEn: "Future-Ready Education",
      titleKm: "Think · Understand · Collaborate · Communicate",
      subtitle: "រៀបចំកុមារសម្រាប់ជីវិត និងអនាគត មិនមែនត្រឹមតែការប្រឡង",
      core: "Prepare for Life: ពន្យល់ជំនាញដោយមិនធានាលទ្ធផលអនាគតដែលមិនអាចបញ្ជាក់។",
      learn: "ការរៀបចំសម្រាប់អនាគតរួមមានការគិត ការយល់ ការសហការ ការទំនាក់ទំនង ការប្រើបច្ចេកវិទ្យា និងការកសាងចរិត។",
      action: "ភ្ជាប់សកម្មភាពថ្ងៃនេះទៅជំនាញដែលសិស្សកំពុងហាត់សម្រាប់ពេលអនាគត។",
      example: "ការរៀនធ្វើការជាក្រុមក្នុងបន្ទប់ ICT បង្ហាញពីការហាត់ធ្វើការងារបែបសហការដែលចាំបាច់ក្នុងយុគសម័យឌីជីថល។",
      dos: ["ពន្យល់ពីសារៈសំខាន់នៃជំនាញបច្ចេកវិទ្យា និងការគិតបែបរិះគន់", "រំលេចពីការរៀបចំខ្លួនសម្រាប់សកលភាវូបនីយកម្ម"],
      donts: ["កុំសន្យាអនាគតហួសហេតុដែលគ្មានមូលដ្ឋានបញ្ជាក់ច្បាស់លាស់"],
      tags: ["Future Skills", "21st Century Skills", "Vision"]
    },
    {
      id: 29,
      category: "foundation",
      titleEn: "Brand Identity",
      titleKm: "រក្សាភាពស៊ីសង្វាក់របស់ Brand",
      subtitle: "Be Recognizable — ឯកភាពនៃអត្តសញ្ញាណម៉ាកសញ្ញា",
      core: "Brand Consistency: ប្រើ Khmer font Kantumruy Pro តាមចំណូលចិត្ត Chhit និងរក្សា PSIS / AYLA ដាច់ពីគ្នា។",
      learn: "Logo, Colors, Fonts, Visual style, Video style, Tone of voice, Photography និង Templates ត្រូវមានភាពស៊ីសង្វាក់។",
      action: "ផ្ទៀងផ្ទាត់ការរចនាជាមួយ Brand guideline មុនចេញផ្សាយរាល់ដង។",
      example: "ប្រើប្រាស់កូដពណ៌ Navy (#06134b), Blue (#1864d8), Gold (#fdb827) និង Font Kantumruy Pro ឱ្យបានខ្ជាប់ខ្ជួនគ្រប់ Post។",
      dos: ["ប្រើប្រាស់ Font Kantumruy Pro ឱ្យបានខ្ជាប់ខ្ជួនគ្រប់ Artwork និងវីដេអូ", "បែងចែកអត្តសញ្ញាណឱ្យដាច់រវាង PSIS និង AYLA"],
      donts: ["កុំផ្លាស់ប្តូរពណ៌ ឬ Style អក្សរតាមតែទំនើងចិត្ត"],
      tags: ["Brand Identity", "Design System", "Consistency"]
    },
    {
      id: 30,
      category: "strategy",
      titleEn: "Platform Strategy",
      titleKm: "សម្របរបៀបប្រាប់រឿងតាមវេទិកា",
      subtitle: "Same Brand, Different Platform Purpose",
      core: "Contextual Adaptation: កែប្រវែង ការបើក និងរបៀបប្រាប់សារ តាមអ្នកមើល និងលទ្ធផលជាក់ស្តែង។",
      learn: "Facebook ផ្តោត Parent, Trust, Information, Enrollment។ TikTok ផ្តោត Reach និងវីដេអូខ្លីទាក់ភ្នែក។ YouTube សម្រាប់រឿងវែង Interviews និង Campus Tours។",
      action: "ថតម្តង អាចកាត់ត និងរៀបចំសារជាច្រើនទម្រង់ទៅតាមវេទិកានីមួយៗ។",
      example: "វីដេអូពិសោធន៍វិទ្យាសាស្ត្រ៖ TikTok កាត់ត្រឹម ៣០ វិនាទីផ្តោតលើភាពភ្ញាក់ផ្អើល; Facebook រៀបរាប់អត្ថន័យ និងភ្ជាប់ទៅកម្មវិធីសិក្សា; YouTube ធ្វើជា Vlog ពេញលេញ។",
      dos: ["កាត់តទម្រង់វីដេអូឱ្យសមស្របនឹងលក្ខណៈនៃវេទិកានីមួយៗ", "ប្រើ Facebook សម្រាប់ការកសាងទំនុកចិត្តមាតាបិតា និង TikTok សម្រាប់ Reach"],
      donts: ["កុំយកវីដេអូផ្ដេកវែងទៅបង្ហោះលើ TikTok ដោយគ្មានការកែសម្រួល"],
      tags: ["Multi-platform", "Facebook", "TikTok", "YouTube"]
    },
    {
      id: 31,
      category: "optimization",
      titleEn: "Paid Advertising",
      titleKm: "វាស់លទ្ធផលដែលជួយគោលដៅសាលា",
      subtitle: "Results Over Vanity Metrics — ផ្តោតលើលទ្ធផលពិត",
      core: "Actionable Metrics: Views ច្រើនតែមួយមុខ មិនបញ្ជាក់ថាមានការចុះឈ្មោះច្រើនទេ។",
      learn: "តាមដាន Inquiry, Messages, Campus visits, Enrollment និង Conversion ជាមួយ Reach និង Views។",
      action: "កំណត់ថាសកម្មភាពណាជាលទ្ធផលចម្បង និងតាមដានពីសារ ទៅការទស្សនា និងការចុះឈ្មោះជាក់ស្តែង។",
      example: "វីដេអូទទួលបាន View តិចជាង ប៉ុន្តែមាតាបិតាផ្ញើសារសួរតម្លៃ ឬមកទស្សនាសាលាច្រើន គឺមានតម្លៃជាងវីដេអូ Viral ដែលគ្មានអ្នកទាក់ទង។",
      dos: ["តាមដានចំនួនសារសាកសួរ (Inquiries) និងការចុះឈ្មោះពិតប្រាកដ", "កំណត់គោលដៅ Boosting ឱ្យចំក្រុមមាតាបិតាគោលដៅ"],
      donts: ["កុំផ្តោតតែលើចំនួន Views តែមួយមុខ (Vanity Metrics)"],
      tags: ["Paid Ads", "Conversion", "ROI"]
    },
    {
      id: 32,
      category: "optimization",
      titleEn: "Content Optimization",
      titleKm: "Create → Measure → Improve",
      subtitle: "វដ្តនៃការតាមដានទិន្នន័យ និងការកែលម្អឥតឈប់ឈរ",
      core: "Data-Driven Iteration: សាក Hook ថ្មីមួយ ហើយមើលថាការរក្សាអ្នកមើលប្រសើរឡើងឬអត់។",
      learn: "ពិនិត្យ Reach, Watch time, Retention, Engagement, Comments, Shares, Messages, Cost និង Conversion តាមគោលដៅ។",
      action: "សួរថាហេតុអ្វីវាដំណើរការ ឬហេតុអ្វីអ្នកមើលឈប់។ កែចំណុចជាក់លាក់ ហើយប្រៀបធៀប Content ប្រហាក់ប្រហែល។",
      example: "ប្រសិន Retention Curve ធ្លាក់ចុះនៅវិនាទីទី ៥ ត្រូវសាកល្បងប្តូរ Footage ឬបន្ថែមកាត់តឱ្យលឿនជាងមុនក្នុងវីដេអូបន្ទាប់។",
      dos: ["វិភាគ Retention Graph ដើម្បីដឹងពីវិនាទីដែលអ្នកមើលចាកចេញ", "ធ្វើការសាកល្បង Hook A/B Testing"],
      donts: ["កុំផលិតវីដេអូចោលដោយមិនដែលពិនិត្យទិន្នន័យត្រឡប់មកវិញ"],
      tags: ["Optimization", "Analytics", "Audience Retention"]
    },
    {
      id: 33,
      category: "foundation",
      titleEn: "Main Strategic Direction",
      titleKm: "បង្ហាញអត្ថន័យសម្រាប់កូន និងអនាគតកូន",
      subtitle: "Beyond Memorization → Understanding → Character → Future",
      core: "The Master Strategy: Know Yourself → Client → Goals → Audience → Pain Points → Purpose → Funnel → Hook → Story → Proof → Trust → Value → CTA → Measure → Improve។",
      learn: "Beyond Memorization → Understanding → Character → Future។ ភ្ជាប់ការងាររបស់សាលាទៅការរៀន ការលូតលាស់ និងតម្រូវការរបស់ Parent។",
      action: "មុន Publish សួរថា៖ Parent យល់ហេតុអ្វីសកម្មភាពនេះមានតម្លៃចំពោះកូនឬនៅ?",
      example: "រាល់ខ្លឹមសារទាំងអស់ដែលចេញពី PSIS ត្រូវឆ្លុះបញ្ចាំងពីការយកចិត្តទុកដាក់ និងការកសាងអនាគតដ៏ភ្លឺស្វាងសម្រាប់កុមារ។",
      dos: ["ចងចាំជានិច្ចនូវបេសកកម្មអប់រំចម្បងរបស់ PSIS", "រាល់វីដេអូទាំងអស់ត្រូវឆ្លើយនឹងសំណួរ 'តើមានន័យអ្វីសម្រាប់កូន?'"],
      donts: ["កុំភ្លេចគោលការណ៍ស្នូល ហើយផលិតតែវីដេអូកំប្លែងសើចលេងដែលគ្មានតម្លៃអប់រំ"],
      tags: ["Master Strategy", "Core Purpose", "Future Vision"]
    }
  ],

  roadmap: [
    { week: 1, dates: "28/07 - 31/07", title: "Where They Are At & Intro to Marketing", tasks: "Understanding Client, Brand Guides & Content Planning" },
    { week: 2, dates: "04/08 - 07/08", title: "Understanding Target Audience", tasks: "Client Goals Document & Parent Research" },
    { week: 3, dates: "11/08 - 14/08", title: "Effective Content (Types of Content) & Marketing", tasks: "Pillars & Educational Value Balance" },
    { week: 4, dates: "18/08 - 21/08", title: "Identifying Target Audience & Marketing Funnel", tasks: "Awareness, Interest, Trust, Action mapping" },
    { week: 5, dates: "25/08 - 28/08", title: "Client Goals & Advertising Without Being Pushy", tasks: "How to capture attention without aggressive selling" },
    { week: 6, dates: "02/09 - 04/09", title: "Hooks (Think, Shock, Pain Point)", tasks: "Thinking outside the box & Ideation from Pain Points" },
    { week: 7, dates: "08/09", title: "Goals to Improve & Video Feedback", tasks: "Retention optimization & Reviewing Reel performance" },
    { week: 8, dates: "16/09 - 18/09", title: "Review videos & Shoot Video with powerful hooks", tasks: "Micro-moments in classrooms (Teacher & Student)" },
    { week: 9, dates: "23/09 - 25/09", title: "Impactful Storytelling", tasks: "Constructing a Captivating Story (Character → Change)" }
  ],

  frameworks: {
    processSteps: [
      { step: 1, title: "Know Yourself", desc: "ស្គាល់សមត្ថភាព និងចំណុចខ្លាំងផ្ទាល់ខ្លួន" },
      { step: 2, title: "Know the Client", desc: "យល់ច្បាស់ពីសាលា PSIS និងបរិក្ខារ" },
      { step: 3, title: "Client Goals", desc: "កំណត់គោលដៅជាក់លាក់នៃ Content" },
      { step: 4, title: "Audience Persona", desc: "ស្គាល់មាតាបិតាដែលកំពុងនិយាយជាមួយ (ប៉ា ពីទូ)" },
      { step: 5, title: "Pain Points", desc: "ចាប់ផ្តើមពីកង្វល់ និងតម្រូវការជាក់ស្តែង" },
      { step: 6, title: "Content Purpose", desc: "កំណត់សារចម្បងតែមួយគត់" },
      { step: 7, title: "Funnel Stage", desc: "តម្រឹមតាមដំណាក់កាលសម្រេចចិត្ត" },
      { step: 8, title: "Craft Hook", desc: "បង្កើត Hook (Think, Shock, Pain-point)" },
      { step: 9, title: "Story Structure", desc: "រៀបរៀងសាច់រឿងតាមលំដាប់លំដោយ" },
      { step: 10, title: "Visual Proof", desc: "បង្ហាញភស្តុតាងសកម្មភាពពិត" },
      { step: 11, title: "Build Trust", desc: "កសាងទំនុកចិត្តតាមរយៈការយកចិត្តទុកដាក់" },
      { step: 12, title: "Demonstrate Value", desc: "ភ្ជាប់សកម្មភាពទៅអត្ថប្រយោជន៍ថ្ងៃមុខ" },
      { step: 13, title: "Appropriate CTA", desc: "ដាក់សកម្មភាពឱ្យធ្វើសមស្របនឹង Funnel" },
      { step: 14, title: "Measure Results", desc: "តាមដានទិន្នន័យពិតក្រោយ Post" },
      { step: 15, title: "Review & Improve", desc: "រៀនសូត្រពី Feedback និងកែលម្អបន្ត" }
    ],
    videoStructure: [
      { stage: "Hook", km: "ចាប់អារម្មណ៍", time: "0:00 - 0:03", desc: "ទាញឱ្យឈប់មើលក្នុង ១–៣ វិនាទីដំបូង (សំណួរចាក់ដោត, រូបភាពប្លែក, កង្វល់)" },
      { stage: "Context", km: "ប្រាប់បរិបទ", time: "0:03 - 0:10", desc: "ប្រាប់ស្ថានភាព ឬប្រធានបទដែលកំពុងកើតឡើងឱ្យអ្នកមើលយល់" },
      { stage: "Action / Story", km: "បង្ហាញសកម្មភាព", time: "0:10 - 0:30", desc: "សកម្មភាពពិតរបស់សិស្ស ឬគ្រូ ការជម្នះឧបសគ្គ ឬការអនុវត្តជាក់ស្តែង" },
      { stage: "Result / Proof", km: "បង្ហាញលទ្ធផលពិត", time: "0:30 - 0:45", desc: "ភស្តុតាងជាក់ស្តែងនៃភាពជោគជ័យ ស្នាមញញឹម ឬលទ្ធផលពិសោធន៍" },
      { stage: "Meaning", km: "ប្រាប់អត្ថន័យ", time: "0:45 - 0:55", desc: "ហេតុអ្វីសកម្មភាពនេះសំខាន់ចំពោះកូន និងអនាគតរបស់កូន (Activity → Future)" },
      { stage: "CTA", km: "អញ្ជើញធ្វើសកម្មភាព", time: "0:55 - 1:00", desc: "Call to Action ស្រាលស្រទន់ ឬណែនាំឱ្យទស្សនាសាលា / ផ្ញើសារ" }
    ],
    funnelStages: [
      {
        stage: "01 · Awareness",
        km: "ឱ្យគេស្គាល់សាលា",
        formats: "Reels, Activities, Events, Campus Highlights",
        objective: "ទាក់ទាញចំណាប់អារម្មណ៍ និងបង្កើន Reach ទូលំទូលាយ"
      },
      {
        stage: "02 · Interest",
        km: "ឱ្យគេចង់ដឹងបន្ថែម",
        formats: "Program explanation, Teaching methods, Classroom experience",
        objective: "ពន្យល់ពីវិធីសាស្ត្របង្រៀន និងកម្មវិធីពិសេសៗ (ELIF, Robotics...)"
      },
      {
        stage: "03 · Trust",
        km: "បង្កើតទំនុកចិត្ត",
        formats: "Teacher care, Student proof, Safety, Routine, Testimonials",
        objective: "បង្ហាញពីភាពកក់ក្តៅ សុវត្ថិភាព និងការរីកចម្រើនពិតរបស់កូន"
      },
      {
        stage: "04 · Action",
        km: "ឱ្យគេធ្វើសកម្មភាព",
        formats: "Admissions, School Tour, Open House, Enroll CTA",
        objective: "ជំរុញឱ្យទាក់ទងចុះឈ្មោះ ឬមកទស្សនាសាលាផ្ទាល់"
      }
    ]
  },

  checklistPhases: [
    {
      phase: "Phase 1: មុនពេលថត (Pre-Production)",
      items: [
        "កំណត់គោលដៅចម្បង និង Funnel Stage ច្បាស់លាស់ (Awareness / Interest / Trust / Action)។",
        "ដឹងច្បាស់ថាកំពុងនិយាយទៅកាន់ Persona ណា (ឧ. ប៉ា ពីទូ: រវល់ធ្វើការ, ចង់បានភាសា និងអនាគត)។",
        "ជ្រើសកង្វល់ ឬតម្រូវការមួយដែលពាក់ព័ន្ធ និងមានទម្ងន់ផ្លូវចិត្ត។",
        "មានសារចម្បង (Single Core Message) តែមួយគត់សម្រាប់វីដេអូនេះ។",
        "រៀបចំជម្រើស Hook យ៉ាងតិច ៣ (Think, Shock, Pain Point) និងសរសេរ Script Outline។"
      ]
    },
    {
      phase: "Phase 2: ថ្ងៃចុះថតជាក់ស្តែង (Production / Shoot Day)",
      items: [
        "ផ្ទៀងផ្ទាត់ទីតាំង និងសម្ភារបរិក្ខារត្រឹមត្រូវតាម Campus (ICT, Lab, Infinity Pro)។",
        "ថតសកម្មភាពពិត (Authentic Shots) ចៀសវាងការឱ្យសិស្សសម្តែងរឹងៗ។",
        "ថតរូបភាព Eye-level shot និង Close-up ស្នាមញញឹម ឬការផ្ចង់អារម្មណ៍របស់សិស្ស។",
        "ថតកាយវិការគ្រូយកចិត្តទុកដាក់ និងជួយសម្របសម្រួលសិស្សពេលជួបបញ្ហា។"
      ]
    },
    {
      phase: "Phase 3: កាត់ត & រចនា (Post-Production)",
      items: [
        "រៀបលំដាប់លំដោយ៖ Hook → Context → Action → Result → Meaning → CTA។",
        "វិនាទីទី ០ ដល់ ៣ ត្រូវទាក់ទាញភ្នែក និងមានអក្សរ Hook ច្បាស់ៗ។",
        "ប្រើប្រាស់ Font Kantumruy Pro និងកូដពណ៌ម៉ាកសញ្ញា PSIS (Navy, Royal Blue, Gold)។",
        "ត្រួតពិនិត្យ Safe Zones (កុំឱ្យអក្សរបាំងប៊ូតុង Like, Comment ឬ Share លើ TikTok/Reel)។"
      ]
    },
    {
      phase: "Phase 4: ចេញផ្សាយ & វាស់វែង (Distribution & Optimization)",
      items: [
        "ដាក់ Caption និង CTA សមស្របនឹងដំណាក់កាល Funnel (មិនបង្ខំលក់ជ្រុល)។",
        "តាមដាន Retention Rate ក្នុងរយៈពេល ២៤ ម៉ោងដំបូង។",
        "កត់ត្រាចំនួនសារសាកសួរ (Inquiries) និង Comments ពិតពីមាតាបិតាទុកសម្រាប់កែលម្អ។"
      ]
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.PSIS_DATA = PSIS_DATA;
}
