import { AnimatedTestimonials } from "@/components/ui/animatedTestimonials";


export function About() {
  const testimonials = [   
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Dr. Payal Mittal",
      designation: "Mentor, CollabSphere",
      src: "/images/Profile2.jpg",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Arshdeep Palial",
      designation: "Product Manager",
      src: "/images/Profile1.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Jaskaran Singh",
      designation: "Operations Director ",
      src: "/images/Profile1.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Pranav Duggal",
      designation: "Engineering Lead ",
      src: "/images/Profile1.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Rohan Purohit",
      designation: "VP of Technology ",
      src: "/images/Profile1.jpg",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Hardik Kundal",
      designation: "Product Manager",
      src: "/images/Profile1.jpg",
    }
  ];
  return (
    <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6"> About us </h1>
        <AnimatedTestimonials testimonials={testimonials} />
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6 mt-8"> Contact </h1>
          <p className="max-w-2xl text-white md:text-xl mt-5 mb-8 text-center">
            Computer Science and Engineeing Department, <br/> 
            Thapar Institute of Engineering and Technology, Patiala
        </p>
  
    </div>
    );
}
