// context.js
import {
  createContext,
  createElement,
  forwardRef,
  FunctionComponent,
  Ref,
  useContext,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';
import {
  DialogContextProps,
  DialogContextValue,
  DialogProps,
  DialogRef
} from './Dialog.types';

export const DialogContext = createContext<DialogContextValue<any>>({} as DialogContextValue<any>);

function DialogProvider({
  forwardedRef,
  children
}: Readonly<DialogContextProps>) {

  const [visible, setVisible] = useState<boolean>(false);
  const [dismiss, setDismiss] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const reset = () => {
    setDismiss(false);
    setVisible(false);
  };
  const show = (data: any) => {
    setDismiss(false);
    setVisible(true);
    setData(data);
  }
  const hide = () => {
    setDismiss(true);
    setData({});
  }

  const value = useMemo(
    () => ({
      show,
      hide,
      reset,
      visible,
      dismiss,
      data
    }),
    [
      dismiss,
      visible
    ]
  );

  useImperativeHandle(
    forwardedRef,
    () => ({ show, hide }),
    []
  );

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  );
};


export function withDialogContext(children: FunctionComponent<any>) {
  return forwardRef((
    props: DialogProps,
    ref: Ref<DialogRef>
  ) => (
    <DialogProvider forwardedRef={ref}>
      {createElement(children, props)}
    </DialogProvider>
  ));
}

export function useDialogContext<D extends { [key: string]: any }>(): DialogContextValue<D> {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialogContext must be used inside the DialogProvider');
  }

  return context;
};
