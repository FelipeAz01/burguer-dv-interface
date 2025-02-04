import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:userData'),
  );

  return isAdmin ? (
    <Container>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <SideNavAdmin />
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
