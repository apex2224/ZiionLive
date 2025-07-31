// CourseDetailRouter.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import Webdesigning from './webdesigning/Webdesigning';
import DigitalMarketing from './digitalMarketing/DigitalMarketing';
import DataScience from './dataScience/DataScience';
import ArtificialIntelligence from './AI/AI';
import MachineLearning from './ML/ML';
import WebDevelopment from './webDevelopment/WebDevelopment';
import DataAnalytics from './DataAnalytics/DataAnalytics';
import MobileAppDevelopment from './Mobileapp/MobileApp';
import PHP from './PHP/Php';
import GraphicDesigning from './graphic/Graphic';

const CourseDetail = () => {
  const { courseRoute } = useParams();

  const normalizedTitle = courseRoute?.toLowerCase();

  const courseComponents = {
    'web-designing': <Webdesigning />,
    'web-development': <WebDevelopment/>,
    'digital-marketing': <DigitalMarketing/>,
    'data-science': <DataScience/>,
    'data-analytics': <DataAnalytics/>,
    'ai': <ArtificialIntelligence/>,
    'ml': <MachineLearning/>,
    'mobileapp': <MobileAppDevelopment/>,
    'php': <PHP/>,
    'graphic-designing': <GraphicDesigning/>,

  
  };

  return courseComponents[normalizedTitle] || <div>Course Not Found</div>;
};

export default CourseDetail;
