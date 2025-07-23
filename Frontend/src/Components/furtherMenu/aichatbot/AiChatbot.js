import React, { useState } from 'react';
import styles from './aichatbot.module.css';
import images from '../../../assets/images';
import Navbar from '../../head/Navbar';
import audio from '../../../assets/furtherMenu/widgets/audioFeature.webp';
import fileImgFeature from '../../../assets/furtherMenu/widgets/fileImgFeature.webp';
import helpFeature from '../../../assets/furtherMenu/widgets/helpFeature.webp';
import ratingFeature from '../../../assets/furtherMenu/widgets/ratingFeature.webp';
import iframeFeature from '../../../assets/furtherMenu/widgets/iframeFeature.webp';
import Footer from '../../footer/Footer';
import buildWork from '../../../assets/furtherMenu/aiChatbot/buildWork.png'
import createChatbot from '../../../assets/furtherMenu/aiChatbot/createChatbot.png'
import integrateApp from '../../../assets/furtherMenu/aiChatbot/integrateApp.png'




const features = [
  {
    title: 'Create Chatbot',
    image: buildWork,
    text: 'It is a long established fact that a reader will be distracted by the readable.',
    iconClass: styles.iconChatbot,
  },
  {
    title: 'Build Your Work',
    image: createChatbot,
    text: 'It is a long established fact that a reader will be distracted by the readable.',
    iconClass: styles.iconBuild,
  },
  {
    title: 'Integrate Apps',
    image: integrateApp,
    text: 'It is a long established fact that a reader will be distracted by the readable.',
    iconClass: styles.iconApps,
  },
];

const widgets = [
  {
    id: 1,
    title: 'Accelerate time to resolution',
    icon: '😊',
    image: 'widgetImg',
    content: 'Speed up issue handling with clear processes and smart automation.'
  },
  {
    id: 2,
    title: 'Build your source of truth',
    icon: '🧭',
    image: 'widgetImg2',
    content: 'Centralize all your information for teams and customers.'
  },
  {
    id: 3,
    title: 'Better conversations every time',
    icon: '🧍‍♂️',
    image: 'widgetImg3',
    content: 'Help teams deliver consistent, personalized experiences.'
  },
  {
    id: 4,
    title: 'Powerful collaboration tools',
    icon: '🔧',
    image: 'widgetImg4',
    content: 'Connect departments and streamline workflows with ease.'
  }
];

const blocks = [
  { id: 1, title: "Audio Message", image: audio, desc: "Send voice messages", icon: "🎤" },
  { id: 2, title: "Files & Images", image: fileImgFeature, desc: "Upload your files easily", icon: "📎" },
  { id: 3, title: "Iframe", image: helpFeature, desc: "Embed external content", icon: "🌐" },
  { id: 4, title: "Ratings", image: ratingFeature, desc: "Send CSAT survey", icon: "⭐" },
  { id: 5, title: "Help Articles", image: iframeFeature, desc: "Turn your chat widget into a help widget", icon: "📚" }
];

function AiChatbot() {
  const [active, setActive] = useState(widgets[0]);
  const [openId, setOpenId] = useState(widgets[0].id);
  const [activeId, setActiveId] = useState(blocks[0].id);
  

  const handleClicked = (id) => {
    setActiveId(id);
  };

  const handleClick = (widget) => {
    setActive(widget);
    setOpenId(prev => prev === widget.id ? null : widget.id);
  };

  const activeBlock = blocks.find((block) => block.id === activeId);

  //image hover the content
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // Toggle active
  };

  const isVisible = (index) => {
    return hoverIndex === index || activeIndex === index;
  };

  return (
    <>
      <Navbar />
      <section className={styles.aiChatbotHeroSection}>
        <div className={styles.aiChatbot}>
          <img src={images.knowledgeHeroImage} alt="background" className={styles.aiChatbotBgImage} />
        </div>

        <div className={styles.aiChatbotContent}>
          <h1 className={styles.aiChatbotTitle}>
            <span className={`${styles.aiChatbotFalldown} ${styles.gradientText}`}>
              Enable your customers to find answers on their own with a powerful knowledge base.
            </span>
            <br />
          </h1>
          <p className={styles.aiChatbotSubtitle}>
            Empower both your teams and customers by adopting a self-service approach that supports asynchronous
            communication. With a dedicated help center, businesses can use Crisp’s knowledge base software to deliver
            clear guides and step-by-step articles that assist customers at every stage of their journey
          </p>
          <button className={styles.aiChatbotHerobutton}>View Demo →</button>
        </div>
      </section>

      {/* AI Chatbot widgets section */}
      <div className={styles.aiChatbotContainer}>
        <div className={styles.aiChatbotLeftPanel}>
          <h1 className={styles.aiChatbotHeading}>
            Make them<br />feel unique
          </h1>
          <div className={styles.aiChatbotList}>
            {widgets.map(widget => (
              <div
                key={widget.id}
                className={`${styles.aiChatbotItem} ${active.id === widget.id ? styles.active : ''} ${openId === widget.id ? styles.expanded : ''}`}
                onClick={() => handleClick(widget)}
              >
                <div className={styles.aiChatbotHeader}>
                  <span className={styles.aiChatbotIcon}>{widget.icon}</span>
                  <span className={styles.aiTitle}>{widget.title}</span>
                </div>
                {openId === widget.id && (
                  <div className={styles.expandedContent}>
                    {widget.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.aiChatbotRightPanel}>
          <img src={images[active.image]} alt="Widget View" className={styles.aiChatbotImage} />
        </div>
      </div>


      {/* widget next section  3rd*/}
      <div className={styles.widgetMain}>

        <div className={styles.mediatorFeature}>
          <h1 className={styles.mediatorTitle}>Have richer conversations</h1>
          <p className={styles.mediaorSubtitle}>
            Business messaging doesn't have to be boring. With Crisp Chat Widget, you can craft the chat experience they deserve.
          </p>
        </div>
        <div className={styles.widgetFourthSection}>

          {/* Left Panel */}
          <div className={styles.sidebar}>
            {blocks.slice(0, 3).map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${activeId === block.id ? styles.active : ""
                  }`}
                onClick={() => handleClicked(block.id)}
              >
                <div className={styles.icon}>{block.icon}</div>
                <div className={styles.featureTitle}>{block.title}</div>
                {activeId === block.id && (
                  <>
                    <div className={styles.desc}>{block.desc}</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill}></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className={styles.chatbox}>
            <img src={activeBlock.image} alt="Chat UI" className={styles.widgetSubFeature} />
          </div>

          {/* Right Panel */}
          <div className={styles.sidebar}>
            {blocks.slice(3).map((block) => (
              <div
                key={block.id}
                className={`${styles.block} ${activeId === block.id ? styles.active : ""
                  }`}
                onClick={() => handleClicked(block.id)}
              >
                <div className={styles.icon}>{block.icon}</div>
                <div className={styles.featureTitle}>{block.title}</div>
                {activeId === block.id && (
                  <>
                    <div className={styles.desc}>{block.desc}</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill}></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* aichatbot next implement app 4th section */}

      <div className={styles.implementContainer}>
        <div className={styles.widget}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>WebFlow</h3>
            <p className={styles.description}>
              Build your content with new and amazing UI WordPress Frontend editing option. No more admin panel needed to create stunning and beautiful content blocks.
            </p>
          </div>
          <div className={styles.widgetFeature}>
            <img src={images.webflow} alt="Page Builder" className={styles.widgetFeatureImg} />
          </div>

        </div>

        <div className={styles.widget}>
          <div className={styles.widgetFeature}>
            <img src={images.shopify} alt="Slider Revolution" className={styles.widgetFeatureImg} />
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Shopify</h3>
            <p className={styles.description}>
              This plugin features tones of unique transition effects, an image preloader, Video embedding, autoplay that stop on user interaction and lots of easy to set option to create your own effects.
            </p>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>WordPress</h3>
            <p className={styles.description}>
              Redux is a simple, truly extensible options framework for WordPress themes and plugins.
            </p>
          </div>
          <div className={styles.widgetFeature}>
            <img src={images.wordPress} alt="Redux framework" className={styles.widgetFeatureImg} />
          </div>

        </div>

        <div className={styles.widget}>
          <div className={styles.widgetFeature}>
            <img src={images.woocommerce} alt="Filterable Portfolio" className={styles.widgetFeatureImg} />
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>WooCommerce</h3>
            <p className={styles.description}>
              Rockon provides portfolio filtering and viewing them in two ways. First is simply grid wise and other is sorting wise. Each possessing their own representation styles.
            </p>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Adobe Commerce</h3>
            <p className={styles.description}>
              Rockon is compatible to all modern web browsers running on all Desktop.
            </p>
          </div>
          <div className={styles.widgetFeature}>
            <img src={images.adobe} alt="Browser Compatible" className={styles.widgetFeatureImg} />
          </div>

        </div>

        <div className={styles.widget}>
          <div className={styles.widgetFeature}>
            <img src={images.wix} alt="SEO Optimized" className={styles.widgetFeatureImg} />
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Wix</h3>
            <p className={styles.description}>
              Rockon is very impressive in promoting your site. It have all inbuilt
            </p>
          </div>
        </div>

        <div className={styles.widget}>

          <div className={styles.textBlock}>
            <h3 className={styles.title}>Twiter</h3>
            <p className={styles.description}>
              Rockon is very impressive in promoting your site. It have all inbuilt
            </p>
          </div>
          <div className={styles.widgetFeature}>
            <img src={images.twiter} alt="SEO Optimized" className={styles.widgetFeatureImg} />
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.widgetFeature}>
            <img src={images.tellegram} alt="SEO Optimized" className={styles.widgetFeatureImg} />
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>Tellegram</h3>
            <p className={styles.description}>
              Rockon is very impressive in promoting your site. It have all inbuilt
            </p>
          </div>
        </div>
      </div>


      {/* talkie chatbot */}

      <section className={styles.talkieWorkSection}>
        <div className={styles.leftPanel}>
          {features.map((feature, index) => (
            <div className={styles.talkieCard} key={index}>
              <div className={`${styles.talkieIcon} ${feature.iconClass}`}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className={styles.talkieContent}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rightPanel}>
          <img
            src={images.AiChatbotFeature}
            alt="Chatbot illustration"
            className={styles.talkieImage} />
        </div>
      </section>


 <div className={styles.aiChatbotImageContainer}>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(1)}
      >
        <img src={images.aichatfeature1} alt="AI 1" />
        {isVisible(1) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>

      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(2)}
      >
        <img src={images.aichatfeature2} alt="AI 2" />
        {isVisible(2) && (
          <div className={styles.overlay}>
            <p>AI Feature 2 Description</p>
          </div>
        )}
      </div>

      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(3)}
      >
        <img src={images.aichatfeature3} alt="AI 1" />
        {isVisible(3) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(4)}
      >
        <img src={images.aichatfeature4} alt="AI 1" />
        {isVisible(4) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(5)}
      >
        <img src={images.aichatfeature5} alt="AI 1" />
        {isVisible(5) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(6)}
      >
        <img src={images.aichatfeature6} alt="AI 1" />
        {isVisible(6) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(7)}
      >
        <img src={images.aichatfeature7} alt="AI 1" />
        {isVisible(7) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(8)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(8)}
      >
        <img src={images.aichatfeature8} alt="AI 1" />
        {isVisible(8) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
      <div
        className={styles.aiChatbotImageBlock}
        onMouseEnter={() => handleMouseEnter(9)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handle(9)}
      >
        <img src={images.aichatfeature9} alt="AI 1" />
        {isVisible(9) && (
          <div className={styles.overlay}>
            <p>AI Feature 1 Description</p>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}

export default AiChatbot;
