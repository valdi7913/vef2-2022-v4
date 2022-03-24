import { LoginFooter } from '../LoginFooter/LoginFooter';
import s from './Layout.module.scss';

export function Layout({ title, children, footer }) {
  return (
    <div className={s.layout}>
      <main className={s.layout__main}>
        {children}
      </main>
    </div>
  )
}