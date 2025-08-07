import { useState } from 'react';
import { TopNavigation } from './components/TopNavigation';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { ProposalsView } from './components/ProposalsView';
import { TemplatesView } from './components/TemplatesView';
import { WorkflowDesigner } from './components/WorkflowDesigner';
import { SettingsView } from './components/SettingsView';

export type TabType = 'dashboard' | 'proposals' | 'templates' | 'workflow' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'proposals':
        return <ProposalsView />;
      case 'templates':
        return <TemplatesView />;
      case 'workflow':
        return <WorkflowDesigner />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNavigation />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}