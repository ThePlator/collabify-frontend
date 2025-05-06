export interface NotificationSetting {
  type: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

export interface SecuritySetting {
  type: string;
  enabled: boolean;
}
