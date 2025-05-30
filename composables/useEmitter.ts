import mitt from "mitt";
import type { CSSProperties } from "vue";

export type ExternalToast<T extends Component = Component> = Omit<
  ToastT<T>,
  "id" | "type" | "title" | "promise" | "delete"
> & {
  id?: number | string;
};

type ToastT<T extends Component = Component> = {
  id: number | string;
  icon?: Component;
  component?: T;
  componentProps?: any;
  invert?: boolean;
  closeButton?: boolean;
  dismissible?: boolean;
  description?: string | Component;
  duration?: number;
  important?: boolean;
  action?: {
    label: string | Component;
    onClick: (event: MouseEvent) => void;
  };
  cancel?: {
    label: string | Component;
    onClick?: () => void;
  };
  onDismiss?: (toast: ToastT) => void;
  onAutoClose?: (toast: ToastT) => void;
  cancelButtonStyle?: CSSProperties;
  actionButtonStyle?: CSSProperties;
  style?: CSSProperties;
  unstyled?: boolean;
  class?: string;
  classes?: ToastClasses;
  descriptionClass?: string;
  position?: Position;
};

type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
interface ToastClasses {
  toast?: string;
  title?: string;
  description?: string;
  loader?: string;
  closeButton?: string;
  cancelButton?: string;
  actionButton?: string;
  normal?: string;
  action?: string;
  success?: string;
  error?: string;
  info?: string;
  warning?: string;
  loading?: string;
  default?: string;
}

export type Events = {
  // to display info toasts
  info: { title: string; options?: ExternalToast };
  // to display success toasts
  success: { title: string; options?: ExternalToast };
  // to display warning toasts
  warning: { title: string; options?: ExternalToast };
  // use to display errors toasts
  error: { title: string; options?: ExternalToast };
  // events to open modal
  "open:join": boolean;
  // scroll to waiting list section
  "scroll:to:join": void;
};

const emitter = mitt<Events>();

export const useEmitter = () => {
  return emitter;
};
