import s from './Input.module.scss';

export function Input({ text, type, onChange }) {
  return (
    <div className={s.Input__container}>
      <label className={s.Input__label}> {text} </label>
      <input className={s.Input__input} type={type} onChange={onChange} />
    </div>
  );
}
