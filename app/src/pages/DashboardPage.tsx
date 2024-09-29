import { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { TaskChart } from '@/components/TaskChart';
const DashboardPage: React.FC<{ isDekstop: boolean }> = ({ isDekstop }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return isDekstop ? (
    <>
      <div className="w-full h-full flex">
        <div className="w-3/4"></div>
        <div className="px-2 flex flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow font-Poppins"
          />
          <TaskChart />
        </div>
      </div>
    </>
  ) : (
    <>
      <div></div>
    </>
  );
};

export default DashboardPage;
