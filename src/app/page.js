import Image from "next/image";

export default function Home() {
  const experience_ls = [
    {
      designation: "Sr. Software Engineer",
      image_url : "/my-portfolio/knovos_logo.jpeg",
      company_name: "Knovos India Pvt. Ltd  |  SEP 2023 - Present",
      works: [
        "Researched, evaluated, and integrated machine learning models for <b>automatic speech recognition</b> in a large-scale review platform.",
        "Designed and implemented <b>REST API</b> and <b>RabbitMQ</b>-based integrations to enable seamless data processing and model communication.",
        "Developed an <b>end-to-end</b> audio/video redaction system from scratch, enabling secure removal of sensitive information within defined timeframes.",
        "Built a <b>customized audio/video player</b> with advanced features, including a redesigned control bar and a dedicated redaction timeline to preview and manage redacted sections."
      ]
    },
    {
      designation: "Writer / Blogger",
      image_url : "/my-portfolio/medium_com_logo.jpeg",
      company_name: "Medium  |  MAY 2024 - Present",
      works: [
      ]
    },
    {
      designation: "Data Scientist",
      image_url : "/my-portfolio/thomson_reuters_logo.jpeg",
      company_name: "Thomson Reuters  |  FEB 2022 - MAR 2023",
      works: [
        "Designed and implemented a <b>BERT</b>-based model for named entity recognition.",
        "Implemented <b>end-to-end</b> natural language processing pipeline for <b>contract analytics</b>.",
        "Model building of <b>multilingual</b> document classification.",
      ]
    }, {
      designation: "Software Engineer",
      image_url : "/my-portfolio/knovos_logo.jpeg",
      company_name: "Knovos India Pvt. Ltd  |  MAY 2017 - FEB 2022",
      works: [
        "Improved multi-lingual PII extraction from text documents using context-based matching and post-processing.",
        "Implemented paragraph search and image search functionality using feature extraction and deep learning model.",
        "Designed & implemented CNN deep learning model for image classification tasks.",
        "Implemented MapReduce flow for TensorFlow model inference over Hadoop cluster.",
        "Designed & implemented LSTM sequence model for NER for biomedical information.",
        "Implemented metadata extraction from contract type text documents.",
        "Explored rasa and albert-qa for the conversational assistant."
      ]
    }, {
      designation: "Internship Training",
      image_url : "/my-portfolio/knovos_logo.jpeg",
      company_name: "Knovos India Pvt. Ltd  |  DEC 2016 - MAY 2017",
      works: [
        "Worked on a Document management system as a team project. It provides data processing and searching functionality at a large scale.",
        "Explored various tools and technologies like Java, Hadoop, Solr, text analytics, named entity recognition.",
        "Learned coding standard and best practices."
      ]
    }
  ];


  const projects_ls = [
    {
      name: "ASR for eDiscovery",
      sub_name: "Automatic Speech Recognition Processing Engine",
      points: [
        "Extended eDiscovery towards Audio video processing and review.",
        "Designed and implemented <b>REST API</b> and <b>RabbitMQ</b>-based integrations to enable seamless data processing and model communication.",
      ]
    },
    {
      name: "Media Review Platform",
      sub_name: "Audio Video Review Platform (Redaction)",
      points: [
        "Developed an <b>end-to-end</b> audio/video redaction system from scratch, enabling secure removal of sensitive information within defined timeframes.",
        "Built a <b>customized audio/video player</b> with advanced features, including a redesigned control bar and a dedicated redaction timeline to preview and manage redacted sections."
      ]
    },
    {
      name: "AI Driven CLM Plugin",
      sub_name : "",
      points: [
        "Researched, evaluated, and integrated machine learning models for <b>automatic speech recognition</b> in a large-scale review platform.",
        "Designed and implemented <b>REST API</b> and <b>RabbitMQ</b>-based integrations to enable seamless data processing and model communication.",
        "Developed an <b>end-to-end</b> audio/video redaction system from scratch, enabling secure removal of sensitive information within defined timeframes.",
        "Built a <b>customized audio/video player</b> with advanced features, including a redesigned control bar and a dedicated redaction timeline to preview and manage redacted sections."
      ]
    }
  ]

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      
      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-6 pt-30 pb-10" style={{"background" : "#0E2148"}}>
        <div className="flex flex-col items-center gap-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="text-center md:text-left max-w-xl">
              <h1 className="intro-header">
                Divyesh Jagatiya
              </h1>
              <p className="text-xl mt-2 text-white">Sr. Software Engineer + Data Scientist <br/> Generative AI | Big Data | Blog Writer</p>
              <p className="mt-6 text-gray-200">
                7+ years of experience in software engineering, deep learning, and big data technologies
                for the e-discovery domain. Worked in Hadoop map-reduce programming, text analytics,
                and image analytics to deliver insights and implement solutions for complex business problems.
              </p>
            </div>
            <div className="w-40 h-40 relative">
              <Image 
                src="/my-portfolio/1644206273267.jpeg" 
                alt="Divyesh Jagatiya" 
                fill
                className="rounded-full object-cover" 
              />
            </div>
          </div>
          {/* Cards at the bottom of the section */}
          <div className="mt-12 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl text-center shadow hover:shadow-lg transition intro-box-bg">
              <p className="text-3xl font-bold">7+</p>
              <p className="mt-1">Years Experience</p>
            </div>
            <div className="p-4 rounded-xl text-center shadow hover:shadow-lg transition intro-box-bg">
              <p className="text-3xl font-bold">10+</p>
              <p className="mt-1">Technologies</p>
            </div>
            <div className="p-4 rounded-xl text-center shadow hover:shadow-lg transition intro-box-bg">
              <p className="mt-1">
                Software Engineering<br/> 
                Generative AI <br/>
                Research & Development<br/> 
                End-to-End Solutions<br/>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work_experience" className="min-h-screen px-6 py-16" style={{"background" : "#3C3D37", color: "white"}}>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">
          WORK EXPERIENCE
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute w-1 bg-gray-300 h-full" style={{margin: '-10px 0 0 6px'}}></div>

          {experience_ls.map((item, index) => (
            <div key={index} className="relative flex mb-12">
              {/* Timeline dot */}
              <div className="flex flex-col items-center pr-4">
                <div className="w-4 h-4 flex-shrink-0" style={{
                  "border" : "3px white solid", 
                  "borderRadius" : "10px",
                  "background" : "#3C3D37"
                }}>&nbsp;</div>
              </div>
              {/* Content */}
              <div>
                <div className="flex">
                  <Image 
                    src={item.image_url}
                    alt="Divyesh Jagatiya" 
                    width="50"
                    height="50"
                    className="rounded-md"
                  />
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold">{item.designation}</h3>
                    <span className="text-gray-400 font-bold">{item.company_name}</span>
                  </div>
                </div>
                
                <ul className="list-disc ml-8 mt-3 space-y-2">
                  {item.works.map((work_item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: work_item }}></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section id="projects" className="min-h-screen px-20 py-16" style={{background: "#351F39"}}>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">PROJECTS</h2>

        <div className="flex flex-col items-center justify-center">  
            {projects_ls.map((item, index) => {
              return (
                <div className="flex flex-col max-w-6xl m-5 p-5 text-black bg-gray-100 rounded-xl">
                  <div className="min-w-100">
                    <p className="text-left text-2xl font-semibold">
                      {item.name}
                    </p>
                    <p className="text-md font-normal text-gray-500">
                        {item.sub_name}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-200 h-50 bg-black"></div>
                    <div>
                      <ul className="list-disc ml-8 space-y-2">
                        {item.points.map((work_item, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: work_item }}></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </main>
  );
}
