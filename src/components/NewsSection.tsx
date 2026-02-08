import { Bell, Calendar, FileText } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      icon: Bell,
      date: '2024 දෙසැම්බර්',
      title: '6 ශ්‍රේණිය ඇතුළත් කිරීම - 2025',
      description: '2025 වර්ෂය සඳහා 6 ශ්‍රේණියට සිසුන් ඇතුළත් කිරීම සඳහා අයදුම්පත් භාරගැනේ.',
      type: 'ප්‍රකාශය',
    },
    {
      icon: Calendar,
      date: '2024 දෙසැම්බර්',
      title: 'වාර්ෂික ත්‍යාග ප්‍රදානෝත්සවය',
      description: '2024 වාර්ෂික ත්‍යාග ප්‍රදානෝත්සවය දෙසැම්බර් මස පැවැත්වේ.',
      type: 'උත්සවය',
    },
    {
      icon: FileText,
      date: '2024 නොවැම්බර්',
      title: 'අ.පො.ස. උසස් පෙළ ප්‍රතිඵල',
      description: 'අපගේ සිසුන් 2024 අ.පො.ස. උසස් පෙළ විභාගයෙන් විශිෂ්ට ප්‍රතිඵල ලබා ගත්හ.',
      type: 'ප්‍රවෘත්ති',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ප්‍රවෘත්ති
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">ප්‍රවෘත්ති සහ නිවේදන</span>
          </h2>
          <p className="section-subtitle">
            පාසලේ නවතම තොරතුරු සහ වැදගත් නිවේදන
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article 
              key={index}
              className="glass-card rounded-2xl overflow-hidden card-hover group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gold/20 text-gold-dark rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Read More */}
                <button className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  වැඩිදුර කියවන්න
                  <span className="text-gold">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-royal">
            සියලුම ප්‍රවෘත්ති බලන්න
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
