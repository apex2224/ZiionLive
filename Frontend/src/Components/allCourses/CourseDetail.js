// CourseDetailRouter.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import Webdesigning from './webdesigning/Webdesigning';
import DigitalMarketing from './digitalMarketing/DigitalMarketing';
import DataScience from './dataScience/DataScience';

const CourseDetail = () => {
  const { courseTitle } = useParams();

  const normalizedTitle = courseTitle?.toLowerCase();

  const courseComponents = {
    webdesigning: <Webdesigning />,
    digitalmarketing: <DigitalMarketing/>,
    datascience: <DataScience/>,
  
  };

  return courseComponents[normalizedTitle] || <div>Course Not Found</div>;
};

export default CourseDetail;
