import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

export interface ProfileTab {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

export interface ProfileTabsProps {
  tabs: ProfileTab[];
}

const ProfileTabs = ({ tabs }: ProfileTabsProps) => {
  return (
    <Tabs defaultValue="info" className="mt-6 w-full">
      <TabsList className="bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            className="border-input rounded-none border-x-0 border-t-0 border-b-2 bg-transparent dark:data-[state=active]:border-white"
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProfileTabs;
