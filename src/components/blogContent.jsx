import rider1 from './../assets/person.jpg';
import rider2 from './../assets/bucks.jpg';
import rider3 from './../assets/cars.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const BlogContent = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});

  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const blogs = [
 
    {
      id: 2,
      image: rider2,
      title: 'THE SMART WAY TO MAKE BIG BUCKS',
      description:
        'The digital revolution is innocent. The races of the world are not segregated by the information communication phenomenon. Today, a Congolese peasant has equal market opportunity as the British scholar, everybody operates in a global village connected via the information superhighway.',
    },
    {
        id: 1,
        image: rider1,
        title: 'THE ECONOMIC BENEFITS OF E-HAILING AND WHY RIDESMASH IS THE ACCLAIMED PLATFORM FOR SELF – REGULATED WORK SCHEME',
        description:
          'With all the hype and the news around E-hailing in Africa cities, especially the 2 major countries operation in Nigeria and Ghana!',
      },
    {
      id: 3,
      image: rider3,
      title: 'INTRODUCING THE RIDESMASH APP',
      description:
        'The Access Control System of Nigeria’s Premium E-hailing Company. In the words of Will Foster, “quality is never an accident, it is always the result of high intention, sincere effort, intelligent direction and skillful execution, it represents the wise choice of many alternatives, the cumulative experience of many masters of craftsmanship”.',
    },
  ];

  return (
    <div className="flex md:px-28 px-4 pb-[2rem] xl:pb-[5rem] xl:pt-[4rem] md:py-6 md:h-screen md:bg-blue-100 md:justify-center md:items-center md:w-full">
      <div className="flex flex-col md:flex-col md:gap-0">
        {/* Header Section */}
        <div className="flex pt-[3rem] lg:pb-[1.5rem] md:pb-[3rem] md:w-full md:p-6 md:items-center items-start md:justify-center flex-col">
          <h3 className="text-4xl md:text-4xl text-primary text-center w-[100%] font-black mb-3 inter">Blogs</h3>
          <p className="text-gray-600 w-[100%] text-center font-medium roboto text-md">
            Latest news and Information on Ridesmash activities, engage.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full md:w-full md:flex-row flex-col gap-2 md:gap-2 ">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-16 md:items-center md:justify-center sm:gap-5">
            {blogs.map((blog, index) => (
              <Link to="/blog" key={blog.id}>
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[10px] h-96 items-center flex justify-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex w-[100%] h-[100%] flex-col justify-center">
                    <img src={blog.image} alt="" className="h-2/5 rounded-tl-2xl rounded-tr-2xl" />
                    <h5 className="text-sm md:text-sm font-semibold text-primary px-3 mt-5">{blog.title}</h5>
                    <h5 className="text-sm md:text-sm text-gray-600 px-3 mt-3">
                      {expandedBlogs[index]
                        ? blog.description
                        : `${blog.description.slice(0, 100)}...`}
                      
                    </h5>

                    <span
                        className="text-primary font-semibold text-sm cursor-pointer ml-3 mt-4"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleReadMore(index);
                        }}
                      >
                        {expandedBlogs[index] ? 'Read Less' : 'Read More'}
                      </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
