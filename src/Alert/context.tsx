import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import React from 'react';
import { createContext } from '../hooks/useContext';

export const Status = {
  info: { icon: <ExclamationCircleFilled /> },
  warning: { icon: <ExclamationCircleFilled /> },
  success: { icon: <CheckCircleFilled /> },
  error: { icon: <CloseCircleFilled /> },
};

interface AlertContext {
  status: keyof typeof Status;
  setVisible: React.Dispatch<boolean>;
}

export const [AlertProvider, useAlertContext] = createContext<AlertContext>();
