import { CiLinkedin, CiTwitter } from "react-icons/ci";
import Image from "next/image";

export const Team = () => {
  const team = [
    { name: "Waseem Ahmad", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=11" },
    { name: "Aamila Khan", role: "CTO", image: "https://i.pravatar.cc/300?img=5" },
    { name: "Usman Tariq", role: "Lead Developer", image: "https://i.pravatar.cc/300?img=13" },
    { name: "Sarah Ahmed", role: "UI/UX Designer", image: "https://i.pravatar.cc/300?img=9" },
    { name: "Bilal Ahmed", role: "DevOps Engineer", image: "https://i.pravatar.cc/300?img=15" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Team</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Experts Behind<br />Your Success</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center bg-white">
              <Image src={member.image} alt={member.name} width={128} height={128} className="rounded-full mx-auto border-4 border-white shadow-lg" />
              <h3 className="text-gray-900 font-semibold text-lg mt-3">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium">{member.role}</p>
              <div className="flex justify-center gap-3 mt-2">
                <CiLinkedin className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                <CiTwitter className="h-4 w-4 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};