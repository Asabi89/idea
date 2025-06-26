// Project data - First 50 projects from your extensive list
const projectsData = [
    {
        id: 1,
        title: "AI-Powered CV Generator",
        category: "ai",
        description: "Create professional CVs and cover letters that bypass AI detection systems.",
        fullDescription: `This innovative project combines artificial intelligence with professional document creation to help job seekers create compelling CVs and cover letters. The system uses advanced NLP algorithms to analyze job descriptions and tailor documents accordingly.

Key Features:
• AI-powered content generation that mimics human writing patterns
• Anti-detection algorithms to ensure documents pass AI screening tools
• Industry-specific templates and formatting
• Real-time optimization suggestions
• Integration with job boards and ATS systems

The platform addresses the growing challenge of AI-powered recruitment tools by creating documents that maintain authenticity while leveraging AI assistance. Users can input their experience, skills, and target job descriptions to receive personalized, professional documents.

Technical Implementation:
The system uses GPT-based models fine-tuned on professional writing samples, combined with natural language processing to ensure variety in sentence structure and vocabulary. The anti-detection component analyzes patterns typically flagged by AI detection tools and adjusts the output accordingly.

This project is perfect for computer science students interested in NLP, machine learning, and practical AI applications. It combines technical complexity with real-world utility, making it an excellent portfolio piece.`,
        tech: "Django, GPT API, Tailwind CSS, PostgreSQL",
        duration: "8-12 weeks",
        difficulty: "Advanced"
    },
    {
        id: 2,
        title: "Smart Plagiarism Detector",
        category: "education",
        description: "Advanced plagiarism detection system using NLP and machine learning.",
        fullDescription: `Develop a sophisticated plagiarism detection system that goes beyond simple text matching to identify paraphrased content, translated plagiarism, and structural similarities. This project leverages cutting-edge NLP techniques to provide comprehensive academic integrity solutions.

        Core Functionality:
        • Semantic similarity detection using transformer models
        • Cross-language plagiarism detection
        • Citation and reference validation
        • Real-time document scanning
        • Detailed similarity reports with highlighted sections
        • Integration with academic databases and web sources
        
        The system employs advanced machine learning algorithms including BERT embeddings for semantic analysis, cosine similarity calculations, and custom neural networks trained on academic texts. It can detect sophisticated plagiarism attempts including synonym substitution, sentence restructuring, and idea theft.
        
        Educational Impact:
        This tool serves both educators and students by promoting academic integrity while providing learning opportunities about proper citation and original thinking. The system includes educational modules that explain why content was flagged and how to properly attribute sources.
        
        Technical Architecture:
        Built using Flask for the backend API, scikit-learn for machine learning components, and a React frontend for user interaction. The system processes documents through multiple analysis layers, comparing against extensive databases of academic content.
        
        This project demonstrates expertise in natural language processing, machine learning, and educational technology, making it highly valuable for academic and professional portfolios.`,
                tech: "Flask, NLP, Scikit-learn, React",
                duration: "10-14 weeks",
                difficulty: "Advanced"
            },
            {
                id: 3,
                title: "Sports Performance Predictor",
                category: "ai",
                description: "ML-powered system to predict athlete and team performance using historical data.",
                fullDescription: `Create an intelligent sports analytics platform that predicts athlete and team performance using machine learning algorithms and comprehensive data analysis. This system processes historical performance data, injury records, weather conditions, and other variables to generate accurate predictions.
        
        Key Features:
        • Multi-sport compatibility (football, basketball, tennis, etc.)
        • Player performance trend analysis
        • Team chemistry and dynamics modeling
        • Injury risk assessment
        • Weather and environmental impact analysis
        • Real-time performance tracking during games
        • Fantasy sports integration
        • Betting odds comparison and analysis
        
        The platform uses ensemble learning methods combining regression models, neural networks, and time series analysis to create robust predictions. It incorporates external data sources including weather APIs, social media sentiment, and news analysis to enhance prediction accuracy.
        
        Data Sources:
        • Historical game statistics
        • Player biometric data
        • Team composition changes
        • Venue and environmental factors
        • Social media sentiment analysis
        • Injury and medical reports
        
        Technical Implementation:
        Built with Django for robust backend management, TensorFlow for machine learning models, and Chart.js for interactive data visualization. The system includes real-time data ingestion pipelines and automated model retraining capabilities.
        
        This project showcases advanced data science skills, sports domain knowledge, and practical machine learning applications, making it attractive to sports organizations, fantasy platforms, and analytics companies.`,
                tech: "Django, TensorFlow, Chart.js, PostgreSQL",
                duration: "12-16 weeks",
                difficulty: "Advanced"
            },
            {
                id: 4,
                title: "Emotional Text Analyzer",
                category: "ai",
                description: "Analyze emotional content in text using advanced sentiment analysis.",
                fullDescription: `Develop a comprehensive emotional intelligence platform that analyzes text content to identify emotions, sentiment patterns, and psychological indicators. This tool goes beyond basic sentiment analysis to provide deep emotional insights for various applications.
        
        Advanced Capabilities:
        • Multi-dimensional emotion detection (joy, anger, fear, sadness, surprise, disgust)
        • Emotional intensity measurement
        • Sarcasm and irony detection
        • Cultural context consideration
        • Personality trait inference
        • Mental health indicator analysis
        • Relationship dynamics assessment
        • Communication style profiling
        
        The system uses state-of-the-art transformer models fine-tuned on emotional datasets, combined with psychological frameworks like the Big Five personality model and Plutchik's emotion wheel. It provides actionable insights for improving communication and understanding emotional patterns.
        
        Applications:
        • Customer service optimization
        • Social media monitoring
        • Mental health support
        • Educational feedback systems
        • HR and recruitment analysis
        • Content moderation
        • Marketing campaign analysis
        • Personal development tools
        
        Technical Architecture:
        Flask backend with integrated sentiment analysis APIs, custom neural networks for emotion classification, and a responsive web interface. The system includes real-time processing capabilities and batch analysis for large datasets.
        
        This project demonstrates expertise in NLP, psychology, and practical AI applications, making it valuable for healthcare, education, and business sectors.`,
                tech: "Flask, Sentiment Analysis API, TensorFlow",
                duration: "8-12 weeks",
                difficulty: "Intermediate"
            },
            {
                id: 5,
                title: "Interactive Quiz Generator",
                category: "education",
                description: "Automatically generate educational quizzes from any text using AI.",
                fullDescription: `Create an intelligent educational platform that automatically generates comprehensive quizzes from any text input using advanced natural language processing. This system helps educators create engaging assessments while providing students with personalized learning experiences.
        
        Core Features:
        • Automatic question generation from text, PDFs, and web content
        • Multiple question types (MCQ, true/false, short answer, essay)
        • Difficulty level adjustment
        • Topic categorization and tagging
        • Adaptive learning pathways
        • Performance analytics and insights
        • Collaborative quiz creation
        • Gamification elements with scoring and badges
        
        The platform uses GPT-based models to understand content context and generate relevant questions that test comprehension, analysis, and critical thinking. It employs educational taxonomy frameworks like Bloom's Taxonomy to ensure questions target appropriate cognitive levels.
        
        Educational Benefits:
        • Reduces teacher workload in assessment creation
        • Provides immediate feedback to students
        • Identifies knowledge gaps and learning patterns
        • Supports differentiated instruction
        • Enables self-paced learning
        • Promotes active engagement with content
        
        Technical Implementation:
        Django backend with GPT API integration, PostgreSQL for data management, and a modern React frontend. The system includes intelligent caching, real-time collaboration features, and comprehensive analytics dashboards.
        
        Integration Capabilities:
        • Learning Management Systems (LMS)
        • Google Classroom
        • Canvas and Blackboard
        • Educational content repositories
        • Student information systems
        
        This project combines educational technology with artificial intelligence, making it highly relevant for EdTech companies, schools, and online learning platforms.`,
                tech: "Django, GPT API, React, PostgreSQL",
                duration: "10-14 weeks",
                difficulty: "Advanced"
            },
            {
                id: 6,
                title: "Medical Image Classifier",
                category: "health",
                description: "AI-powered medical image analysis for diagnostic assistance.",
                fullDescription: `Develop a sophisticated medical imaging platform that assists healthcare professionals in diagnosing conditions through AI-powered image analysis. This system uses deep learning to analyze medical images and provide diagnostic insights while maintaining the highest standards of medical accuracy and ethics.
        
        Medical Applications:
        • X-ray analysis for fractures and abnormalities
        • MRI scan interpretation
        • CT scan analysis
        • Dermatological condition identification
        • Retinal disease detection
        • Mammography screening assistance
        • Pathology slide analysis
        • Dental radiograph evaluation
        
        The platform employs convolutional neural networks (CNNs) specifically designed for medical imaging, trained on large datasets of annotated medical images. It provides probability scores, highlights areas of concern, and generates detailed reports for medical professionals.
        
        Key Features:
        • DICOM file format support
        • Multi-modal image analysis
        • Uncertainty quantification
        • Explainable AI with heatmaps
        • Integration with hospital systems
        • Compliance with medical regulations (HIPAA, GDPR)
        • Audit trails and version control
        • Collaborative diagnosis features
        
        Technical Architecture:
        Flask backend with TensorFlow/PyTorch for deep learning models, secure cloud storage for medical data, and a specialized medical imaging frontend. The system includes robust security measures and compliance features required for healthcare applications.
        
        Ethical Considerations:
        • Bias detection and mitigation
        • Transparent decision-making processes
        • Human-in-the-loop validation
        • Continuous model monitoring
        • Patient privacy protection
        • Regulatory compliance
        
        This project demonstrates expertise in medical AI, computer vision, and healthcare technology, making it valuable for medical device companies, hospitals, and health tech startups.`,
                tech: "Flask, TensorFlow, Medical APIs, DICOM",
                duration: "16-20 weeks",
                difficulty: "Expert"
            },
            {
                id: 7,
                title: "Mood-Based Music Recommender",
                category: "creative",
                description: "AI system that recommends music based on emotional state and preferences.",
                fullDescription: `Create an intelligent music recommendation platform that analyzes user emotions, preferences, and contextual factors to provide personalized music suggestions. This system combines emotion recognition, music analysis, and machine learning to create the perfect soundtrack for any moment.
        
        Emotion Detection Methods:
        • Facial expression analysis through webcam
        • Voice tone and speech pattern analysis
        • Text input sentiment analysis
        • Physiological data integration (heart rate, activity)
        • Environmental context (weather, time, location)
        • Social media mood indicators
        • Calendar event analysis
        • Music listening history patterns
        
        The platform uses advanced machine learning algorithms to understand the relationship between emotions and musical preferences, creating personalized models for each user. It analyzes musical features like tempo, key, energy, and genre to match songs with emotional states.
        
        Music Analysis Features:
        • Audio feature extraction (tempo, rhythm, harmony)
        • Lyrical sentiment analysis
        • Genre and style classification
        • Energy and mood mapping
        • Cultural and contextual relevance
        • Artist and album relationship modeling
        • Collaborative filtering with similar users
        • Real-time playlist generation
        
        Technical Implementation:
        Flask backend with integration to Spotify, Apple Music, and Deezer APIs. The system includes real-time emotion processing, music feature analysis, and dynamic playlist generation. Machine learning models are continuously updated based on user feedback.
        
        User Experience:
        • Seamless music streaming integration
        • Voice-controlled interaction
        • Mood journaling and tracking
        • Social sharing and discovery
        • Offline mode capabilities
        • Cross-platform synchronization
        
        This project showcases expertise in AI, music technology, and user experience design, making it attractive to music streaming services, wellness apps, and entertainment companies.`,
                tech: "Flask, Deezer API, TensorFlow, WebRTC",
                duration: "12-16 weeks",
                difficulty: "Advanced"
            },
            {
                id: 8,
                title: "Document Summarization Tool",
                category: "ai",
                description: "Generate concise summaries of long documents using NLP techniques.",
                fullDescription: `Develop an advanced document summarization platform that transforms lengthy texts into concise, meaningful summaries while preserving key information and context. This tool serves researchers, students, professionals, and organizations dealing with information overload.
        
        Summarization Techniques:
        • Extractive summarization (key sentence selection)
        • Abstractive summarization (content rewriting)
        • Multi-document summarization
        • Hierarchical summarization for long documents
        • Query-focused summarization
        • Timeline-based summarization for historical content
        • Visual summarization with charts and infographics
        • Audio summarization for transcripts
        
        The platform employs state-of-the-art transformer models like BERT, GPT, and T5, fine-tuned for different document types and domains. It maintains coherence, factual accuracy, and readability while significantly reducing document length.
        
        Document Types Supported:
        • Academic papers and research articles
        • Legal documents and contracts
        • News articles and reports
        • Meeting transcripts and recordings
        • Technical documentation
        • Medical records and studies
        • Financial reports and analyses
        • Government documents and policies
        
        Advanced Features:
        • Multi-language support
        • Domain-specific customization
        • Importance scoring and ranking
        • Key entity and concept extraction
        • Fact-checking and verification
        • Citation and reference preservation
        • Collaborative annotation tools
        • Integration with document management systems
        
        Technical Architecture:
        Django backend with NLP processing pipelines, Redis for caching, and a modern web interface. The system includes batch processing capabilities, API endpoints for integration, and comprehensive analytics.
        
        This project demonstrates expertise in natural language processing, information retrieval, and practical AI applications, making it valuable for legal firms, research institutions, and content management companies.`,
                tech: "Django, NLP Libraries, Redis, PostgreSQL",
                duration: "10-14 weeks",
                difficulty: "Advanced"
            },
            {
                id: 9,
                title: "Fake News Detection System",
                category: "social",
                description: "Identify and flag potentially false information using ML algorithms.",
                fullDescription: `Build a comprehensive fake news detection platform that analyzes news articles, social media posts, and online content to identify potentially false or misleading information. This system combines multiple detection methods to provide accurate assessments of information credibility.
        
        Detection Methods:
        • Content analysis using NLP techniques
        • Source credibility assessment
        • Cross-reference verification with trusted sources
        • Social media propagation pattern analysis
        • Image and video authenticity verification
        • Author and publication history analysis
        • Linguistic pattern recognition
        • Fact-checking database integration
        
        The platform uses ensemble learning methods combining multiple machine learning models trained on verified datasets of true and false news. It analyzes linguistic features, metadata, and propagation patterns to generate credibility scores.
        
        Key Features:
        • Real-time content scanning
        • Browser extension for instant verification
        • Social media monitoring and alerts
        • Detailed credibility reports
        • Source tracking and verification
        • Community-based fact-checking
        • Educational resources about misinformation
        • API for third-party integration
        
        Technical Implementation:
        Node.js backend with Python microservices for ML processing, MongoDB for flexible data storage, and React frontend. The system includes real-time processing pipelines, social media API integrations, and comprehensive logging.
        
        Verification Process:
        • Automated initial screening
        • Cross-reference with fact-checking databases
        • Source authority assessment
        • Community verification system
        • Expert review for complex cases
        • Continuous model improvement
        • Transparency in decision-making
        
        This project addresses critical issues in information integrity and digital literacy, making it valuable for news organizations, social media platforms, and educational institutions.`,
                tech: "Node.js, Python, MongoDB, React",
                duration: "14-18 weeks",
                difficulty: "Advanced"
            },
            {
                id: 10,
                title: "Professional Email Assistant",
                category: "business",
                description: "AI-powered tool for writing professional emails and communications.",
                fullDescription: `Create an intelligent email composition platform that helps users write professional, effective emails using AI assistance. This tool analyzes context, tone, and purpose to generate appropriate email content while maintaining personal voice and authenticity.
        
        Core Capabilities:
        • Context-aware email generation
        • Tone adjustment (formal, casual, persuasive, apologetic)
        • Industry-specific templates and language
        • Multi-language support
        • Grammar and style optimization
        • Cultural sensitivity adaptation
        • Follow-up email suggestions
        • Email thread analysis and response generation
        
        The platform uses advanced language models fine-tuned on professional communication datasets, incorporating business writing best practices and cultural communication norms. It provides suggestions while allowing users to maintain their personal writing style.
        
        Professional Features:
        • Meeting request optimization
        • Proposal and pitch email templates
        • Customer service response generation
        • Internal communication assistance
        • Networking and outreach support
        • Complaint and feedback handling
        • Sales and marketing email optimization
        • Executive communication support
        
        Technical Architecture:
        Django backend with GPT API integration, user preference learning, and email client integrations. The system includes privacy protection, offline capabilities, and seamless workflow integration.
        
        Integration Options:
        • Gmail and Outlook plugins
        • CRM system integration
        • Team collaboration tools
        • Mobile app support
        • Calendar and scheduling integration
        • Contact management systems
        • Analytics and performance tracking
        
        This project combines AI technology with practical business applications, making it valuable for professionals, businesses, and productivity tool companies.`,
                tech: "Django, GPT API, Email APIs, React",
                duration: "8-12 weeks",
                difficulty: "Intermediate"
            },
            {
                id: 11,
                title: "Code Generator from Description",
                category: "ai",
                description: "Generate HTML/CSS code from natural language descriptions.",
            fullDescription: `Develop an innovative platform that converts natural language descriptions into functional HTML/CSS code, bridging the gap between design ideas and implementation. This tool democratizes web development by allowing non-programmers to create web interfaces through simple descriptions.

Generation Capabilities:
• Complete webpage layouts from descriptions
• Component-based code generation
• Responsive design implementation
• CSS styling and animations
• Interactive element creation
• Form and input field generation
• Navigation and menu systems
• Grid and flexbox layouts

The system uses advanced language models trained on web development patterns, design principles, and coding best practices. It understands design terminology, layout concepts, and user interface patterns to generate clean, semantic code.

Key Features:
• Natural language to code conversion
• Visual preview and editing
• Code optimization and validation
• Multiple framework support (Bootstrap, Tailwind, etc.)
• Accessibility compliance
• Cross-browser compatibility
• Version control integration
• Collaborative development features

Technical Implementation:
React frontend with Node.js backend, GPT-based code generation, and real-time preview capabilities. The system includes code validation, optimization algorithms, and integration with popular development tools.

Advanced Features:
• Design system integration
• Brand guideline compliance
• Performance optimization
• SEO best practices
• Mobile-first development
• Progressive web app capabilities

This project showcases expertise in AI, web development, and user experience design, making it valuable for design agencies, educational platforms, and development tool companies.`,
        tech: "React, Node.js, GPT API, CodeMirror",
        duration: "12-16 weeks",
        difficulty: "Advanced"
    },
    {
        id: 12,
        title: "Virtual Study Assistant",
        category: "education",
        description: "AI-powered virtual tutor for exam preparation and study guidance.",
        fullDescription: `Create an intelligent virtual study assistant that provides personalized tutoring, exam preparation, and learning guidance using artificial intelligence. This platform adapts to individual learning styles and provides comprehensive academic support.

Core Features:
• Personalized study plan generation
• Interactive Q&A sessions
• Concept explanation and clarification
• Practice problem generation
• Progress tracking and analytics
• Weakness identification and improvement
• Study schedule optimization
• Motivational support and encouragement

The system uses advanced AI models to understand student queries, provide explanations, and generate relevant practice materials. It adapts to different learning styles and academic levels, from elementary to university education.

Subject Coverage:
• Mathematics and calculus
• Science subjects (physics, chemistry, biology)
• Language arts and literature
• History and social studies
• Computer science and programming
• Business and economics
• Foreign language learning
• Test preparation (SAT, GRE, GMAT)

Learning Methodologies:
• Spaced repetition algorithms
• Active recall techniques
• Visual and auditory learning support
• Gamification elements
• Peer learning integration
• Real-time feedback systems
• Adaptive difficulty adjustment
• Multi-modal content delivery

Technical Architecture:
React frontend with GPT integration, learning analytics backend, and comprehensive user management. The system includes offline capabilities, mobile optimization, and integration with educational platforms.

This project demonstrates expertise in educational technology, AI applications, and learning science, making it valuable for EdTech companies, schools, and online learning platforms.`,
        tech: "React, GPT API, Learning Analytics, MongoDB",
        duration: "14-18 weeks",
        difficulty: "Advanced"
    },
    {
        id: 13,
        title: "Nutritional AI Dashboard",
        category: "health",
        description: "Track nutrition and get AI-powered dietary recommendations.",
        fullDescription: `Develop a comprehensive nutritional tracking and recommendation platform that uses artificial intelligence to provide personalized dietary guidance, meal planning, and health insights based on individual needs and goals.

Core Functionality:
• Food logging with image recognition
• Nutritional analysis and tracking
• Personalized meal recommendations
• Dietary goal setting and monitoring
• Health condition-specific guidance
• Supplement recommendations
• Recipe suggestions and meal planning
• Shopping list generation

The platform uses computer vision for food recognition, nutritional databases for accurate tracking, and machine learning algorithms to provide personalized recommendations based on user preferences, health conditions, and dietary goals.

Health Integration:
• Fitness tracker synchronization
• Medical condition considerations
• Allergy and intolerance management
• Weight management support
• Blood sugar monitoring integration
• Cholesterol and heart health tracking
• Digestive health optimization
• Sports nutrition guidance

Advanced Features:
• Macro and micronutrient analysis
• Meal timing optimization
• Hydration tracking
• Social sharing and challenges
• Professional nutritionist consultation
• Progress visualization and reporting
• Family meal planning
• Budget-conscious meal suggestions

Technical Implementation:
Flask backend with MongoDB for flexible data storage, TensorFlow for image recognition, and comprehensive nutritional APIs. The system includes real-time tracking, predictive analytics, and mobile optimization.

This project combines health technology with AI applications, making it valuable for healthcare providers, fitness companies, and wellness platforms.`,
        tech: "Flask, MongoDB, TensorFlow, Nutrition APIs",
        duration: "12-16 weeks",
        difficulty: "Advanced"
    },
    {
        id: 14,
        title: "Crypto Market Predictor",
        category: "finance",
        description: "Predict cryptocurrency market trends using machine learning.",
        fullDescription: `Build an advanced cryptocurrency market analysis platform that uses machine learning, sentiment analysis, and technical indicators to predict market trends and provide trading insights for digital assets.

Prediction Models:
• Price movement forecasting
• Volatility prediction
• Market sentiment analysis
• Technical indicator integration
• News impact assessment
• Social media sentiment tracking
• Whale movement analysis
• Market correlation studies

The platform combines multiple data sources including price history, trading volumes, social media sentiment, news articles, and on-chain analytics to create comprehensive market predictions using ensemble learning methods.

Data Sources:
• Real-time price feeds from major exchanges
• Social media sentiment (Twitter, Reddit, Discord)
• News article analysis
• On-chain transaction data
• Technical indicators and chart patterns
• Market maker and whale tracking
• Regulatory news and announcements
• Global economic indicators

Key Features:
• Real-time market monitoring
• Customizable alert systems
• Portfolio tracking and analysis
• Risk assessment tools
• Backtesting capabilities
• Paper trading simulation
• Educational resources
• Community insights and discussions

Technical Architecture:
React frontend with Python backend for ML processing, real-time data streaming with WebSockets, and integration with major cryptocurrency APIs. The system includes comprehensive data visualization and risk management tools.

Risk Management:
• Position sizing recommendations
• Stop-loss optimization
• Portfolio diversification analysis
• Risk-reward ratio calculations
• Market volatility assessments
• Correlation analysis
• Stress testing scenarios

This project demonstrates expertise in financial technology, machine learning, and cryptocurrency markets, making it valuable for trading platforms, investment firms, and fintech companies.`,
        tech: "React, Python, Binance API, TensorFlow",
        duration: "16-20 weeks",
        difficulty: "Expert"
    },
    {
        id: 15,
        title: "SEO Keyword Analyzer",
        category: "business",
        description: "Analyze and optimize website keywords for better search rankings.",
        fullDescription: `Create a comprehensive SEO analysis platform that helps businesses and content creators optimize their websites for search engines through advanced keyword research, content analysis, and ranking optimization strategies.

Core Analysis Features:
• Keyword difficulty assessment
• Search volume analysis
• Competitor keyword research
• Content gap identification
• SERP feature analysis
• Long-tail keyword discovery
• Seasonal trend analysis
• Local SEO optimization

The platform uses advanced NLP techniques to analyze content quality, keyword density, semantic relationships, and search intent matching. It provides actionable recommendations for improving search engine rankings.

Content Optimization:
• On-page SEO analysis
• Meta tag optimization
• Header structure analysis
• Internal linking suggestions
• Content readability assessment
• Image alt-text optimization
• Schema markup recommendations
• Page speed impact analysis

Technical SEO Features:
• Website crawling and indexing analysis
• Mobile-friendliness assessment
• Core Web Vitals monitoring
• SSL certificate verification
• Sitemap analysis
• Robots.txt optimization
• Canonical tag management
• Structured data validation

Competitive Analysis:
• Competitor keyword tracking
• Backlink profile analysis
• Content strategy comparison
• SERP position monitoring
• Market share analysis
• Opportunity identification
• Trend forecasting
• Performance benchmarking

Technical Implementation:
Node.js backend with NLP.js for text analysis, integration with Google Search Console API, and comprehensive SEO APIs. The system includes automated reporting, rank tracking, and performance monitoring.

This project demonstrates expertise in digital marketing, web analytics, and search engine optimization, making it valuable for marketing agencies, e-commerce platforms, and content management companies.`,
        tech: "Node.js, NLP.js, Google APIs, Chart.js",
        duration: "10-14 weeks",
        difficulty: "Intermediate"
    },
    {
        id: 16,
        title: "Teacher's AI Assistant",
        category: "education",
        description: "AI-powered tool for grading, feedback, and classroom management.",
        fullDescription: `Develop a comprehensive AI-powered teaching assistant that automates grading, provides detailed feedback, manages classroom activities, and supports educators in delivering personalized learning experiences.

Grading and Assessment:
• Automated essay grading with detailed feedback
• Multiple choice and short answer evaluation
• Plagiarism detection and originality scoring
• Rubric-based assessment automation
• Peer review facilitation
• Progress tracking and analytics
• Grade book management
• Parent communication automation

The platform uses advanced NLP models to understand student responses, provide constructive feedback, and identify areas for improvement. It maintains consistency in grading while saving teachers significant time.

Classroom Management:
• Attendance tracking and reporting
• Behavior monitoring and intervention
• Assignment distribution and collection
• Deadline management and reminders
• Student engagement analytics
• Participation tracking
• Group formation optimization
• Resource allocation planning

Personalized Learning:
• Individual learning path creation
• Adaptive content recommendations
• Skill gap identification
• Learning style accommodation
• Differentiated instruction support
• Special needs consideration
• Multilingual support
• Cultural sensitivity integration

Administrative Features:
• Lesson plan generation and optimization
• Curriculum alignment verification
• Standards compliance checking
• Report card automation
• Parent-teacher conference scheduling
• Professional development recommendations
• Resource sharing and collaboration
• Data privacy and security compliance

Technical Architecture:
Django backend with AI/ML processing capabilities, secure student data management, and integration with popular LMS platforms. The system includes mobile optimization, offline capabilities, and comprehensive reporting tools.

This project combines educational technology with practical AI applications, making it valuable for schools, educational software companies, and teacher training organizations.`,
        tech: "Django, AI/ML APIs, LMS Integration, PostgreSQL",
        duration: "16-20 weeks",
        difficulty: "Advanced"
    },
    {
        id: 17,
        title: "YouTube Video Summarizer",
        category: "ai",
        description: "Generate automatic summaries of YouTube videos using AI.",
        fullDescription: `Create an intelligent video summarization platform that automatically generates concise summaries of YouTube videos, extracting key points, timestamps, and actionable insights from video content across various domains.

Core Capabilities:
• Automatic transcript extraction and processing
• Key point identification and extraction
• Chapter and section summarization
• Timestamp-based navigation
• Multi-language support
• Topic categorization and tagging
• Sentiment analysis of content
• Speaker identification and attribution

The platform uses advanced speech-to-text technology combined with NLP models to understand video content, identify important segments, and generate coherent summaries that capture the essence of lengthy videos.

Summary Types:
• Executive summaries for business content
• Educational notes for learning videos
• News briefings for current events
• Tutorial step-by-step guides
• Entertainment highlights
• Product review summaries
• Interview key quotes
• Lecture main concepts

Advanced Features:
• Custom summary length adjustment
• Focus area specification
• Collaborative annotation tools
• Bookmark and note-taking integration
• Social sharing and discussion
• Playlist summarization
• Trend analysis across channels
• Content recommendation based on summaries

Technical Implementation:
Python backend with YouTube API integration, speech recognition services, and NLP processing pipelines. The system includes caching mechanisms, batch processing capabilities, and real-time summarization options.

User Experience:
• Browser extension for instant summarization
• Mobile app for on-the-go access
• Integration with note-taking apps
• Offline summary storage
• Search functionality across summaries
• Export options (PDF, text, markdown)
• Customizable summary templates

This project demonstrates expertise in video processing, natural language processing, and content analysis, making it valuable for educational platforms, content creators, and productivity tool companies.`,
        tech: "Python, YouTube API, NLP, Speech Recognition",
        duration: "12-16 weeks",
        difficulty: "Advanced"
    },
    {
        id: 18,
        title: "Freelancer Management System",
        category: "business",
        description: "Comprehensive platform for managing freelance projects and clients.",
        fullDescription: `Build a complete freelancer management platform that streamlines project management, client communication, invoicing, and business operations for independent professionals and small agencies.

Project Management:
• Project timeline and milestone tracking
• Task assignment and progress monitoring
• Resource allocation and scheduling
• Deadline management and alerts
• Collaborative workspace for teams
• File sharing and version control
• Time tracking and productivity analysis
• Budget monitoring and cost control

Client Relationship Management:
• Client profile and history management
• Communication log and follow-ups
• Contract and agreement storage
• Feedback and rating system
• Referral tracking and management
• Client onboarding automation
• Relationship analytics and insights
• Retention strategy implementation

Financial Management:
• Invoice generation and customization
• Payment tracking and reminders
• Expense categorization and reporting
• Tax calculation and preparation
• Profit and loss analysis
• Cash flow forecasting
• Multi-currency support
• Integration with accounting software

Business Intelligence:
• Performance analytics and KPIs
• Revenue forecasting and trends
• Client acquisition cost analysis
• Project profitability assessment
• Time allocation optimization
• Market rate comparison
• Skill development recommendations
• Business growth planning

Technical Architecture:
Django backend with comprehensive business logic, PostgreSQL for data management, and modern React frontend. The system includes mobile optimization, offline capabilities, and third-party integrations.

Integration Capabilities:
• Payment processors (Stripe, PayPal)
• Calendar applications (Google, Outlook)
• Communication tools (Slack, Teams)
• Cloud storage (Dropbox, Google Drive)
• Accounting software (QuickBooks, Xero)
• Time tracking tools
• Email marketing platforms
• Social media management

This project demonstrates expertise in business applications, financial technology, and project management, making it valuable for freelancers, agencies, and business management platforms.`,
        tech: "Django, React, PostgreSQL, Payment APIs",
        duration: "14-18 weeks",
        difficulty: "Advanced"
    },
    {
        id: 19,
        title: "Smart Study Planner",
        category: "education",
        description: "AI-powered study schedule optimization based on learning patterns.",
        fullDescription: `Develop an intelligent study planning platform that uses machine learning to optimize study schedules based on individual learning patterns, retention rates, and academic goals, maximizing learning efficiency and exam performance.

Intelligent Scheduling:
• Personalized study timetable generation
• Optimal study session duration calculation
• Break timing and frequency optimization
• Subject rotation and interleaving
• Difficulty progression planning
• Retention curve analysis
• Forgetting curve compensation
• Peak performance time identification

Learning Analytics:
• Study habit pattern recognition
• Retention rate measurement
• Concept mastery tracking
• Learning velocity analysis
• Attention span optimization
• Stress level monitoring
• Motivation tracking
• Performance prediction modeling

Adaptive Features:
• Real-time schedule adjustment
• Goal modification and tracking
• Priority rebalancing
• Emergency cramming optimization
• Exam preparation intensification
• Long-term retention planning
• Skill gap identification
• Learning method recommendation

Study Techniques Integration:
• Spaced repetition implementation
• Active recall scheduling
• Pomodoro technique optimization
• Mind mapping integration
• Flashcard system automation
• Practice test scheduling
• Group study coordination
• Peer learning facilitation

Technical Implementation:
React frontend with Python backend for ML algorithms, comprehensive learning analytics, and integration with educational platforms. The system includes mobile optimization, offline capabilities, and data visualization tools.

Gamification Elements:
• Achievement badges and rewards
• Study streak tracking
• Leaderboards and competitions
• Progress visualization
• Challenge systems
• Social sharing features
• Milestone celebrations
• Habit formation support

This project combines educational psychology with machine learning, making it valuable for students, educational institutions, and learning management platforms.`,
        tech: "React, Python, ML Libraries, Educational APIs",
        duration: "12-16 weeks",
        difficulty: "Advanced"
    },
    {
        id: 20,
        title: "Legal Contract Assistant",
        category: "business",
        description: "AI-powered tool for contract",
        fullDescription: `Develop an intelligent legal contract analysis and generation platform that assists lawyers, businesses, and individuals in creating, reviewing, and managing legal documents using advanced AI and natural language processing technologies.

        Core Capabilities:
        • Contract template generation and customization
        • Legal document analysis and risk assessment
        • Clause recommendation and optimization
        • Compliance checking and verification
        • Contract comparison and version control
        • Legal terminology explanation
        • Deadline and obligation tracking
        • Automated contract review workflows
        
        The platform uses specialized legal AI models trained on contract databases, legal precedents, and regulatory requirements to provide accurate legal assistance while maintaining professional standards and ethical guidelines.
        
        Document Types Supported:
        • Employment contracts and agreements
        • Non-disclosure agreements (NDAs)
        • Service agreements and SOWs
        • Partnership and joint venture agreements
        • Real estate contracts and leases
        • Intellectual property agreements
        • Vendor and supplier contracts
        • Licensing and distribution agreements
        
        Risk Analysis Features:
        • Liability assessment and mitigation
        • Unfavorable clause identification
        • Missing provision detection
        • Regulatory compliance verification
        • Industry standard comparison
        • Negotiation point highlighting
        • Legal precedent referencing
        • Dispute risk evaluation
        
        Advanced Functionality:
        • Multi-jurisdiction legal support
        • Industry-specific customization
        • Integration with legal databases
        • Collaborative review workflows
        • Electronic signature integration
        • Contract lifecycle management
        • Automated renewal notifications
        • Performance tracking and analytics
        
        Technical Architecture:
        Django backend with specialized legal NLP models, secure document storage, and comprehensive audit trails. The system includes encryption, access controls, and compliance with legal industry standards.
        
        This project demonstrates expertise in legal technology, AI applications, and document management, making it valuable for law firms, corporate legal departments, and legal tech companies.`,
                tech: "Django, Legal NLP, Document APIs, Encryption",
                duration: "16-20 weeks",
                difficulty: "Expert"
            }
        ];

 // Global projects variable for compatibility
const projects = projectsData;       
        // Filter functionality
function filterProjects(category) {
            const filteredProjects = category === 'all' ? projects : projects.filter(p => p.category === category);
            displayProjects(filteredProjects);
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[onclick="filterProjects('${category}')"]`).classList.add('active');
        }
        
        // Display projects
        function displayProjects(projectsToShow) {
            const projectsGrid = document.getElementById('projectsGrid');
            projectsGrid.innerHTML = projectsToShow.map(project => `
                <div class="project-card" onclick="openModal(${project.id})">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-footer">
                        <div class="project-tech">
                            <strong>Tech:</strong> ${project.tech}
                        </div>
                        <div class="project-duration">
                            <strong>Duration:</strong> ${project.duration}
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // Modal functionality
        function openModal(projectId) {
            const project = projects.find(p => p.id === projectId);
            const modal = document.getElementById('projectModal');
            const modalContent = document.getElementById('modalContent');
            
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="project-meta">
                        <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                        <span class="duration-badge">${project.duration}</span>
                        <span class="category-badge">${project.category}</span>
                    </div>
                    <div class="tech-stack">
                        <strong>Technologies:</strong> ${project.tech}
                    </div>
                    <div class="project-full-description">
                        ${project.fullDescription.split('\n').map(paragraph => 
                            paragraph.trim() ? `<p>${paragraph}</p>` : ''
                        ).join('')}
                    </div>
                    <div class="modal-actions">
                        <button class="btn-primary" onclick="startProject(${project.id})">
                            Start This Project
                        </button>
                        <button class="btn-secondary" onclick="bookmarkProject(${project.id})">
                            Bookmark
                        </button>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            const modal = document.getElementById('projectModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function startProject(projectId) {
            const project = projects.find(p => p.id === projectId);
            alert(`Starting project: ${project.title}\n\nThis would typically redirect to a detailed project setup page with:\n- Step-by-step implementation guide\n- Required resources and tools\n- Code templates and examples\n- Progress tracking system`);
        }
        
        function bookmarkProject(projectId) {
            const project = projects.find(p => p.id === projectId);
            let bookmarks = JSON.parse(localStorage.getItem('bookmarkedProjects') || '[]');
            
            if (!bookmarks.includes(projectId)) {
                bookmarks.push(projectId);
                localStorage.setItem('bookmarkedProjects', JSON.stringify(bookmarks));
                alert(`${project.title} has been bookmarked!`);
            } else {
                alert(`${project.title} is already bookmarked.`);
            }
        }
        
        // Search functionality
        function searchProjects() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filteredProjects = projects.filter(project => 
                project.title.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.tech.toLowerCase().includes(searchTerm) ||
                project.category.toLowerCase().includes(searchTerm)
            );
            displayProjects(filteredProjects);
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayProjects(projects);
            
            // Add search event listener
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', searchProjects);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                const modal = document.getElementById('projectModal');
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
        });
        
        // Additional utility functions
        function getProjectsByDifficulty(difficulty) {
            return projects.filter(project => project.difficulty.toLowerCase() === difficulty.toLowerCase());
        }
        
        function getProjectsByTech(tech) {
            return projects.filter(project => 
                project.tech.toLowerCase().includes(tech.toLowerCase())
            );
        }
        
        function getRandomProject() {
            const randomIndex = Math.floor(Math.random() * projects.length);
            return projects[randomIndex];
        }
        
        function exportBookmarks() {
            const bookmarks = JSON.parse(localStorage.getItem('bookmarkedProjects') || '[]');
            const bookmarkedProjects = projects.filter(project => bookmarks.includes(project.id));
            
            const exportData = {
                exportDate: new Date().toISOString(),
                projects: bookmarkedProjects
            };
            
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = 'bookmarked-projects.json';
            link.click();
        }
        
        // Statistics and analytics
        function getProjectStats() {
            const stats = {
                total: projects.length,
                byCategory: {},
                byDifficulty: {},
                byTech: {},
                averageDuration: 0
            };
            
            projects.forEach(project => {
                // Category stats
                stats.byCategory[project.category] = (stats.byCategory[project.category] || 0) + 1;
                
                // Difficulty stats
                stats.byDifficulty[project.difficulty] = (stats.byDifficulty[project.difficulty] || 0) + 1;
                
                // Tech stats
                project.tech.split(',').forEach(tech => {
                    const cleanTech = tech.trim();
                    stats.byTech[cleanTech] = (stats.byTech[cleanTech] || 0) + 1;
                });
            });
            
            return stats;
        }
        
        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
        
        // Load saved theme
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.body.setAttribute('data-theme', savedTheme);
        });
        
        // Progress tracking
        function trackProjectProgress(projectId, progress) {
            let progressData = JSON.parse(localStorage.getItem('projectProgress') || '{}');
            progressData[projectId] = {
                progress: progress,
                lastUpdated: new Date().toISOString()
            };
            localStorage.setItem('projectProgress', JSON.stringify(progressData));
        }
        
        function getProjectProgress(projectId) {
            const progressData = JSON.parse(localStorage.getItem('projectProgress') || '{}');
            return progressData[projectId] || { progress: 0, lastUpdated: null };
        }
        
        // Recommendation engine
        function getRecommendedProjects(currentProjectId, limit = 3) {
            const currentProject = projects.find(p => p.id === currentProjectId);
            if (!currentProject) return [];
            
            const recommendations = projects
                .filter(p => p.id !== currentProjectId)
                .map(project => {
                    let score = 0;
                    
                    // Same category bonus
                    if (project.category === currentProject.category) score += 3;
                    
                    // Similar difficulty bonus
                    if (project.difficulty === currentProject.difficulty) score += 2;
                    
                    // Shared technology bonus
                    const currentTech = currentProject.tech.toLowerCase().split(',').map(t => t.trim());
                    const projectTech = project.tech.toLowerCase().split(',').map(t => t.trim());
                    const sharedTech = currentTech.filter(tech => projectTech.includes(tech));
                    score += sharedTech.length;
                    
                    return { ...project, recommendationScore: score };
                })
                .sort((a, b) => b.recommendationScore - a.recommendationScore)
                .slice(0, limit);
            
            return recommendations;
        }
        
        // Export functionality for project data
        function exportProjectData(format = 'json') {
            const data = {
                projects: projects,
                exportDate: new Date().toISOString(),
                totalProjects: projects.length,
                categories: [...new Set(projects.map(p => p.category))],
                difficulties: [...new Set(projects.map(p => p.difficulty))],
                technologies: [...new Set(projects.flatMap(p => p.tech.split(',').map(t => t.trim())))]
            };
            
            let exportContent, fileName, mimeType;
            
            switch (format) {
                case 'csv':
                    exportContent = convertToCSV(projects);
                    fileName = 'projects.csv';
                    mimeType = 'text/csv';
                    break;
                case 'json':
                default:
                    exportContent = JSON.stringify(data, null, 2);
                    fileName = 'projects.json';
                    mimeType = 'application/json';
                    break;
            }
            
            const blob = new Blob([exportContent], { type: mimeType });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        }
        
        function convertToCSV(projects) {
            const headers = ['ID', 'Title', 'Category', 'Description', 'Tech', 'Duration', 'Difficulty'];
            const csvContent = [
                headers.join(','),
                ...projects.map(project => [
                    project.id,
                    `"${project.title}"`,
                    project.category,
                    `"${project.description.replace(/"/g, '""')}"`,
                    `"${project.tech}"`,
                    project.duration,
                    project.difficulty
                ].join(','))
            ].join('\n');
            
            return csvContent;
        }
        
        // Print functionality
        function printProject(projectId) {
            const project = projects.find(p => p.id === projectId);
            if (!project) return;
            
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${project.title} - Project Details</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                        .header { border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
                        .meta { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
                        .description { margin: 20px 0; }
                        .tech-stack { background: #e8f4f8; padding: 10px; border-radius: 5px; margin: 10px 0; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>${project.title}</h1>
                        <p><strong>Category:</strong> ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                    </div>
                    <div class="meta">
                        <p><strong>Difficulty:</strong> ${project.difficulty}</p>
                        <p><strong>Duration:</strong> ${project.duration}</p>
                        <p><strong>Description:</strong> ${project.description}</p>
                    </div>
                    <div class="tech-stack">
                        <p><strong>Technologies:</strong> ${project.tech}</p>
                    </div>
                    <div class="description">
                        <h2>Full Description</h2>
                        ${project.fullDescription.split('\n').map(paragraph => 
                            paragraph.trim() ? `<p>${paragraph}</p>` : ''
                        ).join('')}
                    </div>
                    <div style="margin-top: 30px; font-size: 12px; color: #666;">
                        <p>Generated on: ${new Date().toLocaleDateString()}</p>
                        <p>Source: AI Project Ideas Platform</p>
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
        
        console.log('AI Project Ideas Platform loaded successfully!');
        console.log(`Total projects available: ${projects.length}`);
        console.log('Available categories:', [...new Set(projects.map(p => p.category))]);
        console.log('Available difficulties:', [...new Set(projects.map(p => p.difficulty))]);

// Advanced filtering and sorting functionality
class ProjectFilter {
    constructor() {
        this.filters = {
            category: 'all',
            difficulty: 'all',
            duration: 'all',
            tech: 'all'
        };
        this.sortBy = 'title';
        this.sortOrder = 'asc';
    }

    setFilter(filterType, value) {
        this.filters[filterType] = value;
        this.applyFilters();
    }

    setSorting(sortBy, order = 'asc') {
        this.sortBy = sortBy;
        this.sortOrder = order;
        this.applyFilters();
    }

    applyFilters() {
        let filteredProjects = [...projects];

        // Apply category filter
        if (this.filters.category !== 'all') {
            filteredProjects = filteredProjects.filter(p => p.category === this.filters.category);
        }

        // Apply difficulty filter
        if (this.filters.difficulty !== 'all') {
            filteredProjects = filteredProjects.filter(p => p.difficulty === this.filters.difficulty);
        }

        // Apply duration filter
        if (this.filters.duration !== 'all') {
            filteredProjects = filteredProjects.filter(p => {
                const weeks = this.extractWeeks(p.duration);
                switch (this.filters.duration) {
                    case 'short': return weeks <= 8;
                    case 'medium': return weeks > 8 && weeks <= 14;
                    case 'long': return weeks > 14;
                    default: return true;
                }
            });
        }

        // Apply technology filter
        if (this.filters.tech !== 'all') {
            filteredProjects = filteredProjects.filter(p => 
                p.tech.toLowerCase().includes(this.filters.tech.toLowerCase())
            );
        }

        // Apply sorting
        filteredProjects.sort((a, b) => {
            let aValue, bValue;
            
            switch (this.sortBy) {
                case 'title':
                    aValue = a.title.toLowerCase();
                    bValue = b.title.toLowerCase();
                    break;
                case 'difficulty':
                    const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
                    aValue = difficultyOrder[a.difficulty];
                    bValue = difficultyOrder[b.difficulty];
                    break;
                case 'duration':
                    aValue = this.extractWeeks(a.duration);
                    bValue = this.extractWeeks(b.duration);
                    break;
                case 'category':
                    aValue = a.category.toLowerCase();
                    bValue = b.category.toLowerCase();
                    break;
                default:
                    aValue = a.title.toLowerCase();
                    bValue = b.title.toLowerCase();
            }

            if (this.sortOrder === 'asc') {
                return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
                return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            }
        });

        displayProjects(filteredProjects);
        this.updateFilterUI();
    }

    extractWeeks(duration) {
        const match = duration.match(/(\d+)-?(\d+)?\s*weeks?/i);
        if (match) {
            return match[2] ? parseInt(match[2]) : parseInt(match[1]);
        }
        return 0;
    }

    updateFilterUI() {
        // Update filter counts and UI elements
        const activeFilters = Object.entries(this.filters)
            .filter(([key, value]) => value !== 'all')
            .map(([key, value]) => `${key}: ${value}`);
        
        const filterStatus = document.getElementById('filterStatus');
        if (filterStatus) {
            filterStatus.textContent = activeFilters.length > 0 
                ? `Active filters: ${activeFilters.join(', ')}` 
                : 'No active filters';
        }
    }

    clearAllFilters() {
        this.filters = {
            category: 'all',
            difficulty: 'all',
            duration: 'all',
            tech: 'all'
        };
        this.applyFilters();
    }
}

// Initialize filter system
const projectFilter = new ProjectFilter();

// Learning path generator
class LearningPath {
    constructor() {
        this.paths = {
            'web-development': [
                { id: 11, title: 'Code Generator from Description', prerequisite: null },
                { id: 15, title: 'SEO Keyword Analyzer', prerequisite: 11 },
                { id: 18, title: 'Freelancer Management System', prerequisite: 15 }
            ],
            'ai-ml': [
                { id: 4, title: 'Emotional Text Analyzer', prerequisite: null },
                { id: 1, title: 'Smart Resume Builder', prerequisite: 4 },
                { id: 3, title: 'Sports Performance Predictor', prerequisite: 1 },
                { id: 6, title: 'Medical Image Classifier', prerequisite: 3 }
            ],
            'education-tech': [
                { id: 5, title: 'Interactive Quiz Generator', prerequisite: null },
                { id: 12, title: 'Virtual Study Assistant', prerequisite: 5 },
                { id: 16, title: 'Teacher\'s AI Assistant', prerequisite: 12 },
                { id: 19, title: 'Smart Study Planner', prerequisite: 16 }
            ],
            'business-automation': [
                { id: 10, title: 'Professional Email Assistant', prerequisite: null },
                { id: 15, title: 'SEO Keyword Analyzer', prerequisite: 10 },
                { id: 18, title: 'Freelancer Management System', prerequisite: 15 },
                { id: 20, title: 'Legal Contract Assistant', prerequisite: 18 }
            ]
        };
    }

    getPath(pathName) {
        return this.paths[pathName] || [];
    }

    getAllPaths() {
        return Object.keys(this.paths);
    }

    getNextProject(pathName, completedProjects = []) {
        const path = this.getPath(pathName);
        for (let project of path) {
            if (!completedProjects.includes(project.id)) {
                if (!project.prerequisite || completedProjects.includes(project.prerequisite)) {
                    return project;
                }
            }
        }
        return null;
    }

    getPathProgress(pathName, completedProjects = []) {
        const path = this.getPath(pathName);
        const completed = path.filter(p => completedProjects.includes(p.id)).length;
        return {
            completed,
            total: path.length,
            percentage: Math.round((completed / path.length) * 100)
        };
    }
}

// Initialize learning path system
const learningPath = new LearningPath();

// Project comparison functionality
function compareProjects(projectIds) {
    const projectsToCompare = projects.filter(p => projectIds.includes(p.id));
    
    if (projectsToCompare.length < 2) {
        alert('Please select at least 2 projects to compare');
        return;
    }

    const comparisonData = {
        projects: projectsToCompare,
        comparison: {
            difficulty: projectsToCompare.map(p => p.difficulty),
            duration: projectsToCompare.map(p => p.duration),
            technologies: projectsToCompare.map(p => p.tech.split(',').map(t => t.trim())),
            categories: projectsToCompare.map(p => p.category),
            commonTech: getCommonTechnologies(projectsToCompare),
            difficultyRange: getDifficultyRange(projectsToCompare)
        }
    };

    displayComparison(comparisonData);
}

function getCommonTechnologies(projects) {
    const allTech = projects.map(p => p.tech.split(',').map(t => t.trim().toLowerCase()));
    return allTech[0].filter(tech => allTech.every(projectTech => projectTech.includes(tech)));
}

function getDifficultyRange(projects) {
    const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const projectDifficulties = projects.map(p => difficulties.indexOf(p.difficulty));
    return {
        min: difficulties[Math.min(...projectDifficulties)],
        max: difficulties[Math.max(...projectDifficulties)]
    };
}

function displayComparison(comparisonData) {
    const modal = document.getElementById('comparisonModal') || createComparisonModal();
    const content = document.getElementById('comparisonContent');
    
    content.innerHTML = `
        <h2>Project Comparison</h2>
        <div class="comparison-grid">
            ${comparisonData.projects.map(project => `
                <div class="comparison-card">
                    <h3>${project.title}</h3>
                    <div class="comparison-details">
                        <p><strong>Category:</strong> ${project.category}</p>
                        <p><strong>Difficulty:</strong> ${project.difficulty}</p>
                        <p><strong>Duration:</strong> ${project.duration}</p>
                        <p><strong>Technologies:</strong> ${project.tech}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="comparison-summary">
            <h3>Comparison Summary</h3>
            <p><strong>Common Technologies:</strong> ${comparisonData.comparison.commonTech.join(', ') || 'None'}</p>
            <p><strong>Difficulty Range:</strong> ${comparisonData.comparison.difficultyRange.min} to ${comparisonData.comparison.difficultyRange.max}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

function createComparisonModal() {
    const modal = document.createElement('div');
    modal.id = 'comparisonModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeComparisonModal()">&times;</span>
            <div id="comparisonContent"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function closeComparisonModal() {
    const modal = document.getElementById('comparisonModal');
    if (modal) modal.style.display = 'none';
}

// Project rating and review system
class ProjectReviews {
    constructor() {
        this.reviews = JSON.parse(localStorage.getItem('projectReviews') || '{}');
    }

    addReview(projectId, rating, comment, username = 'Anonymous') {
        if (!this.reviews[projectId]) {
            this.reviews[projectId] = [];
        }
        
        const review = {
            id: Date.now(),
            rating: Math.max(1, Math.min(5, rating)),
            comment: comment.trim(),
            username,
            date: new Date().toISOString()
        };
        
        this.reviews[projectId].push(review);
        this.saveReviews();
        return review;
    }

    getReviews(projectId) {
        return this.reviews[projectId] || [];
    }

    getAverageRating(projectId) {
        const reviews = this.getReviews(projectId);
        if (reviews.length === 0) return 0;
        
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return Math.round((sum / reviews.length) * 10) / 10;
    }

    deleteReview(projectId, reviewId) {
        if (this.reviews[projectId]) {
            this.reviews[projectId] = this.reviews[projectId].filter(r => r.id !== reviewId);
            this.saveReviews();
        }
    }

    saveReviews() {
        localStorage.setItem('projectReviews', JSON.stringify(this.reviews));
    }

    getTopRatedProjects(limit = 5) {
        const projectRatings = projects.map(project => ({
            ...project,
            averageRating: this.getAverageRating(project.id),
            reviewCount: this.getReviews(project.id).length
        }))
        .filter(p => p.reviewCount > 0)
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, limit);
        
        return projectRatings;
    }
}

// Initialize review system
const projectReviews = new ProjectReviews();

// Advanced search with filters
class AdvancedSearch {
    constructor() {
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        this.maxHistoryItems = 10;
    }

    search(query, filters = {}) {
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        
        let results = projects.filter(project => {
            // Text search
            const searchableText = [
                project.title,
                project.description,
                project.fullDescription,
                project.tech,
                project.category
            ].join(' ').toLowerCase();
            
            const matchesSearch = searchTerms.every(term => searchableText.includes(term));
            
            // Apply filters
            const matchesFilters = Object.entries(filters).every(([key, value]) => {
                if (!value || value === 'all') return true;
                
                switch (key) {
                    case 'category':
                        return project.category === value;
                    case 'difficulty':
                        return project.difficulty === value;
                    case 'tech':
                        return project.tech.toLowerCase().includes(value.toLowerCase());
                    default:
                        return true;
                }
            });
            
            return matchesSearch && matchesFilters;
        });

        // Rank results by relevance
        results = results.map(project => ({
            ...project,
            relevanceScore: this.calculateRelevance(project, searchTerms)
        })).sort((a, b) => b.relevanceScore - a.relevanceScore);

        // Save search to history
        this.addToHistory(query, filters, results.length);
        
        return results;
    }

    calculateRelevance(project, searchTerms) {
        let score = 0;
        const title = project.title.toLowerCase();
        const description = project.description.toLowerCase();
        
        searchTerms.forEach(term => {
            // Title matches are worth more
            if (title.includes(term)) score += 3;
            // Description matches
            if (description.includes(term)) score += 2;
            // Tech stack matches
            if (project.tech.toLowerCase().includes(term)) score += 1;
        });
        
        return score;
    }

    addToHistory(query, filters, resultCount) {
        const historyItem = {
            query,
            filters,
            resultCount,
            timestamp: new Date().toISOString()
        };
        
        this.searchHistory.unshift(historyItem);
        
        // Keep only the most recent searches
        if (this.searchHistory.length > this.maxHistoryItems) {
            this.searchHistory = this.searchHistory.slice(0, this.maxHistoryItems);
        }
        
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }

    getSearchHistory() {
        return this.searchHistory;
    }

    clearSearchHistory() {
        this.searchHistory = [];
        localStorage.removeItem('searchHistory');
    }

    getPopularSearchTerms() {
        const termCounts = {};
        
        this.searchHistory.forEach(item => {
            const terms = item.query.toLowerCase().split(' ').filter(term => term.length > 2);
            terms.forEach(term => {
                termCounts[term] = (termCounts[term] || 0) + 1;
            });
        });
        
        return Object.entries(termCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([term]) => term);
    }
}

// Initialize advanced search
const advancedSearch = new AdvancedSearch();


// Project templates and starter code generator
class ProjectTemplateGenerator {
    getDjangoManageTemplate() {
        return `#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)`;
    }

    getFlaskAppTemplate() {
        return `from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Configuration
app.config.from_object('config.Config')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/health')
def health_check():
    return jsonify({'status': 'healthy', 'message': 'API is running'})

# Add your routes here

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)`;
    }

    getFlaskRequirements() {
        return `Flask==2.3.3
Flask-CORS==4.0.0
python-dotenv==1.0.0
requests==2.31.0
numpy==1.24.3
pandas==2.0.3
scikit-learn==1.3.0`;
    }

    getFlaskIndexTemplate() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title or 'Flask App' }}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <div class="container">
        <header>
            <h1>Welcome to Your Flask Application</h1>
        </header>
        <main>
            <p>Your application is running successfully!</p>
            <!-- Add your content here -->
        </main>
    </div>
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>`;
    }

    getFlaskConfig() {
        return `import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    
    # Database configuration
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'sqlite:///app.db'
    
    # API Keys (add your API keys here)
    API_KEY = os.environ.get('API_KEY')`;
    }

    getDjangoRequirements() {
        return `Django==4.2.7
djangorestframework==3.14.0
django-cors-headers==4.3.1
python-dotenv==1.0.0
requests==2.31.0
numpy==1.24.3
pandas==2.0.3
scikit-learn==1.3.0`;
    }

    getDjangoSettings() {
        return `import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key-here')

DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'myproject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

STATIC_URL = '/static/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS settings
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]`;
    }

    getDjangoUrls() {
        return `from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Add your URL patterns here
]`;
    }

    getReactPackageJson() {
        return `{
  "name": "react-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "axios": "^1.5.0",
    "react-router-dom": "^6.15.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`;
    }

    getReactAppTemplate() {
        return `import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial data
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/data');
      // const result = await response.json();
      // setData(result);
      
      // Placeholder data
      setData({ message: 'Hello from React!' });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
        <p>{data?.message}</p>
      </header>
      <main>
        {/* Add your components here */}
      </main>
    </div>
  );
}

export default App;`;
    }

    getReactIndexTemplate() {
        return `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;
    }

    getReactCSS() {
        return `.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
}`;
    }

    getReactHTML() {
        return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="React application" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
    }

    getNodeServerTemplate() {
        return `const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/api'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});`;
    }

    getNodePackageJson() {
        return `{
  "name": "nodejs-project",
  "version": "1.0.0",
  "description": "Node.js project",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0"
  }
}`;
    }

    getNodeApiRoutes() {
        return `const express = require('express');
const router = express.Router();

// GET /api/data
router.get('/data', (req, res) => {
  res.json({
    message: 'Hello from API!',
    timestamp: new Date().toISOString()
  });
});

// POST /api/data
router.post('/data', (req, res) => {
  const { data } = req.body;
  res.json({
    message: 'Data received successfully',
    receivedData: data
  });
});

module.exports = router;`;
    }

    getEnvTemplate() {
        return `# Environment Variables
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=

# API Keys
API_KEY=
SECRET_KEY=

# External Services
EXTERNAL_API_URL=`;
    }

    getBasicCSS() {
        return `/* Basic CSS Reset and Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background: #fff;
  padding: 2rem 0;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  header {
    padding: 1rem 0;
  }
}`;
    }

    getReadmeTemplate() {
        return `# Project Name

## Description
Brief description of your project and its purpose.

## Features
- Feature 1
- Feature 2
- Feature 3

## Technologies Used
- Technology 1
- Technology 2
- Technology 3

## Installation

### Prerequisites
- Node.js (version X.X.X)
- Python (version X.X.X)
- Other requirements

### Setup
1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd project-directory
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
pip install -r requirements.txt
\`\`\`

3. Set up environment variables
\`\`\`bash
cp .env.example .env
# Edit .env with your configuration
\`\`\`

4. Run the application
\`\`\`bash
npm start
# or
python app.py
\`\`\`

## Usage
Explain how to use your application.

## API Documentation
Document your API endpoints here.

## Contributing
Guidelines for contributing to the project.

## License
This project is licensed under the MIT License.`;
    }
    generateProjectStructure(projectId, framework) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return null;

        const template = this.templates[framework.toLowerCase()];
        if (!template) return null;

        return {
            projectName: project.title.toLowerCase().replace(/\s+/g, '-'),
            files: template.files,
            instructions: this.getSetupInstructions(framework, project),
            nextSteps: this.getNextSteps(project)
        };
    }

    getSetupInstructions(framework, project) {
        const instructions = {
            flask: [
                'Create a virtual environment: python -m venv venv',
                'Activate virtual environment: source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows)',
                'Install dependencies: pip install -r requirements.txt',
                'Set up environment variables in .env file',
                'Run the application: python app.py'
            ],
            django: [
                'Create a virtual environment: python -m venv venv',
                'Activate virtual environment: source venv/bin/activate (Linux/Mac) or venv\\Scripts\\activate (Windows)',
                'Install dependencies: pip install -r requirements.txt',
                'Run migrations: python manage.py migrate',
                'Create superuser: python manage.py createsuperuser',
                'Run the server: python manage.py runserver'
            ],
            react: [
                'Install Node.js (version 14 or higher)',
                'Install dependencies: npm install',
                'Start development server: npm start',
                'Build for production: npm run build'
            ],
            nodejs: [
                'Install Node.js (version 14 or higher)',
                'Install dependencies: npm install',
                'Set up environment variables in .env file',
                'Start the server: npm start or node server.js'
            ]
        };
        return instructions[framework.toLowerCase()] || [];
    }

    getNextSteps(project) {
        return [
            `Implement the core functionality for ${project.title}`,
            'Set up database models and schemas',
            'Create API endpoints for data operations',
            'Implement user authentication if required',
            'Add input validation and error handling',
            'Write unit tests for your functions',
            'Set up logging and monitoring',
            'Deploy to a cloud platform',
            'Add documentation and user guides',
            'Optimize performance and security'
        ];
    }

    // Constructor moved to the end - this fixes the error
    constructor() {
        this.templates = {
            flask: {
                files: {
                    'app.py': this.getFlaskAppTemplate(),
                    'requirements.txt': this.getFlaskRequirements(),
                    'templates/index.html': this.getFlaskIndexTemplate(),
                    'static/style.css': this.getBasicCSS(),
                    'config.py': this.getFlaskConfig(),
                    'README.md': this.getReadmeTemplate()
                }
            },
            django: {
                files: {
                    'manage.py': this.getDjangoManageTemplate(),
                    'requirements.txt': this.getDjangoRequirements(),
                    'myproject/settings.py': this.getDjangoSettings(),
                    'myproject/urls.py': this.getDjangoUrls(),
                    'README.md': this.getReadmeTemplate()
                }
            },
            react: {
                files: {
                    'package.json': this.getReactPackageJson(),
                    'src/App.js': this.getReactAppTemplate(),
                    'src/index.js': this.getReactIndexTemplate(),
                    'src/App.css': this.getReactCSS(),
                    'public/index.html': this.getReactHTML(),
                    'README.md': this.getReadmeTemplate()
                }
            },
            nodejs: {
                files: {
                    'server.js': this.getNodeServerTemplate(),
                    'package.json': this.getNodePackageJson(),
                    'routes/api.js': this.getNodeApiRoutes(),
                    '.env.example': this.getEnvTemplate(),
                    'README.md': this.getReadmeTemplate()
                }
            }
        };
    }
}

   


// Initialize template generator
const templateGenerator = new ProjectTemplateGenerator();

// Project collaboration features
class ProjectCollaboration {
    constructor() {
        this.collaborations = JSON.parse(localStorage.getItem('collaborations') || '{}');
        this.invitations = JSON.parse(localStorage.getItem('invitations') || '[]');
    }

    createCollaboration(projectId, creatorName, description = '') {
        const collaboration = {
            id: Date.now(),
            projectId,
            creator: creatorName,
            description,
            members: [creatorName],
            status: 'active',
            createdAt: new Date().toISOString(),
            chatMessages: [],
            sharedResources: []
        };

        this.collaborations[collaboration.id] = collaboration;
        this.saveCollaborations();
        return collaboration;
    }

    inviteToCollaboration(collaborationId, inviteeName, inviterName) {
        const invitation = {
            id: Date.now(),
            collaborationId,
            invitee: inviteeName,
            inviter: inviterName,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        this.invitations.push(invitation);
        this.saveInvitations();
        return invitation;
    }

    acceptInvitation(invitationId, userName) {
        const invitation = this.invitations.find(inv => inv.id === invitationId);
        if (!invitation || invitation.invitee !== userName) return false;

        const collaboration = this.collaborations[invitation.collaborationId];
        if (collaboration && !collaboration.members.includes(userName)) {
            collaboration.members.push(userName);
            invitation.status = 'accepted';
            this.saveCollaborations();
            this.saveInvitations();
            return true;
        }
        return false;
    }

    addChatMessage(collaborationId, userName, message) {
        const collaboration = this.collaborations[collaborationId];
        if (!collaboration || !collaboration.members.includes(userName)) return false;

        const chatMessage = {
            id: Date.now(),
            user: userName,
            message: message.trim(),
            timestamp: new Date().toISOString()
        };

        collaboration.chatMessages.push(chatMessage);
        this.saveCollaborations();
        return chatMessage;
    }

    shareResource(collaborationId, userName, resource) {
        const collaboration = this.collaborations[collaborationId];
        if (!collaboration || !collaboration.members.includes(userName)) return false;

        const sharedResource = {
            id: Date.now(),
            sharedBy: userName,
            type: resource.type, // 'link', 'file', 'code', 'note'
            title: resource.title,
            content: resource.content,
            url: resource.url,
            sharedAt: new Date().toISOString()
        };

        collaboration.sharedResources.push(sharedResource);
        this.saveCollaborations();
        return sharedResource;
    }

    getCollaborationsForUser(userName) {
        return Object.values(this.collaborations).filter(collab => 
            collab.members.includes(userName)
        );
    }

    getInvitationsForUser(userName) {
        return this.invitations.filter(inv => 
            inv.invitee === userName && inv.status === 'pending'
        );
    }

    saveCollaborations() {
        localStorage.setItem('collaborations', JSON.stringify(this.collaborations));
    }

    saveInvitations() {
        localStorage.setItem('invitations', JSON.stringify(this.invitations));
    }
}

// Initialize collaboration system
const projectCollaboration = new ProjectCollaboration();

// Project analytics and insights
class ProjectAnalytics {
    constructor() {
        this.analytics = JSON.parse(localStorage.getItem('projectAnalytics') || '{}');
        this.userActivity = JSON.parse(localStorage.getItem('userActivity') || '[]');
    }

    trackProjectView(projectId) {
        const today = new Date().toDateString();
        
        if (!this.analytics[projectId]) {
            this.analytics[projectId] = {
                views: 0,
                dailyViews: {},
                firstViewed: new Date().toISOString(),
                lastViewed: new Date().toISOString()
            };
        }

        this.analytics[projectId].views++;
        this.analytics[projectId].dailyViews[today] = (this.analytics[projectId].dailyViews[today] || 0) + 1;
        this.analytics[projectId].lastViewed = new Date().toISOString();

        this.saveAnalytics();
    }

    trackUserActivity(action, projectId = null, details = {}) {
        const activity = {
            id: Date.now(),
            action, // 'view', 'bookmark', 'start', 'complete', 'search'
            projectId,
            details,
            timestamp: new Date().toISOString()
        };

        this.userActivity.push(activity);
        
        // Keep only last 1000 activities
        if (this.userActivity.length > 1000) {
            this.userActivity = this.userActivity.slice(-1000);
        }

        this.saveUserActivity();
    }

    getProjectStats(projectId) {
        const stats = this.analytics[projectId];
        if (!stats) return null;

        const last7Days = this.getLast7DaysViews(projectId);
        const totalViews = stats.views;
        const avgDailyViews = last7Days.reduce((sum, day) => sum + day.views, 0) / 7;

        return {
            totalViews,
            avgDailyViews: Math.round(avgDailyViews * 10) / 10,
            last7Days,
            firstViewed: stats.firstViewed,
            lastViewed: stats.lastViewed
        };
    }

    getLast7DaysViews(projectId) {
        const stats = this.analytics[projectId];
        if (!stats) return [];

        const last7Days = [];
        const today = new Date();

        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateString = date.toDateString();
            
            last7Days.push({
                date: dateString,
                views: stats.dailyViews[dateString] || 0
            });
        }

        return last7Days;
    }

    getPopularProjects(limit = 10) {
        return Object.entries(this.analytics)
            .map(([projectId, stats]) => ({
                projectId: parseInt(projectId),
                project: projects.find(p => p.id === parseInt(projectId)),
                views: stats.views,
                lastViewed: stats.lastViewed
            }))
            .filter(item => item.project)
            .sort((a, b) => b.views - a.views)
            .slice(0, limit);
    }

    getTrendingProjects(days = 7, limit = 10) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        return Object.entries(this.analytics)
            .map(([projectId, stats]) => {
                const recentViews = Object.entries(stats.dailyViews)
                    .filter(([date]) => new Date(date) >= cutoffDate)
                    .reduce((sum, [, views]) => sum + views, 0);

                return {
                    projectId: parseInt(projectId),
                    project: projects.find(p => p.id === parseInt(projectId)),
                    recentViews,
                    totalViews: stats.views
                };
            })
            .filter(item => item.project && item.recentViews > 0)
            .sort((a, b) => b.recentViews - a.recentViews)
            .slice(0, limit);
    }

    getUserActivitySummary(days = 30) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        const recentActivity = this.userActivity.filter(activity => 
            new Date(activity.timestamp) >= cutoffDate
        );

        const summary = {
            totalActivities: recentActivity.length,
            actionCounts: {},
            dailyActivity: {},
            mostActiveDay: null,
            projectInteractions: {}
        };

        recentActivity.forEach(activity => {
            // Count actions
            summary.actionCounts[activity.action] = (summary.actionCounts[activity.action] || 0) + 1;

            // Daily activity
            const day = new Date(activity.timestamp).toDateString();
            summary.dailyActivity[day] = (summary.dailyActivity[day] || 0) + 1;

            // Project interactions
            if (activity.projectId) {
                summary.projectInteractions[activity.projectId] = (summary.projectInteractions[activity.projectId] || 0) + 1;
            }
        });

        // Find most active day
        const maxActivity = Math.max(...Object.values(summary.dailyActivity));
        summary.mostActiveDay = Object.entries(summary.dailyActivity)
            .find(([, count]) => count === maxActivity)?.[0];

        return summary;
    }

    exportAnalytics() {
        const exportData = {
            analytics: this.analytics,
            userActivity: this.userActivity,
            exportDate: new Date().toISOString(),
            summary: {
                totalProjects: Object.keys(this.analytics).length,
                totalViews: Object.values(this.analytics).reduce((sum, stats) => sum + stats.views, 0),
                totalActivities: this.userActivity.length
            }
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `project-analytics-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    saveAnalytics() {
        localStorage.setItem('projectAnalytics', JSON.stringify(this.analytics));
    }

    saveUserActivity() {
        localStorage.setItem('userActivity', JSON.stringify(this.userActivity));
    }
}

// Initialize analytics system
const projectAnalytics = new ProjectAnalytics();

// Enhanced modal functionality with analytics tracking
function openModal(projectId) {
    // Track project view
    projectAnalytics.trackProjectView(projectId);
    projectAnalytics.trackUserActivity('view', projectId);

    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Get project reviews and ratings
    const reviews = projectReviews.getReviews(projectId);
    const averageRating = projectReviews.getAverageRating(projectId);
    const recommendations = getRecommendedProjects(projectId);
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <span class="close" onclick="closeModal()">&times;</span>
        </div>
        <div class="modal-body">
            <div class="project-meta">
                <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                <span class="duration-badge">${project.duration}</span>
                <span class="category-badge">${project.category}</span>
                ${averageRating > 0 ? `<span class="rating-badge">★ ${averageRating} (${reviews.length} reviews)</span>` : ''}
            </div>
            <div class="tech-stack">
                <strong>Technologies:</strong> ${project.tech}
            </div>
            <div class="project-full-description">
                ${project.fullDescription.split('\n').map(paragraph => 
                    paragraph.trim() ? `<p>${paragraph}</p>` : ''
                ).join('')}
            </div>
            
            ${recommendations.length > 0 ? `
                <div class="recommendations">
                    <h3>Recommended Similar Projects</h3>
                    <div class="recommendation-list">
                        ${recommendations.map(rec => `
                            <div class="recommendation-item" onclick="openModal(${rec.id})">
                                <span class="rec-title">${rec.title}</span>
                                <span class="rec-difficulty">${rec.difficulty}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="modal-tabs">
                <button class="tab-btn active" onclick="showTab('details')">Details</button>
                <button class="tab-btn" onclick="showTab('reviews')">Reviews (${reviews.length})</button>
                <button class="tab-btn" onclick="showTab('templates')">Templates</button>
            </div>
            
            <div id="details-tab" class="tab-content active">
                <!-- Details already shown above -->
            </div>
            
            <div id="reviews-tab" class="tab-content">
                <div class="reviews-section">
                    <div class="add-review">
                        <h4>Add Your Review</h4>
                        <div class="rating-input">
                            <span>Rating: </span>
                            ${[1,2,3,4,5].map(star => `
                                <span class="star" onclick="setRating(${star})" data-rating="${star}">★</span>
                            `).join('')}
                        </div>
                        <textarea id="reviewComment" placeholder="Share your experience with this project..."></textarea>
                        <button onclick="submitReview(${projectId})">Submit Review</button>
                    </div>
                    <div class="reviews-list">
                        ${reviews.map(review => `
                            <div class="review-item">
                                <div class="review-header">
                                    <span class="reviewer">${review.username}</span>
                                    <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
                                    <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                                </div>
                                <p class="review-comment">${review.comment}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div id="templates-tab" class="tab-content">
                <div class="templates-section">
                    <h4>Project Templates</h4>
                    <p>Choose a framework to generate starter code:</p>
                    <div class="template-options">
                        <button onclick="generateTemplate(${projectId}, 'flask')">Flask (Python)</button>
                        <button onclick="generateTemplate(${projectId}, 'django')">Django (Python)</button>
                        <button onclick="generateTemplate(${projectId}, 'react')">React (JavaScript)</button>
                        <button onclick="generateTemplate(${projectId}, 'nodejs')">Node.js (JavaScript)</button>
                    </div>
                    <div id="template-output"></div>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn-primary" onclick="startProject(${project.id})">
                    Start This Project
                </button>
                <button class="btn-secondary" onclick="bookmarkProject(${project.id})">
                    Bookmark
                </button>
                <button class="btn-secondary" onclick="shareProject(${project.id})">
                    Share
                </button>
                <button class="btn-secondary" onclick="printProject(${project.id})">
                    Print
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Tab functionality for modal
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
        // Show selected tab content
        document.getElementById(`${tabName}-tab`).classList.add('active');
    
        // Add active class to clicked tab button
        event.target.classList.add('active');
    }
    
    // Review system functions
    let currentRating = 0;
    
    function setRating(rating) {
        currentRating = rating;
        document.querySelectorAll('.star').forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
    
    function submitReview(projectId) {
        const comment = document.getElementById('reviewComment').value.trim();
        
        if (currentRating === 0) {
            alert('Please select a rating');
            return;
        }
        
        if (comment.length < 10) {
            alert('Please write a review with at least 10 characters');
            return;
        }
        
        const username = prompt('Enter your name:') || 'Anonymous';
        projectReviews.addReview(projectId, currentRating, comment, username);
        
        // Refresh the modal to show the new review
        openModal(projectId);
        showTab('reviews');
        
        alert('Review submitted successfully!');
    }
    
    // Template generation function
    function generateTemplate(projectId, framework) {
        const template = templateGenerator.generateProjectStructure(projectId, framework);
        const outputDiv = document.getElementById('template-output');
        
        if (!template) {
            outputDiv.innerHTML = '<p>Template not available for this framework.</p>';
            return;
        }
        
        outputDiv.innerHTML = `
            <div class="template-result">
                <h4>Generated Template: ${template.projectName}</h4>
                <div class="file-structure">
                    <h5>File Structure:</h5>
                    <ul class="file-list">
                        ${Object.keys(template.files).map(filename => `
                            <li class="file-item">
                                <span class="filename" onclick="showFileContent('${filename}')">${filename}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="setup-instructions">
                    <h5>Setup Instructions:</h5>
                    <ol>
                        ${template.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="next-steps">
                    <h5>Next Steps:</h5>
                    <ul>
                        ${template.nextSteps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="template-actions">
                    <button onclick="downloadTemplate(${projectId}, '${framework}')">Download Template</button>
                    <button onclick="copyTemplateToClipboard(${projectId}, '${framework}')">Copy to Clipboard</button>
                </div>
                
                <div id="file-content-viewer" class="file-viewer" style="display: none;">
                    <div class="file-viewer-header">
                        <span id="current-filename"></span>
                        <button onclick="closeFileViewer()">×</button>
                    </div>
                    <pre><code id="file-content"></code></pre>
                </div>
            </div>
        `;
        
        // Store template data for download/copy functions
        window.currentTemplate = template;
    }
    
    function showFileContent(filename) {
        const template = window.currentTemplate;
        if (!template || !template.files[filename]) return;
        
        const viewer = document.getElementById('file-content-viewer');
        const filenameSpan = document.getElementById('current-filename');
        const contentCode = document.getElementById('file-content');
        
        filenameSpan.textContent = filename;
        contentCode.textContent = template.files[filename];
        viewer.style.display = 'block';
    }
    
    function closeFileViewer() {
        document.getElementById('file-content-viewer').style.display = 'none';
    }
    
    function downloadTemplate(projectId, framework) {
        const template = templateGenerator.generateProjectStructure(projectId, framework);
        if (!template) return;
        
        // Create a zip-like structure (simplified as JSON for this example)
        const templateData = {
            projectName: template.projectName,
            files: template.files,
            instructions: template.instructions,
            nextSteps: template.nextSteps,
            generatedAt: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(templateData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `${template.projectName}-template.json`;
        link.click();
        
        projectAnalytics.trackUserActivity('download_template', projectId, { framework });
    }
    
    function copyTemplateToClipboard(projectId, framework) {
        const template = templateGenerator.generateProjectStructure(projectId, framework);
        if (!template) return;
        
        const templateText = Object.entries(template.files)
            .map(([filename, content]) => `// ${filename}\n${content}\n\n`)
            .join('');
        
        navigator.clipboard.writeText(templateText).then(() => {
            alert('Template copied to clipboard!');
            projectAnalytics.trackUserActivity('copy_template', projectId, { framework });
        }).catch(() => {
            alert('Failed to copy to clipboard');
        });
    }
    
    // Enhanced project sharing
    function shareProject(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        
        const shareData = {
            title: project.title,
            text: `Check out this ${project.difficulty} ${project.category} project: ${project.title}`,
            url: `${window.location.origin}${window.location.pathname}?project=${projectId}`
        };
        
        if (navigator.share) {
            navigator.share(shareData).then(() => {
                projectAnalytics.trackUserActivity('share', projectId, { method: 'native' });
            });
        } else {
            // Fallback: copy link to clipboard
            const shareUrl = shareData.url;
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Project link copied to clipboard!');
                projectAnalytics.trackUserActivity('share', projectId, { method: 'clipboard' });
            }).catch(() => {
                // Fallback: show share modal
                showShareModal(project, shareUrl);
            });
        }
    }
    
    function showShareModal(project, shareUrl) {
        const shareModal = document.createElement('div');
        shareModal.className = 'modal';
        shareModal.innerHTML = `
            <div class="modal-content share-modal">
                <div class="modal-header">
                    <h3>Share Project</h3>
                    <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <p><strong>${project.title}</strong></p>
                    <div class="share-options">
                        <button onclick="shareToSocial('twitter', '${shareUrl}', '${project.title}')">
                            Share on Twitter
                        </button>
                        <button onclick="shareToSocial('linkedin', '${shareUrl}', '${project.title}')">
                            Share on LinkedIn
                        </button>
                        <button onclick="shareToSocial('facebook', '${shareUrl}', '${project.title}')">
                            Share on Facebook
                        </button>
                    </div>
                    <div class="share-link">
                        <input type="text" value="${shareUrl}" readonly id="shareUrlInput">
                        <button onclick="copyShareUrl()">Copy Link</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(shareModal);
        shareModal.style.display = 'block';
    }
    
    function shareToSocial(platform, url, title) {
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);
        let shareUrl;
        
        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            default:
                return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
        projectAnalytics.trackUserActivity('share', null, { method: platform });
    }
    
    function copyShareUrl() {
        const input = document.getElementById('shareUrlInput');
        input.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    }
    
    // Enhanced bookmark system with categories
    class EnhancedBookmarks {
        constructor() {
            this.bookmarks = JSON.parse(localStorage.getItem('enhancedBookmarks') || '{}');
            this.categories = JSON.parse(localStorage.getItem('bookmarkCategories') || '["To Learn", "In Progress", "Completed", "Favorites"]');
        }
    
        addBookmark(projectId, category = 'To Learn', notes = '') {
            if (!this.bookmarks[projectId]) {
                this.bookmarks[projectId] = {
                    projectId,
                    category,
                    notes,
                    addedAt: new Date().toISOString(),
                    progress: 0,
                    tags: []
                };
            } else {
                this.bookmarks[projectId].category = category;
                this.bookmarks[projectId].notes = notes;
            }
            
            this.saveBookmarks();
            return this.bookmarks[projectId];
        }
    
        removeBookmark(projectId) {
            delete this.bookmarks[projectId];
            this.saveBookmarks();
        }
    
        updateProgress(projectId, progress) {
            if (this.bookmarks[projectId]) {
                this.bookmarks[projectId].progress = Math.max(0, Math.min(100, progress));
                this.saveBookmarks();
            }
        }
    
        addTag(projectId, tag) {
            if (this.bookmarks[projectId]) {
                if (!this.bookmarks[projectId].tags.includes(tag)) {
                    this.bookmarks[projectId].tags.push(tag);
                    this.saveBookmarks();
                }
            }
        }
    
        getBookmarksByCategory(category) {
            return Object.values(this.bookmarks).filter(bookmark => bookmark.category === category);
        }
    
        getAllBookmarksWithProjects() {
            return Object.values(this.bookmarks).map(bookmark => ({
                ...bookmark,
                project: projects.find(p => p.id === bookmark.projectId)
            })).filter(item => item.project);
        }
    
        exportBookmarks() {
            const exportData = {
                bookmarks: this.bookmarks,
                categories: this.categories,
                exportDate: new Date().toISOString(),
                projectDetails: this.getAllBookmarksWithProjects()
            };
            
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `bookmarks-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
        }
    
        saveBookmarks() {
            localStorage.setItem('enhancedBookmarks', JSON.stringify(this.bookmarks));
        }
    }
    
    // Initialize enhanced bookmarks
    const enhancedBookmarks = new EnhancedBookmarks();
    
    // Enhanced bookmark function
    function bookmarkProject(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        
        const isBookmarked = enhancedBookmarks.bookmarks[projectId];
        
        if (isBookmarked) {
            enhancedBookmarks.removeBookmark(projectId);
            alert(`${project.title} removed from bookmarks.`);
        } else {
            const category = prompt('Choose a category for this bookmark:', 'To Learn') || 'To Learn';
            const notes = prompt('Add notes (optional):') || '';
            
            enhancedBookmarks.addBookmark(projectId, category, notes);
            alert(`${project.title} bookmarked in "${category}" category.`);
            
            projectAnalytics.trackUserActivity('bookmark', projectId, { category });
        }
    }
    
    // Dashboard functionality
    function showDashboard() {
        const dashboardModal = document.createElement('div');
        dashboardModal.className = 'modal dashboard-modal';
        dashboardModal.innerHTML = `
            <div class="modal-content dashboard-content">
                <div class="modal-header">
                    <h2>Your Dashboard</h2>
                    <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="dashboard-tabs">
                        <button class="tab-btn active" onclick="showDashboardTab('overview')">Overview</button>
                        <button class="tab-btn" onclick="showDashboardTab('bookmarks')">Bookmarks</button>
                        <button class="tab-btn" onclick="showDashboardTab('progress')">Progress</button>
                        <button class="tab-btn" onclick="showDashboardTab('analytics')">Analytics</button>
                    </div>
                    
                    <div id="overview-dashboard" class="dashboard-tab active">
                        ${generateOverviewDashboard()}
                    </div>
                    
                    <div id="bookmarks-dashboard" class="dashboard-tab">
                        ${generateBookmarksDashboard()}
                    </div>
                    
                    <div id="progress-dashboard" class="dashboard-tab">
                        ${generateProgressDashboard()}
                    </div>
                    
                    <div id="analytics-dashboard" class="dashboard-tab">
                        ${generateAnalyticsDashboard()}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(dashboardModal);
        dashboardModal.style.display = 'block';
    }
    
    function showDashboardTab(tabName) {
        // Hide all dashboard tabs
        document.querySelectorAll('.dashboard-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all tab buttons
        document.querySelectorAll('.dashboard-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        document.getElementById(`${tabName}-dashboard`).classList.add('active');
        event.target.classList.add('active');
    }
    
    function generateOverviewDashboard() {
        const bookmarkedProjects = enhancedBookmarks.getAllBookmarksWithProjects();
        const recentActivity = projectAnalytics.getUserActivitySummary(7);
        const popularProjects = projectAnalytics.getPopularProjects(5);
        
        return `
            <div class="overview-grid">
                <div class="overview-card">
                    <h3>Quick Stats</h3>
                                   <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${bookmarkedProjects.length}</span>
                        <span class="stat-label">Bookmarked Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${recentActivity.totalActivities}</span>
                        <span class="stat-label">Activities (7 days)</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${Object.keys(projectAnalytics.analytics).length}</span>
                        <span class="stat-label">Projects Viewed</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${bookmarkedProjects.filter(b => b.progress > 0).length}</span>
                        <span class="stat-label">Projects Started</span>
                    </div>
                </div>
            </div>
            
            <div class="overview-card">
                <h3>Recent Bookmarks</h3>
                <div class="recent-bookmarks">
                    ${bookmarkedProjects.slice(0, 3).map(bookmark => `
                        <div class="bookmark-item" onclick="openModal(${bookmark.projectId})">
                            <span class="bookmark-title">${bookmark.project.title}</span>
                            <span class="bookmark-category">${bookmark.category}</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${bookmark.progress}%"></div>
                            </div>
                        </div>
                    `).join('') || '<p>No bookmarks yet. Start exploring projects!</p>'}
                </div>
            </div>
            
            <div class="overview-card">
                <h3>Recommended for You</h3>
                <div class="recommendations">
                    ${getPersonalizedRecommendations().slice(0, 3).map(project => `
                        <div class="recommendation-item" onclick="openModal(${project.id})">
                            <span class="rec-title">${project.title}</span>
                            <span class="rec-difficulty">${project.difficulty}</span>
                            <span class="rec-reason">${project.reason}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="overview-card">
                <h3>Learning Path Progress</h3>
                <div class="learning-paths">
                    ${learningPath.getAllPaths().map(pathName => {
                        const progress = learningPath.getPathProgress(pathName, 
                            bookmarkedProjects.filter(b => b.progress === 100).map(b => b.projectId)
                        );
                        return `
                            <div class="path-progress">
                                <span class="path-name">${pathName.replace('-', ' ').toUpperCase()}</span>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                                </div>
                                <span class="progress-text">${progress.completed}/${progress.total}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

function generateBookmarksDashboard() {
    const bookmarkedProjects = enhancedBookmarks.getAllBookmarksWithProjects();
    const categories = enhancedBookmarks.categories;
    
    return `
        <div class="bookmarks-dashboard">
            <div class="bookmarks-header">
                <h3>Your Bookmarked Projects</h3>
                <div class="bookmark-actions">
                    <button onclick="exportBookmarks()">Export Bookmarks</button>
                    <button onclick="showBookmarkManager()">Manage Categories</button>
                </div>
            </div>
            
            <div class="category-filters">
                <button class="category-filter active" onclick="filterBookmarksByCategory('all')">All (${bookmarkedProjects.length})</button>
                ${categories.map(category => {
                    const count = enhancedBookmarks.getBookmarksByCategory(category).length;
                    return `<button class="category-filter" onclick="filterBookmarksByCategory('${category}')">${category} (${count})</button>`;
                }).join('')}
            </div>
            
            <div class="bookmarks-grid" id="bookmarksGrid">
                ${bookmarkedProjects.map(bookmark => `
                    <div class="bookmark-card" data-category="${bookmark.category}">
                        <div class="bookmark-header">
                            <h4 onclick="openModal(${bookmark.projectId})">${bookmark.project.title}</h4>
                            <button class="remove-bookmark" onclick="removeBookmark(${bookmark.projectId})">&times;</button>
                        </div>
                        <div class="bookmark-meta">
                            <span class="difficulty">${bookmark.project.difficulty}</span>
                            <span class="category">${bookmark.category}</span>
                        </div>
                        <div class="progress-section">
                            <label>Progress: ${bookmark.progress}%</label>
                            <input type="range" min="0" max="100" value="${bookmark.progress}" 
                                   onchange="updateBookmarkProgress(${bookmark.projectId}, this.value)">
                        </div>
                        ${bookmark.notes ? `<div class="bookmark-notes"><strong>Notes:</strong> ${bookmark.notes}</div>` : ''}
                        <div class="bookmark-tags">
                            ${bookmark.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            <button class="add-tag" onclick="addBookmarkTag(${bookmark.projectId})">+ Tag</button>
                        </div>
                        <div class="bookmark-actions">
                            <button onclick="openModal(${bookmark.projectId})">View Details</button>
                            <button onclick="editBookmark(${bookmark.projectId})">Edit</button>
                        </div>
                    </div>
                `).join('') || '<p>No bookmarked projects yet.</p>'}
            </div>
        </div>
    `;
}

function generateProgressDashboard() {
    const bookmarkedProjects = enhancedBookmarks.getAllBookmarksWithProjects();
    const inProgress = bookmarkedProjects.filter(b => b.progress > 0 && b.progress < 100);
    const completed = bookmarkedProjects.filter(b => b.progress === 100);
    const notStarted = bookmarkedProjects.filter(b => b.progress === 0);
    
    return `
        <div class="progress-dashboard">
            <div class="progress-overview">
                <div class="progress-stats">
                    <div class="progress-stat">
                        <span class="stat-number">${completed.length}</span>
                        <span class="stat-label">Completed</span>
                    </div>
                    <div class="progress-stat">
                        <span class="stat-number">${inProgress.length}</span>
                        <span class="stat-label">In Progress</span>
                    </div>
                    <div class="progress-stat">
                        <span class="stat-number">${notStarted.length}</span>
                        <span class="stat-label">Not Started</span>
                    </div>
                </div>
                
                <div class="progress-chart">
                    <canvas id="progressChart" width="300" height="200"></canvas>
                </div>
            </div>
            
            <div class="progress-sections">
                <div class="progress-section">
                    <h3>In Progress (${inProgress.length})</h3>
                    <div class="progress-projects">
                        ${inProgress.map(bookmark => `
                            <div class="progress-project">
                                <div class="project-info">
                                    <h4 onclick="openModal(${bookmark.projectId})">${bookmark.project.title}</h4>
                                    <span class="project-difficulty">${bookmark.project.difficulty}</span>
                                </div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${bookmark.progress}%"></div>
                                    </div>
                                    <span class="progress-percentage">${bookmark.progress}%</span>
                                </div>
                                <div class="project-actions">
                                    <button onclick="updateBookmarkProgress(${bookmark.projectId}, ${bookmark.progress + 10})">+10%</button>
                                    <button onclick="markAsCompleted(${bookmark.projectId})">Complete</button>
                                </div>
                            </div>
                        `).join('') || '<p>No projects in progress.</p>'}
                    </div>
                </div>
                
                <div class="progress-section">
                    <h3>Recently Completed (${completed.slice(0, 5).length})</h3>
                    <div class="completed-projects">
                        ${completed.slice(0, 5).map(bookmark => `
                            <div class="completed-project">
                                <h4 onclick="openModal(${bookmark.projectId})">${bookmark.project.title}</h4>
                                <span class="completion-date">Completed: ${new Date(bookmark.addedAt).toLocaleDateString()}</span>
                                <button onclick="shareCompletion(${bookmark.projectId})">Share Achievement</button>
                            </div>
                        `).join('') || '<p>No completed projects yet.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateAnalyticsDashboard() {
    const userActivity = projectAnalytics.getUserActivitySummary(30);
    const popularProjects = projectAnalytics.getPopularProjects(10);
    const trendingProjects = projectAnalytics.getTrendingProjects(7, 5);
    
    return `
        <div class="analytics-dashboard">
            <div class="analytics-overview">
                <h3>Your Activity (Last 30 Days)</h3>
                <div class="activity-stats">
                    ${Object.entries(userActivity.actionCounts).map(([action, count]) => `
                        <div class="activity-stat">
                            <span class="stat-number">${count}</span>
                            <span class="stat-label">${action.replace('_', ' ').toUpperCase()}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="activity-chart">
                    <h4>Daily Activity</h4>
                    <canvas id="activityChart" width="400" height="200"></canvas>
                </div>
            </div>
            
            <div class="analytics-sections">
                <div class="analytics-section">
                    <h3>Most Viewed Projects</h3>
                    <div class="popular-projects">
                        ${popularProjects.map((item, index) => `
                            <div class="popular-project">
                                <span class="rank">#${index + 1}</span>
                                <div class="project-info">
                                    <h4 onclick="openModal(${item.projectId})">${item.project.title}</h4>
                                    <span class="view-count">${item.views} views</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="analytics-section">
                    <h3>Trending This Week</h3>
                    <div class="trending-projects">
                        ${trendingProjects.map(item => `
                            <div class="trending-project">
                                <div class="project-info">
                                    <h4 onclick="openModal(${item.projectId})">${item.project.title}</h4>
                                    <span class="trend-info">${item.recentViews} recent views</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="analytics-section">
                    <h3>Export Data</h3>
                    <div class="export-options">
                        <button onclick="projectAnalytics.exportAnalytics()">Export Analytics</button>
                        <button onclick="enhancedBookmarks.exportBookmarks()">Export Bookmarks</button>
                        <button onclick="exportAllData()">Export All Data</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper functions for dashboard
function filterBookmarksByCategory(category) {
    const bookmarkCards = document.querySelectorAll('.bookmark-card');
    const filterButtons = document.querySelectorAll('.category-filter');
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide bookmark cards
    bookmarkCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateBookmarkProgress(projectId, progress) {
    enhancedBookmarks.updateProgress(projectId, parseInt(progress));
    // Refresh the dashboard if it's open
    const progressDashboard = document.getElementById('progress-dashboard');
    if (progressDashboard && progressDashboard.classList.contains('active')) {
        progressDashboard.innerHTML = generateProgressDashboard();
    }
}

function markAsCompleted(projectId) {
    enhancedBookmarks.updateProgress(projectId, 100);
    enhancedBookmarks.bookmarks[projectId].category = 'Completed';
    enhancedBookmarks.saveBookmarks();
    
    const project = projects.find(p => p.id === projectId);
    alert(`Congratulations! You've completed ${project.title}!`);
    
    projectAnalytics.trackUserActivity('complete', projectId);
    
    // Refresh dashboard
    showDashboard();
    showDashboardTab('progress');
}

function addBookmarkTag(projectId) {
    const tag = prompt('Enter a tag:');
    if (tag && tag.trim()) {
        enhancedBookmarks.addTag(projectId, tag.trim());
        // Refresh bookmarks dashboard
        const bookmarksDashboard = document.getElementById('bookmarks-dashboard');
        if (bookmarksDashboard && bookmarksDashboard.classList.contains('active')) {
            bookmarksDashboard.innerHTML = generateBookmarksDashboard();
        }
    }
}

function removeBookmark(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (confirm(`Remove ${project.title} from bookmarks?`)) {
        enhancedBookmarks.removeBookmark(projectId);
        // Refresh bookmarks dashboard
        const bookmarksDashboard = document.getElementById('bookmarks-dashboard');
        if (bookmarksDashboard && bookmarksDashboard.classList.contains('active')) {
            bookmarksDashboard.innerHTML = generateBookmarksDashboard();
        }
    }
}

function shareCompletion(projectId) {
    const project = projects.find(p => p.id === projectId);
    const shareText = `🎉 I just completed the "${project.title}" project! It was a ${project.difficulty} level ${project.category} project. Check it out!`;
    const shareUrl = `${window.location.origin}${window.location.pathname}?project=${projectId}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Completed: ${project.title}`,
            text: shareText,
            url: shareUrl
        });
    } else {
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
            alert('Achievement copied to clipboard!');
        });
    }
    
    projectAnalytics.trackUserActivity('share_completion', projectId);
}

function getPersonalizedRecommendations() {
    const bookmarkedProjects = enhancedBookmarks.getAllBookmarksWithProjects();
    const userActivity = projectAnalytics.getUserActivitySummary(30);
    
    // Get user's preferred categories and difficulties
    const preferredCategories = {};
    const preferredDifficulties = {};
    
    bookmarkedProjects.forEach(bookmark => {
        const category = bookmark.project.category;
        const difficulty = bookmark.project.difficulty;
        
        preferredCategories[category] = (preferredCategories[category] || 0) + 1;
        preferredDifficulties[difficulty] = (preferredDifficulties[difficulty] || 0) + 1;
    });
    
    const topCategory = Object.keys(preferredCategories).sort((a, b) => 
        preferredCategories[b] - preferredCategories[a]
    )[0];
    
    const topDifficulty = Object.keys(preferredDifficulties).sort((a, b) => 
        preferredDifficulties[b] - preferredDifficulties[a]
    )[0];
    
    // Find recommendations
    const bookmarkedIds = bookmarkedProjects.map(b => b.projectId);
    const recommendations = projects
        .filter(project => !bookmarkedIds.includes(project.id))
        .map(project => {
            let score = 0;
            let reason = '';
            
            if (project.category === topCategory) {
                score += 3;
                reason = `Similar to your favorite category: ${topCategory}`;
            }
            
            if (project.difficulty === topDifficulty) {
                score += 2;
                reason = reason ? `${reason} and ${topDifficulty} difficulty` : `Matches your preferred ${topDifficulty} difficulty`;
            }
            
            // Boost trending projects
            const trending = projectAnalytics.getTrendingProjects(7, 20);
            if (trending.some(t => t.projectId === project.id)) {
                score += 1;
                reason = reason || 'Trending this week';
            }
            
            return { ...project, score, reason: reason || 'Recommended for you' };
        })
        .filter(project => project.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    
    return recommendations;
}

function exportAllData() {
    const allData = {
        bookmarks: enhancedBookmarks.bookmarks,
        analytics: projectAnalytics.analytics,
        userActivity: projectAnalytics.userActivity,
        searchHistory: advancedSearch.getSearchHistory(),
        reviews: projectReviews.getAllReviews(),
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `project-hub-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Print project functionality
function printProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const printWindow = window.open('', '_blank');
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${project.title} - Project Details</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                .header { border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .meta { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
                .meta span { display: inline-block; margin-right: 20px; padding: 5px 10px; background: white; border-radius: 3px; }
                .description { margin: 20px 0; }
                .tech-stack { margin: 20px 0; }
                .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666; }
                @media print { body { margin: 20px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${project.title}</h1>
                <p>Generated on ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="meta">
                <span><strong>Difficulty:</strong> ${project.difficulty}</span>
                <span><strong>Duration:</strong> ${project.duration}</span>
                <span><strong>Category:</strong> ${project.category}</span>
            </div>
            
            <div class="tech-stack">
                <h3>Technologies Required</h3>
                <p>${project.tech}</p>
            </div>
            
            <div class="description">
                <h3>Project Description</h3>
                ${project.fullDescription.split('\n').map(paragraph => 
                    paragraph.trim() ? `<p>${paragraph}</p>` : ''
                ).join('')}
            </div>
            
            <div class="footer">
                <p>Printed from Project Hub - Your Learning Companion</p>
                <p>Visit us at: ${window.location.origin}</p>
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    
    projectAnalytics.trackUserActivity('print', projectId);
}

// Enhanced search with voice recognition
class VoiceSearch {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.initializeVoiceRecognition();
    }

    initializeVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateVoiceButton(true);
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                this.updateVoiceButton(false);
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('searchInput').value = transcript;
                performSearch();
                projectAnalytics.trackUserActivity('voice_search', null, { query: transcript });
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.isListening = false;
                this.updateVoiceButton(false);
            };
        }
    }

    startListening() {
        if (this.recognition && !this.isListening) {
            this.recognition.start();
        } else if (!this.recognition) {
            alert('Voice search is not supported in your browser.');
        }
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }

    updateVoiceButton(isListening) {
        const voiceButton = document.getElementById('voiceSearchBtn');
        if (voiceButton) {
            voiceButton.textContent = isListening ? '🔴 Listening...' : '🎤 Voice Search';
            voiceButton.disabled = isListening;
        }
    }
}

// Initialize voice search
const voiceSearch = new VoiceSearch();

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + K for search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Ctrl/Cmd + D for dashboard
    if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        showDashboard();
    }
    
    // Escape to close modals
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.remove();
            }
        });
        closeModal();
    }
    
    // Ctrl/Cmd + / for help
    if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        showHelpModal();
    }
});

// Help modal
function showHelpModal() {
    const helpModal = document.createElement('div');
    helpModal.className = 'modal';
    helpModal.innerHTML = `
        <div class="modal-content help-modal">
            <div class="modal-header">
                <h2>Help & Keyboard Shortcuts</h2>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="help-section">
                    <h3>Keyboard Shortcuts</h3>
                    <div class="shortcuts-list">
                        <div class="shortcut-item">
                            <kbd>Ctrl/Cmd + K</kbd>
                            <span>Focus search bar</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl/Cmd + D</kbd>
                            <span>Open dashboard</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Escape</kbd>
                            <span>Close modals</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl/Cmd + /</kbd>
                            <span>Show this help</span>
                        </div>
                    </div>
                </div>
                
                <div class="help-section">
                    <h3>Search Tips</h3>
                    <ul>
                        <li>Use quotes for exact phrases: "machine learning"</li>
                        <li>Filter by difficulty: difficulty:beginner</li>
                        <li>Filter by category: category:web</li>
                        <li>Filter by technology: tech:python</li>
                        <li>Use voice search with the microphone button</li>
                    </ul>
                </div>
                
                <div class="help-section">
                    <h3>Features</h3>
                    <ul>
                        <li><strong>Bookmarks:</strong> Save projects to different categories</li>
                        <li><strong>Progress Tracking:</strong> Track your learning progress</li>
                        <li><strong>Reviews:</strong> Rate and review projects</li>
                        <li><strong>Templates:</strong> Generate starter code for projects</li>
                        <li><strong>Analytics:</strong> View your learning statistics</li>
                        <li><strong>Learning Paths:</strong> Follow structured learning routes</li>
                    </ul>
                </div>
                
                <div class="help-section">
                    <h3>Tips for Success</h3>
                    <ul>
                        <li>Start with beginner projects if you're new to programming</li>
                        <li>Follow learning paths for structured progression</li>
                        <li>Use the bookmark system to organize your learning</li>
                        <li>Track your progress to stay motivated</li>
                        <li>Share completed projects to celebrate achievements</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(helpModal);
    helpModal.style.display = 'block';
}

// Theme system
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(this.currentTheme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        const themeButton = document.getElementById('themeToggle');
        if (themeButton) {
            themeButton.textContent = theme === 'light' ? '🌙' : '☀️';
            themeButton.title = `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`;
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Notification system
class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.createNotificationContainer();
    }

    createNotificationContainer() {
        if (!document.getElementById('notificationContainer')) {
            const container = document.createElement('div');
            container.id = 'notificationContainer';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;

        const container = document.getElementById('notificationContainer');
        container.appendChild(notification);

        // Auto remove after duration
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, duration);

        return notification;
    }

    success(message, duration) {
        return this.show(message, 'success', duration);
    }

    error(message, duration) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
}

// Initialize notification system
const notifications = new NotificationSystem();

// Offline support
class OfflineManager {
    constructor() {
        this.isOnline = navigator.onLine;
        this.setupEventListeners();
        this.checkOnlineStatus();
    }

    setupEventListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            notifications.success('You are back online!');
            this.syncOfflineData();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            notifications.warning('You are offline. Some features may be limited.');
        });
    }

    checkOnlineStatus() {
        if (!this.isOnline) {
            notifications.info('You are currently offline. Cached data will be used.');
        }
    }

    syncOfflineData() {
        // Sync any offline changes when back online
        console.log('Syncing offline data...');
        // Implementation would depend on backend API
    }

    cacheData(key, data) {
        try {
            localStorage.setItem(`offline_${key}`, JSON.stringify({
                data: data,
                timestamp: new Date().toISOString()
            }));
        } catch (error) {
            console.error('Failed to cache data:', error);
        }
    }

    getCachedData(key) {
        try {
            const cached = localStorage.getItem(`offline_${key}`);
            if (cached) {
                const parsed = JSON.parse(cached);
                return parsed.data;
            }
        } catch (error) {
            console.error('Failed to retrieve cached data:', error);
        }
        return null;
    }
}

// Initialize offline manager
const offlineManager = new OfflineManager();

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            searchTime: [],
            renderTime: [],
            modalOpenTime: []
        };
    }

    startTimer(operation) {
        return performance.now();
    }

    endTimer(operation, startTime) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        if (this.metrics[operation]) {
            this.metrics[operation].push(duration);
            
            // Keep only last 100 measurements
            if (this.metrics[operation].length > 100) {
                this.metrics[operation] = this.metrics[operation].slice(-100);
            }
        }
        
        return duration;
    }

    getAverageTime(operation) {
        const times = this.metrics[operation];
        if (!times || times.length === 0) return 0;
        
        const sum = times.reduce((a, b) => a + b, 0);
        return sum / times.length;
    }

    getPerformanceReport() {
        return {
            averageSearchTime: this.getAverageTime('searchTime'),
            averageRenderTime: this.getAverageTime('renderTime'),
            averageModalOpenTime: this.getAverageTime('modalOpenTime'),
            totalMeasurements: Object.values(this.metrics).reduce((sum, arr) => sum + arr.length, 0)
        };
    }
}

// Initialize performance monitor
const performanceMonitor = new PerformanceMonitor();

// Enhanced search with performance monitoring
function performSearch() {
    const startTime = performanceMonitor.startTimer('searchTime');
    
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        displayProjects(projects);
        return;
    }

    const results = advancedSearch.search(query);
    displayProjects(results);
    
    const searchTime = performanceMonitor.endTimer('searchTime', startTime);
    
    // Show search performance in debug mode
    if (localStorage.getItem('debugMode') === 'true') {
        console.log(`Search completed in ${searchTime.toFixed(2)}ms`);
    }
    
    projectAnalytics.trackUserActivity('search', null, { 
        query, 
        resultCount: results.length,
        searchTime: searchTime 
    });
}

// Enhanced modal opening with performance monitoring
function openModal(projectId) {
    const startTime = performanceMonitor.startTimer('modalOpenTime');
    
    // Track project view
    projectAnalytics.trackProjectView(projectId);
    projectAnalytics.trackUserActivity('view', projectId);

    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Get project reviews and ratings
    const reviews = projectReviews.getReviews(projectId);
    const averageRating = projectReviews.getAverageRating(projectId);
    const recommendations = getRecommendedProjects(projectId);
    const isBookmarked = enhancedBookmarks.bookmarks[projectId];
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="modal-header-actions">
                <button class="icon-btn" onclick="bookmarkProject(${projectId})" title="${isBookmarked ? 'Remove bookmark' : 'Add bookmark'}">
                    ${isBookmarked ? '★' : '☆'}
                </button>
                <button class="icon-btn" onclick="shareProject(${projectId})" title="Share project">📤</button>
                <span class="close" onclick="closeModal()">&times;</span>
            </div>
        </div>
        <div class="modal-body">
            <div class="project-meta">
                <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                <span class="duration-badge">${project.duration}</span>
                <span class="category-badge">${project.category}</span>
                ${averageRating > 0 ? `<span class="rating-badge">★ ${averageRating} (${reviews.length} reviews)</span>` : ''}
            </div>
            
            <div class="tech-stack">
                <strong>Technologies:</strong> 
                <div class="tech-tags">
                    ${project.tech.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-full-description">
                ${project.fullDescription.split('\n').map(paragraph => 
                    paragraph.trim() ? `<p>${paragraph}</p>` : ''
                ).join('')}
            </div>
            
            ${recommendations.length > 0 ? `
                <div class="recommendations">
                    <h3>Similar Projects You Might Like</h3>
                    <div class="recommendation-grid">
                        ${recommendations.slice(0, 3).map(rec => `
                            <div class="recommendation-card" onclick="openModal(${rec.id})">
                                <h4>${rec.title}</h4>
                                <span class="rec-difficulty">${rec.difficulty}</span>
                                <span class="rec-category">${rec.category}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="modal-tabs">
                <button class="tab-btn active" onclick="showModalTab('overview', event)">Overview</button>
                <button class="tab-btn" onclick="showModalTab('reviews', event)">Reviews (${reviews.length})</button>
                <button class="tab-btn" onclick="showModalTab('templates', event)">Templates</button>
                <button class="tab-btn" onclick="showModalTab('resources', event)">Resources</button>
            </div>
            
            <div id="overview-modal-tab" class="modal-tab-content active">
                <div class="project-details">
                    <h4>What You'll Learn</h4>
                    <ul class="learning-objectives">
                        ${project.learningObjectives ? project.learningObjectives.map(obj => `<li>${obj}</li>`).join('') : '<li>Hands-on experience with the listed technologies</li><li>Problem-solving and project development skills</li><li>Best practices in software development</li>'}
                    </ul>
                    
                    <h4>Prerequisites</h4>
                    <ul class="prerequisites">
                        ${project.prerequisites ? project.prerequisites.map(req => `<li>${req}</li>`).join('') : '<li>Basic understanding of the technologies mentioned</li><li>Development environment setup</li>'}
                    </ul>
                    
                    <h4>Project Structure</h4>
                    <div class="project-structure">
                        ${project.structure ? project.structure : 'This project will guide you through building a complete application from scratch, including planning, development, testing, and deployment phases.'}
                    </div>
                </div>
            </div>
            
            <div id="reviews-modal-tab" class="modal-tab-content">
                <div class="reviews-section">
                    <div class="reviews-summary">
                        ${averageRating > 0 ? `
                            <div class="rating-summary">
                                <div class="average-rating">
                                    <span class="rating-number">${averageRating}</span>
                                    <div class="rating-stars">${'★'.repeat(Math.floor(averageRating))}${'☆'.repeat(5-Math.floor(averageRating))}</div>
                                    <span class="rating-count">${reviews.length} reviews</span>
                                </div>
                                <div class="rating-distribution">
                                    ${[5,4,3,2,1].map(star => {
                                        const count = reviews.filter(r => r.rating === star).length;
                                        const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                                        return `
                                            <div class="rating-bar">
                                                <span>${star}★</span>
                                                <div class="bar">
                                                    <div class="bar-fill" style="width: ${percentage}%"></div>
                                                </div>
                                                <span>${count}</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="add-review">
                        <h4>Share Your Experience</h4>
                        <div class="rating-input">
                            <span>Your Rating: </span>
                            <div class="star-rating">
                                ${[1,2,3,4,5].map(star => `
                                    <span class="star-input" onclick="setRating(${star})" data-rating="${star}">★</span>
                                `).join('')}
                            </div>
                        </div>
                        <textarea id="reviewComment" placeholder="Tell others about your experience with this project. What did you learn? What challenges did you face?" rows="4"></textarea>
                        <div class="review-actions">
                            <button class="btn-primary" onclick="submitReview(${projectId})">Submit Review</button>
                            <button class="btn-secondary" onclick="clearReviewForm()">Clear</button>
                        </div>
                    </div>
                    
                    <div class="reviews-list">
                        <h4>Community Reviews</h4>
                        ${reviews.length > 0 ? reviews.map(review => `
                            <div class="review-item">
                                <div class="review-header">
                                    <div class="reviewer-info">
                                        <span class="reviewer-name">${review.username}</span>
                                        <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                                    </div>
                                    <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                                </div>
                                <p class="review-comment">${review.comment}</p>
                                <div class="review-actions">
                                    <button class="review-action-btn" onclick="likeReview('${review.id}')">👍 Helpful</button>
                                    <button class="review-action-btn" onclick="reportReview('${review.id}')">⚠️ Report</button>
                                </div>
                            </div>
                        `).join('') : '<p class="no-reviews">No reviews yet. Be the first to share your experience!</p>'}
                    </div>
                </div>
            </div>
            
            <div id="templates-modal-tab" class="modal-tab-content">
                <div class="templates-section">
                    <h4>Quick Start Templates</h4>
                    <p>Get started faster with pre-configured project templates:</p>
                    
                    <div class="template-grid">
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'react')">
                            <div class="template-icon">⚛️</div>
                            <h5>React</h5>
                            <p>Modern React with hooks and context</p>
                        </div>
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'vue')">
                            <div class="template-icon">🟢</div>
                            <h5>Vue.js</h5>
                            <p>Vue 3 with Composition API</p>
                        </div>
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'nodejs')">
                            <div class="template-icon">🟩</div>
                            <h5>Node.js</h5>
                            <p>Express server with modern ES6+</p>
                        </div>
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'python')">
                            <div class="template-icon">🐍</div>
                            <h5>Python</h5>
                            <p>Flask/Django starter template</p>
                        </div>
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'django')">
                            <div class="template-icon">🎯</div>
                            <h5>Django</h5>
                            <p>Full Django project structure</p>
                        </div>
                        <div class="template-option" onclick="generateTemplate(${projectId}, 'flask')">
                            <div class="template-icon">🌶️</div>
                            <h5>Flask</h5>
                            <p>Lightweight Flask application</p>
                        </div>
                    </div>
                    
                    <div id="template-output" class="template-output"></div>
                </div>
            </div>
            
            <div id="resources-modal-tab" class="modal-tab-content">
                <div class="resources-section">
                    <h4>Learning Resources</h4>
                    
                    <div class="resource-categories">
                        <div class="resource-category">
                            <h5>📚 Documentation</h5>
                            <ul class="resource-list">
                                ${project.resources?.documentation ? project.resources.documentation.map(doc => `
                                    <li><a href="${doc.url}" target="_blank">${doc.title}</a></li>
                                `).join('') : `
                                    <li><a href="#" onclick="searchResources('${project.tech}', 'documentation')">Find documentation for ${project.tech}</a></li>
                                `}
                            </ul>
                        </div>
                        
                        <div class="resource-category">
                            <h5>🎥 Video Tutorials</h5>
                            <ul class="resource-list">
                                ${project.resources?.videos ? project.resources.videos.map(video => `
                                    <li><a href="${video.url}" target="_blank">${video.title}</a></li>
                                `).join('') : `
                                    <li><a href="#" onclick="searchResources('${project.tech}', 'videos')">Find video tutorials for ${project.tech}</a></li>
                                `}
                            </ul>
                        </div>
                        
                        <div class="resource-category">
                            <h5>💻 Code Examples</h5>
                            <ul class="resource-list">
                                ${project.resources?.examples ? project.resources.examples.map(example => `
                                    <li><a href="${example.url}" target="_blank">${example.title}</a></li>
                                `).join('') : `
                                    <li><a href="#" onclick="searchResources('${project.tech}', 'examples')">Find code examples for ${project.tech}</a></li>
                                `}
                            </ul>
                        </div>
                        
                        <div class="resource-category">
                            <h5>🛠️ Tools & Libraries</h5>
                            <ul class="resource-list">
                                ${project.resources?.tools ? project.resources.tools.map(tool => `
                                    <li><a href="${tool.url}" target="_blank">${tool.title}</a> - ${tool.description}</li>
                                `).join('') : `
                                    <li><a href="#" onclick="searchResources('${project.tech}', 'tools')">Find tools for ${project.tech}</a></li>
                                `}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="community-resources">
                        <h5>🌐 Community & Support</h5>
                        <div class="community-links">
                            <a href="https://stackoverflow.com/questions/tagged/${project.tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}" target="_blank" class="community-link">
                                <span class="community-icon">📋</span>
                                <span>Stack Overflow</span>
                            </a>
                            <a href="https://github.com/topics/${project.tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}" target="_blank" class="community-link">
                                <span class="community-icon">🐙</span>
                                <span>GitHub Projects</span>
                            </a>
                            <a href="https://www.reddit.com/r/${project.category}/" target="_blank" class="community-link">
                                <span class="community-icon">🔴</span>
                                <span>Reddit Community</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-footer">
            <div class="modal-actions">
                <button class="btn-primary" onclick="startProject(${projectId})">Start Project</button>
                <button class="btn-secondary" onclick="printProject(${projectId})">Print Details</button>
                <button class="btn-secondary" onclick="addToLearningPath(${projectId})">Add to Learning Path</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    const modalTime = performanceMonitor.endTimer('modalOpenTime', startTime);
    
    // Debug performance
    if (localStorage.getItem('debugMode') === 'true') {
        console.log(`Modal opened in ${modalTime.toFixed(2)}ms`);
    }
}

// Additional helper functions
function clearReviewForm() {
    document.getElementById('reviewComment').value = '';
    currentRating = 0;
    document.querySelectorAll('.star-input').forEach(star => {
        star.classList.remove('selected');
    });
}

function likeReview(reviewId) {
    // Implementation for liking reviews
    notifications.success('Thank you for your feedback!');
}

function reportReview(reviewId) {
    if (confirm('Report this review as inappropriate?')) {
        notifications.info('Review has been reported for moderation.');
    }
}

function startProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    enhancedBookmarks.addBookmark(projectId, 'In Progress', 'Started working on this project');
    projectAnalytics.trackUserActivity('start_project', projectId);
    notifications.success(`Started working on "${project.title}"! Added to your bookmarks.`);
    closeModal();
}

function addToLearningPath(projectId) {
    const availablePaths = learningPath.getAllPaths();
    const pathOptions = availablePaths.map(path => `<option value="${path}">${path.replace('-', ' ').toUpperCase()}</option>`).join('');
    
    const pathModal = document.createElement('div');
    pathModal.className = 'modal';
    pathModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add to Learning Path</h3>
                <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            </div>
            <div class="modal-body">
                <p>Choose a learning path to add this project to:</p>
                <select id="pathSelect" class="form-control">
                    ${pathOptions}
                </select>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="confirmAddToPath(${projectId})">Add to Path</button>
                    <button class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(pathModal);
    pathModal.style.display = 'block';
}

function confirmAddToPath(projectId) {
    const selectedPath = document.getElementById('pathSelect').value;
    const project = projects.find(p => p.id === projectId);
    
    // Add to bookmarks with learning path category
    enhancedBookmarks.addBookmark(projectId, 'Learning Path', `Part of ${selectedPath} learning path`);
    enhancedBookmarks.addTag(projectId, selectedPath);
    
    notifications.success(`"${project.title}" added to ${selectedPath} learning path!`);
    document.querySelector('.modal').remove();
    
    projectAnalytics.trackUserActivity('add_to_path', projectId, { path: selectedPath });
}

function searchResources(tech, type) {
    const searchQueries = {
        documentation: `${tech} official documentation`,
        videos: `${tech} tutorial videos`,
        examples: `${tech} code examples github`,
        tools: `${tech} development tools`
    };
    
    const query = searchQueries[type] || tech;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Display initial projects
    displayProjects(projects);
    
    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
    
    // Setup voice search button
    const voiceButton = document.getElementById('voiceSearchBtn');
    if (voiceButton) {
        voiceButton.addEventListener('click', () => voiceSearch.startListening());
    }
    
    // Setup theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => themeManager.toggleTheme());
    }
    
    // Check for project ID in URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    if (projectId) {
        const id = parseInt(projectId);
        if (projects.find(p => p.id === id)) {
            openModal(id);
        }
    }
    
    // Show welcome message for first-time users
    if (!localStorage.getItem('hasVisited')) {
        setTimeout(() => {
            notifications.info('Welcome to Project Hub! Use Ctrl+/ for keyboard shortcuts and tips.', 8000);
            localStorage.setItem('hasVisited', 'true');
        }, 1000);
    }
    
    // Performance monitoring setup
    if (localStorage.getItem('debugMode') === 'true') {
        console.log('Debug mode enabled. Performance metrics will be logged.');
        
        // Log performance report every 30 seconds
        setInterval(() => {
            const report = performanceMonitor.getPerformanceReport();
            console.log('Performance Report:', report);
        }, 30000);
    }
});

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        advancedSearch,
        projectAnalytics,
        enhancedBookmarks,
        learningPath,
        templateGenerator,
        projectReviews,
        performanceMonitor,
        themeManager,
        notifications,
        offlineManager
    };
}
