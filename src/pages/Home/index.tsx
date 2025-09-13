import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';
import video from '../../bganimation.mp4';
import logo from '../../companylogo.png';
import Blog1 from '../../Blog1.webp';
import Blog2 from '../../blog2.jpeg';
import Blog3 from '../../blog3.webp';
import team1 from '../../Team1.jpeg';
import team2 from '../../Team2.jpeg';
import youtube from '../../YouTube.png';
import team4 from '../../Team4.jpeg'
import team6 from '../../Team6.jpeg';
import team7 from '../../Team7.jpeg';
import expertise from '../../expertise.png';
import bigbets from '../../logo.png';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  readTime?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white-transparent rounded-[34px] p-6 sm:p-8 shadow-[0px_5px_16px_#51a9e11e] hover:shadow-lg transition-all duration-300">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
      <img src={icon} alt="" className="w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0" />
      <h3 className="text-base sm:text-lg font-inter font-medium text-dark-custom text-center sm:text-left">
        {title}
      </h3>
    </div>
    <p className="text-sm font-inter text-secondary-custom leading-6 text-center sm:text-left">
      {description}
    </p>
  </div>
);

const StatItem: React.FC<StatItemProps> = ({ value, label, color }) => (
  <div className="flex flex-col items-center gap-2">
    <span className={`text-3xl sm:text-4xl md:text-5xl font-inter font-bold ${color}`}>
      {value}
    </span>
    <span className="text-base sm:text-xxl font-inter text-secondary-custom text-center">
      {label}
    </span>
  </div>
);

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, avatar, content, rating }) => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className="bg-white rounded-lg shadow-[0px_1px_7px_#0000003f] p-6 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-lg" />
        <div className="flex-1">
          <h4 className="font-inter font-medium text-dark-custom">{name}</h4>
          <p className="text-xs text-custom-gray">{role}</p>
        </div>
        <img src="/images/img_.svg" alt="Quote" className="w-10 h-10" />
      </div>
      <p>{rating}</p>
      <p className="text-sm font-inter text-secondary-custom leading-6">
        {content}
      </p>
    </div>
    <div className="absolute -bottom-6 left-4 w-[84px] h-[118px] bg-violet rounded-[58px] shadow-[0px_4px_150px_#888888ff]"></div>
    <div className="absolute -bottom-6 right-8 w-[84px] h-[118px] bg-light-blue rounded-[58px] shadow-[0px_4px_150px_#888888ff]"></div>
    <div className="absolute -bottom-6 right-0 w-[84px] h-[118px] bg-light-green rounded-[58px] shadow-[0px_4px_150px_#888888ff]"></div>
  </div>
);

const BlogCard1: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
    <img src={Blog1} alt={title} className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" />
    <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
      {excerpt}
    </p>
    <div className="flex items-center gap-2">
      <a className="text-sm font-inter font-medium text-dark-custom">Click Me</a>
    </div>
  </div>
);
const BlogCard2: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
    <img src={Blog2} alt={title} className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" />
    <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
      {excerpt}
    </p>
    <div className="flex items-center gap-2">
      <a className="text-sm font-inter font-medium text-dark-custom">Click Me</a>
    </div>
  </div>
);
const BlogCard3: React.FC<BlogCardProps> = ({ image, title, excerpt }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
    <img src={Blog3} alt={title} className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4" />
    <h3 className="text-lg font-inter font-semibold text-dark-custom mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-sm font-inter font-medium text-secondary-custom leading-7 mb-6">
      {excerpt}
    </p>
    <div className="flex items-center gap-2">
      <a className="text-sm font-inter font-medium text-dark-custom">Click Me</a>
    </div>
  </div>
);
const Home: React.FC = () => {
  const chipItems = [
    { id: 'bi-big-data', label: 'BI and Big Data' },
    { id: 'data-science-ai', label: 'Data Science and AI solutions' },
    { id: 'ml-consulting', label: 'ML Consulting & Data Strategy' },
    { id: 'all-case-studies', label: 'All Case Studies' }
  ];

  const services = [
    {
      icon: '/images/img_icon.svg',
      title: 'AI Strategy & Consulting',
      description: 'Got a project in mind? We help you shape and execute it, offering expert guidance to sidestep common pitfalls and drive success.'
    },
    {
      icon: '/images/img_icon_cyan_700.svg',
      title: 'MLOps/LLMOps',
      description: 'From deployment to scaling, we bring the expertise needed to streamline your model operations and avoid costly mistakes.'
    },
    {
      icon: '/images/img_icon_cyan_700_36x34.svg',
      title: 'Agentic AI Platforms',
      description: 'Need help building or integrating Agentic AI platforms? We guide you through every step to ensure smooth and efficient implementation.'
    },
    {
      icon: '/images/img_tabler_icon_message_2_code.svg',
      title: 'Intelligence Document Processing',
      description: 'Turn unstructured documents into actionable data. We help you design smart workflows and avoid inefficiencies from the start.'
    },
    {
      icon: '/images/img_tabler_icon_message_2_share.svg',
      title: 'Advanced RAG',
      description: 'Build high-performance RAG systems with our support—from planning to production—while avoiding common technical roadblocks.'
    },
    {
      icon: '/images/img_tabler_icon_dev.svg',
      title: 'Readymade Agents',
      description: 'Accelerate your project with pre-built AI agents. We help you choose, customize, and integrate them with minimal risk.'
    }
  ];
  const products = [
    {
      icon: '/images/img_icon.svg',
      title: 'RAG Platform',
      description: 'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.'
    },
    {
      icon: '/images/img_icon_cyan_700.svg',
      title: 'Intelligence Document Processing',
      description: 'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.'
    },
    {
      icon: '/images/img_icon_cyan_700_36x34.svg',
      title: 'Agentic AI Platforms',
      description: 'Have a project idea and need help implementing it? We are here to consult you and share our knowledge to help you avoid all unnecessary pitfalls.'
    }
  ];  
  const testimonials = [
    {
      name: 'Cameron Williamson',
      role: 'Head of Innovation, Healthcare Tech Company',
      avatar: '/images/img_avatar.png',
      content: 'GenAI Consulting helped us turn AI ideas into action. Their team quickly identified high-impact use cases, guided tool selection, and delivered working prototypes within weeks. Clear, practical, and highly collaborative—they made AI adoption feel simple and strategic.',
      rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      name: 'Esther Howard',
      role: 'Operations Lead, Financial Services Firm',
      avatar: '/images/img_avatar_40x40.png',
      content: 'The IDP solution transformed how we handle documents—cut processing time by 70% and boosted accuracy. Seamless integration, smart automation, and real results.',
      rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      name: 'Jenny Wilson',
      role: 'UI/UX Designer',
      avatar: '/images/img_avatar_1.png',
      content: 'We were impressed by their deep understanding of U.S. healthcare systems and how seamlessly they applied agentic AI to streamline clinical and operational tasks. The solution wasn’t just smart—it was compliant, scalable, and tailored to our needs.',
      rating: '⭐️⭐️⭐️⭐️✨'
    }
  ];

  const blogPosts = [
    {
      image: 'images/blog1.webp',
      title: '👉 BLOG 1',
      // excerpt: 'The rapid advance of artificial intelligence has generated a lot of buzz, with some predicting it...'
    }];
     const blogPosts1 = [
    {
      image: '/images/blog2.jpeg',
      title: '👉 BLOG 2',
    }];
     const blogPosts2 = [
    {
      image: '/images/blog3.webp',
      title: '👉 BLOG 3'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-dark via-secondary to-tertiary overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' className="w-full h-full object-cover width:100pc"/>
          </video>
          {/* <img src="/images/img_elements.png" alt="Background" className="w-full h-full object-cover opacity-80" /> */}
        </div>
        
        {/* Decorative Dots */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>

        {/* Header */}
        <Header className="relative z-20" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-white mb-4 leading-tight">
              GenAI, Agentic AI Implementation At Enterprise Level
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-8 leading-tight">
              Bespoke AI Solutions For Your Needs
            </h2>
            <p className="text-lg sm:text-xl font-raleway text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              At BigBets.AI we harness GenAI and Agentic AI to solve real healthcare challenges. Precision, impact and measurable outcomes - That's our promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
              <Button variant="primary" size="medium" className="w-full sm:w-auto hover:color-red">
                GenAI Demo
              </Button>
              <Button variant="primary" size="medium" className="w-full sm:w-auto">
                Agentic AI Demo
              </Button>
            </div>
          </div>
        </div>
 <br></br>
        {/* Trusted Companies */}
        <div className="relative z-10 bg-tertiary py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-inter text-white uppercase tracking-wider mb-6">
              Trusted by 20+ companies around the globe.
            </p>
            {/* <img src="/images/img_marquee_div.svg" alt="Company logos" className="w-full h-22 object-contain" /> */}
            <img src={logo} className="w-full h-22 object-contain" ></img>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4">
              Our SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6">
              How We Can Help You
            </h2>
            <p className="text-xl font-manrope text-secondary-custom max-w-3xl mx-auto">
           20+ years of experience in US healthcare. One bold mission: Outcome first innovation. BigBets.AI deliveres GenAI and Agentic AI solution where they matter most.</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button variant="primary" size="medium">
              I Need Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-dark-custom leading-tight">
                Why Work With Us?
              </h2>
            </div>
            <div className="lg:w-2/3 flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-4">
              <StatItem value="100%" label="AI-Focused" color="text-orange-custom" />
              <div className="hidden sm:block w-px h-20 bg-gray-300"></div>
              <StatItem value="6" label="Six-Day Sprint Cycle" color="text-green-custom" />
              <div className="hidden sm:block w-px h-20 bg-gray-300"></div>
              <StatItem value="15+" label="Projects Shipped" color="text-primary-custom" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4">
              Our PRODUCTS
            </h1>
            </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {products.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-lg font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-4">
              Our Research
            </p>
          </div>

          {/* Filter Chips */}
          {/* <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
            <ChipView items={chipItems} className="flex-1" />
            <div className="flex items-center gap-4">
              <img src="/images/img_left_arrow.svg" alt="Previous" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
              <img src="/images/img_right_arrow.svg" alt="Next" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
            </div>
          </div> */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard1 key={index} {...post} />
            ))}
            {blogPosts1.map((post, index) => (
              <BlogCard2 key={index} {...post} />
            ))}
            {blogPosts2.map((post, index) => (
              <BlogCard3 key={index} {...post} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6">
              Meet our team
            </h2>
            <p className="text-base font-raleway text-secondary-custom max-w-3xl mx-auto">
              Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.
            </p>
          </div>

          {/* Team Member Showcase */}
          <div className="relative mb-12">
            <div className="bg-white rounded-2xl shadow-[1px_-2px_9px_#00000026] p-8 max-w-4xl mx-auto">
              <p className="text-base font-raleway text-secondary-custom text-center mb-8 leading-relaxed">
                During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app did not exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.
              </p>
              <div className="text-center">
                <h3 className="text-base font-inter font-semibold text-primary-custom mb-2">BigBets.AI</h3>
                <p className="text-base font-inter text-muted-custom mb-4">CEO BigBets.AI</p>
                <div className="flex justify-center gap-5">
                  <img src="/images/img_facebook.svg" alt="Facebook" className="w-4 h-4" />
                  <img src="/images/img_linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                </div>
              </div>
            </div>
            {/* <img src="/images/img_shape.svg" alt="Profile" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40" /> */}
          </div>

          {/* Team Photos */}
          <div className="flex justify-center items-center gap-4 mb-8 overflow-x-auto">
            <img src={team1} alt="Team member" className="w-32 sm:w-44 h-32 sm:h-44 rounded-full object-cover flex-shrink-0" />
            <img src={team2} alt="Team member" className="w-36 sm:w-48 h-36 sm:h-48 rounded-full object-cover flex-shrink-0 -ml-4" />
            {/* <img src={team3} alt="Team member" className="w-40 sm:w-56 h-40 sm:h-56 rounded-full object-cover flex-shrink-0 -ml-4" /> */}
            <img src={team4} alt="Team member" className="w-48 sm:w-70 h-48 sm:h-70 rounded-full object-cover flex-shrink-0 -ml-6" />
            {/* <img src={team5} alt="Team member" className="w-40 sm:w-56 h-40 sm:h-56 rounded-full object-cover flex-shrink-0 -ml-4" /> */}
            <img src={team6} alt="Team member" className="w-36 sm:w-48 h-36 sm:h-48 rounded-full object-cover flex-shrink-0 -ml-4" />
            <img src={team7} alt="Team member" className="w-32 sm:w-44 h-32 sm:h-44 rounded-full object-cover flex-shrink-0 -ml-4" />
          </div>

          {/* Navigation */}
          {/* <div className="flex justify-center gap-4">
            <img src="/images/img_left_arrow_yellow_800.svg" alt="Previous" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
            <img src="/images/img_right_arrow.svg" alt="Next" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
          </div> */}
        </div>
      </div>

      {/* AI Expertise Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 relative">
              {/* AI Visualization */}
              <div className="relative bg-secondary rounded-3xl p-8 sm:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan via-primary to-orange opacity-20 rounded-3xl"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {/* <div className="bg-very-light-blue rounded-full p-8 sm:p-12"> */}
                    {/* <div className="w-32 h-32 sm:w-40 sm:h-40 bg-very-light-blue rounded-full flex items-center justify-center"> */}
                      <img src={expertise} alt="AI Visualization" className="w-full h-full object-contain" />
                    {/* </div> */}
                  {/* </div> */}
                </div>
                {/* Decorative Elements */}
                {/* <div className="absolute top-8 left-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-very-light-blue rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-very-light-blue rounded-full"></div> */}
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm font-raleway font-bold text-red-custom uppercase tracking-[4px] mb-6">
                Our AI Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-raleway font-bold text-dark-custom mb-6 leading-tight">
                AI you can trust. Outcomes you can measure.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-raleway font-light text-secondary-custom">
                  From LLM-driven automation to autonomous agents, our AI solutions are built for real-world healthccare impact.
                </p>
                {/* <p className="text-lg font-raleway font-light text-secondary-custom">
                  companies claim AI as a strategic business priority
                </p>
                <p className="text-lg font-raleway font-light text-secondary-custom">
                  Our Mission is to Bring the Power of AI to Every Business
                </p> */}
              </div>
              {/* <Button variant="primary" size="medium">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-semibold text-dark-custom mb-6">
              What our clients say
            </h2>
            {/* <p className="text-base font-inter text-secondary-custom max-w-3xl mx-auto">
              Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.
            </p> */}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Navigation */}
          {/* <div className="flex justify-center gap-4">
            <img src="/images/img_left_arrow_yellow_800.svg" alt="Previous" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
            <img src="/images/img_right_arrow.svg" alt="Next" className="w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-100" />
          </div> */}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/img_bg_shape.svg" alt="Background" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/img_logo.svg" alt="ThinkAI Logo" className="w-16 h-20 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-light-custom mb-6">
            Start Your First Conversation with BigBets.AI
          </h2>
          <p className="text-base font-inter text-custom-gray mb-12 max-w-2xl mx-auto">
            Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
          </p>
          <div className="bg-primary border-3 border-primary rounded-[28px] p-1 max-w-lg mx-auto">
            <div className="flex items-center justify-between">
              <textPath className="text-base font-raleway font-semibold text-white pl-6">
                <text  className="input-field"></text>
              </textPath>
              <Button variant="primary" size="small" className="rounded-[22px]">
                Get Started
              </Button>
            </div>
          </div>
        </div> */}
        {/* Decorative Elements */}
        {/* <div className="absolute top-16 left-16 w-24 h-30 bg-cyan rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-primary rounded-[60px] shadow-[0px_4px_200px_#888888ff]"></div>
        <div className="absolute top-16 right-16 w-24 h-30 bg-orange rounded-[60px] shadow-[0px_4px_250px_#888888ff]"></div> */}
      {/* </div> */}

      {/* Footer */}
      <footer className="bg-tertiary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-rubik font-bold text-white mb-6">
                {/* <span className="text-white">BigBets.</span> */}
                 <img src={bigbets} alt="logo" className="w-20 h-20" />
                {/* <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">AI</span> */}
              </h3>
              <p className="text-sm font-inter text-white-transparent mb-8 leading-relaxed">
                With lots of unique blocks, you can easily build AI driven projects without coding.
              </p>
              <div className="flex gap-5">
                <a href='https://www.youtube.com/@BigBets.AI_Official'><img src={youtube} alt="Facebook" className="w-4 h-4 cursor-pointer hover:opacity-80" /></a>
                <a href='https://www.instagram.com/bigbets.ai_official/'><img src="/images/img_logo_instagram.svg" alt="Instagram" className="w-4 h-4 cursor-pointer hover:opacity-80" /></a>
                <a href=''><img src="/images/img_shape_blue_gray_400.svg" alt="Twitter" className="w-4 h-4 cursor-pointer hover:opacity-80" /></a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mb-4">Company</h4>
              <div className="space-y-3">
                {['About us', 'Contact us', 'Careers', 'Research'].map((link) => (
                  <a key={link} href="#" className="block text-base font-inter text-white hover:text-primary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mb-4">Product</h4>
              <div className="space-y-3">
                {['RAG Platform', 'Intelligence Document Processing', 'Agentic AI Platforms'].map((link) => (
                  <a key={link} href="#" className="block text-base font-inter text-white hover:text-primary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-inter text-white-transparent mb-4">Services</h4>
              <div className="space-y-3">
                {['AI Consulting', 'Advanced RAG', 'Readymade Agents', 'MLOps/LLMOps', 'Intelligence Document Processing', 'Agentic AI Platforms'].map((link) => (
                  <a key={link} href="#" className="block text-base font-inter text-white hover:text-primary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        {/* <div className="fixed bottom-8 right-8">
          <div className="bg-orange rounded-full p-3 cursor-pointer hover:bg-orange/90 transition-colors shadow-lg">
            <img src="/images/img_vector_white_a700.svg" alt="Scroll to top" className="w-6 h-6" />
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Home;
