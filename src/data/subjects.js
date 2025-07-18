import { BarChart2, DollarSign } from 'lucide-react';

export const SUBJECTS = {
  econ: {
    name: 'AP Economics',
    logo: DollarSign,
    theme: {
      primary: 'text-green-400',
      secondary: 'bg-green-600',
      hover: 'hover:bg-green-700',
    }
  },
  stats: {
    name: 'AP Statistics',
    logo: BarChart2,
    theme: {
      primary: 'text-blue-400',
      secondary: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
    }
  },
  // 다른 과목 추가 가능
};