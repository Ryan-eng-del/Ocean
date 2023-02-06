import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import React from 'react';
import { createContext } from '../hooks/useContext';
import { AlertVariant } from './index';

export const Status = {
  info: { icon: <ExclamationCircleFilled />, colorSchema: 'blue' },
  warning: { icon: <ExclamationCircleFilled />, colorSchema: 'orange' },
  success: { icon: <CheckCircleFilled />, colorSchema: 'green' },
  error: { icon: <CloseCircleFilled />, colorSchema: 'red' },
};

interface AlertContext {
  status: keyof typeof Status;
  setVisible: React.Dispatch<boolean>;
  variant?: AlertVariant;
}

export const [AlertProvider, useAlertContext] = createContext<AlertContext>();
