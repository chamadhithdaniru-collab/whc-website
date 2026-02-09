import { Clock, BookOpen, Coffee, Users, Flag, Home } from 'lucide-react';
import assemblyImg from '../assets/assembly.jpg';

const SchoolDaySection = () => {
  const schedule = [
    { time: '7:00', activity: 'පාසල් ආරම්භය', activityEn: 'School Opens', icon: Flag, description: 'සිසුන් පැමිණීම ආරම්භ වේ' },
    { time: '7:30', activity: 'උදෑසන සභාව', activityEn: 'Morning Assembly', icon: Users, description: 'ජාතික ගීය, ප්‍රාර්ථනා, නිවේදන' },
    { time: '7:50', activity: 'පළමු කාලාංශය', activityEn: 'First Period', icon: BookOpen, description: 'පන්ති ආරම්භය' },
    { time: '10:20', activity: 'කෙටි විවේකය', activityEn: 'Short Break', icon: Coffee, description: 'මිනිත්තු 20 විවේකය' },
    { time: '10:40', activity: 'දෙවන කාලාංශය', activityEn: 'Second Session', icon: BookOpen, description: 'පන්ති අඛණ්ඩව' },
    { time: '12:30', activity: 'දිවා ආහාර විවේකය', activityEn: 'Lunch Break', icon: Coffee, description: 'පැය 1 දිවා ආහාර විවේකය' },
    { time: '13:30', activity: 'තෙවන කාලාංශය', activityEn: 'Third Session', icon: BookOpen, description: 'පස්වරු පන්ති' },
    { time: '14:30', activity: 'පාසල් නිමාව', activityEn: 'School Ends', icon: Home, description: 'ප්‍රාථමික අංශය නිමාව' },
    { time: '15:30', activity: 'අමතර ක්‍රියාකාරකම්', activityEn: 'Extra Activities', icon: Users, description: 'ක්‍රීඩා, සමාජ, විශේෂ පන්ති' },
  ];

  return (
    <section id="school-day" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-royal/10 text-royal rounded-full text-sm font-medium mb-4">
            දෛනික කාලසටහන
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            පාසල් දිනය
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලයේ සාමාන්‍ය පාසල් දිනයක කාලසටහන
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule */}
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="glass-card p-4 flex items-center gap-4 hover:shadow-royal transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="text-2xl font-bold text-royal">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5 text-royal group-hover:text-white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground">{item.activity}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Assembly Image & Info */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={assemblyImg}
                alt="Morning Assembly at Walisinghe Harischandra College"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">උදෑසන සභාව</h3>
                  <p className="text-white/90">Morning Assembly - ජාතික ගීය සහ ප්‍රාර්ථනා</p>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-foreground">7:30</h4>
                <p className="text-sm text-muted-foreground">පාසල් ආරම්භය</p>
              </div>
              <div className="glass-card p-6 text-center">
                <BookOpen className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-foreground">8</h4>
                <p className="text-sm text-muted-foreground">කාලාංශ</p>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-foreground">
                <strong className="text-gold">සටහන:</strong> උසස් පෙළ සිසුන් සඳහා අමතර පන්ති සවස 4:00 දක්වා පැවැත්වේ. 
                සෙනසුරාදා අර්ධ දිනයක් ලෙස පෙ.ව. 7:30 සිට ප.ව. 12:30 දක්වා පවත්වනු ලැබේ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolDaySection;
