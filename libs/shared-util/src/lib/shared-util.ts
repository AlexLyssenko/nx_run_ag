export interface Message {
  message: string;
  timestamp: number;
}

export function getSharedMessage(): Message {
  return {
    message: 'Hello from shared-util!',
    timestamp: Date.now(),
  };
}
