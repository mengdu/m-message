import Vue from 'vue'

export interface MessageOptions {
  title?: string;
  message: string;
  type?: 'info' | 'success' | 'error' | 'warning' | 'loading';
  isCollapsed: boolean;
  width?: string;
  showClose: boolean;
  className?: string;
  wrapperClassName?: string;
  supportHTML?: boolean;
  onClose?: () => void;
  duration: number | 3000;
  zIndex: number | 1010;
  iconImg?: string;
  hasMask: boolean;
  position?: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

export declare class MessageComponent extends Vue {
  readonly id: number;
  close (): void;
  message: string;
  title?: string;
}

export interface IMessage {
  (options: MessageOptions): MessageComponent;
  info (msg: string): MessageComponent;
  info (options: MessageOptions): MessageComponent;

  success (msg: string): MessageComponent;
  success (options: MessageOptions): MessageComponent;

  error (msg: string): MessageComponent;
  error (options: MessageOptions): MessageComponent;

  warning (msg: string): MessageComponent;
  warning (options: MessageOptions): MessageComponent;

  loading (msg: string): MessageComponent;
  loading (options: MessageOptions): MessageComponent;

  close (id: number, userOnClose?: () => void): void;
  closeAll (): void;
}

declare function Message (options: MessageOptions): MessageComponent

declare namespace Message {
  const install: (vue: typeof Vue, options?: { name: string }) => void;

  const info: (msg: string | MessageOptions) => MessageComponent;

  const success: (msg: string | MessageOptions) => MessageComponent;

  const error: (msg: string | MessageOptions) => MessageComponent;

  const warning: (msg: string | MessageOptions) => MessageComponent;

  const loading: (msg: string | MessageOptions) => MessageComponent;

  const close: (id: number, userOnClose?: () => void) => void;
  const closeAll: () => void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $message: IMessage
  }
}

export default Message
