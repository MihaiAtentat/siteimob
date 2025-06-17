import Navigation from "../components/Navigation";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Alexandra Trâmbițașu",
    role: "Manager",
    phone: "+40750840620",
    email: "alexandra.trambițașu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b512a8c4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Alexandru Smadolu",
    role: "Agent imobiliar",
    phone: "+40772640220",
    email: "alexandru.smadolu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Alina Popa",
    role: "Agent imobiliar",
    phone: "+40 720 341 407",
    email: "alina.popa.swadolu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Alina Voicu",
    role: "Agent imobiliar",
    phone: "+40750840621",
    email: "alina.voicu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Ana-Maria Radu",
    role: "Agent imobiliar",
    phone: "+40750840622",
    email: "ana.maria.radu@gmail.com",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Andreea Laptuca",
    role: "Agent imobiliar",
    phone: "+40750840623",
    email: "andreea.laptuca@gmail.com",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Echipa noastră
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium text-base">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-medium">{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-red-600 hover:text-red-700 hover:underline transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Alătură-te echipei noastre!
              </h2>
              <p className="text-slate-600 mb-6">
                Suntem mereu în căutarea unor profesioniști pasionați de
                domeniul imobiliar.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                Trimite CV-ul tău
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Team;
