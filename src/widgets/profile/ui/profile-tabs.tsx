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
    <Tabs className={'h-full w-full'} defaultValue={tabs[0].value}>
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
        <TabsContent className="h-full overflow-auto" key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProfileTabs;
