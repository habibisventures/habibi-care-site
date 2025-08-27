import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 bg-card hover:bg-card-hover">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue-dark to-healthcare-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-healthcare-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;