import s from './Button.module.scss';

export function Button({ children, ...props }) {
  return (
    <button className={s.Button} {...props}>
      {children}
    </button>
  );
}
