import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useState } from 'react';

// Custom Arrow Components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-2/4 right-4 transform -translate-y-2/4 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-2/4 left-4 transform -translate-y-2/4 bg-gray-800 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const TeachersCarousel = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const cardData = [
    {
      name: 'Akram Ali',
      position: 'Principle',
      imgSrc: 'https://docs.material-tailwind.com/img/team-4.jpg',
      contactNumber: '+8801715614615',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Sohidul Islam',
      position: 'Asst. Teacher : Science',
      imgSrc: 'https://i.imghippo.com/files/AXIBZ1723629715.jpg',
      contactNumber: '+8801735016350',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Abu Sayeed',
      position: 'Asst. Teacher : Mathematics',
      imgSrc: 'https://i.imghippo.com/files/yTpFW1723705544.jpg',
      contactNumber: '+8801710189659',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Zhangir Alam',
      position: 'Asst. Teacher : Science',
      imgSrc: 'https://i.imghippo.com/files/x92IE1723629147.jpg',
      contactNumber: '+8801724523949',
      address: 'Marupara, Thekarpara,Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Md. Nobibar Rahman',
      position: 'Asst. Teacher : English', 
      imgSrc: 'https://i.imghippo.com/files/zm24T1724265602.jpg',
      contactNumber: '+8801706870752',
      address: 'Jalashi, Panchagarh Sadar Panchagarh',
    },
    {
      name: 'Olivia Davis',
      position: 'Asst. Teacher : Science', // Updated position
      imgSrc: 'https://docs.material-tailwind.com/img/team-6.jpg',
      contactNumber: '678-901-2345',
      address: '303 Cedar St, Sydney, Australia',
    },
    {
      name: 'Natalie Paisley',
      position: 'Asst. Teacher : Science', // Updated position
      imgSrc: 'https://docs.material-tailwind.com/img/team-1.jpg',
      contactNumber: '789-012-3456',
      address: '404 Birch St, Paris, France',
    },
    {
      name: 'John Doe',
      position: 'Asst. Teacher : Science', // Updated position
      imgSrc: 'https://docs.material-tailwind.com/img/team-2.jpg',
      contactNumber: '890-123-4567',
      address: '505 Walnut St, Berlin, Germany',
    },
    {
      name: 'John Doe',
      position: 'Asst. Teacher : Science', // Updated position
      imgSrc: 'https://docs.material-tailwind.com/img/team-2.jpg',
      contactNumber: '890-123-4567',
      address: '505 Walnut St, Berlin, Germany',
    },
  ];

  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTeacher(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mb-8">
      <Slider {...settings} className="relative">
        {cardData.map((card, index) => (
          <div key={index} className="px-2">
            <Card
              className="w-96 mx-auto my-4 p-6 bg-gray-200 cursor-pointer"
              onClick={() => openModal(card)}
            >
              <CardHeader floated={false} className="flex justify-center items-center h-40 bg-gray-300">
                <img
                  src={card.imgSrc}
                  alt="profile"
                  className="w-36 h-36 rounded-full object-cover"
                  style={{ width: '150px', height: '150px' }}
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {card.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                  {card.position}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {selectedTeacher && (
        <Dialog open={modalOpen} handler={closeModal}>
          <DialogHeader>{selectedTeacher.name}</DialogHeader>
          <DialogBody divider>
            <Typography variant="h6" color="blue-gray">
              Contact Number: {selectedTeacher.contactNumber}
            </Typography>
            <Typography variant="h6" color="blue-gray">
              Address: {selectedTeacher.address}
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={closeModal} className="mr-1">
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default TeachersCarousel;
