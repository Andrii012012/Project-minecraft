type TOptions = {
  height: number;
  minusHeight: boolean;
};

type TSetOptions = React.Dispatch<React.SetStateAction<TOptions>>;

export {type TOptions, type TSetOptions}