
import { SummaryItem, SummaryRow } from '@/components/SummaryCard';
import { TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface SummaryTabProps {
  renderedElements: number;
}

const SummaryTab = ({ renderedElements }: SummaryTabProps) => {
  return (
    <div className={`mt-4 ${renderedElements >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
      <SummaryItem 
        title="On Track" 
        status="success"
        isExpanded={true}
        icon={<CheckCircle className="text-green-500 h-5 w-5" />}
      >
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-500/10 p-3 rounded-md border border-green-500/20">
              <div className="text-sm text-gray-400">Weekly Progress</div>
              <div className="text-lg font-medium text-green-500">+12% improvement</div>
              <div className="text-xs text-gray-400 mt-1">Above target by 5%</div>
            </div>
            <div className="bg-primary/10 p-3 rounded-md border border-primary/20">
              <div className="text-sm text-gray-400">Accuracy Rate</div>
              <div className="text-lg font-medium text-primary">87% accuracy</div>
              <div className="text-xs text-gray-400 mt-1">Target: 80%</div>
            </div>
          </div>
          <div className="bg-card/50 p-3 rounded-md border border-border/40">
            <div className="text-sm font-medium">Notes</div>
            <div className="text-xs text-gray-400 mt-1">
              Student is progressing well with reading fluency. Continue with current program.
            </div>
          </div>
        </div>
      </SummaryItem>
      
      <SummaryItem 
        title="Celeration" 
        isExpanded={true}
      >
        <SummaryRow title="Corrects">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-gray-400">Celeration:</div>
              <div className="text-app-blue font-medium">x1.5</div>
            </div>
            <div>
              <div className="text-gray-400">Prior Average Corrects:</div>
              <div className="text-app-blue font-medium">40%</div>
            </div>
            <div>
              <div className="text-gray-400">Last Session Corrects:</div>
              <div className="text-green-500 font-medium">60%</div>
            </div>
          </div>
        </SummaryRow>
        
        <SummaryRow title="Incorrects">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-gray-400">Celeration:</div>
              <div className="text-app-blue font-medium">x1.5</div>
            </div>
            <div>
              <div className="text-gray-400">Prior Average Incorrects:</div>
              <div className="text-app-blue font-medium">50%</div>
            </div>
            <div>
              <div className="text-gray-400">Last Session Incorrects:</div>
              <div className="text-green-500 font-medium">25%</div>
            </div>
          </div>
        </SummaryRow>
      </SummaryItem>
      
      <SummaryItem 
        title="Improvement" 
        additionalInfo={<span className="text-green-500 font-medium">x1.8</span>}
        isExpanded={true}
        icon={<TrendingUp className="text-blue-500 h-5 w-5" />}
      >
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 p-3 rounded-md border border-blue-500/20">
              <div className="text-sm text-gray-400">Weekly Change</div>
              <div className="text-lg font-medium text-blue-500">+15%</div>
              <div className="text-xs text-gray-400 mt-1">Last week: +10%</div>
            </div>
            <div className="bg-green-500/10 p-3 rounded-md border border-green-500/20">
              <div className="text-sm text-gray-400">Monthly Progress</div>
              <div className="text-lg font-medium text-green-500">+42%</div>
              <div className="text-xs text-gray-400 mt-1">Above expected: 12%</div>
            </div>
            <div className="bg-primary/10 p-3 rounded-md border border-primary/20">
              <div className="text-sm text-gray-400">Reading Speed</div>
              <div className="text-lg font-medium text-primary">+8 wpm</div>
              <div className="text-xs text-gray-400 mt-1">Target: +5 wpm</div>
            </div>
          </div>
          <div className="bg-card/50 p-3 rounded-md border border-border/40">
            <div className="text-sm font-medium">Improvement Areas</div>
            <div className="text-xs mt-1 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
                <span className="text-gray-400">Mispronunciation: -20%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
                <span className="text-gray-400">Omission: -15%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                <span className="text-gray-400">Insertion: -5%</span>
              </div>
            </div>
          </div>
        </div>
      </SummaryItem>
      
      <SummaryItem 
        title="Intervention" 
        isExpanded={true}
        icon={<Clock className="text-amber-500 h-5 w-5" />}
        additionalInfo={
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="text-gray-400">Days since last:</div>
              <div>3</div>
            </div>
            <div>
              <div className="text-gray-400">Days of current:</div>
              <div>0</div>
            </div>
          </div>
        }
      >
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-500/10 p-3 rounded-md border border-amber-500/20">
              <div className="text-sm text-gray-400">Current Intervention</div>
              <div className="text-lg font-medium text-amber-500">Phonemic Awareness</div>
              <div className="text-xs text-gray-400 mt-1">Started: 03/01/2025</div>
            </div>
            <div className="bg-purple-500/10 p-3 rounded-md border border-purple-500/20">
              <div className="text-sm text-gray-400">Next Review</div>
              <div className="text-lg font-medium text-purple-500">03/15/2025</div>
              <div className="text-xs text-gray-400 mt-1">Days remaining: 11</div>
            </div>
          </div>
          <div className="bg-card/50 p-3 rounded-md border border-border/40">
            <div className="text-sm font-medium">Intervention Details</div>
            <div className="text-xs text-gray-400 mt-2 space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-300">Focus Area:</span> Sound blending and segmentation with emphasis on vowel sounds
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-300">Frequency:</span> 3 sessions per week, 20 minutes each
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-300">Materials:</span> Sound cards, decodable texts level 2-3
                </div>
              </div>
            </div>
          </div>
        </div>
      </SummaryItem>
    </div>
  );
};

export default SummaryTab;
