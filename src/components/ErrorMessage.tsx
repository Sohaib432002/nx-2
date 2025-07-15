// components/ErrorMessage.tsx

import { AlertCircle } from 'lucide-react';

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
    <span className="text-red-700">{message}</span>
  </div>
);

export default ErrorMessage;
