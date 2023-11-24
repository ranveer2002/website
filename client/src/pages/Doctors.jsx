import React from "react";
import SearchBar from "../components/SearchBar";
import FilterSideBar from "../components/FilterSideBar";
import ProfessionalCard from "../components/ProfessionalCard";
import { Link } from "react-router-dom";
function Doctors() {
  const professionals = [
    {
      name: "Dr. Suresh Bhakar",
      title: "Ortho Physio",
      location: "Vaishali Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
      docimg:
        "https://drive.google.com/open?id=1NKU1w2FH57kimDfTKAsuNMFCtZ6aYKpq",
    },
    {
      name: "Dr. Manoj Kumar",
      title: "Pain Care",
      location: "Malviya Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Vishal Saxena ",
      title: "Pain Care",
      location: "Gandhi Path, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Zeeshan ali ",
      title: "Pain Care",
      location: "Shastri Nagar",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Udaiveer shekhawat ",
      title: "Pain Care",
      location: "Jhotwara",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Manisha Sharma PT",
      title: "Neuro Physio",
      location: "Subhash Chowk, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Suresh Choudhary",
      title: "Pain Care",
      location: "Gopalpura",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Rajendra kumar PT",
      title: "Pain Care",
      location: "Durgapura",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Shivanshi Choudhary ",
      title: "Pain Care",
      location: "Sodala",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Chandra Khandal",
      title: "Neuro Physio",
      location: "Patrakar Colony",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Sandeep Saini",
      title: "Neuro Physio",
      location: "Gandhi Path, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Aditya vikram bohara",
      title: "Women Pain",
      location: "Choti Choper, jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. C.S vishnoi",
      title: "Pain Care",
      location: "Vaishali Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Avinash kumar",
      title: "Sports Physio",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Krishankant verma",
      title: "Pain Care",
      location: "Mahesh Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Pankaj Kumar",
      title: "Pain Care",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Rajat Bhargava",
      title: "Pain Care",
      location: "Trivani Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Pankaj kumar",
      title: "Neuro Physio",
      location: "Durgapura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Arvind Jaga",
      title: "Pain Care",
      location: "Malviya Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Chanchal kumar",
      title: "Neuro Physio",
      location: "Malviya Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Nikita Rathore ",
      title: "Pain Care",
      location: "Meenawala, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Abhishek Sharma ",
      title: "Pain Care",
      location: "Jagatpura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Raju kumar PT ",
      title: "Pediatric Care",
      location: "Ajmer Road, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Kavita Nagar",
      title: "Neuro Physio",
      location: "Vidhyut Nagar, jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Mohit banshiwal",
      title: "Pain Care",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Rajpal gurjar",
      title: "Pain Care",
      location: "Khatipura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },

    {
      name: "Dr. Santosh Gurjar ",
      title: "Pain Care",
      location: "Mahesh Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Arshad Mansuri",
      title: "Pain Care",
      location: "Sanganer, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Ashish Godwan",
      title: "Neuro Physio",
      location: "Nehru Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Rishika khilwani (PT)",
      title: "Women Pain",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Govind Kumawat ",
      title: "Pain Care",
      location: "Vaishali Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Vipul Goyal ",
      title: "Pain Care",
      location: "Mansarovar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Prachi jain",
      title: "Pain Care",
      location: "Mansarovar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Mahesh Mendwariya ",
      title: "Pain Care",
      location: "Chaksu, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Piyush Agarwal (PT)",
      title: "Pain Care",
      location: "Murlipura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Yogesh jauliya ",
      title: "Neuro Physio",
      location: "Goner Road, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr.Himanshu Choudhary ",
      title: "Pain Care",
      location: "Jawahar Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Yogesh kumawat ",
      title: "Ortho Care",
      location: "Amber Road, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Nishant Mahajan ",
      title: "Ortho Physio",
      location: "Trivani Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Md. Rashid Aazam",
      title: "Sports Physio",
      location: "Galta Gate, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Deepak Ujjania",
      title: "Ortho Physio",
      location: "VKI, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Divyanshu Shrimali ",
      title: "Neuro Physio",
      location: "Pratap Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Raja ram yadav",
      title: "Pain Care",
      location: "Kanakpura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Siddharth Saini",
      title: "Pain Care",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Sunil Kumar jat ",
      title: "Pain Care",
      location: "Murlipura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Subhash Rewariya",
      title: "Pain Care",
      location: "200Ft, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Naresh kumar ",
      title: "Pain Care",
      location: "Pratap Nagar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Asif Khan",
      title: "Ortho Physio",
      location: "Gandhi Path, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Faraz khan",
      title: "Women Pain",
      location: "Galta Gate, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Nikita Biswas",
      title: "Ortho Physio",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Govind saini",
      title: "Pain Care",
      location: "Vatika, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },

    {
      name: "Dr. Natasha meena",
      title: "Pain Care",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Shourabh Meeena ",
      title: "Neuro Physio",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Vishal yogi ",
      title: "Pain Care",
      location: "Kalwar Road, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Rahul Sankhla",
      title: "Neuro Physio",
      location: "Jhotwara, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Mohit Sharma ",
      title: "Pain Care",
      location: "Mansarovar, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Pratik Agarwal",
      title: "Ortho Physio",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Dayaram gurjar",
      title: "Ortho Care",
      location: "Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
    {
      name: "Dr. Gajanand Sharma ",
      title: "Women Pain",
      location: "Jagatpura, Jaipur",
      rating: "4.8",
      reviews: "69",
      available: "Available Today",
    },
  ];
  return (
    <div className="flex flex-col bg-white">
      {" "}
      <section className="w-full font-inter groupbgHomeSection">
        <div className=" w-[829px] h-[140px] font-bold text-black text-[52px] mx-auto py-20">
          <div className="ml-28">Free, Personalized Online</div>
          <div className="ml-24 -mt-4">Physio Health Care</div>
        </div>
        <div className="w-[1041px] font-normal text-zinc-500 text-[16px] mt-20 mx-auto">
          <div className="ml-14">
            Start improving phsyical health and well being today. Let PhysioPlus
            shows you how. Building Power to Build A Physically
          </div>
          <div className="ml-80">
            Healthy World : Supporting Sportsman carrer growth
          </div>
        </div>
        <div className="mt-16">
          <SearchBar />
        </div>
      </section>
      <section className="w-full font-inter">
        <div className="w-full px-40 py-1 mt-16 text-xl font-medium leading-8 text-left text-black whitespace-nowrap bg-emerald-100 max-md:max-w-full">
          47 Chiropractors available in Mansarovar, Jaipur
        </div>
        <div className="w-[100%] p-6 mx-auto flex justify-evenly">
          <div className="flex gap-16">
            <FilterSideBar />
            <div className="flex-col flex-1 space-y-6">
              <Link to="/doctorprofile">
                {professionals.map((professional, index) => (
                  <ProfessionalCard key={index} {...professional} />
                ))}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctors;
