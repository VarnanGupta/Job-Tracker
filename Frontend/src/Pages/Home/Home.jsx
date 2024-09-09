import { useNavigate } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "Centralized Dashboard",
      description:
        "View all your job applications in one place. See the status of each application, upcoming deadlines, and next steps at a glance.",
    },
    {
      title: "Customizable Application Status",
      description:
        "Track the progress of each application—from 'Applied' to 'Interview Scheduled' to 'Offer Received.' Customize stages to fit your unique job search journey.",
    },

    {
      title: "Detailed Notes & Insights",
      description:
        "Add notes for each application—such as key points from interviews or recruiter conversations—to help you prepare better for next steps.",
    },
    {
      title: "Export & Share",
      description:
        "Export your resume to share with career coaches, mentors, or friends for feedback and advice.",
    },
    {
      title: "Feedback Collection",
      description:
        "Easily gather feedback from mentors, peers, or career coaches on your resume, cover letters, and interview performance to continuously improve your job search strategy.",
    },
  ];

  const testimonials = [
    {
      quote:
        "This tool saved me hours of time and kept me organized during my job hunt. Highly recommend!",
      name: "Ayush Singh",
    },
    {
      quote:
        "I landed my dream job thanks to this app. The reminders and notes feature were game-changers!",
      name: "Madhav A.",
    },
    {
      quote:
        "The centralized dashboard made tracking my job applications so much easier. I felt in control throughout the whole process!",
      name: "Saransh Gaur",
    },
    {
      quote:
        "I love the customizable status options. It allowed me to tailor the job search process to fit my personal needs and preferences.",
      name: "Ashish",
    },
    {
      quote:
        "Exporting my resume and sharing it with my career coach was seamless. It made getting feedback quick and convenient.",
      name: "Vivaan J.",
    },
  ];
  const navigate = useNavigate()

  const goLogin =()=>{
    navigate('/login')
  }

  return (
    <>
      <div className="bg-gray-300 w-full overflow-y-auto">
        {/* HEADER */}
        <header className=" w-auto bg-gray-300 p-8 font-mono font-normal text-black mt-[50px]">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">
              Stay Organized and Never Miss a Job Opportunity Again!
            </h1>
            <p className="mt-4 text-lg">
              Your ultimate tool for tracking and managing all your job
              applications in one place.
            </p>
          </div>
        </header>

        {/* Intro */}
        <section className="py-16 font-mono font-normal bg-gray-300 text-black">
          <div className="container mx-auto text-center">
            <p className="text-xl max-w-3xl mx-auto">
              Looking for a new job can be overwhelming, especially when
              managing multiple applications across different platforms. Our Job
              Application Tracker is designed to simplify the job search process
              by helping you keep track of every application, follow up on
              opportunities, and stay on top of deadlines—all from a single,
              easy-to-use platform.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-300 py-16 font-mono">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md shadow-slate-500"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Tracking Your Job Applications Today! */}
        <section className="bg-gray-300 text-black py-16 font-mono">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Tracking Your Job Applications Today!
            </h2>
            <p className="mb-8">
              Sign Up for Free and Take Control of Your Job Search Journey.
            </p>
            <a
              href="#"
              onClick={goLogin}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-400 transition duration-300"
            >
              Get Started for Free
            </a>
          </div>
        </section>

        {/* testimonials */}
        <section className="py-16 font-mono bg-gray-300">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg shadow-slate-500"
                >
                  <p className="text-xl">“{testimonial.quote}”</p>
                  <p className="mt-4 font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-400 text-black py-8 font-mono">
          <div className="container mx-auto text-center">
            <p>
              &copy; 2024 Job Application Tracker. All rights reserved. Made by{" "}
              <span className="font-bold"><a href="https://www.linkedin.com/in/varnan-gupta112/">Varnan Gupta</a></span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
