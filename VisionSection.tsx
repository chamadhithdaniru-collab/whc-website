import { Eye, Target, Heart, Lightbulb, Shield, Users } from 'lucide-react';

const VisionSection = () => {
  const values = [
    { icon: Heart, title: 'අන්‍යෝන්‍ය සහයෝගය', description: 'Mutual Harmony & Collaboration' },
    { icon: Shield, title: 'සදාචාර අභිමානය', description: 'Moral Pride & Ethics' },
    { icon: Lightbulb, title: 'දැඩි අධිෂ්ඨානය', description: 'Strong Determination' },
    { icon: Users, title: 'වගකීම', description: 'Responsibility & Accountability' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-gold rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            අපගේ දැක්ම
          </span>
          <h2 className="section-title text-primary-foreground">
            දැක්ම සහ මෙහෙවර
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            අධ්‍යාපනය තුළින් වගකිවයුතු පුරවැසියන් බිහි කිරීම
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-primary-foreground/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-primary-foreground/20 card-hover group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">දැක්ම</h3>
                <p className="text-gold">Vision</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-lg mb-4">
              රාජ්‍ය අධ්‍යාපන ක්ෂේත්‍රයේ ආදර්ශමත් පාසලක් බවට පත්වීම.
            </p>
            <p className="text-gold/80 text-base italic">
              "Becoming a Model School in the Field of Public Education."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-primary-foreground/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-primary-foreground/20 card-hover group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">මෙහෙවර</h3>
                <p className="text-gold">Mission</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-lg mb-4">
              නිරවුල් මනසින්, අන්‍යෝන්‍ය සහයෝගයෙන්, සදාචාර අභිමානයෙන්, දැඩි අධිෂ්ඨානයෙන් හා වගකීමෙන් කටයුතු කරන පුද්ගලයෙකු සමාජයට දායාද කිරීම.
            </p>
            <p className="text-gold/80 text-base italic">
              "To Endow the Society with a Person Who Works With a Clear Mind, Mutual Harmony, Moral Pride, Strong Determination & Responsibility."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">මූලික වටිනාකම්</h3>
          <p className="text-gold">Core Values</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 card-hover group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="text-lg font-bold text-primary-foreground mb-2">{value.title}</h4>
              <p className="text-primary-foreground/70 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* School Motto */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gold/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gold/30">
            <p className="text-2xl md:text-3xl font-bold text-gold mb-2">
              "විදු නැණ මනස පුබුදයි"
            </p>
            <p className="text-primary-foreground/80 text-lg">
              The Education Enlightens the Mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;