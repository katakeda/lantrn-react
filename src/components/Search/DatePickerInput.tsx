import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@heroicons/react/solid';
import { SearchFormItem } from './SearchFormItem';
import { DateRange } from '../../types/common';
import { useSearchContext } from '../../contexts/SearchContext';

interface DatePickerInputProps {

}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({}) => {
  const { setDates, formData } = useSearchContext();
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (dates: Date | [Date, Date] | null) => {
    setDates(dates as DateRange);
    setDateRange(dates as DateRange);
  }

  // TODO: Set date format
  // TODO: Set input to full width (dates get cut off)
  return (
    <SearchFormItem label={'Dates'} Icon={CalendarIcon}>
      <DatePicker
        className="pl-1 focus:outline-none bg-transparent"
        placeholderText="Click to select a date"
        selected={new Date()}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        showDisabledMonthNavigation
      />
    </SearchFormItem>
  );
}