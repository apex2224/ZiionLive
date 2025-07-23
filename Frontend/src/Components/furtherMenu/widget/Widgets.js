import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import styles from './Widgets.module.css';
import images from '../../../assets/images';
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import audio from '../../../assets/furtherMenu/widgets/audioFeature.webp'
import fileImgFeature from '../../../assets/furtherMenu/widgets/fileImgFeature.webp'
import helpFeature from '../../../assets/furtherMenu/widgets/helpFeature.webp'
import ratingFeature from '../../../assets/furtherMenu/widgets/ratingFeature.webp'
import iframeFeature from '../../../assets/furtherMenu/widgets/iframeFeature.webp'



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
  { id: 1, title: "Audio Message",image: audio, desc: "Send voice messages", icon: "🎤" },
  { id: 2, title: "Files & Images", image: fileImgFeature, desc: "Upload your files easily", icon: "📎" },
  { id: 3, title: "Iframe",image: helpFeature,  desc: "Embed external content", icon: "🌐" },
  { id: 4, title: "Ratings", image: ratingFeature, desc: "Send CSAT survey", icon: "⭐" },
  { id: 5, title: "Help Articles",image: iframeFeature,  desc: "Turn your chat widget into a help widget", icon: "📚" }
];


export default function Widgets() {
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


  return (
    <>
      <Navbar />
      <section className={styles.hero}>
       <div className={styles.widgetBack}>
         <img src={images.furtherMenuBackgroundImage} alt="background" className={styles.bgImage} />
       </div>
        <div className={styles.imageContainer}>
          {/* Ye div sirf background image ke liye hai */}


          {/* Ye content image ke upar dikh raha hai */}
          <div className={styles.content}>
            <h1 className={styles.widgetHeroTitle}>
              Let your customers chat with your teams the way they chat with their friends.
            </h1>
            <p className={styles.subtitle}>
              Regularly nominated as one of the best website chat software, Crisp chat widget helps your
              team to improve customer satisfaction through proactive and conversations,
            </p>

            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>Get started for free</button>
              <button className={styles.secondaryBtn}>Explore the features</button>
            </div>

          </div>
        </div>
      </section>

      {/* widget next sesction */}
      <div className={styles.widgetsContainer}>
        <div className={styles.widgetsLeftPanel}>
          <h1 className={styles.makeThem}>
            Make them<br />feel unique
          </h1>
          <div className={styles.widgetsList}>
            {widgets.map(widget => (
              <div
                key={widget.id}
                className={`${styles.widgetItem} ${active.id === widget.id ? styles.active : ''} ${openId === widget.id ? styles.expanded : ''}`}
                onClick={() => handleClick(widget)}>
                <div className={styles.widgetHeader}>
                  <span className={styles.widgetIcon}>{widget.icon}</span>
                  <span className={styles.widgetTitle}>{widget.title}</span>
                </div>
                {openId === widget.id && (
                  <div className={styles.widgetContent}>
                    {widget.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.widgetsRightPanel}>
          <img src={images[active.image]} alt="Widget View" className={styles.widgetImage} />
        </div>
      </div>

            {/* widget next section implementation */}
                            
<div className={styles.implementContainer}>
     <Link to="/wordpress" className={styles.wordPressLink}>
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
     </Link>

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


        {/* widget next section  4th*/}
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
            className={`${styles.block} ${
              activeId === block.id ? styles.active : ""
            }`}
            onClick={() => handleClicked(block.id)}
          >
            <div className={styles.icon}>{block.icon}</div>
            <div className={styles.title}>{block.title}</div>
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
            className={`${styles.block} ${
              activeId === block.id ? styles.active : ""
            }`}
            onClick={() => handleClicked(block.id)}
          >
            <div className={styles.icon}>{block.icon}</div>
            <div className={styles.title}>{block.title}</div>
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


   {/* widget lastSecond section */}

    <div className={styles.widgetContainer}>
      <div className={styles.leftPanel}>
        <img src="" alt="Widget content" className={styles.image} />
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.percentage}>78%</h2>
        <div className={styles.line}></div>
        <h3 className={styles.heading}>automated routine tasks</h3>
        <p className={styles.description}>
          Experience the power of instant support with AI chat. No more waiting
          in long queues or navigating complex menus. Our chatbot provides
          immediate assistance, helping you solve problems and find solutions in
          seconds.
        </p>
        <button className={styles.button}>Get started</button>
      </div>
    </div>

        
         <Footer />  

    </>
  );
}
