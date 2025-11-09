"use client";

import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

interface Tab {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultValue, children }) => {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue}>
      <TabsPrimitive.List className="flex gap-2 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 transition-colors"
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  );
};

export const TabsContent = TabsPrimitive.Content;
