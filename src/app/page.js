import Image from "next/image";

export default function Home() {
  const experience_ls = [
    {
      designation: "Sr. Software Engineer",
      company_name: "Knovos India Pvt. Ltd | Sep, 2023 - Present",
      works: [
        "Researched, evaluated, and integrated machine learning models for <b>automatic speech recognition</b> in a large-scale review platform.",
        "Designed and implemented <b>REST API</b> and <b>RabbitMQ</b>-based integrations to enable seamless data processing and model communication.",
        "Developed an <b>end-to-end</b> audio/video redaction system from scratch, enabling secure removal of sensitive information within defined timeframes.",
        "Built a <b>customized audio/video player</b> with advanced features, including a redesigned control bar and a dedicated redaction timeline to preview and manage redacted sections."
      ]
    },
    {
      designation: "Data Scientist",
      company_name: "Thomson Reuters | Feb, 2022 - Mar, 2023",
      works: [
        "Designed and implemented a <b>BERT</b>-based model for named entity recognition.",
        "Implemented <b>end-to-end</b> natural language processing pipeline for <b>contract analytics</b>.",
        "Model building of <b>multilingual</b> document classification.",
      ]
    }
  ];

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      
      {/* Intro Section */}
      <section id="intro" className="snap-start min-h-screen flex items-center justify-center bg-gray-800 px-6">
        <div className="flex flex-col items-center gap-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="text-center md:text-left max-w-xl text-white">
              <h1 className="text-5xl font-bold">Divyesh Jagatiya</h1>
              <p className="text-xl mt-2">Sr. Software Engineer | Generative AI | Big Data | Blog Writer</p>
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
            <div className="bg-gray-600 p-4 rounded-xl text-center shadow hover:shadow-lg transition">
              <p className="text-3xl font-bold">7+</p>
              <p className="text-gray-200 mt-1">Years Experience</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-xl text-center shadow hover:shadow-lg transition">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-gray-200 mt-1">Technologies</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-xl text-center shadow hover:shadow-lg transition">
              <p className="text-gray-200 mt-1">
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
      <section id="work_experience" className="snap-start min-h-screen bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Work Experience</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>

          {experience_ls.map((item, index) => (
            <div key={index} className="relative flex mb-12">
              {/* Timeline dot */}
              <div className="flex flex-col items-center pr-6">
                <div className="w-5 h-5 bg-black rounded-full flex-shrink-0"></div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold">{item.designation}</h3>
                <span className="text-gray-500">{item.company_name}</span>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                  {item.works.map((work_item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: work_item }}></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
